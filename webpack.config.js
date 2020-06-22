export default {
  target: "node",
  mode: "development",
  output: {
    filename: `js/[name].js`,
    chunkFilename: `js/[id]-chunk.js`,
    path: __dirname + '/dist'
  },
};
