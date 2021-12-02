import { ImmutableArrayBuffer } from 'k6/data';

const data = new ImmutableArrayBuffer(8);

export default function () {
  console.log(data.length);
};
