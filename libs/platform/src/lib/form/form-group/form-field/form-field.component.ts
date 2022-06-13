import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    isDevMode,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    Provider,
    Self,
    SimpleChanges,
    SkipSelf,
    TemplateRef,
    ViewChild
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BooleanInput, coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { BehaviorSubject, combineLatest, filter, Observable, Subject, Subscription, tap } from 'rxjs';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import {
    Column,
    ColumnLayout,
    FieldHintOptions,
    FormField,
    FormFieldControl,
    FormFieldGroup,
    FormGroupContainer,
    HintPlacement,
    LabelLayout,
    RESPONSIVE_BREAKPOINTS_CONFIG,
    ResponsiveBreakPointConfig,
    ResponsiveBreakpointsService
} from '@fundamental-ngx/platform/shared';
import { Nullable } from '@fundamental-ngx/core/shared';
import {
    DefaultHorizontalFieldLayout,
    DefaultHorizontalLabelLayout,
    DefaultVerticalFieldLayout,
    DefaultVerticalLabelLayout,
    FORM_GROUP_CHILD_FIELD_TOKEN
} from '../constants';
import { generateColumnClass, normalizeColumnLayout } from '../helpers';
import { FormFieldControlExtrasComponent } from '../form-field-extras/form-field-extras.component';
import { InputMessageGroupWithTemplate } from '../../input-message-group-with-template/input-message-group-with-template.component';
import {
    FDP_FORM_FIELD_HINT_LAYOUT_CONFIG,
    FDP_FORM_FIELD_HINT_OPTIONS_DEFAULT,
    HintLayoutConfig
} from '../fdp-form.tokens';
import { FormFieldLayoutService } from '../services/form-field-layout.service';
import { defaultFormFieldHintOptions } from '../config/default-form-field-hint-options';

const formFieldProvider: Provider = {
    provide: FormField,
    useExisting: forwardRef(() => FormFieldComponent)
};

const formGroupChildProvider: Provider = {
    provide: FORM_GROUP_CHILD_FIELD_TOKEN,
    useExisting: forwardRef(() => FormFieldComponent)
};

/**
 * Form Field represent actual row and aggregates common behavior for the input field such as
 * error, label or hint.
 * Hint is also responsible for listening for FieldControl changes and trigger necessary
 * change detection
 *
 */
@Component({
    selector: 'fdp-form-field',
    templateUrl: 'form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [formFieldProvider, formGroupChildProvider, FormFieldLayoutService]
})
export class FormFieldComponent implements FormField, AfterContentInit, AfterViewInit, OnDestroy, OnInit, OnChanges {
    /** Form field label */
    @Input()
    label: string;

    /**
     * Form field id
     */
    @Input()
    id: string;

    /**
     * @deprecated use `hint.placement` input instead
     * Defines hint placement
     */
    @Input()
    hintPlacement: HintPlacement;

    /** Hint to be placed next to label */
    @Input()
    hint: Nullable<string | FieldHintOptions>;

    /**
     * @deprecated
     * Use labelColumnLayout, fieldColumnLayout and gapColumnLayout properties.
     * Define form field label placement
     */
    @Input()
    get labelLayout(): LabelLayout {
        return this._labelLayout;
    }

    set labelLayout(value: LabelLayout) {
        if (isDevMode()) {
            console.warn(
                'LabelLayout input property is deprecated. Please use labelColumnLayout, fieldColumnLayout and gapColumnLayout properties instead'
            );
        }
        this._labelLayout = value;

        this.labelColumnLayout =
            this._labelLayout === 'horizontal' ? DefaultHorizontalLabelLayout : DefaultVerticalLabelLayout;
        this.fieldColumnLayout =
            this._labelLayout === 'horizontal' ? DefaultHorizontalFieldLayout : DefaultVerticalFieldLayout;
    }

    /**
     * Indicates when form field label should not be displayed
     */
    @Input()
    noLabelLayout = false;

