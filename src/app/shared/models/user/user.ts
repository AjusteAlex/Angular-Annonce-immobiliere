export class User {
    name: string;
    age: number;
    email: string;
    password: string;
    tel : string;
    roles : number;

    constructor(user?:any){
        this.name = user.name;
        this.age = user.age;
        this.email = user.email;
        this.password = user.password;
        this.tel = user.tel;
        this.roles = user.roles;
    }
}

