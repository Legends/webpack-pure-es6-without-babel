# webpack-pure-es6-without-babel
 


## Execute `yarn mb` after compilation finishes, hit `F5`.


Error: --> ReferenceError: window is not defined

I tracked it down to the dynamic import: `import("./lazy.js")` in `main.js`.
If I change it to a normal `import` the app runs flawlessly.