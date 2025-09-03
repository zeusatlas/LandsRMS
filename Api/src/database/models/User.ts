import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { OrgUnit } from "./OrgUnit";
import { Role } from "./Role";
import { UserStatus } from "../enums";

@Entity({ name: "users" })
export class User extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => OrgUnit, ou => ou.users, { nullable: true, onDelete: "SET NULL" })
  org_unit?: OrgUnit | null;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 255 })
  email!: string;

  @Column({ type: "varchar", length: 32, nullable: true })
  phone?: string | null;

  @Column({ type: "text"})
  password!: string;

  @Column({ type: "varchar", length: 128 })
  first_name!: string;

  @Column({ type: "varchar", length: 128 })
  last_name!: string;

  @Column({ type: "enum", enum: UserStatus, default: UserStatus.ACTIVE })
  status!: UserStatus;

  @Column({ type: "int" })
  rank_level!: number;

  @Column({ type: "timestamptz", nullable: true })
  last_login_at?: Date | null;

 @ManyToOne(() => Role, role => role.users, { nullable: false, onDelete: "RESTRICT" })
  role!: Role;
}
