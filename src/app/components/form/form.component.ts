import { Component } from '@angular/core';
import { formmodel } from 'src/app/models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  phoneNumber: number | null = null;
  btntxt: string = 'Add';
  editid: number = 0;
  edited: formmodel[] = [];

  forms: formmodel[] = [
    {
      id: 1,
      name: 'Naresh',
      email: 'naresh@gmail.com',
      password: '123',
      confirmPassword: '123',
      phone: 9566678130,
    },
    {
      id: 2,
      name: 'Suriya',
      email: 'suriya@gmail.com',
      password: '123',
      confirmPassword: '123',
      phone: 9751631233,
    },
  ];

  idgenrator() {
    let randomid: number;
    do {
      randomid = Math.floor(Math.random() * 100) + 1;
    } while (this.forms.find((ids) => ids.id === randomid));
    return randomid;
  }

  add = () => {
    if (this.editid === 0) {
      let newentry: formmodel = {
        id: this.idgenrator(),
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        phone: this.phoneNumber,
      };
      this.forms.push(newentry);
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.phoneNumber = null;
    } else {
      const editedUserIndex = this.forms.findIndex(
        (user) => user.id === this.editid
      );
      if (editedUserIndex !== -1) {
        this.forms[editedUserIndex] = {
          id: this.editid,
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          phone: this.phoneNumber,
        };
        this.editid = 0; 
        this.btntxt = 'Add';
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.phoneNumber = null;
      }
    }
  };
  edit(id: number) {
    this.editid = id;
    this.btntxt = 'Edit';
    const edited = this.forms.find((details) => details.id === id);
    if (edited) {
      this.name = edited.name;
      this.email = edited.email;
      this.phoneNumber = edited.phone;
      this.password = edited.password;
      this.confirmPassword = edited.confirmPassword;
    }
    return edited;
  }

  // edit(id: number) {
  //   this.editid = id;
  //   this.btntxt = 'Edit';

  //   const editedUser = this.forms.find((user) => user.id === id);
  //   if (editedUser) {
  //     this.name = editedUser.name;
  //     this.email = editedUser.email;
  //     this.password = editedUser.password;
  //     this.confirmPassword = editedUser.confirmPassword;
  //     this.phoneNumber = editedUser.phone;
  //   }
  // }

  remove(rid: number) {
    this.forms = this.forms.filter((remove) => remove.id !== rid);
  }
}
