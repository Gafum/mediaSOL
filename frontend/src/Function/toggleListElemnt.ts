export function toggleListElement<T>(arr: T[], item: T) {
   const exists = arr.includes(item)
   if (exists) {
      return arr.filter((elem) => elem !== item)
   } else {
      return [...arr, item]
   }
}
