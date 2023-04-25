import { describe, expect, test } from '@jest/globals';
import { htmlStatement, statement } from '../src/Statement';


describe('print statement', () => {
  test('test to print statement with plain text', () => {
    // given
    const invoice = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 15
        }
      ]
    };
    const play = {
      name: "Hamlet",
      type: "comedy",
    };

    // when
    const result = statement(invoice, play);

    // then
    let statementPrinted = `Statement for BigCo\n`;
    statementPrinted += `  Hamlet: $345.00 (15 seats)\n`;
    statementPrinted += `Amount owed is $345.00\n`;
    statementPrinted += `You earned 3 credits\n`;
    expect(result).toBe(statementPrinted);
  });

  test('test to print statement with html rendering', () => {
    // given
    const invoice = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 15
        }
      ]
    };
    const play = {
      name: "Hamlet",
      type: "comedy",
    };

    // when
    const result = htmlStatement(invoice, play);

    // then
    let statementPrinted = `<h1>Statement for BigCo</h1>\n`;
    statementPrinted += "<table>\n";
    statementPrinted += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
    statementPrinted += "  <tr><td>Hamlet</td><td>15</td><td>$345.00</td></tr>\n";
    statementPrinted += "</table>\n";
    statementPrinted += "<p>Amount owed is <em>$345.00</em></p>\n";
    statementPrinted += "<p>You earned <em>3</em> credits</p>\n";
    expect(result).toBe(statementPrinted);
  });
});
