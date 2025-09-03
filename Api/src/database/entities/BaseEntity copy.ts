
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class AppTimestamps {
  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at!: Date;
}












Module 1: Organisation & Access Control

src/entities/OrgUnit.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnitType } from "../enums";
import { User } from "./User";
import { Property } from "./Property";

@Entity({ name: "org_units" })
export class OrgUnit extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, ou => ou.children, { nullable: true, onDelete: "SET NULL" })
  parent?: OrgUnit | null;

  @OneToMany(() => OrgUnit, ou => ou.parent)
  children?: OrgUnit[];

  @Index({ unique: true })
  @Column({ type: "varchar", length: 64 })
  code!: string;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "enum", enum: OrgUnitType })
  type!: OrgUnitType;

  @OneToMany(() => User, u => u.org_unit)
  users?: User[];

  @OneToMany(() => Property, p => p.org_unit)
  properties?: Property[];
}


src/entities/User.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { UserRole } from "./UserRole";
import { UserStatus } from "../enums";

@Entity({ name: "users" })
export class User extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, ou => ou.users, { nullable: true, onDelete: "SET NULL" })
  org_unit?: OrgUnit | null;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 255 })
  email!: string;

  @Column({ type: "varchar", length: 32, nullable: true })
  phone?: string | null;

  @Column({ type: "varchar", length: 512 })
  password_hash!: string;

  @Column({ type: "varchar", length: 128 })
  first_name!: string;

  @Column({ type: "varchar", length: 128 })
  last_name!: string;

  @Column({ type: "enum", enum: UserStatus, default: UserStatus.ACTIVE })
  status!: UserStatus;

  @Column({ type: "int" })
  rank_level!: number;

  @Column({ type: "timestamptz", nullable: true })
  last_login_at?: Date | null;

  @OneToMany(() => UserRole, ur => ur.user)
  roles?: UserRole[];
}


src/entities/Role.ts

import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { RolePermission } from "./RolePermission";
import { UserRole } from "./UserRole";

@Entity({ name: "roles" })
export class Role extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "int" })
  min_rank_required!: number;

  @OneToMany(() => RolePermission, rp => rp.role)
  permissions?: RolePermission[];

  @OneToMany(() => UserRole, ur => ur.role)
  user_roles?: UserRole[];
}


src/entities/Permission.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { RolePermission } from "./RolePermission";

@Entity({ name: "permissions" })
export class Permission extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  code!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @OneToMany(() => RolePermission, rp => rp.permission)
  role_permissions?: RolePermission[];
}


src/entities/RolePermission.ts

import {
  Entity, ManyToOne, PrimaryColumn
} from "typeorm";
import { Role } from "./Role";
import { Permission } from "./Permission";

@Entity({ name: "role_permissions" })
export class RolePermission {
  @PrimaryColumn("uuid")
  role_id!: string;

  @PrimaryColumn("uuid")
  permission_id!: string;

  @ManyToOne(() => Role, r => r.permissions, { primary: true, onDelete: "CASCADE" })
  role!: Role;

  @ManyToOne(() => Permission, p => p.role_permissions, { primary: true, onDelete: "CASCADE" })
  permission!: Permission;
}


src/entities/UserRole.ts

import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { Role } from "./Role";

@Entity({ name: "user_roles" })
export class UserRole {
  @PrimaryColumn("uuid")
  user_id!: string;

  @PrimaryColumn("uuid")
  role_id!: string;

  @ManyToOne(() => User, u => u.roles, { primary: true, onDelete: "CASCADE" })
  user!: User;

  @ManyToOne(() => Role, r => r.user_roles, { primary: true, onDelete: "CASCADE" })
  role!: Role;
}

Module 2: Lessees & Contacts

src/entities/Party.ts

import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { PartyType } from "../enums";
import { PartyContact } from "./PartyContact";
import { PaymentMethod } from "./PaymentMethod";
import { Mandate } from "./Mandate";
import { Payment } from "./Payment";

