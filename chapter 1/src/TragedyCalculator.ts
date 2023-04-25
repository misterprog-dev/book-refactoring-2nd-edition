import { PerformanceCalculator } from "./PerformanceCalculator";

export class TragedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 40000;
    if (this.aPerformance.audience > 30) {
      result += 1000 * (this.aPerformance.audience - 30);
    }
    return result;
  }
}
