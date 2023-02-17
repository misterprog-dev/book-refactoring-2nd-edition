import { describe, expect, test } from '@jest/globals';
import { statement } from '../statement';


describe('print statement', () => {
  test('test to print statement with empty value', () => {
    // given
    const invoices = {
      "customer": "BigCo",
      "performances": []
    };
    const plays = {};

    // when
    const result = statement(invoices, plays);

    // then
    let statementPrinted = `Statement for BigCo\n`;
    statementPrinted += `Amount owed is $0.00\n`;
    statementPrinted += `You earned 0 credits\n`;
    expect(result).toBe(statementPrinted);
  });

  test('test to print statement for play type tragedy for audience more than 30', () => {
    // given
    const invoices = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 55
        }
      ]
    };
    const plays = {
      "hamlet": {
        "name": "Hamlet",
        "type": "tragedy"
      }
    };

    // when
    const result = statement(invoices, plays);

    // then
    let statementPrinted = `Statement for BigCo\n`;
    statementPrinted += `  Hamlet: $650.00 (55 seats)\n`;
    statementPrinted += `Amount owed is $650.00\n`;
    statementPrinted += `You earned 25 credits\n`;
    expect(result).toBe(statementPrinted);
  });

  test('test to print statement for play type tragedy for audience less than 30', () => {
    // given
    const invoices = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 25
        }
      ]
    };
    const plays = {
      "hamlet": {
        "name": "Hamlet",
        "type": "tragedy"
      }
    };

    // when
    const result = statement(invoices, plays);

    // then
    let statementPrinted = `Statement for BigCo\n`;
    statementPrinted += `  Hamlet: $400.00 (25 seats)\n`;
    statementPrinted += `Amount owed is $400.00\n`;
    statementPrinted += `You earned 0 credits\n`;
    expect(result).toBe(statementPrinted);
  });

  test('test to print statement for play type comedy for audience more than 20', () => {
    // given
    const invoices = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 25
        }
      ]
    };
    const plays = {
      "hamlet": {
        "name": "Hamlet",
        "type": "comedy"
      }
    };

    // when
    const result = statement(invoices, plays);

    // then
    let statementPrinted = `Statement for BigCo\n`;
    statementPrinted += `  Hamlet: $500.00 (25 seats)\n`;
    statementPrinted += `Amount owed is $500.00\n`;
    statementPrinted += `You earned 5 credits\n`;
    expect(result).toBe(statementPrinted);
  });

  test('test to print statement for play type comedy for audience less than 20', () => {
    // given
    const invoices = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 15
        }
      ]
    };
    const plays = {
      "hamlet": {
        "name": "Hamlet",
        "type": "comedy"
      }
    };

    // when
    const result = statement(invoices, plays);

    // then
    let statementPrinted = `Statement for BigCo\n`;
    statementPrinted += `  Hamlet: $345.00 (15 seats)\n`;
    statementPrinted += `Amount owed is $345.00\n`;
    statementPrinted += `You earned 3 credits\n`;
    expect(result).toBe(statementPrinted);
  });

  test('test to throw unknown play type', () => {
    // given
    const invoices = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 15
        }
      ]
    };
    const plays = {
      "hamlet": {
        "name": "Hamlet",
        "type": "unknown"
      }
    };

    // when
    const result = () => {
      statement(invoices, plays);
    }

    // then
    expect(result).toThrow('unknown type: unknown');
  });
});
