import { Directive } from '@angular/core';
import { warnOnce } from '@fundamental-ngx/core/utils';

/**
 * @deprecated
 * Consider using `fd-button-bar`
 */
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-message-box-decisive-button]',
    host: {
        '[class.fd-message-box__decisive-button]': 'true'
    }
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class MessageBoxDecisiveButton {
    /** @hidden */
    constructor() {
        warnOnce('`[fd-message-box-decisive-button]` is deprecated. Consider using `fd-button-bar`');
    }
}
