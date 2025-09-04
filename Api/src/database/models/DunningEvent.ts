import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Invoice } from "./Invoice";
import { DunningStage, DunningChannel, DeliveryStatus } from "../enums";

@Entity({ name: "dunning_events" })
export class DunningEvent extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Invoice, { nullable: false, onDelete: "CASCADE" })
  invoice: Invoice;

  @Column({ type: "enum", enum: DunningStage })
  stage: DunningStage;

  @Column({ type: "timestamptz" })
  event_at: Date;

  @Column({ type: "enum", enum: DunningChannel })
  channel: DunningChannel;

  @Column({ type: "enum", enum: DeliveryStatus })
  status: DeliveryStatus;

  @Column({ type: "jsonb", nullable: true })
  details?: any | null;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