@Entity({ name: "parties" })
export class Party extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "enum", enum: PartyType })
  type!: PartyType;

  @Column({ type: "varchar", length: 255 })
  legal_name!: string;

  @Index()
  @Column({ type: "varchar", length: 32, nullable: true })
  ghana_card_no?: string | null;

  @Index()
  @Column({ type: "varchar", length: 64, nullable: true })
  tin_no?: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  email?: string | null;

  @Column({ type: "varchar", length: 32, nullable: true })
  phone?: string | null;

  @Column({ type: "jsonb", nullable: true })
  billing_address?: any | null;

  @OneToMany(() => PartyContact, pc => pc.party)
  contacts?: PartyContact[];

  @OneToMany(() => PaymentMethod, pm => pm.party)
  payment_methods?: PaymentMethod[];

  @OneToMany(() => Mandate, m => m.party)
  mandates?: Mandate[];

  @OneToMany(() => Payment, p => p.payer_party)
  payments?: Payment[];
}


src/entities/PartyContact.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Party } from "./Party";

@Entity({ name: "party_contacts" })
export class PartyContact {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Party, p => p.contacts, { onDelete: "CASCADE" })
  party!: Party;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 32, nullable: true })
  phone?: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  email?: string | null;

  @Column({ type: "boolean", default: false })
  is_primary!: boolean;
}


src/entities/PaymentMethod.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm";
import { Party } from "./Party";
import { PaymentMethodType, ProviderCode } from "../enums";

@Entity({ name: "payment_methods" })
export class PaymentMethod {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Party, p => p.payment_methods, { onDelete: "CASCADE" })
  party!: Party;

  @Column({ type: "enum", enum: PaymentMethodType })
  type!: PaymentMethodType;

  @Column({ type: "enum", enum: ProviderCode, nullable: true })
  provider?: ProviderCode | null;

  @Column({ type: "varchar", length: 128, nullable: true })
  masked_account?: string | null;

  @Column({ type: "varchar", length: 512, nullable: true })
  token?: string | null;

  @Column({ type: "date", nullable: true })
  expiry_date?: string | null;

  @Column({ type: "boolean", default: false })
  is_default!: boolean;

  @Column({ type: "enum", enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" })
  status!: "ACTIVE" | "INACTIVE";
}

Module 3: Properties

src/entities/Property.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { PropertyStatus } from "../enums";
import { PropertyUnit } from "./PropertyUnit";
import { Document } from "./Document";
import { Lease } from "./Lease";

@Entity({ name: "properties" })
export class Property extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, ou => ou.properties, { nullable: true, onDelete: "SET NULL" })
  org_unit?: OrgUnit | null;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  property_code!: string;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "jsonb", nullable: true })
  address?: any | null;

  @Column({ type: "varchar", length: 128 })
  region!: string;

  @Column({ type: "varchar", length: 128 })
  district!: string;

  @Column({ type: "varchar", length: 64, nullable: true })
  parcel_number?: string | null;

  @Column({ type: "varchar", length: 128, nullable: true })
  land_use?: string | null;

  @Column({ type: "numeric", nullable: true })
  area_sqm?: string | null;

  @Column({ type: "enum", enum: PropertyStatus, default: PropertyStatus.AVAILABLE })
  status!: PropertyStatus;

  @OneToMany(() => PropertyUnit, pu => pu.property)
  units?: PropertyUnit[];

  @OneToMany(() => Document, d => d.property)
  documents?: Document[];

  @OneToMany(() => Lease, l => l.property)
  leases?: Lease[];
}


src/entities/PropertyUnit.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
} from "typeorm";
import { Property } from "./Property";
import { UnitStatus } from "../enums";

@Entity({ name: "property_units" })
export class PropertyUnit {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Property, p => p.units, { onDelete: "CASCADE" })
  property!: Property;

  @Index()
  @Column({ type: "varchar", length: 128 })
  unit_code!: string;

  @Column({ type: "text", nullable: true })
  description?: string | null;

  @Column({ type: "numeric", nullable: true })
  area_sqm?: string | null;

  @Column({ type: "enum", enum: UnitStatus, default: UnitStatus.AVAILABLE })
  status!: UnitStatus;
}


src/entities/Document.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { DocumentOwnerType } from "../enums";
import { User } from "./User";
import { Property } from "./Property";

