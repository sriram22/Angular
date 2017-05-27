import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

  transform(value: any, limit :number){
      return value.substring(0, limit) + '...';
  }

}
