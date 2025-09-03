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
