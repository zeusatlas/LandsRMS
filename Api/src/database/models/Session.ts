import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { User } from "./User";
import { OAuthClient } from "./OAuthClient";

@Entity({ name: "sessions" })
export class Session extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, { nullable: false })
  user!: User;

  @ManyToOne(() => OAuthClient, { nullable: true, onDelete: "SET NULL" })
  oauth_client?: OAuthClient | null;

  @Column({ type: "jsonb", nullable: true })
  device_info?: any | null;

  @Column({ type: "varchar", length: 64, nullable: true })
  ip_address?: string | null;

  @Column({ type: "timestamptz", nullable: true })
  last_seen_at?: Date | null;

  @Column({ type: "boolean", default: false })
  revoked!: boolean;
}
