import { Task } from 'src/tasks/task.entity';
export declare class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    mobileNumber: string;
    userType: string;
    skillType: string;
    experience: string;
    aadhar: string;
    pan: string;
    userStatus: string;
    tasks: Task[];
}
