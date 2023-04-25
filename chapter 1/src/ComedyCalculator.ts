import { PerformanceCalculator } from "./PerformanceCalculator";

export class ComedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 30000;
    if (this.aPerformance.audience > 20) {
      result += 10000 + 500 * (this.aPerformance.audience - 20);
    }
    result += 300 * this.aPerformance.audience;
    return result;
  }

  get volumeCredits(): number {
    return Math.max(this.aPerformance.audience - 30, 0) + Math.floor(this.aPerformance.audience / 5);
  }
}