@Entity({ name: "documents" })
export class Document extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  // Polymorphic: owner_type + owner_id
  @Column({ type: "enum", enum: DocumentOwnerType })
  owner_type!: DocumentOwnerType;

  @Index()
  @Column({ type: "uuid" })
  owner_id!: string;

  @Column({ type: "varchar", length: 255 })
  title!: string;

  @Column({ type: "varchar", length: 128 })
  mime_type!: string;

  @Column({ type: "text" })
  storage_url!: string;

  @ManyToOne(() => User, { nullable: true, onDelete: "SET NULL" })
  uploaded_by?: User | null;

  // optional helper relation to property if owner is PROPERTY
  @ManyToOne(() => Property, p => p.documents, { nullable: true, onDelete: "CASCADE" })
  property?: Property | null;
}


Note: Documents are polymorphic. owner_type + owner_id are the canonical link; if you want TypeORM relations to other entities, add corresponding nullable relation fields or use manual queries.

Module 4: Leases & Rent Terms

src/entities/Lease.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { Property } from "./Property";
import { PropertyUnit } from "./PropertyUnit";
import { Party } from "./Party";
import { LeaseCharge } from "./LeaseCharge";
import { LeaseStatus, Frequency } from "../enums";
import { Invoice } from "./Invoice";

@Entity({ name: "leases" })
export class Lease extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, { nullable: true, onDelete: "SET NULL" })
  org_unit?: OrgUnit | null;

  @ManyToOne(() => Property, p => p.leases, { nullable: false })
  property!: Property;

  @ManyToOne(() => PropertyUnit, { nullable: true })
  unit?: PropertyUnit | null;

  @ManyToOne(() => Party, { nullable: false })
  lessee!: Party;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  lease_number!: string;

  @Column({ type: "enum", enum: LeaseStatus, default: LeaseStatus.DRAFT })
  status!: LeaseStatus;

  @Column({ type: "date" })
  start_date!: string;

  @Column({ type: "date" })
  end_date!: string;

  @Column({ type: "varchar", length: 8 })
  base_currency!: string;

  @Column({ type: "numeric" })
  base_rent!: string;

  @Column({ type: "enum", enum: Frequency })
  frequency!: Frequency;

  @Column({ type: "date", nullable: true })
  next_bill_date?: string | null;

  @Column({ type: "numeric", nullable: true })
  security_deposit?: string | null;

  @Column({ type: "numeric", nullable: true })
  escalation_percent?: string | null;

  @Column({ type: "numeric", nullable: true })
  late_fee_percent?: string | null;

  @Column({ type: "int", nullable: true })
  billing_day_of_month?: number | null;

  @Column({ type: "text", nullable: true })
  notes?: string | null;

  @OneToMany(() => LeaseCharge, lc => lc.lease)
  charges?: LeaseCharge[];

  @OneToMany(() => Invoice, inv => inv.lease)
  invoices?: Invoice[];
}


src/entities/LeaseCharge.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Lease } from "./Lease";
import { ChargeFrequency } from "../enums";
import { AppTimestamps } from "../BaseEntity";

@Entity({ name: "lease_charges" })
export class LeaseCharge extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Lease, l => l.charges, { onDelete: "CASCADE" })
  lease!: Lease;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "numeric" })
  amount!: string;

  @Column({ type: "boolean", default: false })
  is_recurring!: boolean;

  @Column({ type: "enum", enum: ChargeFrequency, nullable: true })
  frequency?: ChargeFrequency | null;

  @Column({ type: "date" })
  start_date!: string;

  @Column({ type: "date", nullable: true })
  end_date?: string | null;

  @Column({ type: "boolean", default: false })
  taxable!: boolean;

  @Column({ type: "varchar", length: 64, nullable: true })
  tax_code?: string | null;
}


src/entities/Approval.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { ApprovalTargetType, ApprovalState } from "../enums";
import { User } from "./User";

@Entity({ name: "approvals" })
export class Approval extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "enum", enum: ApprovalTargetType })
  target_type!: ApprovalTargetType;

  @Index()
  @Column({ type: "uuid" })
  target_id!: string;

  @Column({ type: "enum", enum: ApprovalState, default: ApprovalState.PENDING })
  state!: ApprovalState;

  @ManyToOne(() => User, { nullable: false })
  requested_by!: User;

  @ManyToOne(() => User, { nullable: true })
  decided_by?: User | null;

  @Column({ type: "timestamptz", nullable: true })
  decided_at?: Date | null;

  @Column({ type: "text", nullable: true })
  remarks?: string | null;
}

