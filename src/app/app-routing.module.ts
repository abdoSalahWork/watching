import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"moviedetails/:id",canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:"persondetails/:id",canActivate:[AuthGuard],component:PeopledetailsComponent},
  {path:"tvdetails/:id",canActivate:[AuthGuard],component:TvDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path: 'settings',loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  {path:"**",component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
