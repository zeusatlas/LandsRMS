import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Invoice } from "./Invoice";
import { Payment } from "./Payment";
import { AdjustmentType, AdjustmentStatus } from "../enums";
import { User } from "./User";

@Entity({ name: "adjustments" })
export class Adjustment extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Invoice, { nullable: true, onDelete: "SET NULL" })
  invoice?: Invoice | null;

  @ManyToOne(() => Payment, { nullable: true, onDelete: "SET NULL" })
  payment?: Payment | null;

  @Column({ type: "enum", enum: AdjustmentType })
  type!: AdjustmentType;

  @Column({ type: "numeric" })
  amount!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  reason?: string | null;

  @Column({ type: "enum", enum: AdjustmentStatus, default: AdjustmentStatus.PENDING })
  status!: AdjustmentStatus;

  @ManyToOne(() => User, { nullable: true })
  created_by?: User | null;
}
