import { FocusableOption } from '@angular/cdk/a11y';
import { ElementRef } from '@angular/core';

export interface OverflowLayoutFocusableItem extends FocusableOption {
    focusable: boolean;
    navigable: boolean;
    hidden: boolean;
    elementRef: ElementRef<HTMLElement>;
    focus(): void;
}
