import { Department } from "src/department/models/department.entity";

export interface UserInterface {
    id?: number;
    name: string;
    birthday: Date;
    department: Department;
    
}