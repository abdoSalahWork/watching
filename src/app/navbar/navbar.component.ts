import { AppComponent } from './../app.component';
import { MoviesService } from './../movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit, Input, Output,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

  @Output() valueSearch : EventEmitter<any>=new EventEmitter();
  setSearch(search:any){
    this.valueSearch.emit(search)
    }


  isLogin: boolean = false;

  constructor(private _AuthService: AuthService, private _Router: Router, private _MoviesService: MoviesService) {
    _AuthService.currentUser.subscribe(response => {
      if (_AuthService.currentUser.getValue() != null) {
        this.isLogin = true;

      }
      else {
        this.isLogin = false;
      }

    })
  }

  isLogOut() {
    this._AuthService.logout();
  }


  ngOnInit(): void {

  }

}
