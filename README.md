# Electron Application

Creating applications with [Electron Document]( http://electron.atom.io/docs/v0.33.0/).

## Installation

1. `git clone https://github.com/uedatakeshi/panels.git`.
2. `cd panels`.
4. `npm install`.
3. And then run application by `electron ../panels`.

## Cooperation with ProgressReport

1. RUN ProgressReport. See [ProgressReport]( https://github.com/itagakishintaro/ProgressReport).
2. If you write a memo in your ProgressReport's calendar, then you'll get an notice from Electron.

## Customise

1. Edit index.js.
2. `npm install -g browserify`.
3. `browserify index.js -o bundle.js`. 

## Edit css

1. Edit scss/panels.scss
2. `sudo gem install sass`.
3. `sass scss/panels.scss dist/css/panels.css`.


