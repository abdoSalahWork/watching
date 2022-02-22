import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {


  isLoad = false;
  id: string = '';
  dataMovie:any={};
  imgUrl ='https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute,private _MoviesService:MoviesService) {
    this.id=_ActivatedRoute.snapshot.params.id;
    _MoviesService.getMovieDetiles(this.id).subscribe(response => {
      this.dataMovie=response;
      this.isLoad=true;

    })
  }

  ngOnInit(): void {
  }

}
