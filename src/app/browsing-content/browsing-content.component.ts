import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';
import { Votes } from '../votes';

@Component({
  selector: 'app-browsing-content',
  templateUrl: './browsing-content.component.html',
  styleUrls: ['./browsing-content.component.css']
})
export class BrowsingContentComponent implements OnInit {
  artists : Artist[]= [];
  enterSearchValue : string = "";
  searchText : string = "";
   newArtists: Artist[] = [];
  //constructor(private artistService:ArtistsService) { }


  constructor(private artistService: ArtistsService) {
    this.artistService.getAllArtists().subscribe(artists=>
      this.artists=artists);
  }

  ngOnInit(): void {
  this.newArtists = artists;
  }
  updateArtists() {
    this.newArtists = this.artists.filter(a => a.stageName.toLowerCase().includes(this.search.toLowerCase()));
    }
  
  onSearchTextEntered(searchValue : string){
    this.searchText = searchValue;
    console.log(this.searchText);
   }


}
