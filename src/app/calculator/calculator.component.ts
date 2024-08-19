import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
})
export class CalculatorComponent {
  displayValue: string = '';
  currentOperation: string = '';
  operand1: number | null = null;
  operand2: number | null = null;
  waitingForSecondOperand: boolean = false;

  constructor(private themeService: ThemeService) {}

  appendNumber(number: string): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = number;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? number : this.displayValue + number;
    }
  }

  onDelete(): void {
    this.displayValue = this.displayValue.slice(0, -1); // Remove the last character
  }

  appendDecimal(): void {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  setOperation(operation: string): void {
    if (this.operand1 === null) {
      this.operand1 = parseFloat(this.displayValue);
    } else if (this.currentOperation) {
      const result = this.calculate(this.operand1, parseFloat(this.displayValue), this.currentOperation);
      this.displayValue = String(result);
      this.operand1 = result;
    }
    this.currentOperation = operation;
    this.waitingForSecondOperand = true;
  }

  calculateResult(): void {
    if (this.currentOperation && this.operand1 !== null) {
      const result = this.calculate(this.operand1, parseFloat(this.displayValue), this.currentOperation);
      this.displayValue = String(result);
      this.currentOperation = '';
      this.operand1 = null;
      this.waitingForSecondOperand = false;
    }
  }

  calculate(operand1: number, operand2: number, operation: string): number {
    switch (operation) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return operand2;
    }
  }

  clear(): void {
    this.displayValue = '';
    this.currentOperation = '';
    this.operand1 = null;
    this.operand2 = null;
    this.waitingForSecondOperand = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get isDarkThemeActive(): boolean {
    return this.themeService.isDarkThemeActive;
  }
}