    /**
     * The list of validators applied to the form field.
     */
    @Input()
    validators: Array<ValidatorFn> = [Validators.nullValidator];

    /**
     * Rank is used for ordering.
     * First lower number, then - higher
     */
    @Input()
    rank: number;

    /**
     * Placeholder for the field
     */
    @Input()
    placeholder: string;

    /** Form Container column it belongs to */
    @Input()
    column: number;

    /** object for placing field in column in each screen layout */
    @Input()
    get columnLayout(): ColumnLayout {
        return this._columnLayout;
    }

    set columnLayout(layout: ColumnLayout | undefined) {
        if (!layout) {
            return;
        }
        this._columnLayout = layout;
        this._isColumnLayoutEnabled = true;
        this._setLayout();
    }

    /**
     * Defines label's column layout.
     */
    @Input()
    get labelColumnLayout(): ColumnLayout {
        return this._labelColumnLayout;
    }

    set labelColumnLayout(value: ColumnLayout | undefined) {
        if (!value) {
            return;
        }
        this._labelColumnLayout = normalizeColumnLayout(value);
        this._labelColumnLayoutClass = generateColumnClass(this._labelColumnLayout);
        this._labelColumnLayout$.next(this._labelColumnLayout);
    }

    /**
     * Defines field's column layout.
     */
    @Input()
    get fieldColumnLayout(): ColumnLayout {
        return this._fieldColumnLayout;
    }

    set fieldColumnLayout(value: ColumnLayout | undefined) {
        if (!value) {
            return;
        }

        this._fieldColumnLayout = normalizeColumnLayout(value);
        this._fieldColumnLayoutClass = generateColumnClass(this._fieldColumnLayout);
        this._fieldColumnLayout$.next(this._fieldColumnLayout);
    }

    /**
     * Defines gap column layout.
     */
    @Input()
    get gapColumnLayout(): ColumnLayout {
        return this._gapColumnLayout;
    }

    set gapColumnLayout(value: ColumnLayout | undefined) {
        if (!value) {
            return;
        }

        this._gapColumnLayout = normalizeColumnLayout(value);
        this._gapColumnLayoutClass = generateColumnClass(this._gapColumnLayout);
        this._gapColumnLayout$.next(this._gapColumnLayout);
    }

    /**
     * Translations template reference.
     * This is in most of the cases set from parent container (form-group)
     */
    @Input()
    i18Strings: TemplateRef<any>;

    /** Set when form field is a mandatory one. */
    @Input()
    get required(): boolean {
        return this._required;
    }

    set required(value: BooleanInput) {
        this._required = coerceBooleanProperty(value);
    }

    /**
     * Indicates if field is editable
     */
    @Input()
    get editable(): boolean {
        return this._editable;
    }

    set editable(value: BooleanInput) {
        const newVal = coerceBooleanProperty(value);
        if (this._editable !== newVal) {
            this._editable = newVal;
            this._updateControlProperties();
        }
    }

    /**
     * Form field custom width in columns must be between 1 - 12
     */
    @Input()
    get columns(): Column {
        return this._columns;
    }

    set columns(value: Column) {
        this._columns = <Column>coerceNumberProperty(value);
    }

    /**
     * marks field as disabled. used in reactive form approach.
     */
    @Input()
    disabled = false;

    /** Whether label text should be appended with colon. */
    @Input()
    colon = false;

    /**
     * Form Group Container to bind the Form-Field to.
     * This will override default value injected by constructor
     */
    @Input()
    formGroupContainer: FormGroupContainer;

    /** Emits whenever formFieldControl's state changes */
    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    onChange: EventEmitter<string> = new EventEmitter<string>();

    /** Emits whenever column layout is changed */
    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    onColumnChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    /**
     * @hidden
     * Form field template reference
     */
    @ViewChild('renderer', { static: true })
    renderer: TemplateRef<any>;

