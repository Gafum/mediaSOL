export function splitWordsSmart(str: string): string {
   return (
      str
         // розділ між послідовністю великих і великим+маліми (HTMLInput -> HTML Input)
         .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1 $2")
         // розділ між малими/цифрами і великими (contactForm -> contact Form)
         .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
         // заміни underscore / dash на пробіли
         .replace(/[_-]+/g, " ")
         .trim()
   );
}
