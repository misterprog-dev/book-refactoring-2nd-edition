import { describe, expect, test } from "@jest/globals";
import { PerformanceCalculator } from "../src/PerformanceCalculator";

describe("Test amount", () => {
  test("should throw when amount called", () => {
    // Given
    const aPerformance = {
      play: {
        type: "ddserr",
      },
      audience: 15,
    };

    // Then
    expect(() => new PerformanceCalculator(aPerformance, {}).amount).toThrow(
      new Error("subclass responsability")
    );
  });
});
