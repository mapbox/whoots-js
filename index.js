'use strict';

module.exports = WhooTS;


/**
 * WhooTS
 *
 * @class  WhooTS
 * @param  {Object}  [options]
 * @param  {String}  [options.format='image/png']
 * @param  {String}  [options.service='WMS']
 * @param  {String}  [options.version='1.1.1']
 * @param  {String}  [options.request='GetMap']
 * @param  {String}  [options.srs='EPSG:3857']
 * @param  {Number}  [options.width='256']
 * @param  {Number}  [options.height='256']
 * @example
 * var whoots = new WhooTS(options);
 */
function WhooTS(options) {
    options = options || {};

    this.format  = options.format  || 'image/png';
    this.service = options.service || 'WMS';
    this.version = options.version || '1.1.1';
    this.request = options.request || 'GetMap';
    this.srs     = options.srs     || 'EPSG:3857';
    this.width   = options.width   || 256;
    this.height  = options.height  || 256;
}


/**
 * getUrl
 *
 * @param    {String}  baseUrl  Base url of the WMS server
 * @param    {String}  layer    Layer name
 * @param    {Number}  x        Tile coordinate x
 * @param    {Number}  y        Tile coordinate y
 * @param    {Number}  z        Tile zoom
 * @returns  {String}  url
 * @example
 * var baseUrl = 'http://geodata.state.nj.us/imagerywms/Natural2015';
 * var layer = 'Natural2015';
 * var url = whoots.getUrl(baseUrl, layer, 154308, 197167, 19);
 */
WhooTS.prototype.getUrl = function(baseUrl, layer, x, y, z) {

    var url = baseUrl + '?'
        + 'bbox=' + this.getTileBbox(x, y, z)
        + '&format=' + this.format
        + '&service=' + this.service
        + '&version=' + this.version
        + '&request=' + this.request
        + '&srs=' + this.srs
        + '&width=' + this.width
        + '&height=' + this.height
        + '&layers=' + layer;

    return url;
};


/**
 * getTileBbox
 *
 * @param    {Number}  x  Tile coordinate x
 * @param    {Number}  y  Tile coordinate y
 * @param    {Number}  z  Tile zoom
 * @returns  {String}  String of the bounding box
 */
WhooTS.prototype.getTileBbox = function(x, y, z) {
    // for Google/OSM tile scheme we need to alter the y
    y = (Math.pow(2, z) - y - 1);

    var min = this.getMercCoords(x * 256, y * 256, z),
        max = this.getMercCoords((x + 1) * 256, (y + 1) * 256, z);

    return min[0] + ',' + min[1] + ',' + max[0] + ',' + max[1];
};

/**
 * getMercCoords
 *
 * @param    {Number}  x  Pixel coordinate x
 * @param    {Number}  y  Pixel coordinate y
 * @param    {Number}  z  Tile zoom
 * @returns  {Array}   [x, y]
 */
WhooTS.prototype.getMercCoords = function(x, y, z) {
    var resolution = (2 * Math.PI * 6378137 / 256) / Math.pow(2, z),
        merc_x = (x * resolution - 2 * Math.PI  * 6378137 / 2.0),
        merc_y = (y * resolution - 2 * Math.PI  * 6378137 / 2.0);

    return [merc_x, merc_y];
};