Module 5: Billing & Invoices

src/entities/BillingRun.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { BillingRunType } from "../enums";
import { User } from "./User";

@Entity({ name: "billing_runs" })
export class BillingRun extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, { nullable: false })
  org_unit!: OrgUnit;

  @Column({ type: "enum", enum: BillingRunType })
  run_type!: BillingRunType;

  @Column({ type: "timestamptz" })
  run_at!: Date;

  @Column({ type: "date", nullable: true })
  scheduled_for?: string | null;

  @ManyToOne(() => User, { nullable: true })
  initiated_by?: User | null;

  @Column({ type: "text", nullable: true })
  notes?: string | null;
}


src/entities/Invoice.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { BillingRun } from "./BillingRun";
import { Lease } from "./Lease";
import { InvoiceLine } from "./InvoiceLine";
import { InvoiceStatus } from "../enums";

@Entity({ name: "invoices" })
export class Invoice extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => BillingRun, { nullable: true, onDelete: "SET NULL" })
  billing_run?: BillingRun | null;

  @ManyToOne(() => Lease, l => l.invoices, { nullable: true, onDelete: "SET NULL" })
  lease?: Lease | null;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  invoice_no!: string;

  @Column({ type: "date" })
  invoice_date!: string;

  @Column({ type: "date" })
  due_date!: string;

  @Column({ type: "varchar", length: 8 })
  currency!: string;

  @Column({ type: "enum", enum: InvoiceStatus, default: InvoiceStatus.DRAFT })
  status!: InvoiceStatus;

  @Column({ type: "numeric" })
  subtotal!: string;

  @Column({ type: "numeric", nullable: true })
  tax_total?: string | null;

  @Column({ type: "numeric" })
  total!: string;

  @Column({ type: "numeric" })
  balance!: string;

  @Column({ type: "text", nullable: true })
  notes?: string | null;

  @OneToMany(() => InvoiceLine, il => il.invoice)
  lines?: InvoiceLine[];
}


src/entities/InvoiceLine.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Invoice } from "./Invoice";

@Entity({ name: "invoice_lines" })
export class InvoiceLine {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Invoice, inv => inv.lines, { onDelete: "CASCADE" })
  invoice!: Invoice;

  @Column({ type: "int" })
  line_no!: number;

  @Column({ type: "varchar", length: 512 })
  description!: string;

  @Column({ type: "int" })
  quantity!: number;

  @Column({ type: "numeric" })
  unit_price!: string;

  @Column({ type: "numeric" })
  line_total!: string;

  @Column({ type: "numeric", nullable: true })
  tax_amount?: string | null;
}


src/entities/DunningRule.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";

@Entity({ name: "dunning_rules" })
export class DunningRule extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, { nullable: false })
  org_unit!: OrgUnit;

  @Column({ type: "varchar", length: 128 })
  name!: string;

  @Column({ type: "int" })
  first_reminder_days!: number;

  @Column({ type: "int" })
  second_reminder_days!: number;

  @Column({ type: "int" })
  final_notice_days!: number;

  @Column({ type: "numeric", nullable: true })
  late_fee_percent?: string | null;
}


src/entities/DunningEvent.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Invoice } from "./Invoice";
import { DunningStage, DunningChannel, DeliveryStatus } from "../enums";

@Entity({ name: "dunning_events" })
export class DunningEvent extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Invoice, { nullable: false, onDelete: "CASCADE" })
  invoice!: Invoice;

  @Column({ type: "enum", enum: DunningStage })
  stage!: DunningStage;

  @Column({ type: "timestamptz" })
  event_at!: Date;

  @Column({ type: "enum", enum: DunningChannel })
  channel!: DunningChannel;

  @Column({ type: "enum", enum: DeliveryStatus })
  status!: DeliveryStatus;

  @Column({ type: "jsonb", nullable: true })
  details?: any | null;
}

Module 6: Payments & Reconciliation

src/entities/PaymentProvider.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Payment } from "./Payment";
import { Reconciliation } from "./Reconciliation";
import { PaymentProviderStatus } from "../enums";

