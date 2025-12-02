import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieYear } from './list-movie-year';

describe('ListMovieYear', () => {
  let component: ListMovieYear;
  let fixture: ComponentFixture<ListMovieYear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMovieYear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovieYear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
