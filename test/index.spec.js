'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var fs = require('fs-extra');

describe('Test the Kenzan Keystone Generator', function () {
  describe('Test generator without npm and bower', function () {
    beforeEach(function() {
      return helpers.run(path.join(__dirname, '../app'))
        .inTmpDir(function (dir) {
          var done = this.async(); // `this` is the RunContext object.

          fs.copy(path.join(__dirname, '../templates/common'), dir, done);
        })
        .withPrompts({
          name: 'generator-temp',
          desc: 'test desc',
          npm: false,
          bower: false
        });
    });

    it('should create a folder named like the generator', function () {
      assert.equal(path.basename(process.cwd()), 'generator-temp');
    });

    it('should generate files of skeleton project after done filling out question prompts', function () {
      var expected = [
        '.editorconfig',
        '.gitattributes',
        '.gitignore',
        '.yo-rc.json',
        'README.md',
        'test/app.spec.js'
      ];

      assert.file(expected);
    });

    it('should check the contents of generated .editorconfig against original file', function () {
      assert.fileContent('.editorconfig', 'root = true');
      assert.fileContent('.editorconfig', '[*]');
      assert.fileContent('.editorconfig', 'end_of_line = lf');
      assert.fileContent('.editorconfig', 'insert_final_newline = false');
      assert.fileContent('.editorconfig', 'indent_size = 2');
      assert.fileContent('.editorconfig', 'indent_style = space');
      assert.fileContent('.editorconfig', 'trim_trailing_whitespace = true');
    });

    it('should check the contents of generated gitattributes against original file', function () {
      assert.fileContent('.gitattributes', '*       text    eol=lf');
      assert.fileContent('.gitattributes', '.bat    text    eol=crlf');
      assert.fileContent('.gitattributes', '.sh     text    eol=lf');
    });

    it('should check the contents of generated gitignore against original file', function () {
      assert.fileContent('.gitignore', '.idea');
      assert.fileContent('.gitignore', 'node_modules');
    });

    it('should check the contents of generated yo-rc against original file', function () {
      assert.fileContent('.yo-rc.json', '"generator-generator": {');
      assert.fileContent('.yo-rc.json', '"structure": "nested"');
    });

    it('should check the contents of generated README against original file', function () {
      assert.fileContent('README.md', '# generator-temp');
      assert.fileContent('README.md', 'test desc');
      assert.fileContent('README.md', 'This app was generated by Keystone Generator');
    });

    it('should check the contents of generated app.spec against original file', function () {
      assert.fileContent('test/app.spec.js', "describe('generator-temp:app', function () {");
      assert.fileContent('test/app.spec.js', '// Placeholder for unit tests');
    });
  });

  describe('Test generator with npm and without bower', function () {
    beforeEach(function() {
      return helpers.run(path.join(__dirname, '../app'))
        .inTmpDir(function (dir) {
          var done = this.async(); // `this` is the RunContext object.

          fs.copy(path.join(__dirname, '../templates/common'), dir, done);
        })
        .withPrompts({
          name: 'generator-temp',
          desc: 'test desc',
          npm: true,
          bower: false,
          npmGitRepo: 'keystone.git',
          npmName: 'generator-temp',
          npmDescription: 'test desc',
          npmVersion: '1.0.0',
          npmEntryPoint: 'index.js',
          npmAuthor: 'Test User',
          npmLicense: 'ISC',
          npmKeywords: 'yeoman',
          npmTestCommand: 'test'
        });
    });

    it('should create a folder named like the generator', function () {
      assert.equal(path.basename(process.cwd()), 'generator-temp');
    });

    it('should generate files of skeleton project after done filling out question prompts', function () {
      var expected = [
        '.editorconfig',
        '.gitattributes',
        '.gitignore',
        '.yo-rc.json',
        'README.md',
        'test/app.spec.js'
      ];

      assert.file(expected);
    });

    it('should check the contents of generated .editorconfig against original file', function () {
      assert.fileContent('.editorconfig', 'root = true');
      assert.fileContent('.editorconfig', '[*]');
      assert.fileContent('.editorconfig', 'end_of_line = lf');
      assert.fileContent('.editorconfig', 'insert_final_newline = false');
      assert.fileContent('.editorconfig', 'indent_size = 2');
      assert.fileContent('.editorconfig', 'indent_style = space');
      assert.fileContent('.editorconfig', 'trim_trailing_whitespace = true');
    });

    it('should check the contents of generated gitattributes against original file', function () {
      assert.fileContent('.gitattributes', '*       text    eol=lf');
      assert.fileContent('.gitattributes', '.bat    text    eol=crlf');
      assert.fileContent('.gitattributes', '.sh     text    eol=lf');
    });

    it('should check the contents of generated gitignore against original file', function () {
      assert.fileContent('.gitignore', '.idea');
      assert.fileContent('.gitignore', 'node_modules');
    });

    it('should check the contents of generated  yo-rc against original file', function () {
      assert.fileContent('.yo-rc.json', '"generator-generator": {');
      assert.fileContent('.yo-rc.json', '"structure": "nested"');
    });

    it('should check the contents of generated README against original file', function () {
      assert.fileContent('README.md', '# generator-temp');
      assert.fileContent('README.md', 'test desc');
      assert.fileContent('README.md', 'This app was generated by Keystone Generator');
    });

    it('should check the contents of generated app.spec against original file', function () {
      assert.fileContent('test/app.spec.js', "describe('generator-temp:app', function () {");
      assert.fileContent('test/app.spec.js', '// Placeholder for unit tests');
    });
  });

  describe('Test generator without npm and with bower', function () {
    beforeEach(function() {
      return helpers.run(path.join(__dirname, '../app'))
        .inTmpDir(function (dir) {
          var done = this.async(); // `this` is the RunContext object.

          fs.copy(path.join(__dirname, '../templates/common'), dir, done);
        })
        .withPrompts({
          name: 'generator-temp',
          desc: 'test desc',
          npm: false,
          bower: true,
          bowerName: 'generator-temp',
          bowerVersion: '0.0.1',
          bowerAuthor: 'test user',
          bowerDescription: 'test desc',
          bowerMainFile: 'index.js',
          bowerKeywords: 'bower',
          bowerLicense: 'MIT',
          bowerHomepage: 'keystone.com'
        });
    });

    it('should create a folder named like the generator', function () {
      assert.equal(path.basename(process.cwd()), 'generator-temp');
    });

    it('should generate files of skeleton project after done filling out question prompts', function () {
      var expected = [
        '.editorconfig',
        '.gitattributes',
        '.gitignore',
        '.yo-rc.json',
        'README.md',
        'test/app.spec.js'
      ];

      assert.file(expected);
    });

    it('should check the contents of generated .editorconfig against original file', function () {
      assert.fileContent('.editorconfig', 'root = true');
      assert.fileContent('.editorconfig', '[*]');
      assert.fileContent('.editorconfig', 'end_of_line = lf');
      assert.fileContent('.editorconfig', 'insert_final_newline = false');
      assert.fileContent('.editorconfig', 'indent_size = 2');
      assert.fileContent('.editorconfig', 'indent_style = space');
      assert.fileContent('.editorconfig', 'trim_trailing_whitespace = true');
    });

    it('should check the contents of generated gitattributes against original file', function () {
      assert.fileContent('.gitattributes', '*       text    eol=lf');
      assert.fileContent('.gitattributes', '.bat    text    eol=crlf');
      assert.fileContent('.gitattributes', '.sh     text    eol=lf');
    });

    it('should check the contents of generated gitignore against original file', function () {
      assert.fileContent('.gitignore', '.idea');
      assert.fileContent('.gitignore', 'node_modules');
    });

    it('should check the contents of generated yo-rc against original file', function () {
      assert.fileContent('.yo-rc.json', '"generator-generator": {');
      assert.fileContent('.yo-rc.json', '"structure": "nested"');
    });

    it('should check the contents of generated README against original file', function () {
      assert.fileContent('README.md', '# generator-temp');
      assert.fileContent('README.md', 'test desc');
      assert.fileContent('README.md', 'This app was generated by Keystone Generator');
    });

    it('should check the contents of generated app.spec against original file', function () {
      assert.fileContent('test/app.spec.js', "describe('generator-temp:app', function () {");
      assert.fileContent('test/app.spec.js', '// Placeholder for unit tests');
    });
  });
});