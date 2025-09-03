import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { User } from "./User";

@Entity({ name: "audit_logs" })
export class AuditLog extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, { nullable: true, onDelete: "SET NULL" })
  actor_user?: User | null;

  @Column({ type: "varchar", length: 128 })
  action!: string;

  @Column({ type: "varchar", length: 128 })
  entity_type!: string;

  @Index()
  @Column({ type: "uuid" })
  entity_id!: string;

  @Column({ type: "jsonb", nullable: true })
  before?: any | null;

  @Column({ type: "jsonb", nullable: true })
  after?: any | null;
}