    /** @hidden */
    @ContentChild(FormFieldControlExtrasComponent, { read: ElementRef })
    formFieldExtras?: ElementRef<HTMLElement>;

    /** @hidden */
    @ViewChild('labelCol') labelCol?: ElementRef<HTMLDivElement>;

    /** @hidden */
    @ViewChild(InputMessageGroupWithTemplate, { read: ElementRef })
    inputMessageGroup: ElementRef<HTMLElement>;

    /** @hidden */
    isHorizontal$: Observable<boolean>;

    /**
     * Child FormFieldControl
     */
    control: FormFieldControl<any> | null;

    /** @hidden */
    _labelColumnLayoutClass: string;

    /** @hidden */
    _fieldColumnLayoutClass: string;

    /** @hidden */
    _gapColumnLayoutClass: string;

    /**
     * hint and hint placement coerced to the FieldHintOptions
     */
    hintOptions: FieldHintOptions = defaultFormFieldHintOptions as unknown as FieldHintOptions;

    /**
     * @hidden
     * Optional FormControl
     */
    public formControl: FormControl;

    /** @hidden */
    protected _columns: Column = 6;

    /** @hidden */
    protected _editable = true;

    /** @hidden */
    protected _formGroup: FormGroup;

    /** @hidden */
    protected _required = false;

    /** @hidden */
    protected _destroyed$ = new Subject<void>();

    /** @hidden */
    private _isColumnLayoutEnabled = false;

    /** @hidden column number for different screen sizes */
    private _xlColumnNumber: number;

    /** @hidden */
    private _lgColumnNumber: number;

    /** @hidden */
    private _mdColumnNumber: number;

    /** @hidden */
    private _sColumnNumber = 1;

    /** @hidden */
    private _columnLayout: ColumnLayout;

    /** @hidden */
    private readonly _responsiveBreakPointConfig: ResponsiveBreakPointConfig;

    /** @hidden */
    private _labelLayout: LabelLayout;

    /** @hidden */
    private _labelColumnLayout: ColumnLayout;

    /** @hidden */
    private _fieldColumnLayout: ColumnLayout;
    /** @hidden */
    private _gapColumnLayout: ColumnLayout;

    /** @hidden whether label and control are vertically aligned */
    private get _isHorizontalAlignment(): boolean {
        if (!this.inputMessageGroup || !this.labelCol) {
            return false;
        }
        const inputMessageGroupY = this.inputMessageGroup.nativeElement.getBoundingClientRect().y;
        const labelColRect = this.labelCol.nativeElement.getBoundingClientRect();
        const labelColBottomY = labelColRect.y + labelColRect.height;
        return labelColBottomY > inputMessageGroupY;
    }

    /**
     * @hidden
     * Sum of extra heights inside form control and formFieldExtras.
     * Label will be shifted by this number in order to be properly aligned with the control
     */
    get _controlExtrasHeightPx(): number | null {
        if (this.noLabelLayout || !this._isHorizontalAlignment) {
            // proceed only if 1. there's a label; 2. control has vertical alignment
            return null;
        }
        return (
            (this.formFieldExtras?.nativeElement.offsetHeight ?? 0) + (this.control?.extraContentHeightPx ?? 0) || null
        );
    }

    /** @hidden */
    private _labelColumnLayout$: BehaviorSubject<ColumnLayout>;
    /** @hidden */
    private _fieldColumnLayout$: BehaviorSubject<ColumnLayout>;
    /** @hidden */
    private _gapColumnLayout$: BehaviorSubject<ColumnLayout>;
    /** @hidden */
    private _needsInlineHelpPlaceSubscription?: Subscription;

    /** @hidden */
    get _groupHost(): FormGroupContainer | FormFieldGroup {
        return this.formFieldGroup ? this.formFieldGroup : this.formGroupContainer;
    }

    /**
     * Will be updated during onChanges and resize, resulting correct placement of the
     * hint respecting passed configs and given breakpoint of screen.
     */
    hintTarget?: string;

