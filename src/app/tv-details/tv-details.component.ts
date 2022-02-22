import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  id: string = '';
  dataTv:any={};
  isLoad=false;
  imgUrl ='https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute,private _MoviesService:MoviesService) {
    this.id=_ActivatedRoute.snapshot.params.id;
    _MoviesService.geTvDetiles(this.id).subscribe(response => {
      this.dataTv=response;
      this.isLoad=true;

    })
  }

  ngOnInit(): void {
  }

}
