import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { RolePermission } from "./RolePermission";

@Entity({ name: "permissions" })
export class Permission extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  code!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @OneToMany(() => RolePermission, rp => rp.permission)
  role_permissions?: RolePermission[];
}
