const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
	const {
		resolver: { sourceExts }
	} = await getDefaultConfig();

  return {
		transformer: {
			assetPlugins: ['expo-asset/tools/hashAssetFiles'],
			babelTransformerPath: require.resolve("react-native-stylus-transformer")//require.resolve("./transformer.js")
    },
    resolver: {
      sourceExts: [...sourceExts, "styl"]
    }
	}
})();
