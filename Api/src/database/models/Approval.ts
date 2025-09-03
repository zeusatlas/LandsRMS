import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
  } from "typeorm";
  import { AppTimestamps } from "../BaseEntity";
  import { ApprovalTargetType, ApprovalState } from "../enums";
  import { User } from "./User";
  
  @Entity({ name: "approvals" })
  export class Approval extends AppTimestamps {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ type: "enum", enum: ApprovalTargetType })
    target_type!: ApprovalTargetType;
  
    @Index()
    @Column({ type: "uuid" })
    target_id!: string;
  
    @Column({ type: "enum", enum: ApprovalState, default: ApprovalState.PENDING })
    state!: ApprovalState;
  
    @ManyToOne(() => User, { nullable: false })
    requested_by!: User;
  
    @ManyToOne(() => User, { nullable: true })
    decided_by?: User | null;
  
    @Column({ type: "timestamptz", nullable: true })
    decided_at?: Date | null;
  
    @Column({ type: "text", nullable: true })
    remarks?: string | null;
  }
  