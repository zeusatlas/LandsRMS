import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index
  } from "typeorm";
  import { AppTimestamps } from "../BaseEntity";
  import { OrgUnitType } from "../enums";
  import { User } from "./User";
  import { Property } from "./Property";
  
  @Entity({ name: "org_units" })
  export class OrgUnit extends AppTimestamps {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @ManyToOne(() => OrgUnit, ou => ou.children, { nullable: true, onDelete: "SET NULL" })
    parent?: OrgUnit | null;
  
    @OneToMany(() => OrgUnit, ou => ou.parent)
    children?: OrgUnit[];
  
    @Index({ unique: true })
    @Column({ type: "varchar", length: 64 })
    code!: string;
  
    @Column({ type: "varchar", length: 255 })
    name!: string;
  
    @Column({ type: "enum", enum: OrgUnitType })
    type!: OrgUnitType;
  
    @OneToMany(() => User, u => u.org_unit)
    users?: User[];
  
    @OneToMany(() => Property, p => p.org_unit)
    properties?: Property[];
  }
  