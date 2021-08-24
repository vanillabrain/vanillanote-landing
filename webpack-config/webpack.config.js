module.exports = {
    entry: "../pages/index.js",
    output: {
        path: __dirname,
        filename: "build.js",
    },
    webpack: (config, { isServer }) => {
            config.node = {
                fs: 'empty'
            }
        return config
    }
};