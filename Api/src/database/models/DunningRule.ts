import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";

@Entity({ name: "dunning_rules" })
export class DunningRule extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, { nullable: false })
  org_unit!: OrgUnit;

  @Column({ type: "varchar", length: 128 })
  name!: string;

  @Column({ type: "int" })
  first_reminder_days!: number;

  @Column({ type: "int" })
  second_reminder_days!: number;

  @Column({ type: "int" })
  final_notice_days!: number;

  @Column({ type: "numeric", nullable: true })
  late_fee_percent?: string | null;
}
