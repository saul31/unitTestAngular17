export function increment(number: number) {
  if (number > 100) {
    return 100;
  }
  return number + 1;
}