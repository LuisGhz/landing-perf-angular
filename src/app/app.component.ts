import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  elements: { [key: string]: boolean } = {
    hero: false,
    summary: false,
    snippets: false,
    features: false,
    stats: false,
    integrations: false,
    customers: false,
    contact: false,
  };

  updateSectionVisibility(element: string, isIntersected: boolean): void {
    this.elements[element] = isIntersected;
  }
}
