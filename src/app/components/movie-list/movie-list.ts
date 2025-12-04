import { Component, OnInit, signal } from '@angular/core';
import { ListMovieService } from '../../services/list-movie.service';
import { Movie, MovieListResponse } from '../../shared/models/response/movie-list-response';
import { Pagination } from '../../shared/commons/pagination/pagination';
import { NgxMaskDirective } from 'ngx-mask';
import { MovieListRequest } from '../../shared/models/request/movie-list-request';
import { filter } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  imports: [Pagination, NgxMaskDirective],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieList implements OnInit {
  movieListInfo = signal<MovieListResponse>({} as MovieListResponse);
  pages = signal<number[]>([]);
  previusYearSearch: number | null = null;
  filterParams: MovieListRequest = {
    page: 0,
    size: 15,
  };

  constructor(private service: ListMovieService) { }

  ngOnInit() {
    this.loadMovies(this.filterParams);
  }

  private loadMovies(params: MovieListRequest) {
    console.log('Loading movies with params:', params);
    this.service.getMovieList(params).subscribe(response => {
      this.movieListInfo.set(response);

      if (response.pageable && response.pageable.paged) {
        const pagesArray: number[] = [];
        for(let i = 0; i < response.totalPages; i++) {
          pagesArray.push(i);
        }
        this.pages.set(pagesArray);
      }
    });
  }

  onPageClick($event: any) {
    const page: number = $event;
    this.filterParams.page = page;
    this.loadMovies(this.filterParams);
  }

  onWinnerFilterChange($event: any) {
    const selectedValue = $event.target.value;
    console.log('Selected winner filter value:', selectedValue);
    if (selectedValue !== '') {
      this.filterParams.winner = selectedValue === 'true';
      this.loadMovies(this.filterParams);
    }
    else if (selectedValue === '' && !this.filterParams.winner) {
      delete this.filterParams.winner;
      this.loadMovies(this.filterParams);
    }
  }

  onYearFilterChange($event: any) {
    const length = $event.target.value.length;
    const value = Number($event.target.value);
    if ((length != 0 && length < 4) || value === this.previusYearSearch) {
      return;
    }
    this.filterParams.year = value;
    this.loadMovies(this.filterParams);
  }
}
