import { test, expect } from "vitest";
import { getNodeEnv } from "./index";

test("getNodeEnv() should return test", () => {
  expect(getNodeEnv()).toBe("test");
});
