
import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, Unique,OneToMany,OneToOne
} from 'typeorm';
import { Product } from './productEntity';
import { Token } from './Token';
export enum UserRole {
  ADMIN = 'admin',
  USER='user',
  NUTRITIONIST = 'nutritionist',
  COACH = 'coach',
  RESTAURANT_OWNER = 'restaurantOwner',
}
 
@Entity()
@Unique(['email']) 
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({
  type: 'enum',
  enum: UserRole,
})
role!: UserRole;


  @Column()
  otp!: number;

  @Column({ type: 'timestamp', nullable: true })
  otpExpires!: Date;

  @Column({ default: false })
  verified!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Token, (token) => token.user, { cascade: true })
  tokens!: Token[];

  // OneToMany relationship
  @OneToMany(() => Product, (product) => product.user)
  products!: Product[];

}
