import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'watching';

  getValueSearch:string='';
  getSearch(search :string){
    this.getValueSearch = search;
    console.log(this.getValueSearch);

  }

}