    /** @hidden */
    private _breakPointObserver: Observable<any>;

    /** @hidden */
    private _formFieldLayoutService: FormFieldLayoutService;
    /** @hidden */
    private readonly _defaultHintOptions: FieldHintOptions;

    /** @hidden */
    constructor(
        private _cd: ChangeDetectorRef,
        @Optional() formGroupContainer: FormGroupContainer,
        @Optional() readonly formFieldGroup: FormFieldGroup,
        @Optional()
        @Inject(RESPONSIVE_BREAKPOINTS_CONFIG)
        readonly _defaultResponsiveBreakPointConfig: ResponsiveBreakPointConfig,
        readonly _responsiveBreakpointsService: ResponsiveBreakpointsService,
        @Inject(FDP_FORM_FIELD_HINT_OPTIONS_DEFAULT) _providedHintOptions: FieldHintOptions,
        @Inject(FDP_FORM_FIELD_HINT_LAYOUT_CONFIG) private _hintLayoutConfig: HintLayoutConfig,
        @Self() _selfFormFieldLayoutService: FormFieldLayoutService,
        @Optional() @SkipSelf() _parentFormFieldLayoutService: FormFieldLayoutService
    ) {
        this._defaultHintOptions = {
            ...defaultFormFieldHintOptions,
            ..._providedHintOptions
        };
        this._formFieldLayoutService = _parentFormFieldLayoutService || _selfFormFieldLayoutService;
        this._labelColumnLayout$ = new BehaviorSubject(this._labelColumnLayout);
        this._fieldColumnLayout$ = new BehaviorSubject(this._fieldColumnLayout);
        this._gapColumnLayout$ = new BehaviorSubject(this._gapColumnLayout);
        // provides capability to make a field disabled. useful in reactive form approach.
        this.formControl = new FormControl({ value: null, disabled: this.disabled });
        // formGroupContainer can be injected only if current form-field is located
        // insight formGroupContainer content.
        // If this is not the case the formGroupContainer
        // will be undefined (known angular issue),
        // in such case formGroupContainer can be pointed explicitly using
        // component input annotation
        this.formGroupContainer = formGroupContainer;
        this._responsiveBreakPointConfig = _defaultResponsiveBreakPointConfig || new ResponsiveBreakPointConfig();
        this._breakPointObserver = this._responsiveBreakpointsService.observeBreakpointByConfig(
            this._responsiveBreakPointConfig
        );
    }

    /**
     * Sets initial values for label, field and gap columns
     */
    setDefaultColumnLayout(): void {
        // If layout already defined, no need to set default one.
        if (this.labelColumnLayout) {
            return;
        }
        this.listenToInlineHelpPlaceRequirementChanges(() => (this.labelColumnLayout ? this : this._groupHost));
    }

    listenToInlineHelpPlaceRequirementChanges(getSource: () => any): void {
        if (this._needsInlineHelpPlaceSubscription) {
            this._needsInlineHelpPlaceSubscription.unsubscribe();
            this._needsInlineHelpPlaceSubscription = void 0;
        }
        const setLayouts = (source: any): void => {
            this.labelColumnLayout = source.labelColumnLayout;
            this.fieldColumnLayout = source.fieldColumnLayout;
            this.gapColumnLayout = source.gapColumnLayout;
        };
        this._needsInlineHelpPlaceSubscription = this._formFieldLayoutService.needsInlineHelpPlace
            .pipe(
                map(() => this._formFieldLayoutService.getFixedLayouts(getSource())),
                tap(setLayouts),
                takeUntil(this._destroyed$)
            )
            .subscribe();
    }

