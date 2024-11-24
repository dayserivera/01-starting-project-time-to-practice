import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();
  initialInvest = signal('0');
  anualInvest = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {    
    this.calculate.emit({
      initialInvestment: +this.initialInvest(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.anualInvest()
    });    

    this.initialInvest = signal('0');
    this.anualInvest = signal('0');
    this.expectedReturn = signal('5');
    this.duration = signal('10');

  }
}
