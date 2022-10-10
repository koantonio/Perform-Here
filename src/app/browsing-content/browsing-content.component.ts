import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';
import { Votes } from '../votes';
import { UserService } from "../user.service";
import { CognitoService } from '../cognito.service';

// declare function selectionOptions(): void;
@Component({
  selector: 'app-browsing-content',
  templateUrl: './browsing-content.component.html',
  styleUrls: ['./browsing-content.component.css']
})
export class BrowsingContentComponent implements OnInit {
  artists : Artist[]= [];
  searchText : string = "";
  userId : string = "";
  newArtists: Artist[] = [];
  constructor(private artistService: ArtistsService, private cognitoService: CognitoService) {
    this.artistService.getAllArtists().subscribe(artists=> {
      this.artists=artists;
      this.newArtists = artists;
    });
    // selectionOptions();
  }

  ngOnInit(): void {
  
  }
  
  updateArtists() {
    this.newArtists = this.artists.filter(a => a.stageName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  
  onSearchTextEntered(searchValue : string){
    this.searchText = searchValue;
    console.log(this.searchText);
   }


}
