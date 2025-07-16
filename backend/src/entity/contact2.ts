// entities/Contact.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

export enum ContactSubject {
  GENERAL = "general",
  PARTNERSHIP = "partnership",
  WHOLESALE = "wholesale",
  SUPPORT = "support",
  MEDIA = "media",
}

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: false })
  lastName!: string;

  @Column({ nullable: false })
  email!: string;

  @Column({ nullable: false })
  message!: string;

  @Column({ nullable: false })
  phone!: string;

  @Column({
    type: "enum",
    enum: ContactSubject,
    default: ContactSubject.GENERAL,
  })
  subject!: ContactSubject;

  @CreateDateColumn()
  createdAt!: Date;
}
