import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieList } from './movie-list';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';
import { of } from 'rxjs';

describe('MovieList', () => {
  let component: MovieList;
  let fixture: ComponentFixture<MovieList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieList],
      providers: [
        provideHttpClient(),
        provideNgxMask()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load movies and set pages array', async () => {
    const mockResponse: any = {
      content: [],
      pageable: { paged: true },
      totalPages: 3,
      totalElements: 45
    };

    vi.spyOn(component['service'], 'getMovieList').mockReturnValue(
      of(mockResponse)
    );

    await component['loadMovies']({ page: 0, size: 15 });

    expect(component.movieListInfo()).toEqual(mockResponse);
    expect(component.pages()).toEqual([0, 1, 2]);
  });

  it('should call loadMovies with updated page when onPageClick is triggered', () => {
    const loadMoviesSpy = vi.spyOn(component as any, 'loadMovies');
    const mockPage = 2;

    component.onPageClick(mockPage);

    expect(component.filterParams.page).toBe(mockPage);
    expect(loadMoviesSpy).toHaveBeenCalledWith({
      page: mockPage,
      size: 15
    });
  });

  it('should call loadMovies with winner filter when onWinnerFilterChange is triggered with "true"', () => {
    const loadMoviesSpy = vi.spyOn(component as any, 'loadMovies');
    const mockEvent = { target: { value: 'true' } };

    component.onWinnerFilterChange(mockEvent);

    expect(component.filterParams.winner).toBe(true);
    expect(loadMoviesSpy).toHaveBeenCalledWith({
      page: 0,
      size: 15,
      winner: true
    });
  });

  it('should call loadMovies with year filter when onYearFilterChange is triggered with valid 4-digit year', () => {
    const loadMoviesSpy = vi.spyOn(component as any, 'loadMovies');
    const mockEvent = { target: { value: '2020' } };

    component.onYearFilterChange(mockEvent);

    expect(component.filterParams.year).toBe(2020);
    expect(loadMoviesSpy).toHaveBeenCalledWith({
      page: 0,
      size: 15,
      year: 2020
    });
  });

});
