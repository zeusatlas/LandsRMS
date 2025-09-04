/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Sessions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 13, nullable: true })
  time_in: string;

  @Column({ length: 13, nullable: true })
  time_out: string;

  @Column({ length: 45, nullable: true })
  ip_address: string;

  @Column({ type: 'text', nullable: true })
  user_agent: string;

  @Column({ type: 'text', nullable: true })
  token: string;

  @Column({ type: 'text', nullable: true })
  refresh_token: string;

  @Column({ type: 'text', nullable: true })
  payload: string;

  @Column()
  last_activity: number;

  @Column({ default: false })
  revoked: boolean;

  @Column({ type: 'timestamp', nullable: true })
  revoked_at: Date;

  @Column({ type: 'bigint', nullable: true })
  revoked_by: number;

  @Column({ type: 'timestamp', nullable: true })
  expires_at: Date;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false, select: false })
  is_deleted: boolean;

}
