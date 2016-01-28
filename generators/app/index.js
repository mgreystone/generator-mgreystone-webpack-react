var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async()

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the geometric ' + chalk.red('MGreystone Webpack React') + ' generator!'
    ))

    var prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'What\'s the apps name?',
        required: true
      }
    ]

    this.prompt(prompts, function (props) {
      this.appname = props.appname
      done()
    }.bind(this))
  },

  writing: {

    projectfiles: function () {
      this.template('_package.json', 'package.json')
      this.copy('eslintrc', '.eslintrc')
      this.copy('gitignore', '.gitignore')
    },

    app: function () {
      this.copy('gulpfile.js', 'gulpfile.js')
      this.template('webpack.config.js', 'webpack.config.js')
      this.copy('src/index.jsx', 'src/index.jsx')
      this.copy('src/components/app.jsx', 'src/components/app.jsx')
    }
  },

  install: function () {
    this.installDependencies({ bower: false })
  }
})
