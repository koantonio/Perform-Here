import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Artist } from './artist';
import { ArtistForm } from './artistForm';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  addArtist(artist: Artist) {
    const body = {
      "userID": artist.userID,
      "stageName": artist.stageName,
      "artistBio": artist.artistBio,
      "votes": artist.votes
    }
    return this.http.post("https://o6xu4u1o3b.execute-api.us-west-2.amazonaws.com/default/960476_post", body, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  getAllArtists():Observable<Artist[]> {
    return this.http.get<Artist[]>("https://eyd4la9qa3.execute-api.us-west-2.amazonaws.com/default/960169_getTest")
    .pipe(
      catchError(this.handleError)
    );
  }

  getArtistById(id:string) {
    return this.getAllArtists().pipe(
      map(res => res.find(artist => artist.userID === id)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  addArtistForm(artistForm: ArtistForm) {
    const body = {
      "artistid": artistForm.artistID,
      "firstname": artistForm.firstname,
      "lastname": artistForm.lastname,
      "stagename": artistForm.stagename,
      "accountemail": artistForm.accountemail,
      "managementemail": artistForm.managementemail,
      "phoneno": artistForm.phoneno
    }
    return this.http.post("https://o6xu4u1o3b.execute-api.us-west-2.amazonaws.com/default/960148_formPost", body, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }
}
