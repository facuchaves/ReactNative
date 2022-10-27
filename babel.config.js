module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        unstable_disableES6Transforms: true,
      },
    ],
  ],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