@Entity({ name: "payment_providers" })
export class PaymentProvider extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 64 })
  code!: string;

  @Column({ type: "varchar", length: 128 })
  display_name!: string;

  @Column({ type: "jsonb", nullable: true })
  config?: any | null;

  @Column({ type: "boolean", default: true })
  active!: boolean;

  @OneToMany(() => Payment, p => p.provider)
  payments?: Payment[];

  @OneToMany(() => Reconciliation, r => r.provider)
  reconciliations?: Reconciliation[];
}


src/entities/Mandate.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Party } from "./Party";
import { PaymentMethod } from "./PaymentMethod";
import { PaymentProvider } from "./PaymentProvider";
import { MandateStatus } from "../enums";

@Entity({ name: "mandates" })
export class Mandate extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Party, p => p.mandates, { onDelete: "CASCADE" })
  party!: Party;

  @ManyToOne(() => PaymentMethod, { onDelete: "SET NULL", nullable: true })
  payment_method?: PaymentMethod | null;

  @ManyToOne(() => PaymentProvider, { onDelete: "SET NULL", nullable: true })
  provider?: PaymentProvider | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  external_ref?: string | null;

  @Column({ type: "enum", enum: MandateStatus, default: MandateStatus.PENDING })
  status!: MandateStatus;

  @Column({ type: "numeric", nullable: true })
  max_amount?: string | null;

  @Column({ type: "date" })
  start_date!: string;

  @Column({ type: "date", nullable: true })
  end_date?: string | null;

  @Column({ type: "timestamptz" })
  consent_captured_at!: Date;
}


src/entities/LeaseAutopayPref.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Lease } from "./Lease";
import { Mandate } from "./Mandate";

@Entity({ name: "lease_autopay_prefs" })
export class LeaseAutopayPref extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Lease, { onDelete: "CASCADE" })
  lease!: Lease;

  @ManyToOne(() => Mandate, { onDelete: "SET NULL", nullable: true })
  mandate?: Mandate | null;

  @Column({ type: "boolean", default: false })
  autopay_enabled!: boolean;

  @Column({ type: "int", nullable: true })
  autopay_day?: number | null;
}


src/entities/Payment.ts

import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { PaymentProvider } from "./PaymentProvider";
import { Party } from "./Party";
import { OrgUnit } from "./OrgUnit";
import { PaymentMethodEnum, PaymentChannel, PaymentStatus } from "../enums";

@Entity({ name: "payments" })
export class Payment extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => PaymentProvider, p => p.payments, { nullable: true, onDelete: "SET NULL" })
  provider?: PaymentProvider | null;

  @ManyToOne(() => Party, p => p.payments, { nullable: true, onDelete: "SET NULL" })
  payer_party?: Party | null;

  @ManyToOne(() => OrgUnit, { nullable: true, onDelete: "SET NULL" })
  receiver_org_unit?: OrgUnit | null;

  @Column({ type: "enum", enum: PaymentMethodEnum })
  method!: PaymentMethodEnum;

  @Column({ type: "enum", enum: PaymentChannel })
  channel!: PaymentChannel;

  @Column({ type: "varchar", length: 8 })
  currency!: string;

  @Column({ type: "numeric" })
  amount!: string;

  @Column({ type: "numeric", nullable: true })
  fees?: string | null;

  @Column({ type: "numeric" })
  net_amount!: string;

  @Column({ type: "enum", enum: PaymentStatus, default: PaymentStatus.PENDING })
  status!: PaymentStatus;

  @Index()
  @Column({ type: "varchar", length: 255, nullable: true })
  external_txn_id?: string | null;

  @Column({ type: "timestamptz" })
  txn_time!: Date;

  @Column({ type: "text", nullable: true })
  remarks?: string | null;
}


src/entities/PaymentAllocation.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Payment } from "./Payment";
import { Invoice } from "./Invoice";

@Entity({ name: "payment_allocations" })
export class PaymentAllocation {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Payment, { onDelete: "CASCADE" })
  payment!: Payment;

  @ManyToOne(() => Invoice, { onDelete: "CASCADE" })
  invoice!: Invoice;

  @Column({ type: "numeric" })
  amount!: string;
}


src/entities/Reconciliation.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { PaymentProvider } from "./PaymentProvider";
import { ReconciliationLine } from "./ReconciliationLine";
import { ReconciliationStatus } from "../enums";

