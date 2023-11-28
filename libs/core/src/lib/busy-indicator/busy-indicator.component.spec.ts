import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusyIndicatorComponent } from './busy-indicator.component';

@Component({
    template: `
<fd-busy-indicator [loading]="loading" [size]="size" [block]="block">
  @if (hasContent) {
    <button>Button</button>
  }
</fd-busy-indicator>
`,
    standalone: true,
    imports: [BusyIndicatorComponent]
})
class TestWrapperComponent {
    block = true;
    loading = true;
    hasContent = true;
    size: 's' | 'm' | 'l' = 'm';
}

describe('BusyIndicatorComponent', () => {
    let component: TestWrapperComponent;
    let fixture: ComponentFixture<TestWrapperComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestWrapperComponent]
        })
            .overrideComponent(BusyIndicatorComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display loading state', () => {
        expect(fixture.nativeElement.querySelector('.fd-busy-indicator')).toBeTruthy();

        component.loading = false;
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.fd-busy-indicator')).toBeFalsy();
    });

    it('should display proper size', () => {
        component.size = 's';
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.fd-busy-indicator--s')).toBeTruthy();

        component.size = 'm';
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.fd-busy-indicator--m')).toBeTruthy();

        component.size = 'l';
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.fd-busy-indicator--l')).toBeTruthy();
    });

    it('should display as block', () => {
        component.block = true;
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.fd-busy-indicator__container--inline')).toBeFalsy();
    });

    it('should display as inline-block', () => {
        component.block = false;
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.fd-busy-indicator__container--inline')).toBeTruthy();
    });
});
