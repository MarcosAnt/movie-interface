import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersIntervalWins } from './producers-interval-wins';

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
});
