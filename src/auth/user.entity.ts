import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column({ unique: true })
  mobileNumber: string;

  @Column()
  userType: string;

  @Column()
  skillType: string;

  @Column()
  experience: string;

  @Column()
  aadhar: string;

  @Column()
  pan: string;

  @Column()
  userStatus: string;

  @Column('simple-array')
  pincodeMapping: string[];

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
