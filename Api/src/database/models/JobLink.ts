import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm";
import { Job } from "./Job";
import { JobTargetType } from "../enums";

@Entity({ name: "job_links" })
export class JobLink {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Job, { onDelete: "CASCADE" })
  job!: Job;

  @Column({ type: "enum", enum: JobTargetType })
  target_type!: JobTargetType;

  @Index()
  @Column({ type: "uuid" })
  target_id!: string;
}
