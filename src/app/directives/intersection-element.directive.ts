import {
  Directive,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appIntersectionElement]',
})
export class IntersectionElementDirective implements AfterViewInit, OnDestroy {
  @Output() isIntersected: EventEmitter<boolean> = new EventEmitter();
  @Input() rootMargin: string = '';
  @Input() threshold: number | number[] = 0;
  #observer!: IntersectionObserver;
  #isBrowser = isPlatformBrowser(this._platformId);

  constructor(
    private _host: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private _platformId: any
  ) {}

  ngAfterViewInit(): void {
    if (this.#isBrowser) {
      this.#observer = new IntersectionObserver(
        (entries) => {
          const { isIntersecting } = entries[0];
          this.isIntersected.emit(isIntersecting);
        },
        {
          rootMargin: this.rootMargin,
          threshold: this.threshold,
        }
      );
      this.#observer.observe(this._host.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.#isBrowser) {
      console.log('disconnect')
      this.#observer.unobserve(this._host.nativeElement);
      this.#observer.disconnect();
    }
  }
}
