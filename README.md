<!--
[![npm version](https://badge.fury.io/js/whoots-js.svg)](https://badge.fury.io/js/whoots-js)
[![Build Status](https://circleci.com/gh/mapbox/whoots-js.svg?style=svg)](https://circleci.com/gh/mapbox/whoots-js)
-->
## whoots-js

Request tiles from WMS servers that support EPSG:3857.

This project is a JavaScript port of https://github.com/timwaters/whoots by Tim Waters.


### What is it?

Given a `z/x/y` tile coordinate like `19/154308/197167`, `whoots-js` will generate a `GetMap` request like this:

http://geodata.state.nj.us/imagerywms/Natural2015?bbox=-8242663.382160267,4966572.349857613,-8242586.945131982,4966648.786885899&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&width=256&height=256&layers=Natural2015&map=&styles=

<!--
### Usage

```js
// TODO
```

### Documentation

Complete API documentation is here:  http://mapbox.github.io/whoots-js/docs/

-->
