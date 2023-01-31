import { Component, AfterContentInit, Input } from '@angular/core';
import { Source } from 'src/app/models/source.model';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
})
export class ImgComponent implements AfterContentInit {
  @Input() alt: string = '';
  @Input() src: string = '';
  sources: Source[] = [];

  ngAfterContentInit(): void {
    const splitSrc = this.src.split('/');
    const fullName = splitSrc.pop();
    const src = splitSrc.join('/');
    const splitName = fullName?.split('.') ?? [];
    const ext = splitName.pop() ?? '';
    const name = splitName.pop() ?? '';

    this.sources = this.#getSources(src, name, ext);
  }

  #getSources(src: string, name: string, ext: string): Source[] {
    return [
      {
        src: `${src}/${name}-xs.webp`,
        media: '(max-width: 425px)',
      },
      {
        src: `${src}/${name}-sm.webp`,
        media: '(max-width: 1023px)',
      },
      {
        src: `${src}/${name}-md.webp`,
        media: '(max-width: 1439px)',
      },
      {
        src: `${src}/${name}-lg.webp`,
        media: '(max-width: 1999px)',
      },
      {
        src: `${src}/${name}-xl.webp`,
        media: '(min-width: 2000px)',
      },
      {
        src: `${src}/${name}-xs.${ext}`,
        media: '(max-width: 425px)',
      },
      {
        src: `${src}/${name}-sm.${ext}`,
        media: '(max-width: 1023px)',
      },
      {
        src: `${src}/${name}-md.${ext}`,
        media: '(max-width: 1439px)',
      },
      {
        src: `${src}/${name}-lg.${ext}`,
        media: '(max-width: 1999px)',
      },
      {
        src: `${src}/${name}-xl.${ext}`,
        media: '(min-width: 2000px)',
      },
    ];
  }
}
