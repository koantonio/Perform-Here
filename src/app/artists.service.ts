import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Artist } from './artist';

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

  addArtist() {
    const body = {
      "artist": "whyareyouaddingmultipletimes"
    }

    return this.http.post("https://o6xu4u1o3b.execute-api.us-west-2.amazonaws.com/default/960476_post", body, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  getAllArtists() {
    return this.http.get<Artist[]>("https://o6xu4u1o3b.execute-api.us-west-2.amazonaws.com/default/960476_get")
    .pipe(
      catchError(this.handleError)
    );
  }

  // getArtistById(id:string) {
  //   this.http.get()
  // }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
