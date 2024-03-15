import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FeedInputButtonDirective } from './directives/feed-input-button.directive';
import { FeedInputTextareaDirective } from './directives/feed-input-textarea.directive';
import { FeedInputComponent } from './feed-input.component';

@Component({
    template: `
        <fd-feed-input [disabled]="disabled">
            <textarea fdFeedInputTextarea [fdFeedInputTextareaMaxRows]="maxRows"></textarea>
            <button fdFeedInputButton></button>
        </fd-feed-input>
    `,
    standalone: true,
    imports: [FeedInputComponent, FeedInputTextareaDirective, FeedInputButtonDirective]
})
class TestComponent {
    @ViewChild(FeedInputTextareaDirective)
    textareaDirective: FeedInputTextareaDirective;

    @ViewChild(FeedInputButtonDirective)
    buttonDirective: FeedInputButtonDirective;

    disabled = false;
    maxRows: number;
}

describe('FeedInputComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let hostEl: DebugElement;
    let textareaEl: DebugElement;
    let buttonEl: DebugElement;
    let textareaDirective;
    let buttonDirective;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        textareaEl = fixture.debugElement.query(By.css('textarea'));
        hostEl = fixture.debugElement.query(By.css('.fd-feed-input'));
        buttonEl = fixture.debugElement.query(By.css('button'));
        fixture.detectChanges();

        textareaDirective = component.textareaDirective;
        buttonDirective = component.buttonDirective;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disable component by class', () => {
        component.disabled = true;
        fixture.detectChanges();

        expect(hostEl.nativeElement.className.includes('is-disabled')).toBe(true);
    });

    it('should disabled button by default', () => {
        expect(buttonEl.attributes['aria-disabled']).toBeTruthy();
    });

    it('should button enable when textarea have a value', () => {
        textareaEl.nativeElement.value = 'Feed message';
        textareaEl.triggerEventHandler('keyup');
        fixture.detectChanges();

        expect((<any>buttonDirective)._elementRef.nativeElement.getAttribute('aria-disabled')).toBe('false');
    });

    it('should button enable when textarea have not a value', () => {
        textareaEl.triggerEventHandler('keyup', { target: { value: '' } });
        fixture.detectChanges();

        expect((<any>buttonDirective)._elementRef.nativeElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('should emit value properly', () => {
        jest.spyOn(textareaDirective.valueChange, 'emit');
        const event: any = { target: { value: '' } };
        textareaDirective.onKeyup(event);
        fixture.detectChanges();

        expect(textareaDirective.valueChange.emit).toHaveBeenCalledWith(event.target.value);
    });

    it('should set textarea max height', () => {
        component.maxRows = 10;
        textareaEl.nativeElement.style.lineHeight = '19px';
        fixture.detectChanges();

        textareaDirective.ngOnInit();
        expect(parseInt(textareaEl.nativeElement.style.maxHeight, 10)).toEqual(190);
    });

    it('should set textarea max height with normal line height', () => {
        component.maxRows = 10;
        textareaEl.nativeElement.style.lineHeight = 'normal';
        textareaEl.nativeElement.style.fontSize = '14px';
        fixture.detectChanges();

        textareaDirective.ngOnInit();
        expect(parseInt(textareaEl.nativeElement.style.maxHeight, 10)).toEqual(154);
    });
});
