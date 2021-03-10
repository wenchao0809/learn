module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: 3 } }]
    // "@babel/preset-react"
    // "babel-preset-typescript-vue3",
    // ["@vue/babel-preset-app"],
  ],
  plugins: [
    ['@vue/babel-plugin-jsx', { optimize: true }],
    '@babel/plugin-transform-modules-commonjs'
  ]
}
