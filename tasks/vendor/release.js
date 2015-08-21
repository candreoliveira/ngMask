module.exports = {
  options: {
    bump: true, //default: true
    file: 'bower.json', //default: package.json
    add: true, //default: true
    commit: true, //default: true
    tag: true, //default: true
    push: true, //default: true
    pushTags: true, //default: true
    npm: false, //default: true
    npmtag: false, //default: no tag
    folder: 'folder/to/publish/to/npm', //default project root
    tagName: '<%= version %>', //default: '<%= version %>'
    commitMessage: 'new release <%= version %>', //default: 'release <%= version %>'
    tagMessage: 'tagging version <%= version %>', //default: 'Version <%= version %>',
    github: {
      repo: 'git@github.com:candreoliveira/ngMask.git', //put your user/repo here
      usernameVar: 'USER', //ENVIRONMENT VARIABLE that contains Github username
      passwordVar: 'PASS' //ENVIRONMENT VARIABLE that contains Github password
    }
  }
};