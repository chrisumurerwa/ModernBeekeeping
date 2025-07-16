// src/entity/productEntity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./userEntity"; // adjust path if needed

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.products, { eager: true })
  user!: User;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  category!: string;

  @Column("float")
  price!: number;

  @Column({ nullable: true })
  imageUrl!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
