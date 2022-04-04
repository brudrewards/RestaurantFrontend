module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        alias: {
          /***** Root folder paths *****/
          '#src': './src',
          '#scss': './scss',
          '#static': './public/static',
          '#images': './public/static/images',
          /***** Src folder paths *****/
          '#components': './src/components',
          '#configs': './src/configs',
          '#constants': './src/constants',
          '#helpers': './src/helpers',
          '#utils': './src/utils',
          '#views': './src/views',
        },
      },
    ],
  ],
};
