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

 // artistSB: any;
  //let response=this.http.get("http://locahost:8080/perfartist");

  paymentHandler: any = null;
  constructor(private router: Router, private artistService: ArtistsService, private cognitoService: CognitoService, private locationService : LocationsService) {
    this.artistService.getAllArtists().subscribe(artists=> {
      this.artists=artists;
      this.newArtists = artists;
      console.log(artists);
    });
  }

  ngOnInit(): void {
    // this.invokeStripe();
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


  //  initializePayment(amount: number) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_51LrEjvEnOsQjjv2UZmdKyfpdTuWxVJUtdWH1qdJaIvMvUdfol2tVMxYweZDQRL9HKC3ng0ahvSKnHNFHc9DVxNKE00hWeuJEdk',
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log({stripeToken})
  //       alert('Stripe token generated!');
  //     }
  //   });
    
    // const paymentstripe = (stripeToken: any) => {
    //   this.checkout.makePayment(stripeToken).subscribe((data: any) => {
    //     console.log(data);
    //     if (data.data === "success") {
    //       this.success = true
    //     }
    //     else {
    //       this.failure = true
    //     }
    //   });
    // };
  //   paymentHandler.open({
  //     amount: amount * 100
  //   });
  // }
  
  // invokeStripe() {
  //   if(!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement("script");
  //     script.id = "stripe-script";
  //     script.type = "text/javascript";
  //     script.src = "https://checkout.stripe.com/checkout.js";
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51LrEjvEnOsQjjv2UZmdKyfpdTuWxVJUtdWH1qdJaIvMvUdfol2tVMxYweZDQRL9HKC3ng0ahvSKnHNFHc9DVxNKE00hWeuJEdk',
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken)
  //           alert('Payment has been successfull!');
  //         }
  //       });
  //     }
  //     window.document.body.appendChild(script);
  //   }
  // }
  title = 'angular-stripe';
  priceId = 'price_1LsVlNEnOsQjjv2USBd9xYtq';
  product = {
    title: 'Artist',
    price: 18.00
  };
  quantity = 1;
  stripePromise = loadStripe(environment.stripe_key);

  async checkout() {
    // Call your backend to create the Checkout session.

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    if(stripe != null) {
      const {error}  = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [{ price: this.priceId, quantity: this.quantity }],
        successUrl: `http://localhost:4200/success`,
        cancelUrl: `http://localhost:4200/failure`,
      });
    }
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.

  }

}
