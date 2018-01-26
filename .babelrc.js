const BabelPresetEnv = require('@babel/preset-env');
const BabelPresetReact = require('@babel/preset-react');

const targets = { browsers: ['> 1%', 'last 2 versions', 'IE 10'] };

module.exports = {
  presets: [
    [BabelPresetEnv, { targets }],
    [BabelPresetReact],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ].map(require.resolve),
};
