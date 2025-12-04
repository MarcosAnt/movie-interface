import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersIntervalWins } from './producers-interval-wins';
import { of } from 'rxjs';

describe('ProducersIntervalWins', () => {
  let component: ProducersIntervalWins;
  let fixture: ComponentFixture<ProducersIntervalWins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersIntervalWins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersIntervalWins);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStudioWinners on ngOnInit', () => {
    const mockData = {
      min: [{producer: 'Producer 1', interval: 1, previousWin: 2000, followingWin: 2001}],
      max: [{producer: 'Producer 2', interval: 10, previousWin: 2000, followingWin: 2010}]
    };
    const serviceSpy = vi.spyOn(component['producersWinIntervalService'], 'getProducersIntervals')
      .mockReturnValue(of(mockData));

    component.ngOnInit();

    expect(serviceSpy).toHaveBeenCalled();
  });

  it('should update producers signal when service returns data', () => {
    const mockData = {
      min: [{producer: 'Producer 1', interval: 1, previousWin: 2000, followingWin: 2001}],
      max: [{producer: 'Producer 2', interval: 10, previousWin: 2000, followingWin: 2010}]
    };
    vi.spyOn(component['producersWinIntervalService'], 'getProducersIntervals')
      .mockReturnValue(of(mockData));

    component.ngOnInit();

    expect(component.producers()).toEqual(mockData);
  });
});
