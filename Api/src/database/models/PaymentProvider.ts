import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { Payment } from "./Payment";
import { Reconciliation } from "./Reconciliation";


@Entity({ name: "payment_providers" })
export class PaymentProvider extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 64 })
  code!: string;

  @Column({ type: "varchar", length: 128 })
  display_name!: string;

  @Column({ type: "jsonb", nullable: true })
  config?: any | null;

  @Column({ type: "boolean", default: true })
  active!: boolean;

  @OneToMany(() => Payment, p => p.provider)
  payments?: Payment[];

  @OneToMany(() => Reconciliation, r => r.provider)
  reconciliations?: Reconciliation[];
}
