
module.exports = {
  baseUrl: `/sub-folder/`,
  devServer: {
    port: 9091,
    publicPath: `http://localhost:9090/sub-folder/`,
    sockPath: `/sub-folder/sockjs-node`,
  },
};