@Entity({ name: "reconciliations" })
export class Reconciliation extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => PaymentProvider, p => p.reconciliations, { nullable: false })
  provider!: PaymentProvider;

  @Column({ type: "varchar", length: 255 })
  file_name!: string;

  @Column({ type: "date" })
  file_date!: string;

  @Column({ type: "enum", enum: ReconciliationStatus, default: ReconciliationStatus.IMPORTED })
  status!: ReconciliationStatus;

  @OneToMany(() => ReconciliationLine, rl => rl.reconciliation)
  lines?: ReconciliationLine[];
}


src/entities/ReconciliationLine.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Reconciliation } from "./Reconciliation";
import { Payment } from "./Payment";
import { MatchStatus } from "../enums";

@Entity({ name: "reconciliation_lines" })
export class ReconciliationLine {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Reconciliation, r => r.lines, { onDelete: "CASCADE" })
  reconciliation!: Reconciliation;

  @Column({ type: "varchar", length: 255 })
  external_txn_id!: string;

  @Column({ type: "numeric" })
  amount!: string;

  @Column({ type: "timestamptz" })
  txn_time!: Date;

  @ManyToOne(() => Payment, { nullable: true, onDelete: "SET NULL" })
  matched_payment?: Payment | null;

  @Column({ type: "enum", enum: MatchStatus, default: MatchStatus.UNMATCHED })
  match_status!: MatchStatus;
}


src/entities/Adjustment.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Invoice } from "./Invoice";
import { Payment } from "./Payment";
import { AdjustmentType, AdjustmentStatus } from "../enums";
import { User } from "./User";

@Entity({ name: "adjustments" })
export class Adjustment extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Invoice, { nullable: true, onDelete: "SET NULL" })
  invoice?: Invoice | null;

  @ManyToOne(() => Payment, { nullable: true, onDelete: "SET NULL" })
  payment?: Payment | null;

  @Column({ type: "enum", enum: AdjustmentType })
  type!: AdjustmentType;

  @Column({ type: "numeric" })
  amount!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  reason?: string | null;

  @Column({ type: "enum", enum: AdjustmentStatus, default: AdjustmentStatus.PENDING })
  status!: AdjustmentStatus;

  @ManyToOne(() => User, { nullable: true })
  created_by?: User | null;
}

Module 7: Ad-hoc Bills

src/entities/AdHocBill.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Lease } from "./Lease";
import { User } from "./User";

@Entity({ name: "ad_hoc_bills" })
export class AdHocBill extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Lease, { nullable: false })
  lease!: Lease;

  @ManyToOne(() => User, { nullable: false })
  raised_by!: User;

  @Column({ type: "varchar", length: 512 })
  reason!: string;

  @Column({ type: "numeric" })
  amount!: string;

  @Column({ type: "numeric", nullable: true })
  tax_amount?: string | null;

  @Column({ type: "boolean", default: false })
  approved!: boolean;

  @ManyToOne(() => User, { nullable: true })
  approved_by?: User | null;

  @Column({ type: "timestamptz", nullable: true })
  approved_at?: Date | null;
}


src/entities/AdHocBillLink.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { AdHocBill } from "./AdHocBill";
import { Invoice } from "./Invoice";

@Entity({ name: "ad_hoc_bill_links" })
export class AdHocBillLink {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => AdHocBill, { onDelete: "CASCADE" })
  ad_hoc_bill!: AdHocBill;

  @ManyToOne(() => Invoice, { onDelete: "CASCADE" })
  invoice!: Invoice;
}

Module 8: Notifications & Integrations

src/entities/Notification.ts

import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { NotificationRecipientType, NotificationChannel, NotificationStatus } from "../enums";

@Entity({ name: "notifications" })
export class Notification extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "enum", enum: NotificationRecipientType })
  recipient_type!: NotificationRecipientType;

  @Index()
  @Column({ type: "uuid" })
  recipient_id!: string;

  @Column({ type: "enum", enum: NotificationChannel })
  channel!: NotificationChannel;

  @Column({ type: "varchar", length: 128 })
  template_code!: string;

  @Column({ type: "jsonb" })
  payload!: any;

  @Column({ type: "enum", enum: NotificationStatus, default: NotificationStatus.QUEUED })
  status!: NotificationStatus;

  @Column({ type: "timestamptz", nullable: true })
  sent_at?: Date | null;
}


