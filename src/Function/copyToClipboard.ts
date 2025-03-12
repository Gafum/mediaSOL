export function copyToClipboard(text: string, callback: () => void) {
   navigator.permissions
      .query({ name: "clipboard-write" as PermissionName })
      .then((result) => {
         if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(text).then(callback, () => {
               console.log("Can not write to clipboard");
            });
         }
      });
}
