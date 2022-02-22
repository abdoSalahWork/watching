import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent implements OnInit {

  id: string = '';
  isLoad = false;
  dataPerson: any = {};
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {

    this.id = _ActivatedRoute.snapshot.params.id;

    _MoviesService.getPersonDetiles(this.id).subscribe(response => {

      this.dataPerson = response;
      this.isLoad = true;


    })
  }

  ngOnInit(): void {
  }

}
