# generator-keystone

[![GitHub release](https://img.shields.io/github/release/kenzanlabs/generator-keystone.svg)](https://github.com/kenzanlabs/generator-keystone/releases)
[![npm](https://img.shields.io/npm/v/generator-keystone.svg)](https://www.npmjs.com/package/generator-keystone)
[![Jenkins](https://img.shields.io/jenkins/s/https/kenzan.ci.cloudbees.com/job/DEV-generator-keystone.svg)](https://kenzan.ci.cloudbees.com/job/DEV-generator-keystone/)
[![Jenkins tests](https://img.shields.io/jenkins/t/https/kenzan.ci.cloudbees.com/job/DEV-generator-keystone.svg)](https://kenzan.ci.cloudbees.com/job/DEV-generator-keystone/lastCompletedBuild/testReport/)
[![Jenkins coverage](https://img.shields.io/jenkins/c/https/kenzan.ci.cloudbees.com/job/DEV-generator-keystone.svg)](https://kenzan.ci.cloudbees.com/job/DEV-generator-keystone//cobertura)
[![npm](https://img.shields.io/npm/dt/generator-keystone.svg)](https://www.npmjs.com/package/generator-keystone)
[![GitHub issues](https://img.shields.io/github/issues-raw/kenzanlabs/generator-keystone.svg)](https://github.com/kenzanlabs/generator-keystone/issues)
[![GitHub issues](https://img.shields.io/github/issues-pr-raw/kenzanlabs/generator-keystone.svg)](https://github.com/kenzanlabs/generator-keystone/pulls)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/kenzanlabs/generator-keystone/master/LICENSE.md)

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

## Prerequisite 

This project requires the latest version (1.8.5) of the Yeoman CLI library, [`yo`](https://www.npmjs.com/package/yo).

```bash
# verify current version
$ yo --version

# if necessary, install or update yo
$ npm install -g yo

# or to update
$ npm update -g yo
```

## Install
As this project is still in development and not published in NPM, please install via our Github repo

```bash
npm install -g kenzanlabs/generator-keystone
```


## Usage

```bash
$ yo keystone

# follow the prompts
```

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