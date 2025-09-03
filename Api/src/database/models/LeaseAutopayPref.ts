import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Lease } from "./Lease";
import { Mandate } from "./Mandate";

@Entity({ name: "lease_autopay_prefs" })
export class LeaseAutopayPref extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Lease, { onDelete: "CASCADE" })
  lease!: Lease;

  @ManyToOne(() => Mandate, { onDelete: "SET NULL", nullable: true })
  mandate?: Mandate | null;

  @Column({ type: "boolean", default: false })
  autopay_enabled!: boolean;

  @Column({ type: "int", nullable: true })
  autopay_day?: number | null;
}
