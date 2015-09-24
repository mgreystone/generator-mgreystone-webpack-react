/* eslint-env mocha */

var path = require('path')
var assert = require('yeoman-generator').assert
var helpers = require('yeoman-generator').test

describe('mgreystone-webpack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done)
  })

  it('creates files', function () {
    assert.file([
      'package.json',
      '.eslintrc',
      '.gitignore',
      'gulpfile.js',
      'webpack.config.js',
      'src/index.js'
    ])
  })
})
