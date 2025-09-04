import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Payment } from "./Payment";
import { Invoice } from "./Invoice";

@Entity({ name: "payment_allocations" })
export class PaymentAllocation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Payment, { onDelete: "CASCADE" })
  payment: Payment;

  @ManyToOne(() => Invoice, { onDelete: "CASCADE" })
  invoice: Invoice;

  @Column({ type: "numeric" })
  amount: string;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
