import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [{
    id: 1,
    name: 'Regulo',
    lastName: 'Leonardi',
    Age: 25,
  },
    {
      id: 2,
      name: 'Eduardo',
      lastName: 'Ferrer',
      Age: 37,
    },
    {
      id: 3,
      name: 'Luis',
      lastName: 'Rosales',
      Age: 52,
    }];

  getUsers() {
    return this.users;
  }
  createUser(user) {
    this.users = [...this.users, {...user}];
  }

  updateUser(user) {
    this.users = this.users.map(u => {
      if (u.id == user.id) {
        return { ...user};
      }
      return u;
    });
  }

  deleteUser(id) {
    this.users = this.users.filter(u => u.id != id);
  }

}
