import { CurrentUserService } from './../../security/current-user.service';
import { UserResourceService } from 'src/app/shared/gateway-api/services';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/shared/gateway-api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: UserDTO = {};
  constructor(private userResource: UserResourceService, private  currentUser: CurrentUserService) { }

  async ngOnInit() {
    await this.currentUser.getCurrentUser(false).then( (usr) => {
      this.user = usr;
    });
  }

}
