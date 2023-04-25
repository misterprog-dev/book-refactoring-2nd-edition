import { describe, expect, it, test } from "@jest/globals";
import {
  createStatementData
} from "../src/CreateStatementData";
import { StatementData } from "../src/StatementData";

describe("Test enrich performance", () => {
  test("should test enrich performance", () => {
    // Given
    const plays = {
      hamlet: {
        name: "Hamlet",
        type: "tragedy",
      },
    };
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 15,
    };

    // When
    //const result = enrichPerformance(plays, aPerformance);

    // Then
    //expect({}).toBe({});
  });
});

describe("Test create statement data", () => {
  test("should test create statement data", () => {
    // Given
    const invoice = {
      customer: "BigCo",
      performances: [
        {
          playID: "hamlet",
          audience: 15,
        },
      ],
    };
    const play = {
      name: "Hamlet",
      type: "comedy",
    };

    // When
    const result = createStatementData(invoice, play);

    // Then
    const expected = new StatementData();
    expected.customer = "BigCo";
    expected.performances = [
      {
        amount: 34500,
        audience: 15,
        play: {
          name: "Hamlet",
          type: "comedy",
        },
        playID: "hamlet",
        volumeCredits: 3,
      },
    ];
    expected.totalAmount = 34500;
    expected.totalVolumeCredits = 3;
    expect(result).toStrictEqual(expected);
  });
});
