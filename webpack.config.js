const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const { mergeWithRules } = require('webpack-merge');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

const envKeys = {
  'process.env.PACKAGE_VERSION': `"${process.env.PACKAGE_VERSION}"`,
};

const ruleProcessTailwindStyles = {
  test: /\.css$/i,
  use: [
    require.resolve('style-loader', {
      paths: [require.resolve('webpack-config-single-spa')],
    }),
    require.resolve('css-loader', {
      paths: [require.resolve('webpack-config-single-spa')],
    }),
    'postcss-loader',
  ],
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mfe',
    projectName: 'layout',
    webpackConfigEnv,
    argv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'replace',
      },
    },
  })(defaultConfig, {
    plugins: [new webpack.DefinePlugin(envKeys)],
    module: {
      rules: [ruleProcessTailwindStyles],
    },
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          configFile: './tsconfig.json',
        }),
      ],
    },
  });

  return config;
};
