import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPerson: any[] = [];
  trendingSearch: any [] = [];
  isSearch = false;
  isLoad=false;
  imgUrl ='https://image.tmdb.org/t/p/w500';

 number: number = 1;


  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getAllMedia('person',this.number).subscribe(data => {
      this.trendingPerson = data.results;
      this.isLoad = true;

    })

  }


  getPerson(num:number){
    this.number = num;
    this._MoviesService.getAllMedia('person',this.number).subscribe(data => {
      this.trendingPerson = data.results;
      this.isLoad = true;

    })
  }
  onSearch(search:any){

    if(search != ''){
    this._MoviesService.getSearch(search).subscribe(data => {
      console.log(data.results);

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
