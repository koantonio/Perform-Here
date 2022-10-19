import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { Votes } from '../votes';
import { VotesService } from '../votes.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  message: string = "";

  constructor(private voteService: VotesService, private locationService:LocationsService) { }

  ngOnInit(): void {
    this.message = "You voted for " + localStorage.getItem("pickedArtist") + " at the location " + localStorage.getItem("pickedCity") + " " + localStorage.getItem("pickedState");
    let pickedState: string | null = localStorage.getItem("pickedState");
    if(pickedState != null) {
      let v:Votes = new Votes(localStorage.getItem("userId"), localStorage.getItem("pickedArtist"), this.locationService.states()[parseInt(pickedState)-1].name, localStorage.getItem("pickedCity"), "Not Applicable");
      this.voteService.addVote(v).subscribe(res => console.log(res));
    }
    else {
      console.log("Invalid State");
    }
  }
}
