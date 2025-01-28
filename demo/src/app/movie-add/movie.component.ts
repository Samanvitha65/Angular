// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MovieService } from '../movie.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-movie',
//   templateUrl: './movie.component.html',
//   styleUrls: ['./movie.component.css']
// })
// export class MovieAddComponent {
//   movieForm: FormGroup;
//   constructor(
//   private fb: FormBuilder,
//   private movieService: MovieService,
//   private router: Router
//   ) {
//     this.movieForm = this.fb.group({
//       title: ['', Validators.required],
//       director: ['', Validators.required],
//       year: [null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
//     });
//   }

//   addMovie(): void {
//     if (this.movieForm.valid) {
//       this.movieService.createMovie(this.movieForm.value).subscribe({
//           this.router.navigate(['/']);
//         })
//       ;
//     }
//   }
// }



import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
 selector: 'app-movie-add',
 templateUrl: './movie.component.html',
 styleUrls: ['./movie.component.css']
})
export class MovieComponent {
 movieForm: FormGroup;
 constructor(
 private fb: FormBuilder,
 private movieService: MovieService,
 private router: Router
 ) {
 this.movieForm = this.fb.group({
 title: ['', Validators.required],
 director: ['', Validators.required],
 year: [null, [Validators.required, Validators.min(1900), Validators.max(new 
Date().getFullYear())]]
 });
 }
 addMovie(): void {
 if (this.movieForm.valid) {
 this.movieService.createMovie(this.movieForm.value).subscribe(() => {
 this.router.navigate(['/']);
 });
 }
 }
}