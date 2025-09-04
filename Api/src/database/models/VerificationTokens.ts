import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class VerificationTokens {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 25, nullable: true })
  token: string;

  @Column('text', { default: '[*]' })
  reasons: string;

  @Column({ type: 'timestamp', nullable: true })
  expire_at: Date;

  @Column({ length: 20, default: 'Active' })
  status: string;

  @Column({ default: false, select: false })
  is_deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
