import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appObserveElement]',
})
export class ObserveElementDirective implements AfterViewInit, OnDestroy {
  @Input() hiddenClass: string = '';
  @Input() visibleClass: string = '';

  #observer!: IntersectionObserver;

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this._renderer.addClass(this._element.nativeElement, this.hiddenClass);

    this.#observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (
        isIntersecting &&
        !this._element.nativeElement.classList.contains(this.visibleClass)
      )
        this._renderer.addClass(this._element.nativeElement, this.visibleClass);

      if (
        !isIntersecting &&
        this._element.nativeElement.classList.contains(this.visibleClass)
      )
        this._renderer.removeClass(
          this._element.nativeElement,
          this.visibleClass
        );
    });

    this.#observer.observe(this._element.nativeElement);
  }

  ngOnDestroy(): void {
    this.#observer.unobserve(this._element.nativeElement);
  }
}
