import { User } from "src/user/models/user.entity";

export interface DepartmentInterface {
    id?: number;
    name: string;
    users?: User[];

}