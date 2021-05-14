declare module '@mapbox/whoots-js' {
    interface Options {
        format?: string
        service?: string
        version?: string
        request?: string
        srs?: string
        width?: number
        height?: number
    }

    function getURL(
        baseUrl: string,
        layer: string,
        x: number,
        y: number,
        z: number,
        options?: Options,
    ): string

    function getTileBBox(x: number, y: number, z: number): string

    function getMercCoords(
        x: number,
        y: number,
        z: number,
    ): [x: number, y: number]

    const WhootsJS = {
        getURL,
        getTileBBox,
        getMercCoords,
    }

    export default WhootsJS
}
