import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { PaymentProvider } from "./PaymentProvider";
import { ReconciliationLine } from "./ReconciliationLine";
import { ReconciliationStatus } from "../enums";

@Entity({ name: "reconciliations" })
export class Reconciliation extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => PaymentProvider, p => p.reconciliations, { nullable: false })
  provider!: PaymentProvider;

  @Column({ type: "varchar", length: 255 })
  file_name!: string;

  @Column({ type: "date" })
  file_date!: string;

  @Column({ type: "enum", enum: ReconciliationStatus, default: ReconciliationStatus.IMPORTED })
  status!: ReconciliationStatus;

  @OneToMany(() => ReconciliationLine, rl => rl.reconciliation)
  lines?: ReconciliationLine[];
}
