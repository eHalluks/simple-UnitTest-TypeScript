interface UserInter {name: string}
export class User implements UserInter{
    name: string
    constructor(name: string) {this.name = name;}
}

const json = '{"name":"Jan"}';
const {name} = JSON.parse(json) as User;

let user: string | User = name === '' ? '' : `${name}`;
if (user !== '') {
    user = new User(user);
} else {
    throw new Error("can not ready properties");
}
