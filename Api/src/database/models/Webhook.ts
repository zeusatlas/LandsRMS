import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "webhooks" })
export class Webhook {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 512 })
  endpoint_url: string;

  @Column({ type: "varchar", length: 512, nullable: true })
  secret?: string | null;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @Column({ type: "text", nullable: true })
  description?: string | null;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
