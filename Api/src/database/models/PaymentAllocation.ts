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
