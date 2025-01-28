import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:Movie[] =[];
  // movieForm: any;
  filteredMovies:any[]=[];
  searchText:string='';
  sortBy:string='title';
  isAscending:boolean=true;



  constructor(private movieService:MovieService ,private router: Router){
  }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.filteredMovies=this.movies;
      });
}
filterMovies(): void {
  if (this.searchText) {
  this.filteredMovies = this.movies.filter(
  (movie) =>
  movie.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
  movie.director.toLowerCase().includes(this.searchText.toLowerCase())
  );
  } else {
  this.filteredMovies = [this.movies]; // Show all movies if no search text
  }
  this.sortMovies(); // Reapply sorting after filtering
  }
  sortMovies(): void {
    this.filteredMovies.sort((a, b) => {
    if (a[this.sortBy] < b[this.sortBy]) {
    return this.isAscending ? -1 : 1;
    } else if (a[this.sortBy] > b[this.sortBy]) {
    return this.isAscending ? 1 : -1;
    }
    return 0;
    });
    }
    toggleSortOrder(): void {
      this.isAscending = !this.isAscending;
      this.sortMovies();
      }
     
deleteMovie(id: any): void {
  this.movieService.deleteMovie(id).subscribe(() => {
  this.movies = this.movies.filter(movie => movie.id !== id);
  });
  }
 
editMovie(id: any): void{
  this.router.navigate([`edit/${id}`]);
  
}
  
}


