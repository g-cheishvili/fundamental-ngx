import { FdLanguage } from '../models/lang';

/**
 * Default set of translations of Fundamental UI library for English language
 */
export const FD_LANGUAGE_ENGLISH: FdLanguage = {
    coreCarousel: {
        leftNavigationBtnLabel: 'Go to previous item',
        rightNavigationBtnLabel: 'Go to next item'
    },
    coreDatePicker: {
        dateInputLabel: 'Date input',
        dateRangeInputLabel: 'Date range input',
        displayCalendarToggleLabel: 'Open picker',
        valueStateSuccessMessage: 'Value state Success',
        valueStateInformationMessage: 'Value state Information',
        valueStateWarningMessage: 'Value state Warning',
        valueStateErrorMessage: 'Value state Error'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Datetime input',
        displayDatetimeToggleLabel: 'Display calendar toggle',
        displayTypeDateLabel: 'Date',
        displayTypeTimeLabel: 'Time',
        datetimeOkLabel: 'Ok',
        datetimeCancelLabel: 'Cancel'
    },
    coreFeedListItem: {
        moreLabel: '{{count}} more',
        lessLabel: 'Less'
    },
    coreGridList: {
        filterBarCancelButtonTitle: 'Cancel',
        listItemStatusAriaLabel: 'Item has status. Status: {{ status }}.',
        listItemCounterAriaLabel: 'Item has {{ count }} children.',
        listItemButtonDetailsTitle: 'Details',
        listItemButtonDeleteTitle: 'Delete',
        listItemStatusContainsErrors: 'Contains errors',
        listItemStatusLocked: 'Locked',
        listItemStatusDraft: 'Draft'
    },
    coreMessageStrip: {
        dismissLabel: 'Dismiss'
    },
    coreMultiInput: {
        multiInputAriaLabel: 'Multi Value Input'
    },
    coreNavigation: {
        mainNavigation: 'Main Navigation',
        navigationPath: 'Navigation Path'
    },
    coreNestedList: {
        linkItemAriaLabel: 'Tree Item {{ itemDetails }}, {{ index }} of {{ total }}{{ selectedDescription }}'
    },
    coreOverflowLayout: {
        moreItemsButton: '{{ count }} more'
    },
    corePagination: {
        pageLabel: 'Page {{ pageNumber }}',
        currentPageAriaLabel: 'Page {{ pageNumber }} is current page',
        labelBeforeInputMobile: 'Page:',
        labelAfterInputMobile: 'of {{ totalCount }}',
        inputAriaLabel: 'Page input, Current page, Page {{ pageNumber }} of {{ totalCount }}',
        itemsPerPageLabel: 'Results per Page:',
        firstLabel: 'First',
        previousLabel: 'Previous',
        nextLabel: 'Next',
        lastLabel: 'Last',
        ariaLabel: 'Pagination',
        totalResultsLabel: '{{ totalCount }} Results'
    },
    coreProductSwitch: {
        ariaLabel: 'Product Switch'
    },
    coreShellbar: {
        collapsedItemMenuLabel: 'Collapsed Item Menu',
        cancel: 'Cancel',
        search: 'Search'
    },
    coreSlider: {
        singleMinMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        singleValueminDetails: 'Value is {{ value }}',
        singleValuemaxDetails: 'Value is {{ value }}',
        singleValueNowDetails: 'Current value is {{ value }}',
        multipleHandle1MinMaxDetails: 'Range slider minimum value is {{ min }}, maximum value is {{ max }}',
        multipleHandle1ValueminDetails: 'Value is {{ value }}',
        multipleHandle1ValuemaxDetails: 'Value is {{ value }}',
        multipleHandle1ValueNowDetails: 'Current value is {{ value }}',
        multipleHandle2MinMaxDetails: 'Range slider minimum value is {{ min }}, maximum value is {{ max }}',
        multipleHandle2ValueminDetails: 'Value is {{ value }}',
        multipleHandle2ValuemaxDetails: 'Value is {{ value }}',
        multipleHandle2ValueNowDetails: 'Current value is {{ value }}'
    },
    coreSplitButton: {
        expandButtonAriaLabel: 'More actions',
        arialLabel: 'Split button'
    },
    coreSplitter: {
        paginationItemAriaLabel: 'Section'
    },
    coreStepInput: {
        incrementButtonTitle: 'Increment',
        decrementButtonTitle: 'Decrement',
        ariaRoleDescription: 'Step Input'
    },
    coreSwitch: {
        semanticAcceptLabel: 'Accept',
        semanticDeclineLabel: 'Decline'
    },
    coreTabs: {
        tabListExpandButtonText: 'More'
    },
    coreText: {
        moreLabel: '{{count}} more',
        lessLabel: 'Less'
    },
    coreTime: {
        componentAriaName: 'Time picker',
        increaseHoursLabel: 'Increase hours',
        hoursLabel: 'Hrs',
        decreaseHoursLabel: 'Decrease hours',
        increaseMinutesLabel: 'Increase minutes',
        minutesLabel: 'Min',
        decreaseMinutesLabel: 'Decrease minutes',
        increaseSecondsLabel: 'Increase seconds',
        secondsLabel: 'Sec',
        decreaseSecondsLabel: 'Decrease seconds',
        increasePeriodLabel: 'Increase period',
        periodLabel: 'Period',
        decreasePeriodLabel: 'Decrease period',
        navigationInstruction:
            'To move between items in this list, press top arrow or bottom arrow. To switch between lists press left arrow or right arrow.'
    },
    coreTimePicker: {
        timePickerInputLabel: 'Time picker input',
        timePickerButtonLabel: 'Open picker'
    },
    coreToken: {
        deleteButtonLabel: 'Deletable',
        ariaRoleDescription: 'token'
    },
    coreTokenizer: {
        moreLabel: '{{count}} more'
    },
    coreUploadCollection: {
        menuOkText: 'Ok',
        menuCancelText: 'Cancel',
        menuEditAriaLabel: 'Edit',
        menuDeleteAriaLabel: 'Delete',
        menuOkAriaLabel: 'Edit',
        menuCancelAriaLabel: 'Cancel',
        formItemPlaceholder: 'Filename'
    },
    coreWizard: {
        ariaLabel: 'Wizard'
    },
    coreBreadcrumb: {
        overflowTitleMore: 'More'
    },
    platformActionBar: {
        backButtonLabel: 'Go Back'
    },
    platformApprovalFlow: {
        defaultWatchersLabel: 'Watchers',
        defaultTitle: 'Approval process',
        nextButtonAriaLabel: 'Go to next slide',
        prevButtonAriaLabel: 'Go to previous slide',
        editModeSaveButtonLabel: 'Save',
        editModeExitButtonLabel: 'Exit',
        emptyTitle: 'Start adding approvers and watchers',
        emptyHint: 'To add approvers click "Add a step". To add watchers, click the Watchers field.',
        addNodeDialogHeaderAddApprovers: 'Add approvers',
        addNodeDialogHeaderEditApprover: 'Edit approver',
        addNodeDialogHeaderAddApproverTeam: 'User/Team',
        addNodeDialogHeaderDetail: 'Detail',
        addNodeDialogNodeType: 'Parallel or serial',
        addNodeDialogNodeTypeSerial: 'Serial',
        addNodeDialogNodeTypeParallel: 'Parallel',
        addNodeDialogApproverType: 'Approver type',
        addNodeDialogApproverTypeUser: 'A user',
        addNodeDialogApproverTypeTeamAnyone: 'Anyone on the team',
        addNodeDialogApproverTypeTeamEveryone: 'Everyone on the team',
        addNodeDialogUserOrTeam: 'User/Team',
        addNodeDialogAddToNext: 'Add to the next serial node',
        addNodeDialogDueDate: 'Due date',
        addNodeSearchPlaceholder: 'Search',
        addNodeAddActionBtnLabel: 'Add',
        addNodeCancelActionBtnLabel: 'Cancel',
        addNodeSelectApproverActionBtnLabel: 'Select',
        addNodeCancelApproverSelectionActionBtnLabel: 'Cancel',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Close',
        userDetailsHeader: 'Detail',
        userDetailsSendReminderBtnLabel: 'Send reminder',
        userDetailsCancelBtnLabel: 'Cancel',
        messagesApproverAddedSuccess: '1 approver has been added',
        messagesTeamAddedSuccess: '1 team has been added',
        messagesNodeEdited: '1 approver has been edited',
        messagesNodeRemovedSingular: '1 approver has been removed',
        messagesNodeRemovedPlural: 'Approvers have been removed',
        messagesTeamRemoved: '1 team has been removed',
        messagesErrorBuildGraph: 'There was an error when trying to build graph. Check the initial data.',
        messagesUndoAction: 'Undo',
        nodeMembersCount: '{{ count }} members',
        nodeVariousTeams: 'Various teams',
        nodeStatusDueToday: 'Due today',
        nodeStatusDueInXDays: ' Due in {{ count }} days',
        nodeStatusXDaysOverdue: '{{ count }} days overdue',
        nodeActionAddApproversBefore: 'Add approvers before',
        nodeActionAddApproversAfter: 'Add approvers after',
        nodeActionAddApproversParallel: 'Add parallel approvers',
        nodeActionEditApprover: 'Edit approver',
        nodeActionRemove: 'Remove',
        selectTypeDialogMoveApproverAs: 'Move approver as',
        selectTypeDialogParallelOrSerial: 'Parallel or serial',
        selectTypeDialogNodeTypeParallel: 'Parallel approver',
        selectTypeDialogNodeTypeSerial: 'Serial approver',
        selectTypeDialogConfirmButton: 'Confirm',
        selectTypeDialogCancelButton: 'Cancel',
        toolbarAddStepButton: 'Add a step',
        toolbarEditButton: 'Edit',
        toolbarAddApproversBefore: 'Add approvers before',
        toolbarAddApproversAfter: 'Add approvers after',
        toolbarAddApproversParallel: 'Add parallel approvers',
        toolbarRemove: 'Remove',
        toolbarEditApprover: 'Edit approver',
        watchersInputPlaceholder: 'Search here..',
        userListSelectedItemsCountSingular: '1 item selected',
        userListSelectedItemsCountPlural: '{{ count }} items selected',
        statusApproved: 'approved',
        statusRejected: 'rejected',
        statusInProgress: 'in progress',
        statusNotStarted: 'not started'
    },
    platformFeedInput: {
        userTitle: 'User'
    },
    platformVHD: {
        selectionBarLabel: 'Selected and condition items',
        selectedAndConditionLabel: 'Selected Items and Conditions',
        footerClearSelectedTitle: 'clear selected items',
        footerClearSelectedAriaLabel: 'clear selected items',
        searchButtonLabel: 'Go',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Cancel',
        selectedEmptyLabel: 'No Items or Conditions Selected',
        searchPlaceholder: 'Search',
        searchAdvancedSearchLabel: 'Filters',
        searchShowAdvancedSearchLabel: 'Show filters',
        searchHideAdvancedSearchLabel: 'Hide filters',
        searchShowAllAdvancedSearchLabel: 'Show all filters',
        searchHideAllAdvancedSearchLabel: 'Hide all filters',
        selectTabDisplayCountLabel: 'Items ({{ count }})',
        selectTabMoreBtnLabel: 'More',
        selectTabCountHiddenA11yLabel: 'contains {{ rowCount }} rows and {{ colCount }} columns',
        selectMobileTabBackBtnTitle: 'Back',
        selectMobileTabBtnOpenDialogLabel: 'Open dialog',
        selectMobileTabTitle: '{{ title }} tab',
        selectMobileConditionEmpty: 'Empty',
        defineConditionTitle: 'Product',
        defineConditionSelectedValueHiddenA11yLabel: 'selected value {{ value }}',
        defineConditionConditionsGroupHeaderInclude: 'Include',
        defineConditionConditionsGroupHeaderExclude: 'Exclude',
        defineConditionFromPlaceholder: 'from',
        defineConditionToPlaceholder: 'to',
        defineConditionValuePlaceholder: 'value',
        defineConditionRemoveConditionButtonTitle: 'Remove Condition',
        defineConditionAddConditionButtonLabel: 'Add',
        defineConditionAddConditionButtonTitle: 'Add Condition',
        defineConditionConditionStrategyLabelContains: 'contains',
        defineConditionConditionStrategyLabelEqualTo: 'equal to',
        defineConditionConditionStrategyLabelBetween: 'between',
        defineConditionConditionStrategyLabelStartsWith: 'starts with',
        defineConditionConditionStrategyLabelEndsWith: 'ends with',
        defineConditionConditionStrategyLabelLessThan: 'less than',
        defineConditionConditionStrategyLabelLessThanEqual: 'less than equal',
        defineConditionConditionStrategyLabelGreaterThan: 'greater than',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'greater than equal',
        defineConditionConditionStrategyLabelEmpty: 'empty',
        defineConditionConditionStrategyLabelNotEqualTo: 'not equal to',
        defineConditionConditionStrategyLabelNotEmpty: 'not empty',
        defineConditionMaxCountError: 'Enter a value with no more than {{ count }} characters',
        selectTabTitle: 'Select from list',
        searchTableEmptyMessage: 'Use the search to get results',
        defineTabTitle: 'Define Conditions'
    },
    platformCombobox: {
        countListResultsSingular: '1 result list item',
        countListResultsPlural: '{{ count }} result list items'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Select Options',
        inputIconTitle: 'Select Options',
        mobileShowAllItemsButton: 'Show all items',
        mobileShowSelectedItemsButton: 'Show selected items'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 character over the limit',
        counterMessageCharactersOverTheLimitPlural: '{{ count }} characters over the limit',
        counterMessageCharactersRemainingSingular: '1 character remaining',
        counterMessageCharactersRemainingPlural: '{{ count }} characters remaining'
    },
    platformLink: {
        roleDescriptionWithMedia: 'Media: {{ media }}'
    },
    platformList: {
        loadingAriaLabel: 'loading'
    },
    platformObjectListItem: {
        detailsActionAriaLabel: 'detail',
        deleteActionAriaLabel: 'delete'
    },
    platformStandardListItem: {
        detailsActionAriaLabel: 'detail',
        deleteActionAriaLabel: 'delete'
    },
    platformSearchField: {
        clearButtonTitle: 'Clear',
        submitButtonTitle: 'Search',
        synchronizeButtonTitle: 'Synchronize',
        searchSuggestionMessage: '{{ count }} suggestions found.',
        searchSuggestionNavigateMessage: 'use up and down arrows to navigate'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Search',
        submitButtonLabel: 'Go',
        filtersButtonLabel: 'Filters ({{ filtersCount }})',
        showFiltersButtonLabel: 'Show filters',
        hideFiltersButtonLabel: 'Hide filters',
        defineConditionsRemoveConditionButtonTitle: 'Remove condition',
        defineConditionsAddConditionButtonLabel: 'Add condition',
        defineConditionsSubmitButtonLabel: 'Go',
        defineConditionsCancelButton: 'Cancel',
        selectFiltersHeader: 'Filters',
        selectFiltersAvailableFiltersText: 'Available filters',
        selectFiltersFilterColumnLabel: 'Filter',
        selectFiltersActiveColumnLabel: 'Active',
        selectFiltersSubmitButtonLabel: 'Go',
        selectFiltersCancelButton: 'Cancel',
        filterConditionContains: 'contains',
        filterConditionEqualTo: 'equal to',
        filterConditionBetween: 'between',
        filterConditionBeginsWith: 'starts with',
        filterConditionEndsWith: 'ends with',
        filterConditionLessThan: 'less than',
        filterConditionLessThanOrEqualTo: 'less than or equal to',
        filterConditionGreaterThan: 'greater than',
        filterConditionGreaterThanOrEqualTo: 'greater than or equal to',
        filterConditionAfter: 'after',
        filterConditionOnOrAfter: 'on or after',
        filterConditionBefore: 'before',
        filterConditionBeforeOrOn: 'before or on',
        filterConditionValuePlaceholder: 'value',
        filterConditionValueFromPlaceholder: 'from',
        filterConditionValueToPlaceholder: 'to',
        settingsCategoryAll: 'All',
        settingsCategoryVisible: 'Visible',
        settingsCategoryActive: 'Active',
        settingsCategoryVisibleAndActive: 'Visible and active',
        settingsCategoryMandatory: 'Mandatory'
    },
    platformTable: {
        headerMenuSortAsc: 'Sort Ascending',
        headerMenuSortDesc: 'Sort Descending',
        headerMenuGroup: 'Group',
        headerMenuFreeze: 'Freeze',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'Unfreeze',
        headerMenuFilter: 'Filter',
        defaultEmptyMessage: 'No data found',
        resetChangesButtonLabel: 'Reset',
        editableCellNumberPlaceholder: 'Enter value',
        editableCellDatePlaceholder: 'Enter value',
        editableCellStringPlaceholder: 'Enter value',
        P13ColumnsDialogHeader: 'Columns',
        P13ColumnsDialogSearchPlaceholder: 'Search',
        P13ColumnsDialogsShowSelected: 'Show Selected',
        P13ColumnsDialogShowAll: 'Show all',
        P13ColumnsDialogSelectAll: 'Select All ({{ selectedColumnsCount }}/{{ selectableColumnsCount }})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Cancel',
        P13ColumnsDialogMoveToTopBtn: 'Move to Top',
        P13ColumnsDialogMoveUpBtn: 'Move Up',
        P13ColumnsDialogMoveDownBtn: 'Move Down',
        P13ColumnsDialogMoveToBottomBtn: 'Move to Bottom',
        P13FilterStrategyLabelBetween: 'between',
        P13FilterStrategyLabelContains: 'contains',
        P13FilterStrategyLabelBeginsWith: 'begins with',
        P13FilterStrategyLabelEndsWith: 'ends with',
        P13FilterStrategyLabelEqualTo: 'equal to',
        P13FilterStrategyLabelGreaterThan: 'greater than',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'greater than or equal to',
        P13FilterStrategyLabelLessThan: 'less than',
        P13FilterStrategyLabelLessThanOrEqualTo: 'less than or equal to',
        P13FilterStrategyLabelAfter: 'after',
        P13FilterStrategyLabelOnOrAfter: 'on or after',
        P13FilterStrategyLabelBefore: 'before',
        P13FilterStrategyLabelBeforeOrOn: 'before or on',
        P13FilterStrategyLabelNotDefined: 'Not Defined',
        P13FilterBooleanOptionNotDefined: ' ',
        P13FilterBooleanOptionTrue: 'Yes',
        P13FilterBooleanOptionFalse: 'No',
        P13FilterDialogHeader: 'Filter By',
        P13FilterDialogIncludePanelTitleWithCount: 'Include ({{ count }})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Include',
        P13FilterDialogExcludePanelTitleWithCount: 'Exclude ({{ count }})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Exclude',
        P13FilterDialogRemoveFilterBtnTitle: 'Remove Filter',
        P13FilterDialoAddFilterBtnTitle: 'Add Filter',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Cancel',
        P13GroupDialogHeader: 'Group',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(none)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Show Field as Column',
        P13GroupDialogRemoveGroupBtnTitle: 'Remove',
        P13GroupDialogAddNewGroupBtnTitle: 'Add new',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Cancel',
        P13SortDialogHeader: 'Sort',
        P13SortDialogNoneSelectedColumn: '(none)',
        P13SortDialogNoneSelectedSorting: '(none)',
        P13SortDialogSortOrderSelectOptionAsc: 'Ascending',
        P13SortDialogSortOrderSelectOptionDesc: 'Descending',
        P13SortDialogRemoveSortBtnTitle: 'Remove',
        P13SortDialogAddNewSortBtnTitle: 'Add new',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Cancel',
        toolbarSearchPlaceholder: 'Search',
        toolbarActionCreateButtonLabel: 'Create',
        toolbarActionSaveButtonLabel: 'Save',
        toolbarActionCancelButtonLabel: 'Cancel',
        toolbarActionSortButtonTitle: 'Sort',
        toolbarActionFilterButtonTitle: 'Filter',
        toolbarActionGroupButtonTitle: 'Group',
        toolbarActionColumnsButtonTitle: 'Columns',
        toolbarActionExpandAllButtonTitle: 'Expand all',
        toolbarActionCollapseAllButtonTitle: 'Collapse all',
        filterDialogNotFilteredLabel: '(Not Filtered)',
        filterDialogFilterByLabel: 'Filter by: {{ filterLabel }}',
        filterDialogFilterTitle: 'Filter',
        filterDialogFilterBy: 'Filter By',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Cancel',
        groupDialogHeader: 'Group',
        groupDialogGroupOrderHeader: 'Group Order',
        groupDialogGroupOrderAsc: 'Ascending',
        groupDialogGroupOrderDesc: 'Descending',
        groupDialogGroupByHeader: 'Group By',
        groupDialogNotGroupedLabel: '(Not Grouped)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Cancel',
        sortDialogHeader: 'Sort',
        sortDialogSortOrderHeader: 'Sort Order',
        sortDialogSortOrderAsc: 'Ascending',
        sortDialogSortOrderDesc: 'Descending',
        sortDialogSortByHeader: 'Sort By',
        sortDialogNotSortedLabel: '(Not Sorted)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Cancel'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'Go to Previous',
        detailsGotoNextButtonTitle: 'Go to Next',
        detailsDialogCloseBtnLabel: 'Close',
        roleDescription: 'Image'
    },
    platformUploadCollection: {
        moveToTitle: 'Move to',
        moveToTitleFolder: 'Folder',
        moveToNewFolderBtnLabel: 'New Folder',
        moveToAllFilesSubHeaderLabel: 'All files',
        moveToConfirmBtn: 'Move',
        moveToCloseBtn: 'Cancel',
        newFolderTitle: 'New folder',
        newFolderAtRootInputLabel: 'Name of new folder',
        newFolderAtFolderInputLabel: 'Name of new folder inside of {{ folderName }}',
        newFolderInputPlaceholder: 'Type here..',
        newFolderInputErrorLabel: 'Maximum {{ count }} characters allowed',
        newFolderDialogCreateBtnLabel: 'Create',
        newFolderDialogCancelBtnLabel: 'Cancel',
        breadcrumbLabelAllFiles: 'All files',
        breadcrumbLabelAllFilesWithTotal: 'All files ({{ total }})',
        searchPlaceholder: 'Search',
        addBtnLabel: 'Add',
        newFolderBtnLabel: 'New Folder',
        moveToBtnLabel: 'Move to',
        downloadBtnLabel: 'Download',
        updateVersionBtnLabel: 'Update version',
        removeBtnLabel: 'Remove',
        folderIconTitle: 'Folder icon',
        fileIconTitle: 'File icon',
        editFileNameInputPlaceholder: 'Enter a name',
        editFileNameFileAlreadyExistsError: 'File with this name already exists',
        editFileNameFolderAlreadyExistsError: 'Folder with this name already exists',
        itemStatusSuccessful: 'Successful',
        itemStatusUnsuccessful: 'Unsuccessful',
        uploadNewFileAfterFailAction: 'Run',
        cancelUploadNewFileAction: 'Cancel',
        itemMenuBtnTitle: 'More',
        dragDropAreaText: 'Drag files to upload',
        noDataText: 'No files found',
        noDataDescription: 'Drop files to upload, or use the “Add” button.',
        paginationTotal: 'Showing {{ from }}-{{ to }} of {{ total }}',
        resultsPerPage: 'Results per page',
        messageCreateFailed: 'Failed to create {{ folderName }}.',
        messageCreateSuccess: '{{ folderName }} has been created.',
        messageUpdateVersionFailed: 'Failed to update version of {{ folderName }}.',
        messageUpdateVersionSuccess: '{{ folderName }} version has been updated.',
        messageFileRenameFailed: 'Failed to rename "{{ from }}" to "{{ to }}."',
        messageFileRenameSuccess: '"{{ from }}" has been renamed to "{{ to }}".',
        messageRemoveFoldersAndFilesFailed: 'Failed to remove {{ foldersCount }} folders and {{ filesCount }} files.',
        messageRemoveFoldersAndFilesSuccess: '{{ foldersCount }} folders and {{ filesCount }} files have been removed.',
        messageRemoveFoldersFailed: 'Failed to remove {{ foldersCount }} folders.',
        messageRemoveFoldersSuccess: '{{ foldersCount }} folders have been removed.',
        messageRemoveFilesFailed: 'Failed to remove {{ filesCount }} files.',
        messageRemoveFilesSuccess: '{{ filesCount }} files have been removed.',
        messageRemoveFileOrFolderFailed: 'Failed to remove {{ name }}.',
        messageRemoveFileOrFolderSuccess: '{{ name }} has been removed.',
        messageMoveFoldersAndFilesFailed:
            'Failed to move {{ foldersCount }} folders and {{ filesCount }} files to {{ to }}.',
        messageMoveFoldersAndFilesSuccess:
            '{{ foldersCount }} folders and {{ filesCount }} files have been moved to {{ to }}.',
        messageMoveFoldersFailed: 'Failed to move {{ foldersCount }} folders to {{ to }}.',
        messageMoveFoldersSuccess: '{{ foldersCount }} folders have been moved to {{ to }}.',
        messageMoveFilesFailed: 'Failed to move {{ filesCount }} files to {{ to }}.',
        messageMoveFilesSuccess: '{{ filesCount }} files have been moved to {{ to }}.',
        messageMoveFileOrFolderFailed: 'Failed to move {{ name }} to {{ to }}.',
        messageMoveFileOrFolderSuccess: '{{ name }} has been moved to {{ to }}.',
        messageMoveRootFoldersAndFilesFailed:
            'Failed to move {{ foldersCount }} folders and {{ filesCount }} files to all files.',
        messageMoveRootFoldersAndFilesSuccess:
            '{{ foldersCount }} folders and {{ filesCount }} files have been moved to all files.',
        messageMoveRootFoldersFailed: 'Failed to move {{ foldersCount }} folders to all files.',
        messageMoveRootFoldersSuccess: '{{ foldersCount }} folders have been moved to all files.',
        messageMoveRootFilesFailed: 'Failed to move {{ filesCount }} files to all files.',
        messageMoveRootFilesSuccess: '{{ filesCount }} files have been moved to all files.',
        messageMoveRootFileOrFolderFailed: 'Failed to move {{ name }} to all files.',
        messageMoveRootFileOrFolderSuccess: '{{ name }} has been moved to all files.',
        messageFileTypeMismatchPlural: '{{ filesCount }} files have the wrong type. Allowed types: {{ allowedTypes }}.',
        messageFileTypeMismatchSingular:
            'The file "{{ fileName }}" has the wrong type. Allowed types: {{ allowedTypes }}.',
        messageFileSizeExceededPlural:
            '{{ filesCount }} files exceeded the maximum file size. Allowed max file size: {{ maxFileSize }}.',
        messageFileSizeExceededSingular:
            'The file "{{ fileName }}" exceeded the maximum file size. Allowed max file size: {{ maxFileSize }}.',
        messageFileNameLengthExceededPlural:
            '{{ filesCount }} files exceeded the maximum filename length. Allowed filename length: {{ maxFilenameLength }} characters.',
        messageFileNameLengthExceededSingular:
            'The name "{{ fileName }}" exceeded the maximum filename length. Allowed filename length: {{ maxFilenameLength }} characters.'
    },
    platformWizardGenerator: {
        summarySectionEditStep: 'Edit'
    },
    platformMessagePopover: {
        allErrors: 'All',
        defaultErrors: {
            email: 'Email is invalid',
            max: 'The field exceeds maximum value',
            maxLength: 'The field exceeds maximum length',
            min: 'The field value is less than allowed',
            minLength: 'The field length is less than allowed',
            pattern: 'The field value is invalid',
            required: 'The field is mandatory',
            requiredTrue: 'The field is mandatory'
        }
    },
    platformVariantManagement: {
        manage: 'Manage',
        saveAs: 'Save as',
        saveView: 'Save View',
        save: 'Save',
        myViews: 'My Views',
        view: 'View',
        setAsDefault: 'Set as Default',
        public: 'Public',
        applyAutomatically: 'Apply Automatically',
        requiredFieldError: 'This field is required.',
        nameTakenFieldError: 'Variant with such name already exists. Please chose a different name.',
        cancel: 'Cancel',
        manageViews: 'Manage Views',
        markAsFavourite: 'Mark as Favourite',
        sharing: 'Sharing',
        default: 'Default',
        createdBy: 'Created By',
        removeVariant: 'Remove View',
        search: 'Search',
        access: {
            public: 'Public',
            private: 'Private'
        }
    },
    platformSelect: {
        selectOptionLabel: 'Select an Option'
    },
    fnSlider: {
        minMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        valueminDetails: 'Value is {{ value }}',
        valuemaxDetails: 'Value is {{ value }}',
        valueNowDetails: 'Current value is {{ value }}'
    },
    fnSwitch: {
        semanticAcceptLabel: 'Accept',
        semanticDeclineLabel: 'Decline'
    },
    coreTree: {
        expand: 'Expand node',
        collapse: 'Collapse node',
        noData: 'No data'
    }
};
