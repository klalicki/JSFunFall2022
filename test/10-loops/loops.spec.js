import { expect } from "chai";
import { readConsole } from "../getAnswer.js";
import {
  solvingProblems,
  arrayLength,
  logWithWhile,
  logArrayWithFor,
} from "./loops-test-helper.js";

describe("10. Loops", () => {
  describe("00-solving-problems", () => {
    it("should pass the test", () => {
      expect(solvingProblems("test")).to.equal("test");
    });
  });

  describe("01-array-length", () => {
    it("should return the length of the array supplied as an argument", () => {
      expect(arrayLength([1, 2, 3, 4, 5, 6])).to.equal(6);
    });
  });

  describe("02-while-loop", () => {
    it("should log each value in an array with console.log", () => {
      const output = readConsole(() => {
        logWithWhile();
      });
      const expected =
        [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].join("\n") + "\n";
      expect(output).to.deep.equal(expected);
    });
    it("should use a while loop", () => {
      const funcStr = logWithWhile.toString();
      expect(funcStr).to.match(/while\s*\(/);
    });
  });

  describe("03-for-loop", () => {
    it("should log each value in an array with console.log", () => {
      const array = ["Python", "JavaScript", "TypeScript", "Golang"];
      const output = readConsole(() => {
        logArrayWithFor(array);
      });
      const expected = array.join("\n") + "\n";
      expect(output).to.deep.equal(expected);
    });
    it("should use a for loop", () => {
      const funcStr = logArrayWithFor.toString();
      expect(funcStr).to.match(/for\s*\(/);
    });
  });
});
