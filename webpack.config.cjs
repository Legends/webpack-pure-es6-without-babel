export default {
  target: "node",
  output: {
    filename: `js/[name].js`,
    chunkFilename: `js/[id]-chunk.js`,
    path: __dirname + '/dist',
    libraryTarget: "umd"
  }, 
};
