import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Reconciliation } from "./Reconciliation";
import { Payment } from "./Payment";
import { MatchStatus } from "../enums";

@Entity({ name: "reconciliation_lines" })
export class ReconciliationLine {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Reconciliation, r => r.lines, { onDelete: "CASCADE" })
  reconciliation!: Reconciliation;

  @Column({ type: "varchar", length: 255 })
  external_txn_id!: string;

  @Column({ type: "numeric" })
  amount!: string;

  @Column({ type: "timestamptz" })
  txn_time!: Date;

  @ManyToOne(() => Payment, { nullable: true, onDelete: "SET NULL" })
  matched_payment?: Payment | null;

  @Column({ type: "enum", enum: MatchStatus, default: MatchStatus.UNMATCHED })
  match_status!: MatchStatus;
}
