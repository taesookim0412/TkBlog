import { PipeTransform, Pipe } from '@angular/core';
import { delay } from 'rxjs/operators';

// @Pipe({ name: 'filereader' })
// export class FileReaderPipe implements PipeTransform {
//     transform(file: File & Blob) {
//         let theFile;
//         let frPromise = new Promise((resolve) => {
//             let fileReader = new FileReader();
//             fileReader.readAsDataURL(file);
//             fileReader.onload = () => resolve(fileReader.result);
//         });
//         frPromise.then(async (result) => {
//             theFile = result;
//             return theFile;
//         });
//     }
// }

// @Pipe({ name: 'filereader' })
// export class FileReaderPipe implements PipeTransform {
//     transform(file: File & Blob) {
//         let prevImg;
//         let fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         console.log(file);
//         fileReader.onload = () => {
//         return fileReader.onload;
//         };
//     }
// }