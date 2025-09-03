import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
  } from "typeorm";
  import { Property } from "./Property";
  import { UnitStatus } from "../enums";
  
  @Entity({ name: "property_units" })
  export class PropertyUnit {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @ManyToOne(() => Property, p => p.units, { onDelete: "CASCADE" })
    property!: Property;
  
    @Index()
    @Column({ type: "varchar", length: 128 })
    unit_code!: string;
  
    @Column({ type: "text", nullable: true })
    description?: string | null;
  
    @Column({ type: "numeric", nullable: true })
    area_sqm?: string | null;
  
    @Column({ type: "enum", enum: UnitStatus, default: UnitStatus.AVAILABLE })
    status!: UnitStatus;
  }
  