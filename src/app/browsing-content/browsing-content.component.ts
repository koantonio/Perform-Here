import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';
import { Votes } from '../votes';
import { UserService } from "../user.service";
import { CognitoService } from '../cognito.service';
import { locations } from 'src/assets/locations';
import { state } from '@angular/animations';
import { LocationsService } from '../locations.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';

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
  states: any =[];
  cities : any = [];

  paymentHandler: any = null;
  constructor(private router: Router, private artistService: ArtistsService, private cognitoService: CognitoService, private locationService : LocationsService) {
    this.artistService.getAllArtists().subscribe(artists=> {
      this.artists=artists;
      this.newArtists = artists;
    });
  }

  ngOnInit(): void {
    this.states = this.locationService.states();
  }
  
  onSelect(states : any){
    this.cities = this.locationService.cities().filter(e => e.id == states.target.value);
  }
  
  updateArtists() {
    this.newArtists = this.artists.filter(a => a.stageName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  
  onSearchTextEntered(searchValue : string){
    this.searchText = searchValue;
    console.log(this.searchText);
   }
   purchase(){
    this.router.navigate(['purchase']);
   }
   
  title = 'Perform-Here';
  priceId = 'price_1LsVlNEnOsQjjv2USBd9xYtq';
  product = {
    title: 'Artist',
    price: 18.00
  };
  quantity = 1;
  stripePromise = loadStripe(environment.stripe_key);

  async checkout() {
    const stripe = await this.stripePromise;
    if(stripe != null) {
      const {error}  = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [{ price: this.priceId, quantity: this.quantity }],
        successUrl: `http://localhost:4200/success`,
        cancelUrl: `http://localhost:4200/browse`,
      });
    }
  }

}
