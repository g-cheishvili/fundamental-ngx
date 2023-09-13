import { Component } from '@angular/core';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ProgressIndicatorComponent } from '@fundamental-ngx/core/progress-indicator';

@Component({
    selector: 'fd-progress-indicator-animation',
    templateUrl: './progress-indicator-animation.component.html',
    standalone: true,
    imports: [ProgressIndicatorComponent, ButtonModule]
})
export class ProgressIndicatorAnimationComponent {
    animationValue = 45;
    noAnimationValue = 45;
}
