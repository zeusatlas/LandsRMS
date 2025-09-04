
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { BillingRunType } from "../enums";
import { User } from "./User";

@Entity({ name: "billing_runs" })
export class BillingRun extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrgUnit, { nullable: false })
  org_unit: OrgUnit;

  @Column({ type: "enum", enum: BillingRunType })
  run_type: BillingRunType;

  @Column({ type: "timestamptz" })
  run_at: Date;

  @Column({ type: "date", nullable: true })
  scheduled_for?: string | null;

  @ManyToOne(() => User, { nullable: true })
  initiated_by?: User | null;

  @Column({ type: "text", nullable: true })
  notes?: string | null;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
