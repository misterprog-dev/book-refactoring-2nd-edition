import { describe, expect, test } from "@jest/globals";
import { ComedyCalculator } from "../src/ComedyCalculator";

describe("Test amount for comedy", () => {
  test("should test amount for play type comedy with audience more than 20", () => {
    // Given
    const aPerformance = {
      play: {
        type: "comedy",
      },
      audience: 25,
    };

    // When
    const result = new ComedyCalculator(aPerformance, {}).amount;

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
    const result = new ComedyCalculator(aPerformance, {}).amount;

    // Then
    expect(result).toBe(34500);
  });
});

describe("Test volume credit for comedy", () => {
  test("should test volume credits for type comedy and audience less than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "comedy",
      },
      audience: 15,
    };

    // When
    const result = new ComedyCalculator(aPerformance, {}).volumeCredits;

    // Then
    expect(result).toBe(3);
  });

  test("should test volume credits for type comedy and audience more than 30", () => {
    // Given
    const aPerformance = {
      play: {
        type: "comedy",
      },
      audience: 35,
    };

    // When
    const result = new ComedyCalculator(aPerformance, {}).volumeCredits;

    // Then
    expect(result).toBe(12);
  });
});
