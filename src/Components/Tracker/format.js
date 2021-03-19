export const format = (t) =>
  `${pad(Math.floor((t / 1000 / 60 / 60) % 60))}:${pad(
    Math.floor((t / 1000 / 60) % 60)
  )}:${pad(Math.floor((t / 1000) % 60))}`;
const pad = (n) => (n < 10 ? `0${n}` : n);
