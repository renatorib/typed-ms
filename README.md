# Typed MS

Get milliseconds from human readable time code.  
No more typos, it's type-safe!

```js
import { ms } from "typed-ms";

ms("2 h"); // -> 7200000
ms("2 hours"); // -> 7200000
ms("2 h", "30 m"); // -> 9000000
ms("2 hr", "30 min"); // -> 9000000
ms("2 hours", "30 minutes"); // -> 9000000
ms("2 hurs"); // Fail: type error!

ms.hours(2); // -> 7200000
ms.hours(2) + ms.minutes(30); // -> 9000000
ms.h(2) + ms.m(30); // -> 9000000
ms.hr(2) + ms.min(30); // -> 9000000

ms.from({ hours: 2, minutes: 30 }); // -> 9000000

ms.from({
  seconds: 1, // alias: second, sec, s
  minutes: 1, // alias: minute, min, m
  hours: 1, // alias: hour, hr, h
  days: 1, // alias: day, d
  weeks: 1, // alias: week, w
  months: 1, // alias: month, mo
  years: 1, // alias: year, y
});
```
