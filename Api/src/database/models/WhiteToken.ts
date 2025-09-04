/* eslint-disable prettier/prettier */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Index,
} from 'typeorm';
import { User } from './User';

@Entity()
@Index(['user'])
export class WhiteToken {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'text' })
    token: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    pin: string;

    @Column({ type: 'timestamp with time zone', name: 'expires_at' })
    expires_at: Date;

    @Column({ type: 'timestamp with time zone', name: 'last_used_at', nullable: true })
    last_used_at: Date;

    @Column({ type: 'boolean', name: 'is_revoked', default: false })
    is_revoked: boolean;

    @Column({ type: 'varchar', length: 45, nullable: true })
    ip_address: string;

    @Column({ default: false, select: false })
    is_deleted: boolean;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    updated_at: Date;
}