src/entities/Webhook.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "webhooks" })
export class Webhook {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 512 })
  endpoint_url!: string;

  @Column({ type: "varchar", length: 512, nullable: true })
  secret?: string | null;

  @Column({ type: "boolean", default: true })
  active!: boolean;

  @Column({ type: "text", nullable: true })
  description?: string | null;
}


src/entities/WebhookEvent.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Webhook } from "./Webhook";
import { WebhookEventStatus } from "../enums";

@Entity({ name: "webhook_events" })
export class WebhookEvent {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Webhook, { nullable: false, onDelete: "CASCADE" })
  webhook!: Webhook;

  @Column({ type: "varchar", length: 128 })
  event_type!: string;

  @Column({ type: "jsonb" })
  payload!: any;

  @Column({ type: "enum", enum: WebhookEventStatus, default: WebhookEventStatus.PENDING })
  status!: WebhookEventStatus;

  @Column({ type: "timestamptz", nullable: true })
  last_attempt_at?: Date | null;

  @Column({ type: "int", default: 0 })
  attempt_count!: number;
  
  @Column({ type: "timestamptz" })
  created_at!: Date;
}


Note: WebhookEvent.created_at is modeled explicitly (instead of AppTimestamps) to reflect creation time semantics — change to AppTimestamps if you prefer updated_at too.

Module 9: Security & Audit

src/entities/OAuthClient.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "oauth_clients" })
export class OAuthClient {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  client_id!: string;

  @Column({ type: "varchar", length: 255 })
  client_secret!: string;

  @Column({ type: "text", array: true })
  grant_types!: string[];

  @Column({ type: "text", array: true, nullable: true })
  redirect_uris?: string[] | null;

  @Column({ type: "boolean", default: false })
  first_party!: boolean;

  @Column({ type: "timestamptz" })
  created_at!: Date;
}


src/entities/Session.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { User } from "./User";
import { OAuthClient } from "./OAuthClient";

@Entity({ name: "sessions" })
export class Session extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, { nullable: false })
  user!: User;

  @ManyToOne(() => OAuthClient, { nullable: true, onDelete: "SET NULL" })
  oauth_client?: OAuthClient | null;

  @Column({ type: "jsonb", nullable: true })
  device_info?: any | null;

  @Column({ type: "varchar", length: 64, nullable: true })
  ip_address?: string | null;

  @Column({ type: "timestamptz", nullable: true })
  last_seen_at?: Date | null;

  @Column({ type: "boolean", default: false })
  revoked!: boolean;
}


src/entities/AuditLog.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { User } from "./User";

@Entity({ name: "audit_logs" })
export class AuditLog extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, { nullable: true, onDelete: "SET NULL" })
  actor_user?: User | null;

  @Column({ type: "varchar", length: 128 })
  action!: string;

  @Column({ type: "varchar", length: 128 })
  entity_type!: string;

  @Index()
  @Column({ type: "uuid" })
  entity_id!: string;

  @Column({ type: "jsonb", nullable: true })
  before?: any | null;

  @Column({ type: "jsonb", nullable: true })
  after?: any | null;
}

Module 10: Jobs (Automation)

src/entities/Job.ts

import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { JobType, JobStatus } from "../enums";

@Entity({ name: "jobs" })
export class Job extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "enum", enum: JobType })
  type!: JobType;

  @Column({ type: "jsonb" })
  payload!: any;

  @Column({ type: "timestamptz" })
  run_at!: Date;

  @Column({ type: "enum", enum: JobStatus, default: JobStatus.QUEUED })
  status!: JobStatus;

  @Column({ type: "text", nullable: true })
  last_error?: string | null;
}


src/entities/JobLink.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm";
import { Job } from "./Job";
import { JobTargetType } from "../enums";

@Entity({ name: "job_links" })
export class JobLink {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Job, { onDelete: "CASCADE" })
  job!: Job;

  @Column({ type: "enum", enum: JobTargetType })
  target_type!: JobTargetType;

  @Index()
  @Column({ type: "uuid" })
  target_id!: string;
}

How I applied best practices / notes