    /** @hidden */
    ngOnInit(): void {
        if (this.columns && (this.columns < 1 || this.columns > 12)) {
            throw new Error('[columns] accepts numbers between 1 - 12');
        }

        if (this._isColumnLayoutEnabled) {
            this._breakPointObserver
                .pipe(takeUntil(this._destroyed$))
                .subscribe((breakPointName) => this._updateLayout(breakPointName));
        }

        this._addToFormGroup();

        this.isHorizontal$ = combineLatest([
            this._labelColumnLayout$.pipe(filter(Boolean), map(normalizeColumnLayout)),
            this._fieldColumnLayout$.pipe(filter(Boolean), map(normalizeColumnLayout)),
            this._gapColumnLayout$.pipe(map((g) => normalizeColumnLayout(g || { S: 0 })))
        ]).pipe(
            switchMap(([label, field, gap]) =>
                this._breakPointObserver.pipe(
                    map((breakpointName) => label[breakpointName] + field[breakpointName] + gap[breakpointName] <= 12)
                )
            )
        );
        this.listenToInlineHelpPlaceRequirementChanges(() => this);
    }

    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hint || changes.hintPlacement) {
            this._updateHintOptions();
            this._formFieldLayoutService.setNeedsInlineHelp(
                this,
                this.hintOptions.target === 'input' || this.hintOptions.target === 'auto'
            );
        }
        if (changes.hint && changes.hint.firstChange) {
            this._breakPointObserver
                .pipe(
                    tap((sizeName) => {
                        if (this.hintOptions.target === 'auto') {
                            this.hintTarget = this._hintLayoutConfig.hintOnInputBreakpoints.includes(sizeName)
                                ? 'input'
                                : 'label';
                        } else {
                            this.hintTarget = this.hintOptions.target;
                        }
                    }),
                    takeUntil(this._destroyed$)
                )
                .subscribe();
        }
    }

    /** @hidden */
    ngAfterContentInit(): void {
        this._cd.markForCheck();
    }

    /** @hidden */
    ngAfterViewInit(): void {
        this._updateControlProperties();
        this._validateErrorHandler();
        this._cd.detectChanges();
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._formFieldLayoutService.removeEntry(this);
        this._removeFromFormGroup();
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    /** @hidden */
    hasErrors(): boolean {
        return this._editable && !!this.control?.controlInvalid;
    }

    /**
     * Register underlying form control
     * @param formFieldControl
     */
    registerFormFieldControl(formFieldControl: FormFieldControl<any>): void {
        if (this.control) {
            throw Error('Form field can contain only one FormFieldControl');
        }

        this.control = formFieldControl;

        formFieldControl.stateChanges.pipe(startWith(null), takeUntil(this._destroyed$)).subscribe(() => {
            this._updateControlProperties();
            // need to call explicitly detectChanges() instead of markForCheck before the
            // modified validation state of the control passes over checked phase
            this.onChange.emit('stateChanges');
            this._cd.detectChanges();
        });

        // Refresh UI when value changes
        if (formFieldControl?.ngControl?.valueChanges) {
            formFieldControl.ngControl.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe(() => {
                // this.onChange.emit('valueChanges');
                this._cd.markForCheck();
            });
        }

        if (formFieldControl?.ngControl?.control) {
            const control = formFieldControl.ngControl.control;

            const hasRequiredValidator =
                this.validators.includes(Validators.required) || this.validators.includes(Validators.requiredTrue);

            if (this.required && !hasRequiredValidator) {
                this.validators.push(Validators.required);
            }

            if (hasRequiredValidator) {
                this.required = true;
            }

            // if form control is disabled, in reactive form approach
            if (this.disabled) {
                control.disable();
            }

            /**
             * There is a case when a "form-group" initial state is VALID,
             * and on the next loop a child form-filed extends it and make
             * the form-group INVALID.
             * In such case we get the error
             * "ExpressionChangedAfterItHasBeenCheckedError. Previous value is ng-valid, current value is ng-invalid".
             * To fix it we have to postpone adding form-field validators
             *
             */
            Promise.resolve().then(() => {
                control.setValidators(Validators.compose(this.validators));
                control.updateValueAndValidity({ emitEvent: false });
            });

            this._addControlToFormGroup(formFieldControl?.ngControl?.control);
        }

        this._cd.markForCheck();
    }

    /**
     * Unregister underlying form control
     * @param formFieldControl
     */
    unregisterFormFieldControl(formFieldControl: FormFieldControl<any>): void {
        if (formFieldControl !== this.control) {
            return;
        }

        this.control = null;

        this._removeControlFromFormGroup();
    }

    /** @hidden */
    private _validateErrorHandler(): void {
        if (this._editable && this.control && this._hasValidators() && !this.i18Strings) {
            throw new Error('Validation strings are required for the any provided validations.');
        }
    }

    /** @hidden */
    private _hasValidators(): boolean {
        return this.validators && this.validators.length > 1;
    }

    /**
     * @hidden
     * Add FormField to FormGroup
     */
    private _addToFormGroup(): void {
        if (!this.formGroupContainer || this.formFieldGroup) {
            return;
        }

        this.formGroupContainer.addFormField(this);
    }

    /**
     * @hidden
     * Remove FormField from FormGroup
     */
    private _removeFromFormGroup(): void {
        if (!this.formGroupContainer) {
            return;
        }
        this.formGroupContainer.removeFormField(this);
    }

    /**
     * @hidden
     * Add FormControl from FormGroup
     */
    private _addControlToFormGroup(control: AbstractControl): void {
        if (!this.formGroupContainer || !!this.formFieldGroup?.formName) {
            return;
        }
        this.formGroupContainer.addFormControl(this.id, control);
    }

    /**
     * @hidden
     * Remove FormControl from FormGroup
     */
    private _removeControlFromFormGroup(): void {
        if (!this.formGroupContainer) {
            return;
        }
        this.formGroupContainer.removeFormControl(this.id);
    }

    /**
     * @hidden
     * Need to be able to set these properties on every level.
     *  - Global FormGroup Level as well each field
     *
     *  Todo: use more elegant way to set these properties.
     */
    private _updateControlProperties(): void {
        if (this.control && this._editable) {
            this.control.id = this.id;
            this.control.required = this.required;

            if (this.placeholder) {
                this.control.placeholder = this.placeholder;
            }
        }
    }

    /** @hidden */
    private _setLayout(): void {
        try {
            const normalized = normalizeColumnLayout(this.columnLayout, 1);
            this.columnLayout = normalized;
            this._sColumnNumber = normalized['S'];
            this._mdColumnNumber = normalized['M'];
            this._lgColumnNumber = normalized['L'];
            this._xlColumnNumber = normalized['XL'];
        } catch (error) {
            this._isColumnLayoutEnabled = false;
        }
    }

    /** @hidden */
    private _updateLayout(currentBreakingPointName: string): void {
        if (this._isColumnLayoutEnabled) {
            switch (currentBreakingPointName) {
                case 'S':
                    this.column = this._sColumnNumber;
                    break;
                case 'M':
                    this.column = this._mdColumnNumber;
                    break;
                case 'L':
                    this.column = this._lgColumnNumber;
                    break;
                case 'XL':
                    this.column = this._xlColumnNumber;
                    break;
                default:
                    this.column = this._xlColumnNumber;
            }
        }

        // emit column change, so form-group knows it and re-arranges the fields
        this.onColumnChange.emit(true);
    }

    /** @hidden */
    private _updateHintOptions(): void {
        // placement is here set up because hintPlacement is deprecated
        if (typeof this.hint === 'string') {
            this.hintOptions = {
                ...this._defaultHintOptions,
                placement: this.hintPlacement ? this.hintPlacement : this._defaultHintOptions.placement,
                text: this.hint
            };
        } else if (typeof this.hint === 'object') {
            this.hintOptions = {
                ...this._defaultHintOptions,
                placement: this.hintPlacement ? this.hintPlacement : this._defaultHintOptions.placement,
                ...this.hint
            };
        }
    }
}
