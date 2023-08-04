import { Directive } from '@angular/core';
import { warnOnce } from '@fundamental-ngx/core/utils';
/**
 * @deprecated
 * Consider using `fd-button-bar`
 */
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-dialog-decisive-button]',
    host: {
        '[class.fd-dialog__decisive-button]': 'true'
    }
})
export class DialogDecisiveButtonDirective {
    /** @hidden */
    constructor() {
        warnOnce('[fd-dialog-decisive-button] is deprecated, use fd-button-bar instead.');
    }
}
