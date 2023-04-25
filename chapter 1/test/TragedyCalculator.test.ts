import { describe, expect, test } from "@jest/globals";
import { TragedyCalculator } from "../src/TragedyCalculator";

describe("Test amount for Tragedy", () => {
  test("should test amount for play type tragedy with audience more than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 55,
    };

    // When
    const result = new TragedyCalculator(aPerformance, {}).amount;

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
    const result = new TragedyCalculator(aPerformance, {}).amount;

    // Then
    expect(result).toBe(40000);
  });
});

describe("Test volume credit for tragedy", () => {
  test("should test volume credits for other type and audience more than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 35,
    };

    // When
    const result = new TragedyCalculator(aPerformance, {}).volumeCredits;

    // Then
    expect(result).toBe(5);
  });

  test("should test volume credits for other type and audience less than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "tragedy",
      },
      audience: 15,
    };

    // When
    const result = new TragedyCalculator(aPerformance, {}).volumeCredits;

    // Then
    expect(result).toBe(0);
  });
});

