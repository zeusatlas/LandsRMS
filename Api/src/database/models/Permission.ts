import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { RolePermission } from "./RolePermission";

@Entity({ name: "permissions" })
export class Permission extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  code: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;

  @OneToMany(() => RolePermission, rp => rp.permission)
  role_permissions?: RolePermission[];
}
