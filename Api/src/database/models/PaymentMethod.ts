import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm";
import { Party } from "./Party";
import { PaymentMethodType, ProviderCode } from "../enums";

@Entity({ name: "payment_methods" })
export class PaymentMethod {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Party, p => p.payment_methods, { onDelete: "CASCADE" })
  party!: Party;

  @Column({ type: "enum", enum: PaymentMethodType })
  type!: PaymentMethodType;

  @Column({ type: "enum", enum: ProviderCode, nullable: true })
  provider?: ProviderCode | null;

  @Column({ type: "varchar", length: 128, nullable: true })
  masked_account?: string | null;

  @Column({ type: "varchar", length: 512, nullable: true })
  token?: string | null;

  @Column({ type: "date", nullable: true })
  expiry_date?: string | null;

  @Column({ type: "boolean", default: false })
  is_default!: boolean;

  @Column({ type: "enum", enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" })
  status!: "ACTIVE" | "INACTIVE";
}
