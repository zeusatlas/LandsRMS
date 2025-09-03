import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
  } from "typeorm";
  import { AppTimestamps } from "../BaseEntity";
  import { DocumentOwnerType } from "../enums";
  import { User } from "./User";
  import { Property } from "./Property";
  
  @Entity({ name: "documents" })
  export class Document extends AppTimestamps {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    // Polymorphic: owner_type + owner_id
    @Column({ type: "enum", enum: DocumentOwnerType })
    owner_type!: DocumentOwnerType;
  
    @Index()
    @Column({ type: "uuid" })
    owner_id!: string;
  
    @Column({ type: "varchar", length: 255 })
    title!: string;
  
    @Column({ type: "varchar", length: 128 })
    mime_type!: string;
  
    @Column({ type: "text" })
    storage_url!: string;
  
    @ManyToOne(() => User, { nullable: true, onDelete: "SET NULL" })
    uploaded_by?: User | null;
  
    // optional helper relation to property if owner is PROPERTY
    @ManyToOne(() => Property, p => p.documents, { nullable: true, onDelete: "CASCADE" })
    property?: Property | null;
  }
  