/* eslint-disable import/extensions */
/* eslint-disable no-console */
import lazy from "./lazy.js"

export default function main() {
    // import("./lazy.js").then(mod => console.log(mod));
    console.log(lazy());
  }