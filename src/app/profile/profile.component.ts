import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistsService } from '../artists.service';
import { CognitoService } from '../cognito.service';

import { UserService } from '../user.service';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  artists : Artist[]= [];
  newArtists: Artist[] = [];
  userId: string = "";
  
  constructor(private artistService: ArtistsService, private userService: UserService, private cognitoService: CognitoService) {
    this.artistService.getAllArtists().subscribe(artists=>{
      this.artists=artists;
      this.newArtists = artists;
      
    });

    this.cognitoService.getUserAttributes().then(user => {
      this.userId = user.attributes['sub'];
      console.log(this.userId);
    });
  }

  ngOnInit(): void {
  }

}
