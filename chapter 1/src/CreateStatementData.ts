import { StatementData } from "./StatementData";

export function createStatementData(invoice, plays) {
    const statementData = new StatementData();
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(performance => enrichPerformance(plays, performance));
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);

    return statementData;
}

export const enrichPerformance = (plays, aPerformance): any => {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(plays, result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
}

export const playFor = (plays: any, aPerformance: any): any => {
    return plays[aPerformance.playID];
}

export const amountFor = (aPerformance: any): number => {
    let result = 0;

    switch (aPerformance.play.type) {
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`unknown type: ${aPerformance.play.type}`);
    }

    return result;
}

export const volumeCreditsFor = (aPerformance: any) => {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type) {
        result += Math.floor(aPerformance.audience / 5);
    }
    return result;
}

export const totalAmount = (data) => {
    return data.performances.reduce((total, p) => total + p.amount, 0);
}

export const totalVolumeCredits = (data) => {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
}
