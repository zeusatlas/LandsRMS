import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { BillingRun } from "./BillingRun";
import { Lease } from "./Lease";
import { InvoiceLine } from "./InvoiceLine";
import { InvoiceStatus } from "../enums";

@Entity({ name: "invoices" })
export class Invoice extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => BillingRun, { nullable: true, onDelete: "SET NULL" })
  billing_run?: BillingRun | null;

  @ManyToOne(() => Lease, l => l.invoices, { nullable: true, onDelete: "SET NULL" })
  lease?: Lease | null;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  invoice_no: string;

  @Column({ type: "date" })
  invoice_date: string;

  @Column({ type: "date" })
  due_date: string;

  @Column({ type: "varchar", length: 8 })
  currency: string;

  @Column({ type: "enum", enum: InvoiceStatus, default: InvoiceStatus.DRAFT })
  status: InvoiceStatus;

  @Column({ type: "numeric" })
  subtotal: string;

  @Column({ type: "numeric", nullable: true })
  tax_total?: string | null;

  @Column({ type: "numeric" })
  total: string;

  @Column({ type: "numeric" })
  balance: string;

  @Column({ type: "text", nullable: true })
  notes?: string | null;

  @OneToMany(() => InvoiceLine, il => il.invoice)
  lines?: InvoiceLine[];

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
