// Type definitions for temp 0.8.3
// Project: https://www.npmjs.com/package/temp, https://github.com/bruce/node-temp
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "temp" {
    import * as temp from "temp";
    import * as fs from "fs";

    export interface AffixOptions {
        prefix?: string;
        suffix?: string;
        dir?: string;
    }

    export var dir: string;

    export function track(value: boolean): typeof temp;

    export function mkDir(affixes: string, callback?: (err: any, dirPath: string) => void);
    export function mkDir(affixes: AffixOptions, callback?: (err: any, dirPath: string) => void);

    export function mkDirSync(affixes: string): string;
    export function mkDirSync(affixes: AffixOptions): string;

    export function open(affixes: string, callback?: (err: any, result: {path: string, fd: number}) => void);
    export function open(affixes: AffixOptions, callback?: (err: any, result: {path: string, fd: number}) => void);

    export function openSync(affixes: string): { path: string, fd: number };
    export function openSync(affixes: AffixOptions): { path: string, fd: number };

    export function path(affixes: string, defaultPrefix: string);
    export function path(affixes: AffixOptions, defaultPrefix: string);

    export function cleanup(callback?: (result: boolean | {files: number, dirs?: number}) => void);

    export function cleanupSync(): boolean | {files: number, dirs: number};

    export function createWriteStream(affixes: string): fs.WriteStream;
    export function createWriteStream(affixes: AffixOptions): fs.WriteStream;
}