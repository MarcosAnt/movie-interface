import { Component, OnInit, signal } from '@angular/core';
import { WinnerByYearResponse } from '../../models/response/winner-by-year-response';
import { ListMovieService } from '../../../services/list-movie.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-list-winner-year',
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './list-winner-year.html',
  styleUrl: './list-winner-year.scss',
})
export class ListWinnerYear implements OnInit {
  winnersByYear =  signal<WinnerByYearResponse[]>([]);
  formBusca!: FormGroup;

  constructor(
    private service: ListMovieService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formBusca = this.formBuilder.group({
      yearControl: ['', [
        Validators.required,
        Validators.nullValidator,
        Validators.pattern('^[0-9]{4}$'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]],
    });
  }

  getWinners(): void {
    const year = this.formBusca.get('yearControl')?.value;
    console.log('Valid:', this.isYearValid(year));
    if(!this.isYearValid(year)) {
      this.formBusca.get('yearControl')?.setErrors({ required: true });
      return;
    }
    this.service.getMovieByYear(year).subscribe(data => {
      this.winnersByYear.set(data);
    });
  }

  isYearValid(year: number): boolean {
    return !(year < 1990 || year > new Date().getFullYear());
  }

}
