/* eslint-disable import/extensions */
/* eslint-disable no-console */
// import lazy from "./lazy.js"

export default function main() {
   import("./lazy.js").then(mod => console.log("We are using ES6 in webpack.config.js and app code: I am lazy.js")); // comment out this one and comment in the other statements --> no error
    // console.log(lazy());
  }
