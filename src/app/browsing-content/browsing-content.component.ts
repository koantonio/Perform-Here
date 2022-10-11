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

 // artistSB: any;
  //let response=this.http.get("http://locahost:8080/perfartist");

  paymentHandler: any = null;
  constructor(private artistService: ArtistsService, private cognitoService: CognitoService) {
    this.artistService.getAllArtists().subscribe(artists=> {
      this.artists=artists;
      this.newArtists = artists;
      console.log(artists);
    });
    // selectionOptions();
  }

  ngOnInit(): void {
    this.invokeStripe();
  }
  
  updateArtists() {
    this.newArtists = this.artists.filter(a => a.stageName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  
  onSearchTextEntered(searchValue : string){
    this.searchText = searchValue;
    console.log(this.searchText);
   }


   initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LrEjvEnOsQjjv2UZmdKyfpdTuWxVJUtdWH1qdJaIvMvUdfol2tVMxYweZDQRL9HKC3ng0ahvSKnHNFHc9DVxNKE00hWeuJEdk',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LrEjvEnOsQjjv2UZmdKyfpdTuWxVJUtdWH1qdJaIvMvUdfol2tVMxYweZDQRL9HKC3ng0ahvSKnHNFHc9DVxNKE00hWeuJEdk',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }


}
