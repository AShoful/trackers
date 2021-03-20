export const format = (t) => {
  const p = t > 0 ? t : 0;
  return `${pad(Math.floor((p / 1000 / 60 / 60) % 60))}:${pad(
    Math.floor((p / 1000 / 60) % 60)
  )}:${pad(Math.floor((p / 1000) % 60))}`;
};

const pad = (n) => (n < 10 ? `0${n}` : n);
