import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: any;
  title: string;
  director: string;
  year: number;
 }
 

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private apiUrl='https://fuzzy-system-699vwwv575pp24prp-3000.app.github.dev/movies';

  constructor(private http:HttpClient) {}

  
    getMovies(): Observable<Movie[]>{
      return this.http.get<Movie[]>(this.apiUrl);
    } 
    getMoviesById(id: any): Observable<Movie>{
      return this.http.get<Movie>(`${this.apiUrl}/${id}`);
    }
    createMovie(movie: Movie): Observable<Movie>{
      return this.http.post<Movie>(this.apiUrl,movie);
    }
    updateMovie(movie:Movie,id:any): Observable<Movie>{
      return this.http.put<Movie>(`${this.apiUrl}/${id}`,movie);
    }
    deleteMovie(id:any): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
      }
  
}
