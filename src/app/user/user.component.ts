import { Component, OnInit } from '@angular/core';

//Services
import { UserManagerService } from './services/user-manager.service';

//Models
import { IUserResponse, IUser, IUserPicture} from './models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  email: string;
  name: string;
  phone: string;
  picture: string;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {
    this.getRandomUser();
  }

  handleClick(){
    this.getRandomUser();
  }

  getRandomUser(){
    
      this.userManagerService.getRandomName().subscribe((response: IUserResponse) =>{
      const { results } = response; //destructuring
      const [data] = results; //destructuring
      const { name, email, phone, picture}: IUser = data; //destructuring
      this.name = `${name.first} ${name.last}`;
      this.email= email;
      this.phone= phone;
      this.picture= picture.large;
    });
  }
}
