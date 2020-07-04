module.exports = function (api) {
    api.cache(true)
    return {
        presets: [
            'module:react-native-dotenv',
            'module:metro-react-native-babel-preset',
        ],
    }
}
