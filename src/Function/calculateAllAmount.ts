export function calculateAllAmount(object: { [key: string]: number }): number {
   let res: number = 0;
   for (let elem in object) {
      res += object[elem];
   }

   return res;
}
