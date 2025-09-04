import { Entity, PrimaryGeneratedColumn, ManyToOne, UpdateDateColumn, CreateDateColumn, Column } from "typeorm";
import { AdHocBill } from "./AdHocBill";
import { Invoice } from "./Invoice";

@Entity({ name: "ad_hoc_bill_links" })
export class AdHocBillLink {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => AdHocBill, { onDelete: "CASCADE" })
  ad_hoc_bill: AdHocBill;

  @ManyToOne(() => Invoice, { onDelete: "CASCADE" })
  invoice: Invoice;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
