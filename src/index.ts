const mul = (factor: number) => (value: number) => Math.round(value * factor);

const fns = {
  seconds: mul(1000),
  minutes: mul(60000),
  hours: mul(3600000),
  days: mul(86400000),
  weeks: mul(604800000),
  months: mul(2629800000),
  years: mul(31557600000),
};

const aliases = {
  second: fns.seconds,
  sec: fns.seconds,
  s: fns.seconds,
  minute: fns.minutes,
  min: fns.minutes,
  m: fns.minutes,
  hour: fns.hours,
  hr: fns.hours,
  h: fns.hours,
  day: fns.days,
  d: fns.days,
  week: fns.weeks,
  w: fns.weeks,
  month: fns.months,
  mo: fns.months,
  year: fns.years,
  y: fns.years,
};

const fnsAndAliases = {
  ...fns,
  ...aliases,
};

type Token = keyof typeof fns;
type Alias = keyof typeof aliases;
type Tokens = { [T in Token]?: number };
type StringToken = `${number} ${Token | Alias}`;

function from(tokens: Tokens) {
  let total = 0;
  Object.entries(tokens).forEach((entry) => {
    const [token, value] = entry as [Token, number];
    total += fns[token](value);
  });
  return total;
}

function parser(...stringTokens: StringToken[]) {
  let total = 0;
  stringTokens.forEach((stringToken) => {
    const [value, token] = stringToken.split(" ") as [string, Token | Alias];
    total += fnsAndAliases[token](Number(value));
  });
  return total;
}

export const ms = Object.assign(parser, {
  ...fnsAndAliases,
  from,
});
