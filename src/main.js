/* eslint-disable import/extensions */
/* eslint-disable no-console */
// import lazy from "./lazy.js"

export default function main() {
   import("./lazy.js").then(mod => console.log(mod)); // comment out this one and comment in the other statements --> no error
    // console.log(lazy());
  }
