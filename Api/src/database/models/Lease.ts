import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index,
  CreateDateColumn,
  UpdateDateColumn
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
  id: string;

  @ManyToOne(() => OrgUnit, { nullable: true, onDelete: "SET NULL" })
  org_unit?: OrgUnit | null;

  @ManyToOne(() => Property, p => p.leases, { nullable: false })
  property: Property;

  @ManyToOne(() => PropertyUnit, { nullable: true })
  unit?: PropertyUnit | null;

  @ManyToOne(() => Party, { nullable: false })
  lessee: Party;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  lease_number: string;

  @Column({ type: "enum", enum: LeaseStatus, default: LeaseStatus.DRAFT })
  status: LeaseStatus;

  @Column({ type: "date" })
  start_date: string;

  @Column({ type: "date" })
  end_date: string;

  @Column({ type: "varchar", length: 8 })
  base_currency: string;

  @Column({ type: "numeric" })
  base_rent: string;

  @Column({ type: "enum", enum: Frequency })
  frequency: Frequency;

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

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
