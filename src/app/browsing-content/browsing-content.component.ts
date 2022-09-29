import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-browsing-content',
  templateUrl: './browsing-content.component.html',
  styleUrls: ['./browsing-content.component.css']
})
export class BrowsingContentComponent implements OnInit {

  artists: Artist[] = [];
  newArtists: Artist[] = [];
  search: string = '';

  constructor(private artistService:ArtistsService) { }

  ngOnInit(): void {
    this.artistService.getAllArtists().subscribe(artists => {
      this.artists = artists
      this.newArtists = artists
    });
  }

  updateArtists() {
    this.newArtists = this.artists.filter(a => a.stageName.toLowerCase().includes(this.search.toLowerCase()));
  }

}
