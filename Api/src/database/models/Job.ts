import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { JobType, JobStatus } from "../enums";

@Entity({ name: "jobs" })
export class Job extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: JobType })
  type: JobType;

  @Column({ type: "jsonb" })
  payload: any;

  @Column({ type: "timestamptz" })
  run_at: Date;

  @Column({ type: "enum", enum: JobStatus, default: JobStatus.QUEUED })
  status: JobStatus;

  @Column({ type: "text", nullable: true })
  last_error?: string | null;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
