const repo = "vue_lotto_simulator";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? `/${repo}/` : "/",
};
