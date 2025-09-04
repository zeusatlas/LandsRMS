import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Party } from "./Party";
import { PaymentMethod } from "./PaymentMethod";
import { PaymentProvider } from "./PaymentProvider";
import { MandateStatus } from "../enums";

@Entity({ name: "mandates" })
export class Mandate extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Party, p => p.mandates, { onDelete: "CASCADE" })
  party: Party;

  @ManyToOne(() => PaymentMethod, { onDelete: "SET NULL", nullable: true })
  payment_method?: PaymentMethod | null;

  @ManyToOne(() => PaymentProvider, { onDelete: "SET NULL", nullable: true })
  provider?: PaymentProvider | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  external_ref?: string | null;

  @Column({ type: "enum", enum: MandateStatus, default: MandateStatus.PENDING })
  status: MandateStatus;

  @Column({ type: "numeric", nullable: true })
  max_amount?: string | null;

  @Column({ type: "date" })
  start_date: string;

  @Column({ type: "date", nullable: true })
  end_date?: string | null;

  @Column({ type: "timestamptz" })
  consent_captured_at: Date;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
