import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "oauth_clients" })
export class OAuthClient {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 255, unique: true })
  client_id: string;

  @Column({ type: "varchar", length: 255 })
  client_secret: string;

  @Column({ type: "text", array: true })
  grant_types: string[];

  @Column({ type: "text", array: true, nullable: true })
  redirect_uris?: string[] | null;

  @Column({ type: "boolean", default: false })
  first_party: boolean;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
