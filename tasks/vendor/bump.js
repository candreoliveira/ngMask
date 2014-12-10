module.exports = {
  options: {
    files: ['bower.json', 'package.json'],
    updateConfigs: [],
    commit: true,
    commitMessage: 'New Release %VERSION%',
    commitFiles: ['bower.json', 'package.json'],
    createTag: true,
    tagName: '%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: false,
    pushTo: 'origin',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
  }
};