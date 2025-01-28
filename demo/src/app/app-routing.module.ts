import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie-add/movie.component';

const routes: Routes = [
  // { path: '',  redirectTo:'list', pathMatch:"full"},
  {path : '', component : MovieListComponent},
 { path: 'add', component: MovieComponent },
 { path: 'edit/:id', component: MovieEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
