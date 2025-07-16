import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Story {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  title!: string;

  @Column({ type: "text" })
  content!: string;

  @Column({ type: "varchar" })
  author!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ type: "varchar", nullable: true })
  coverImage?: string;

  @Column({ type: "simple-array", nullable: true }) // simple-array stores string[]
  tags?: string[];
}