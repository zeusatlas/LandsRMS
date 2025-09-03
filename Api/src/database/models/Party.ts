import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, Index
  } from "typeorm";
  import { AppTimestamps } from "../BaseEntity";
  import { PartyType } from "../enums";
  import { PartyContact } from "./PartyContact";
  import { PaymentMethod } from "./PaymentMethod";
  import { Mandate } from "./Mandate";
  import { Payment } from "./Payment";
  
  @Entity({ name: "parties" })
  export class Party extends AppTimestamps {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ type: "enum", enum: PartyType })
    type!: PartyType;
  
    @Column({ type: "varchar", length: 255 })
    legal_name!: string;
  
    @Index()
    @Column({ type: "varchar", length: 32, nullable: true })
    ghana_card_no?: string | null;
  
    @Index()
    @Column({ type: "varchar", length: 64, nullable: true })
    tin_no?: string | null;
  
    @Column({ type: "varchar", length: 255, nullable: true })
    email?: string | null;
  
    @Column({ type: "varchar", length: 32, nullable: true })
    phone?: string | null;
  
    @Column({ type: "jsonb", nullable: true })
    billing_address?: any | null;
  
    @OneToMany(() => PartyContact, pc => pc.party)
    contacts?: PartyContact[];
  
    @OneToMany(() => PaymentMethod, pm => pm.party)
    payment_methods?: PaymentMethod[];
  
    @OneToMany(() => Mandate, m => m.party)
    mandates?: Mandate[];
  
    @OneToMany(() => Payment, p => p.payer_party)
    payments?: Payment[];
  }
  