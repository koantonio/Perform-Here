import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-browsing-content',
  templateUrl: './browsing-content.component.html',
  styleUrls: ['./browsing-content.component.css']
})
export class BrowsingContentComponent implements OnInit {

  constructor(private artistService:ArtistsService) { }

  ngOnInit(): void {
  }
}
