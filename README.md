@@@@# generator-keystone


## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| generator-keystone | A Yeoman Generator for scaffolding new project builds leveraging Keystone pipelines | 0.1.0 |

# Overview
This project is built on-top of [Yeoman][] to allow developers to quickly and easily scaffold out a [Gulp][] based 
build for their projects, leverage [Keystone][] pipelines.  By answering a few simple questions, a whole skeleton build 
with a functional _gulpfile.js_ and fully configured and installed _package.json_ and _bower.json_ will be generated 
for you.

**NOTE: this project is now in 1.0.0 release candidate stage.  1.0.0-rc tags will be published to NPM to allow 
developers to review and provided feedback.**

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
