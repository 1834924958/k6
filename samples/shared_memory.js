// import http from 'k6/http';
// import { SharedArrayBuffer } from 'k6/data';
// import sleep from 'k6';

// const sab = new SharedArrayBuffer('./assets.json', '12345');
// console.log(sab); 

// const bigFile = open('./asset.json', 'br');
// // const binFile = open('./5MB_testdata.bin', 'b');

// const asset = new SharedArray('asset', () => {
//   const f = JSON.parse(open('./asset.json'));
//   return f;
// })

// export default () => {
//   // const data = {
//   //   field: 'This is a standard form field',
//   //   file: http.file(bigFile, '5MB_testdata.bin'),
//   // }

//   // console.log(JSON.stringify(binFile));
//   // console.log(Object.keys(binFile));
//   console.log(`opened 'br' file: ${JSON.stringify(bigFile)}`);
//   console.log(`opened 'br' file keys: ${Object.keys(bigFile)}`);
//   console.log(`opened 'br' file first byte: ${bigFile[0]}`);
//   // console.log(`opened SharedArray: ${JSON.stringify(asset)}`);
//   // console.log(`opened SharedArray keys: ${Object.keys(asset)}`);

//   // const ab = new ArrayBuffer(8);
//   // console.log(`ArrayBuffer keys: ${Object.keys(ab)}`);
//   // console.log(`ArrayBuffer entries: ${Object.entries(ab)}`);
//   // console.log(`ArrayBuffer toString: ${ab.toString()}`);


//   // const res = http.post('https://example.com/upload', data);
//   // // sleep(3);
//   // console.log(res);
// };

import http from 'k6/http';

const binFile = open('./5MB_testdata.bin', 'br');

export default function () {
  const data = {
    field: 'this is a standard form field',
    file: http.file(binFile, '5MB_testdata.bin'),
  };

  const res = http.post('https://example.com/upload', data);
}