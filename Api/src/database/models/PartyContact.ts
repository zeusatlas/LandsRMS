import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Party } from "./Party";

@Entity({ name: "party_contacts" })
export class PartyContact {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Party, p => p.contacts, { onDelete: "CASCADE" })
  party!: Party;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 32, nullable: true })
  phone?: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  email?: string | null;

  @Column({ type: "boolean", default: false })
  is_primary!: boolean;
}
