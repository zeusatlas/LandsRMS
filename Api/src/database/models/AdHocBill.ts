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
