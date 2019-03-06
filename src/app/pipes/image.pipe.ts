import { Pipe, PipeTransform } from '@angular/core';
import { LINK_SERVICE } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, type: string = 'user'): any {

    let path = `${ LINK_SERVICE }/images`;
    const DEFAULT_PATH = `${ path }/user/default.png`;

    if (!img) {
      return DEFAULT_PATH;
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (type) {
      case 'user':
        path += `/user/${img}`;
        break;
      case 'medic':
        path += `/medic/${img}`;
        break;
      case 'hospital':
        path += `/hospital/${img}`;
        break;
      default:
        path = DEFAULT_PATH;
        break;
    }

    return path;
  }

}
