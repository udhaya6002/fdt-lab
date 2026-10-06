import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'calculatorapp';
  result: string = '';
  resultName = 'Result';

  add(firstNumber: string, secondNumber: string) {
    this.resultName = 'Add Result = ';
    this.result = (Number(firstNumber) + Number(secondNumber)).toString();
  }

  subtract(firstNumber: string, secondNumber: string) {
    this.resultName = 'Subtract Result = ';
    this.result = (Number(firstNumber) - Number(secondNumber)).toString();
  }

  multiply(firstNumber: string, secondNumber: string) {
    this.resultName = 'Multiply Result = ';
    this.result = (Number(firstNumber) * Number(secondNumber)).toString();
  }

  divide(firstNumber: string, secondNumber: string) {
    this.resultName = 'Divide Result = ';
    this.result = (Number(firstNumber) / Number(secondNumber)).toString();
  }
}
