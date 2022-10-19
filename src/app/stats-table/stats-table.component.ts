import { Component, Input, OnInit, ɵisListLikeIterable } from '@angular/core';
import { VotesService } from '../votes.service';
import { Artist } from '../artist';
import { Votes } from '../votes';
import { ThisReceiver } from '@angular/compiler';

class CityVotes{
  constructor(
      public votes: number,
      public city: string | null,
      public state: string | null
  ){}
}

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {

  @Input() votes: Votes[] = [];

  votesPerCity: CityVotes[] = [];
  
  constructor(private votesService: VotesService) { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
    this.calculateVotes();
  }

  calculateVotes() {
    let flag:boolean = false;
    this.votes.forEach(vote => {
      flag = false;
      console.log(vote);
      if(this.votesPerCity.length != 0) {  //Votes per city array not empty
        this.votesPerCity.forEach(cityVote => {
          if(cityVote.city === vote.city) {    //Found City in votes per city array
            cityVote.votes = cityVote.votes + 1;
            flag = true;
          }
        });
        if(!flag) {   //City Not Found in votes per city array, so it is added
          this.votesPerCity.push(new CityVotes(1, vote.city, vote.state));
        }
      }
      else {  //Vote per city array was empty so add city
        this.votesPerCity.push(new CityVotes(1, vote.city, vote.state));
      }
    });

    //Sort array by votes
    this.votesPerCity.sort((a, b) => (a.votes < b.votes) ? 1 : -1 );
  }
}