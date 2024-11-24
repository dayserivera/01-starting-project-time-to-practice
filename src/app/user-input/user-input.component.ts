import { Component, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {  
  initialInvest = signal('0');
  anualInvest = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService){}

  onSubmit() {    
    this.investmentService.calculateInvestmentResults({
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
