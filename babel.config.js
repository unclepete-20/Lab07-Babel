'use strict'
/**
babel.config.js with useful plugins. 
*/
module.exports = function(api) {
  api.cache(true);
   api.assertVersion("^7.4.5");

  const presets = [
                    [
                      "@babel/preset-env", {
                        "targets": {
                          "esmodules": true,
                          "node":true
                        }
                      }
                    ]
                  ];
  const plugins = [
    ['@babel/plugin-transform-modules-commonjs'],
    ['@babel/plugin-transform-destructuring'],
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-transform-classes']
  ];

  return {
    presets,
    plugins
  }
}