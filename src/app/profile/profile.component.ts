import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  artists : Artist[]= [];
  newArtists: Artist[] = [];
  
  constructor(private artistService: ArtistsService) {
    this.artistService.getAllArtists().subscribe(artists=>{
      this.artists=artists;
      this.newArtists = artists;
      
    });
  }

  ngOnInit(): void {
  }

}
