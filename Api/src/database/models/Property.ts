import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index
  } from "typeorm";
  import { AppTimestamps } from "../BaseEntity";
  import { OrgUnit } from "./OrgUnit";
  import { PropertyStatus } from "../enums";
  import { PropertyUnit } from "./PropertyUnit";
  import { Document } from "./Document";
  import { Lease } from "./Lease";
  
  @Entity({ name: "properties" })
  export class Property extends AppTimestamps {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @ManyToOne(() => OrgUnit, ou => ou.properties, { nullable: true, onDelete: "SET NULL" })
    org_unit?: OrgUnit | null;
  
    @Index({ unique: true })
    @Column({ type: "varchar", length: 128 })
    property_code!: string;
  
    @Column({ type: "varchar", length: 255 })
    name!: string;
  
    @Column({ type: "jsonb", nullable: true })
    address?: any | null;
  
    @Column({ type: "varchar", length: 128 })
    region!: string;
  
    @Column({ type: "varchar", length: 128 })
    district!: string;
  
    @Column({ type: "varchar", length: 64, nullable: true })
    parcel_number?: string | null;
  
    @Column({ type: "varchar", length: 128, nullable: true })
    land_use?: string | null;
  
    @Column({ type: "numeric", nullable: true })
    area_sqm?: string | null;
  
    @Column({ type: "enum", enum: PropertyStatus, default: PropertyStatus.AVAILABLE })
    status!: PropertyStatus;
  
    @OneToMany(() => PropertyUnit, pu => pu.property)
    units?: PropertyUnit[];
  
    @OneToMany(() => Document, d => d.property)
    documents?: Document[];
  
    @OneToMany(() => Lease, l => l.property)
    leases?: Lease[];
  }
  