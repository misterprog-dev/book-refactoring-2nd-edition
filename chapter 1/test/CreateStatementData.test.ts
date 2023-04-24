import { describe, expect, it, test } from "@jest/globals";
import {
  amountFor,
  createStatementData,
  enrichPerformance,
  playFor,
  volumeCreditsFor,
} from "../src/CreateStatementData";
import { StatementData } from "../src/StatementData";

describe("Test play for", () => {
  test("should test play for", () => {
    // Given
    const plays = {
      hamlet: {
        name: "Hamlet",
        type: "tragedy",
      },
      "as-like": {
        name: "As You Like It",
        type: "comedy",
      },
    };
    const aPerformance = { playID: "hamlet" };

    // When
    const result = playFor(plays, aPerformance);

    // Then
    expect(result).toEqual({ name: "Hamlet", type: "tragedy" });
  });
});

describe("Test amount for", () => {
  test("should test amount for play type tragedy with audience more than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 55,
    };

    // When
    const result = amountFor(aPerformance);

    // Then
    expect(result).toBe(65000);
  });

  test("should test amount for play type tragedy with audience less than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 25,
    };

    // When
    const result = amountFor(aPerformance);

    // Then
    expect(result).toBe(40000);
  });

  test("should test amount for play type comedy with audience more than 20", () => {
    // Given
    const aPerformance = {
      play: {
        type: "comedy",
      },
      audience: 25,
    };

    // When
    const result = amountFor(aPerformance);

    // Then
    expect(result).toBe(50000);
  });

  test("should test amount for play type comedy with audience less than 20", () => {
    // Given
    const aPerformance = {
      play: {
        type: "comedy",
      },
      audience: 15,
    };

    // When
    const result = amountFor(aPerformance);

    // Then
    expect(result).toBe(34500);
  });

  test("should test amount for unknown play type", () => {
    // Given
    const aPerformance = {
      play: {
        type: "ddserr",
      },
      audience: 15,
    };

    // Then
    expect(() => amountFor(aPerformance)).toThrow(
      new Error("unknown type: ddserr")
    );
  });
});

describe("Test volume credit for", () => {
  it("should test volume credits for type comedy and audience less than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "comedy",
      },
      audience: 15,
    };

    // When
    const result = volumeCreditsFor(aPerformance);

    // Then
    expect(result).toBe(3);
  });

  it("should test volume credits for type comedy and audience more than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "comedy",
      },
      audience: 35,
    };

    // When
    const result = volumeCreditsFor(aPerformance);

    // Then
    expect(result).toBe(12);
  });

  it("should test volume credits for other type and audience more than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 35,
    };

    // When
    const result = volumeCreditsFor(aPerformance);

    // Then
    expect(result).toBe(5);
  });

  it("should test volume credits for other type and audience less than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 15,
    };

    // When
    const result = volumeCreditsFor(aPerformance);

    // Then
    expect(result).toBe(0);
  });
});

describe("Test enrich performance", () => {
  it("should test enrich performance", () => {
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
  it("should test create statement data", () => {
    // Given
    const invoices = {
      customer: "BigCo",
      performances: [
        {
          playID: "hamlet",
          audience: 15,
        },
      ],
    };
    const plays = {
      hamlet: {
        name: "Hamlet",
        type: "comedy",
      },
    };

    // When
    const result = createStatementData(invoices, plays);

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
