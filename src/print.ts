export function printMe() {
  console.log('I get called from print.ts!');
  (console as any).fart();
}
