import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
  } from "typeorm";
  import { AppTimestamps } from "../BaseEntity";
  import { Invoice } from "./Invoice";
  import { DunningStage, DunningChannel, DeliveryStatus } from "../enums";
  
  @Entity({ name: "dunning_events" })
  export class DunningEvent extends AppTimestamps {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @ManyToOne(() => Invoice, { nullable: false, onDelete: "CASCADE" })
    invoice!: Invoice;
  
    @Column({ type: "enum", enum: DunningStage })
    stage!: DunningStage;
  
    @Column({ type: "timestamptz" })
    event_at!: Date;
  
    @Column({ type: "enum", enum: DunningChannel })
    channel!: DunningChannel;
  
    @Column({ type: "enum", enum: DeliveryStatus })
    status!: DeliveryStatus;
  
    @Column({ type: "jsonb", nullable: true })
    details?: any | null;
  }
  