import {
  Column,
  CreateDateColumn,
  Entity, ManyToOne, PrimaryColumn,
  UpdateDateColumn
} from "typeorm";
import { Role } from "./Role";
import { Permission } from "./Permission";

@Entity({ name: "role_permissions" })
export class RolePermission {
  @PrimaryColumn("uuid")
  role_id: string;

  @PrimaryColumn("uuid")
  permission_id: string;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;

  @ManyToOne(() => Role, r => r.permissions, { onDelete: "CASCADE" })
  role: Role;

  @ManyToOne(() => Permission, p => p.role_permissions, { onDelete: "CASCADE" })
  permission: Permission;
}
