import { MoviesService } from './../movies.service';
import { Component, OnInit,OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit  {
  isLoad=false;
  trendingMovies: any[] = [];
  trendingSearch: any [] = [];
  isSearch = false;
  imgUrl ='https://image.tmdb.org/t/p/w500';

 number: number = 1;


  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getAllMedia('movie',this.number).subscribe(data => {
      this.trendingMovies = data.results;
      this.isLoad=true;
    })

  }


  getMovie(num:number){
    this.number = num;
    this._MoviesService.getAllMedia('movie',this.number).subscribe(data => {
      this.trendingMovies = data.results;
      this.isLoad = true;
    })
  }
  onSearch(search:any){

    console.log(search)

    if(search != ''){
    this._MoviesService.getSearch(search).subscribe(data => {
      this.trendingSearch = data.results;
      this.isSearch = true;

    })}
    else{
      this.isSearch = false;
    }
  }
  ngOnInit(): void {


  }

}
