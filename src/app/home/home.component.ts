import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './../app.component';
import { MoviesService } from './../movies.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //////////////// Values
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPerson: any[] = [];
  trendingSearch: any[] = [];
  @Input() perantData: string = '';
  isSearch = false;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  loadMovie = false;
  loadTv = false;
  loadPeople = false;
  isLoad = false;


  ///////////////// Constractor
  constructor(private _MoviesService: MoviesService, private _AppComponent: AppComponent) {

    _MoviesService.getTrending('movie').subscribe(data => {
      this.trendingMovies = data.results;
      this.loadMovie = true;
      console.log(this.loadMovie);

    })

    _MoviesService.getTrending('tv').subscribe(data => {
      this.trendingTv = data.results;
      this.loadTv = true;
      console.log(this.loadTv);


    })

    _MoviesService.getTrending('person').subscribe(data => {
      this.trendingPerson = data.results;
      this.loadPeople = true;
      console.log(this.loadPeople);

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
