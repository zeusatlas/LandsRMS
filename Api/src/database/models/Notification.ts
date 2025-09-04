import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { NotificationRecipientType, NotificationChannel, NotificationStatus } from "../enums";

@Entity({ name: "notifications" })
export class Notification extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: NotificationRecipientType })
  recipient_type: NotificationRecipientType;

  @Index()
  @Column({ type: "uuid" })
  recipient_id: string;

  @Column({ type: "enum", enum: NotificationChannel })
  channel: NotificationChannel;

  @Column({ type: "varchar", length: 128 })
  template_code: string;

  @Column({ type: "jsonb" })
  payload: any;

  @Column({ type: "enum", enum: NotificationStatus, default: NotificationStatus.QUEUED })
  status: NotificationStatus;

  @Column({ type: "timestamptz", nullable: true })
  sent_at?: Date | null;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
