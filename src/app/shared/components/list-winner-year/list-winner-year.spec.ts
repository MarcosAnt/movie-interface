import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWinnerYear } from './list-winner-year';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';

describe('ListWinnerYear', () => {
  let component: ListWinnerYear;
  let fixture: ComponentFixture<ListWinnerYear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWinnerYear],
      providers: [
        provideHttpClient(),
        provideNgxMask()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWinnerYear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
