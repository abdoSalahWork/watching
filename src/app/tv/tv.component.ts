import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  trendingTv: any[] = [];
  trendingSearch: any[] = [];
  isSearch = false;
  isLoad = true;
  numLoads:any = 0;
  imgUrl = 'https://image.tmdb.org/t/p/w500';

  number: number = 1;


  constructor(private _MoviesService: MoviesService) {
    this._MoviesService.getAllMedia('tv', this.number).subscribe(data => {
      this.trendingTv = data.results;
      // this.isLoad=true;
      this.numLoads = 6;


    })

  }


  getTv(num: number) {
    this.number = num;
    this._MoviesService.getAllMedia('tv', this.number).subscribe(data => {
      this.trendingTv = data.results;
      this.isLoad = true;
    })
  }
  onSearch(search: any) {

    console.log(search)

    if (search != '') {
      this._MoviesService.getSearch(search).subscribe(data => {
        this.trendingSearch = data.results;
        this.isSearch = true;

      })
    }
    else {
      this.isSearch = false;
    }
  }
  ngOnInit(): void {
  }

}
