require('babel-register')({
  babelrc: false,
  presets: [
    // Latest stable ECMAScript features
    [
      require.resolve('babel-preset-env'),
      {
        // Disable polyfill transforms
        useBuiltIns: false
        // Do not transform modules to CJS
        // modules: false
      }
    ],
  ],
  plugins: [
    // class { handleClick = () => { } }
    require.resolve('babel-plugin-transform-class-properties'),
    // The following two plugins use Object.assign directly, instead of Babel's
    // extends helper. Note that this assumes `Object.assign` is available.
    // { ...todo, completed: true }
    [
      require.resolve('babel-plugin-transform-object-rest-spread'),
      {
        useBuiltIns: true
      }
    ],
    // Polyfills the runtime needed for async/await and generators
    [
      require.resolve('babel-plugin-transform-runtime'),
      {
        helpers: false,
        polyfill: false,
        regenerator: true
      }
    ],
    [
      require.resolve('babel-plugin-transform-regenerator'),
      {
        // Async functions are converted to generators by babel-preset-env
        async: false
      }
    ],
  ]
})
