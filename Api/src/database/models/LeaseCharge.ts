
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
