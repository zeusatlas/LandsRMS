import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { District } from "./District";
import { User } from "./User";
import { Property } from "./Property";

@Entity({ name: "regions" })
export class Region {
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

    @OneToMany(() => District, (district) => district.region)
    districts!: District[];

    @OneToMany(() => User, (user) => user.region)
    users!: User[];

    @OneToMany(() => Property, (property) => property.region)
    properties!: Property[];

}
