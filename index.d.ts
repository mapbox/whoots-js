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

    export function getURL(
        baseUrl: string,
        layer: string,
        x: number,
        y: number,
        z: number,
        options?: Options,
    ): string

    export function getTileBBox(x: number, y: number, z: number): string

    export function getMercCoords(
        x: number,
        y: number,
        z: number,
    ): [x: number, y: number]

}
