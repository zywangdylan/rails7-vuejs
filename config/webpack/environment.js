const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')

const vue = require('./loaders/vue')
const erb = require('./loaders/erb')
const webpack = require('webpack')

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jquery: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default'],
  moment: 'moment'
}))

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('erb', erb)

module.exports = environment
