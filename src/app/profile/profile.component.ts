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
  isArtist: boolean = false;
  
  constructor(private artistService: ArtistsService, private userService: UserService, private cognitoService: CognitoService) {
    this.artistService.getAllArtists().subscribe(artists=>{
      this.artists=artists;
      this.newArtists = artists;
      
    });
    
  }

  ngOnInit(): void {
    
    this.userId = this.cognitoService.getEmail();
    console.log(this.userId);
    let a: Artist = new Artist("", "", "");
    this.artistService.getArtistById(this.userId).subscribe(artist => {
      console.log(artist);
      if(artist == null) {

      }
      else {
        this.isArtist = true;
      }
    });

  }

}
