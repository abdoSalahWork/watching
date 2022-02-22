import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  valueSearch: any;
  constructor(private _HttpClient: HttpClient,private _Router:Router) { }
  getTrending(mediaType: string): Observable<any> {

    // return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=75132c52d9ed2ef02c5e01a877c7fb6b&language=en-US&query=${mediaType}`)

    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=75132c52d9ed2ef02c5e01a877c7fb6b`)
  }

  getAllMedia(mediaType: string, page: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=75132c52d9ed2ef02c5e01a877c7fb6b&page=${page}`)
  }

  getMovieDetiles(movie_id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=75132c52d9ed2ef02c5e01a877c7fb6b`)
  }


  getPersonDetiles(person_id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=75132c52d9ed2ef02c5e01a877c7fb6b`)
  }
  geTvDetiles(person_id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${person_id}?api_key=75132c52d9ed2ef02c5e01a877c7fb6b`)
  }

  getSearch(value: any): Observable<any> {


    if(this._Router.url=='/movies'){
      return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=75132c52d9ed2ef02c5e01a877c7fb6b&query=${value}`)
    }

    else if(this._Router.url=='/people'){
      return this._HttpClient.get(`https://api.themoviedb.org/3/search/person?api_key=75132c52d9ed2ef02c5e01a877c7fb6b&query=${value}`)
    }

    else if(this._Router.url=='/tv'){
      return this._HttpClient.get(`https://api.themoviedb.org/3/search/tv?api_key=75132c52d9ed2ef02c5e01a877c7fb6b&query=${value}`)
    }

    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=75132c52d9ed2ef02c5e01a877c7fb6b&query=${value}`)
  }
}
