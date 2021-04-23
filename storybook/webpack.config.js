const path = require('path');
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config, mode }) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        '~': rootPath,
        '~~': rootPath,
        '@': rootPath,
        // -- when using stylus, this is necessary in order to help storybook resolve any stylus files that your component might import
        assets: `${rootPath}/assets`,
        static: `${rootPath}/static`,
        'AutoNumeric': `${rootPath}/node_modules/autonumeric/dist/autoNumeric.min`
    }

    return config;
};