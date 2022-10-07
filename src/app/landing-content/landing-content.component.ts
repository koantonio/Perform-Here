import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {


  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  goToMission(){
    this.scroller.scrollToAnchor("mission");
  }
}
