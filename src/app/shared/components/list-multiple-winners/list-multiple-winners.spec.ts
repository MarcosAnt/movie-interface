import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmultipleWinners } from './list-multiple-winners';
import { ListMultipleWinnersResponse } from '../../models/response/list-multiple-winners-response';
import { of } from 'rxjs';

describe('ListYearsWinners', () => {
  let component: ListmultipleWinners;
  let fixture: ComponentFixture<ListmultipleWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListmultipleWinners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmultipleWinners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.getMultipleWinners on ngOnInit', () => {
    const serviceSpy = vi.spyOn(component['service'], 'getMultipleWinners');
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
  });

  it('should update listWinners with data from service', async () => {
    const mockData: ListMultipleWinnersResponse = {
      years: [
        { year: 1990, winnerCount: 2 },
        { year: 2000, winnerCount: 3 }
      ]
    };

    vi.spyOn(component['service'], 'getMultipleWinners').mockReturnValue(
      of(mockData)
    );

    component.ngOnInit();

    expect(component.listWinners()).toEqual(mockData);
  });
});
