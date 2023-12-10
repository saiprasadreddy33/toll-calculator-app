// polylineCodec.ts

import { decode, encode } from '@googlemaps/polyline-codec';

export const decodePolyline = (encodedPolyline: string) => {
  return decode(encodedPolyline, 5);
};

export const encodePolyline = (coordinates: number[][]) => {
  return encode(coordinates);
};
