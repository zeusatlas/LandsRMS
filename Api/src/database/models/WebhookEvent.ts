import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Webhook } from "./Webhook";
import { WebhookEventStatus } from "../enums";

@Entity({ name: "webhook_events" })
export class WebhookEvent {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Webhook, { nullable: false, onDelete: "CASCADE" })
  webhook!: Webhook;

  @Column({ type: "varchar", length: 128 })
  event_type!: string;

  @Column({ type: "jsonb" })
  payload!: any;

  @Column({ type: "enum", enum: WebhookEventStatus, default: WebhookEventStatus.PENDING })
  status!: WebhookEventStatus;

  @Column({ type: "timestamptz", nullable: true })
  last_attempt_at?: Date | null;

  @Column({ type: "int", default: 0 })
  attempt_count!: number;
  
  @Column({ type: "timestamptz" })
  created_at!: Date;
}
