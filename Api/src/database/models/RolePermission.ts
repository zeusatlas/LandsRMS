import {
    Entity, ManyToOne, PrimaryColumn
  } from "typeorm";
  import { Role } from "./Role";
  import { Permission } from "./Permission";
  
  @Entity({ name: "role_permissions" })
  export class RolePermission {
    @PrimaryColumn("uuid")
    role_id!: string;
  
    @PrimaryColumn("uuid")
    permission_id!: string;
  
    @ManyToOne(() => Role, r => r.permissions, { primary: true, onDelete: "CASCADE" })
    role!: Role;
  
    @ManyToOne(() => Permission, p => p.role_permissions, { primary: true, onDelete: "CASCADE" })
    permission!: Permission;
  }
  