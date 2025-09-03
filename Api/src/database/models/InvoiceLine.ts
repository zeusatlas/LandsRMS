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
