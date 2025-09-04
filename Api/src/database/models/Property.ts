import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { PropertyStatus } from "../enums";
import { PropertyUnit } from "./PropertyUnit";
import { Document } from "./Document";
import { Lease } from "./Lease";
import { District } from "./District";
import { Region } from "./Region";

@Entity({ name: "properties" })
export class Property extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrgUnit, ou => ou.properties, { nullable: true, onDelete: "SET NULL" })
  org_unit?: OrgUnit | null;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  property_code: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "jsonb", nullable: true })
  address?: any | null;

  @ManyToOne(() => Region, (region) => region.properties, { nullable: false, onDelete: "RESTRICT" })
  @JoinColumn({ name: "region_id" })
  region!: Region;

  @ManyToOne(() => District, (district) => district.properties, { nullable: false, onDelete: "RESTRICT" })
  @JoinColumn({ name: "district_id" })
  district!: District;

  @Column({ type: "varchar", length: 64, nullable: true })
  parcel_number?: string | null;

  @Column({ type: "varchar", length: 128, nullable: true })
  land_use?: string | null;

  @Column({ type: "numeric", nullable: true })
  area_sqm?: string | null;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;

  @Column({ type: "enum", enum: PropertyStatus, default: PropertyStatus.AVAILABLE })
  status: PropertyStatus;

  @OneToMany(() => PropertyUnit, pu => pu.property)
  units?: PropertyUnit[];

  @OneToMany(() => Document, d => d.property)
  documents?: Document[];

  @OneToMany(() => Lease, l => l.property)
  leases?: Lease[];
}
