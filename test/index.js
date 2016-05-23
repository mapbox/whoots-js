'use strict';

var test = require('tap').test;
var WhooTS = require('../.');


test('WhooTS', function(t) {
    t.test('constructor', function(t) {
        var wms = new WhooTS();
        t.type(wms, 'object');
        t.end();
    });

    t.test('getUrl', function(t) {
        var wms = new WhooTS();
        var baseUrl = 'http://geodata.state.nj.us/imagerywms/Natural2015';
        var layer = 'Natural2015';
        var url = wms.getUrl(baseUrl, layer, 154308, 197167, 19);
        t.deepEqual(url, 'http://geodata.state.nj.us/imagerywms/Natural2015?' +
            'bbox=-8242663.382160267,4966572.349857613,-8242586.945131982,4966648.786885899' +
            '&format=image/png' +
            '&service=WMS' +
            '&version=1.1.1' +
            '&request=GetMap' +
            '&srs=EPSG:3857' +
            '&width=256' +
            '&height=256' +
            '&layers=Natural2015'
        );
        t.end();
    });

    t.test('getTileBbox', function(t) {
        var wms = new WhooTS();
        var bbox = wms.getTileBbox(154308, 197167, 19);
        t.deepEqual(bbox, '-8242663.382160267,4966572.349857613,-8242586.945131982,4966648.786885899');
        t.end();
    });

    t.test('getMercCoords', function(t) {
        var wms = new WhooTS();
        var coords = wms.getMercCoords(154308 * 256, 327120 * 256, 19);
        t.deepEqual(coords, [-8242663.382160267, 4966572.349857613]);
        t.end();
    });

    t.end();
});
