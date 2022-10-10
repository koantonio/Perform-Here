import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';
import { Votes } from '../votes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private router: Router, private artistService: ArtistsService) {}

  ngOnInit(): void {}

  onLogout(): void {
    let poolData = {
      UserPoolId: 'us-west-2_kefXUvzNA',
      ClientId: '7naup3g2ase11sfgcihln1dbct',
    };
    let userPool = new CognitoUserPool(poolData);
    let cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser);
    cognitoUser?.signOut();
    this.router.navigate(['signin']);
  }

  addArtist() {
    let artist: Artist = new Artist("1", "bobby", "I am an artist");
    this.artistService.addArtist(artist).subscribe(res => console.log(res));
  }

  getAllArtists() {
    this.artistService.getAllArtists().subscribe(artists => this.artists = artists);
  }

  getArtistById() {
    this.artistService.getArtistById("1664330176942").subscribe(artist => console.log(artist));
  }

  displayArtists() {
    console.log(this.artists);
  }
}
