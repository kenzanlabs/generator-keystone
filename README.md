# generator-keystone


## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| generator-keystone | A Yeoman Generator for scaffolding new project builds leveraging Keystone pipelines | 0.1.0 |

# Overview
This project is built on-top of [Yeoman][] to allow developers to quickly and easily scaffold out a [Gulp][] based
build for their projects, leverage [Keystone][] pipelines.

By answering a few simple questions, an entire skeleton build will be generated with the following files:

 - .gitignore
 - .gitattributes
 - .yo-rc.json
 - CONTRIBUTING.md
 - README.md
 - functional gulpfile.js
 - fully configured and installed package.json and bower.json

**NOTE: as this project is still pre 1.0.0, it is subject to possible backwards incompatible changes as it matures.

[Yeoman]: http://yeoman.io/
[Gulp]: http://gulpjs.com/
[Keystone]: https://github.com/kenzanlabs/keystone

## Install
As this project is still in development and not published in NPM, please install via our Github repo

`npm install -g kenzanlabs/generator-keystone`

## Usage
TBD

## Options
TBD

## Development
This project comes bundled with [Vagrant][] to enable all contributors the same consistent environment.  The workflow
is as follows:

1. Run `vagrant up` from the root of the project
2. Run `cd /vagrant`
3. You can now run all Gulp, Yeoman, or NPM commands from the terminal.  Use your host machine for Git, your IDE, etc.

[Vagrant]: https://www.vagrantup.com/

## Testing
You can test your source files by running `npm test`

## LICENSE
Copyright 2016 Kenzan, LLC <http://kenzan.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.