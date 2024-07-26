import { test, expect } from "vitest";
import { ms } from ".";

const s = 1000;
const m = 60 * s;
const h = 60 * m;
const d = 24 * h;
const w = 7 * d;
const mo = 30 * d;
const y = 365 * d;

test("seconds", () => {
  expect(ms("1 s")).toBe(1 * s);
  expect(ms("2 sec")).toBe(2 * s);
  expect(ms("3 second")).toBe(3 * s);
  expect(ms("4 seconds")).toBe(4 * s);
  expect(ms.s(5)).toBe(5 * s);
  expect(ms.sec(6)).toBe(6 * s);
  expect(ms.second(7)).toBe(7 * s);
  expect(ms.seconds(8)).toBe(8 * s);
});

test("minutes", () => {
  expect(ms("1 m")).toBe(1 * m);
  expect(ms("2 min")).toBe(2 * m);
  expect(ms("3 minute")).toBe(3 * m);
  expect(ms("4 minutes")).toBe(4 * m);
  expect(ms.m(5)).toBe(5 * m);
  expect(ms.min(6)).toBe(6 * m);
  expect(ms.minute(7)).toBe(7 * m);
  expect(ms.minutes(8)).toBe(8 * m);
});

test("hours", () => {
  expect(ms("1 h")).toBe(1 * h);
  expect(ms("2 hr")).toBe(2 * h);
  expect(ms("3 hour")).toBe(3 * h);
  expect(ms("4 hours")).toBe(4 * h);
  expect(ms.h(5)).toBe(5 * h);
  expect(ms.hr(6)).toBe(6 * h);
  expect(ms.hour(7)).toBe(7 * h);
  expect(ms.hours(8)).toBe(8 * h);
});

test("days", () => {
  expect(ms("1 d")).toBe(1 * d);
  expect(ms("2 day")).toBe(2 * d);
  expect(ms("3 days")).toBe(3 * d);
  expect(ms.d(5)).toBe(5 * d);
  expect(ms.day(6)).toBe(6 * d);
  expect(ms.days(7)).toBe(7 * d);
});

test("weeks", () => {
  expect(ms("1 w")).toBe(1 * w);
  expect(ms("2 week")).toBe(2 * w);
  expect(ms("3 weeks")).toBe(3 * w);
  expect(ms.w(5)).toBe(5 * w);
  expect(ms.week(6)).toBe(6 * w);
  expect(ms.weeks(7)).toBe(7 * w);
});

test("months", () => {
  expect(ms("1 mo")).toBe(1 * mo);
  expect(ms("2 month")).toBe(2 * mo);
  expect(ms("3 months")).toBe(3 * mo);
  expect(ms.mo(5)).toBe(5 * mo);
  expect(ms.month(6)).toBe(6 * mo);
  expect(ms.months(7)).toBe(7 * mo);
});

test("years", () => {
  expect(ms("1 y")).toBe(1 * y);
  expect(ms("2 year")).toBe(2 * y);
  expect(ms("3 years")).toBe(3 * y);
  expect(ms.y(5)).toBe(5 * y);
  expect(ms.year(6)).toBe(6 * y);
  expect(ms.years(7)).toBe(7 * y);
});
