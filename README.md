# Typed MS

Get milliseconds from human readable time code.  
No more typos, it's type-safe!

### Install

```bash
npm add typed-ms
```

### Usage

```ts
import { ms } from "typed-ms";

// From typed string
ms("2 h"); // -> 7200000
ms("2 hours"); // -> 7200000
ms("2 h", "30 m"); // -> 9000000
ms("2 hr", "30 min"); // -> 9000000
ms("2 hours", "30 minutes"); // -> 9000000
ms("2 hurs"); // Fail: type error!

// From direct tokens/aliases functions
ms.hours(2); // -> 7200000
ms.hours(2) + ms.minutes(30); // -> 9000000
ms.h(2) + ms.m(30); // -> 9000000
ms.hr(2) + ms.min(30); // -> 9000000

// From direct tokens
ms.from({ hours: 2, minutes: 30 }); // -> 9000000
```

### Functions

```ts
ms.seconds(1);
ms.second(1);
ms.sec(1);
ms.s(1);

ms.minutes(1);
ms.minute(1);
ms.min(1);
ms.m(1);

ms.hours(1);
ms.hour(1);
ms.hr(1);
ms.h(1);

ms.days(1);
ms.day(1);
ms.d(1);

ms.weeks(1);
ms.week(1);
ms.w(1);

ms.months(1);
ms.month(1);
ms.mo(1);

ms.years(1);
ms.year(1);
ms.y(1);
```

### `from` options:

From options only work with tokens, they won't work with aliases (like `h`, `sec`, etc.)

```ts
ms.from({
  seconds: 1,
  minutes: 1,
  hours: 1,
  days: 1,
  weeks: 1,
  months: 1,
  years: 1,
});
```
