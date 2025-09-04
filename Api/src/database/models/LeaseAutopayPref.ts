import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Lease } from "./Lease";
import { Mandate } from "./Mandate";

@Entity({ name: "lease_autopay_prefs" })
export class LeaseAutopayPref extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Lease, { onDelete: "CASCADE" })
  lease: Lease;

  @ManyToOne(() => Mandate, { onDelete: "SET NULL", nullable: true })
  mandate?: Mandate | null;

  @Column({ type: "boolean", default: false })
  autopay_enabled: boolean;

  @Column({ type: "int", nullable: true })
  autopay_day?: number | null;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
