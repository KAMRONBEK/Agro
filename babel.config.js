module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          api: './app/api',
          translations: './app/translations',
          types: './app/types',
          utils: './app/utils',
          store: './app/store',
          const: './app/const',
          screens: './app/screens',
          widgets: './app/widgets',
          templates: './app/templates',
          router: './app/router',
          styles: './app/styles',
          assets: './app/assets',
        },
      },
    ],
  ]
};
