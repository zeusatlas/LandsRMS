import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { Role } from "./Role";
import { UserStatus } from "../enums";
import { WhiteToken } from "./WhiteToken";
import { District } from "./District";
import { Region } from "./Region";

@Entity({ name: "users" })
export class User extends AppTimestamps {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrgUnit, ou => ou.users, { nullable: true, onDelete: "SET NULL" })
  org_unit?: OrgUnit | null;

  @Column({ type: "varchar", length: 64, nullable: true })
  glc_number?: string | null;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 255 })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date;

  @Column({ unique: true, type: "varchar", length: 10, })
  phone: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  mobile?: string | null;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "varchar", length: 128 })
  first_name: string;

  @Column({ type: "varchar", length: 128 })
  last_name: string;

  @Column({ type: "enum", enum: UserStatus, default: UserStatus.ACTIVE })
  status: UserStatus;

  @Column({ type: "int" })
  rank_level: number;

  @Column({ default: false })
  two_factor_enabled: boolean;

  @Column({ length: 6, nullable: true, select: false })
  two_factor_pin: string;

  @Column({ default: true })
  is_first_time: boolean;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;

  @ManyToOne(() => Role, role => role.users, { nullable: false, onDelete: "RESTRICT" })
  role: Role;

  @OneToMany(() => WhiteToken, (whiteToken) => whiteToken.user)
  white_tokens: WhiteToken[];

  @ManyToOne(() => Region, (region) => region.users, { nullable: false, onDelete: "RESTRICT" })
  @JoinColumn({ name: "region_id" })
  region: Region;

  @ManyToOne(() => District, (district) => district.users, { nullable: false, onDelete: "RESTRICT" })
  @JoinColumn({ name: "district_id" })
  district: District;

  @Column({ type: "varchar", length: 255 })
  town: string;
}
