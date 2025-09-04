import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Region } from "./Region";
import { User } from "./User";
import { Property } from "./Property";

@Entity({ name: "districts" })
export class District {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "varchar", length: 128 })
    name!: string;

    @Column({ default: false, select: false })
    is_deleted: boolean;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    updated_at: Date;

    @ManyToOne(() => Region, (region) => region.districts, { nullable: false, onDelete: "CASCADE" })
    @JoinColumn({ name: "region_id" })
    region!: Region;

    @OneToMany(() => User, (user) => user.district)
    users!: User[];

    @OneToMany(() => Property, (property) => property.district)
    properties!: Property[];

}
