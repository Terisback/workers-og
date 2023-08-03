import { ResvgRenderOptions } from "@resvg/resvg-wasm";

declare type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
declare type Style$1 = 'normal' | 'italic';
export interface ImageResponseOptions {
  width?: number;
  height?: number;
  // emoji?: 'twemoji' | 'blobmoji' | 'noto' | 'openmoji' = 'twemoji',
  fonts?: {
    data: ArrayBuffer;
    name: string;
    weight?: Weight;
    style?: Style$1;
    lang?: string;
  }[];
  debug?: boolean;

  // Options that will be passed to the HTTP response
  status?: number;
  statusText?: string;
  headers?: Record<string, string>;

  resvgOptions?: ResvgRenderOptions | undefined

  // Format
  format?: "svg" | "png"; // Defaults to 'png'
}
