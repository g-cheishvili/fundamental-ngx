import { Injectable } from '@angular/core';

import { ContentDensity } from '@fundamental-ngx/cdk/utils';
import { DataProvider, MatchingStrategy, PlatformConfig } from '@fundamental-ngx/platform/shared';

/**
 * Default options for Combobox
 */
@Injectable({ providedIn: 'root' })
export class ComboboxConfig {
    /**
     * Content Density of element. 'cozy' | 'compact'
     */
    contentDensity: ContentDensity;

    /**
     * String matching strategy for typeahead list. Default: 'starts with per term'
     */
    matchingStrategy: MatchingStrategy = MatchingStrategy.STARTS_WITH_PER_TERM;

    /**
     * Maps data providers
     */
    providers: Map<string, DataProvider<any>> | null = new Map();

    /** @hidden */
    constructor(platformConfig: PlatformConfig) {
        this.contentDensity = platformConfig.contentDensity;
    }

    /**
     * Create Provider factory function
     */
    static createProviderFactory(obj: Partial<ComboboxConfig>): (platformConfig: PlatformConfig) => ComboboxConfig {
        const useFactory = (platformConfig: PlatformConfig): ComboboxConfig =>
            Object.assign(new ComboboxConfig(platformConfig), obj);
        return useFactory;
    }
}
