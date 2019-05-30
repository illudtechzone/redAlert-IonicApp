import { CurrentUserService } from './../../security/current-user.service';
import { Component, OnInit } from '@angular/core';
import { UserResourceService } from 'src/app/shared/gateway-api/services';
import { UserDTO } from 'src/app/shared/gateway-api/models';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  // public friends = [
  //   { username: 'Jane Marie' },
  //   { username: 'Jim Beglin' },
  //   { username: 'Trevor Philip' },
  //   { username: 'Ayushman Varma' }
  // ];

  // public others = [
  //   { username: 'Logan Ward' },
  //   { username: 'Walter White' },
  //   { username: 'Alexa Hoffman' },
  //   { username: 'Melissa Carpenter' }
  // ];

  public friends: UserDTO[];
  public others: UserDTO[];
  user: UserDTO;
  constructor(private userResource: UserResourceService,private currentUser: CurrentUserService) { }

  async ngOnInit() {

    await this.currentUser.getCurrentUser(false).then( (usr) => {
      this.user = usr;
    });
    this.fetchFriends();
    this.fetchSuggestions();
  }

  fetchFriends() {
    this.userResource.getFriendsUsingGET(this.user.email).subscribe(
      (result) => {
        this.friends = result;
      },
      (error) => {
        console.log('Error fetching friends');
      }
    );
  }

  fetchSuggestions() {
    const params = {
    };
    this.userResource.getSuggestionsUsingGET(params).subscribe(
      (result) => {
        this.others = result;
      },
      (error) => {
        console.log('Error fetching suggestions');
      }
    );
  }

  addFriend(user: UserDTO) {
    const param = {
      email: user.email
    }
    this.userResource.addFriendUsingGET(param).subscribe(
      (result) => {
        this.friends.push(user);
        this.others.splice(this.others.indexOf(user), 1);
      },
      (error) => {
        console.log('Error adding friend');
      }
    );
  }

  unFriend(user: UserDTO) {
    const param = {
      email: user.email
    }
    this.userResource.unFriendUsingGET(param).subscribe(
      (result) =>{
        this.friends.splice(this.friends.indexOf(user), 1);
        this.others.push(user);
      },
      (error) => {
        console.log('Error removing friend');
      }
    );
  }
}
