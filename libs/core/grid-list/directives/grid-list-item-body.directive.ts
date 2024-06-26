import { Directive, TemplateRef } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-grid-list-item-body]',
    standalone: true
})
export class GridListItemBodyDirective {
    /** @hidden */
    constructor(public readonly templateRef: TemplateRef<any>) {}
}
