import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
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
