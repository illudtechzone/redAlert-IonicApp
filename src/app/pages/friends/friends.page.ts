import { CommandResourceService, QueryResourceService } from 'src/app/api/services';
import { CurrentUserService } from './../../security/current-user.service';
import { Component, OnInit } from '@angular/core';
import { UserResourceService } from 'src/app/shared/gateway-api/services';
import { UserDTO } from 'src/app/shared/gateway-api/models';
import { User } from 'src/app/api/models';

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

  public currentSegmentName = 'friends';
  public friends: User[];
  public others: UserDTO[];
  public friendRequests: User[];
  user: UserDTO;
  constructor(private userResource: UserResourceService,
    private currentUser: CurrentUserService,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService) { }

  async ngOnInit() {

    await this.currentUser.getCurrentUser(false).then( (usr) => {
      this.user = usr;
    });
    this.fetchFriends();
    this.fetchFriendRequests();
  }

  fetchFriends() {
   console.log('fetching friends');
    this.queryResourceService.findFriendsUsingGET(this.user.id).subscribe(result => {console.log('success finding friends ', result);
    this.friends = result;
  },
    err => {console.log('error finding friends ', err); });
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
  fetchFriendRequests() {

    console.log('fetching friend requests with user id', this.user.id);
    this.queryResourceService.findAllFriendRequestUsingGET(this.user.id).subscribe(
      result => {console.log('success finding friend requests ', result);
    this.friendRequests = result;
  },
    err => {console.log('error fetching friend requests ', err); });

  }

  // addFriend(user: UserDTO) {
  //   const param = {
  //     email: user.email
  //   };
  //   this.userResource.addFriendUsingGET(param).subscribe(
  //     (result) => {
  //       this.friends.push(user);
  //       this.others.splice(this.others.indexOf(user), 1);
  //     },
  //     (error) => {
  //       console.log('Error adding friend');
  //     }
  //   );
  // }

  // unFriend(user: UserDTO) {
  //   const param = {userId
  //     email: user.euserId
  //   };
  //   this.userResource.unFriendUsingGET(param).subscribe(
  //     (result) => {
  //       this.friends.splice(this.friends.indexOf(user), 1);
  //       this.others.push(user);
  //     },
  //     (error) => {
  //       console.log('Error removing friend');
  //     }
  //   );
  // }

  segmentChanged(ev: Event, value: String) {
    console.log('>>>>>>>>>>>>ev ', ev);
    if (this.currentSegmentName == 'friends') {
      this.currentSegmentName = 'requests';
    } else {
      this.currentSegmentName = 'friends';
    }
  }

  conformRequest(friend: User) {

    const user: User = {};
    user.userId = this.user.id;
    console.log('got friend id', friend, '  user', user);

    this.commandResourceService.acceptRequestUsingPOST({userId: this.user.id, friendId: friend.userId}).subscribe(result => {
      console.log('success accepting friend  request ', result);

    },
    err => {
      console.log('error accepting friend request', err);
    }
    );
}

cancelRequest(friend: User) {

  console.log('cancel friend request', friend, '  user', this.user);

  // this.commandResourceService.ca({userId:this.user.id, friendId:friend.userId}).subscribe(result => {
  //   console.log('success accepting friend  request ', result);

  // },
  // err => {
  //   console.log('error accepting friend request', err);
  // }
  // );
}

unfriendRequest(friend: User) {
  const user: User = {};
  user.userId = this.user.id;
  console.log('got friend id', friend, '  user', user);

  this.commandResourceService.unfriendUsingDELETE({userId: this.user.id, friendId: friend.userId}).subscribe(result => {
    console.log(' unfriending sucessfull ', result);

  },
  err => {
    console.log('err unfriending ', err);
  }
  );
}
searchUsers(event:Event){


  
}

}
