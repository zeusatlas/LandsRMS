import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, Index
} from "typeorm";
import { AppTimestamps } from "../BaseEntity";
import { RolePermission } from "./RolePermission";
import { User } from "./User";

@Entity({ name: "roles" })
export class Role extends AppTimestamps {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 128 })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "int" })
  min_rank_required!: number;

  @OneToMany(() => RolePermission, rp => rp.role)
  permissions?: RolePermission[];

  @OneToMany(() => User, user => user.role)
  users?: User[];
}
