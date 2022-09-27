import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-browsing-content',
  templateUrl: './browsing-content.component.html',
  styleUrls: ['./browsing-content.component.css']
})
export class BrowsingContentComponent implements OnInit {

  constructor(private artistService:ArtistsService) { }

  ngOnInit(): void {
  }

  addArtist() {
    this.artistService.addArtist().subscribe(res => console.log(res));
  }
}
