import { ComedyCalculator } from "./ComedyCalculator";
import { StatementData } from "./StatementData";
import { TragedyCalculator } from "./TragedyCalculator";

export function createStatementData(invoice, plays) {
  const statementData = new StatementData();
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map((performance) =>
    enrichPerformance(plays, performance)
  );
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return statementData;
}

export const enrichPerformance = (plays, aPerformance): any => {
  const calculator = createPerformanceCalculator(aPerformance, plays);
  const result = Object.assign({}, aPerformance);
  result.play = calculator.aPlay;
  result.amount = calculator.amount;
  result.volumeCredits = calculator.volumeCredits;
  return result;
};

export const createPerformanceCalculator = (aPerformance, play): any => {
  switch (play.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, play);
    case "comedy":
      return new ComedyCalculator(aPerformance, play);
    default:
      throw new Error(`unknown type: ${play.type}`);
  }
};

export const totalAmount = (data) => {
  return data.performances.reduce((total, p) => total + p.amount, 0);
};

export const totalVolumeCredits = (data) => {
  return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
};
