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
  