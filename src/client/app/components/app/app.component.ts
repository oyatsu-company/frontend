/**
 * AppComponent
 */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

declare const ga: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private translate: TranslateService
    ) { }

    /**
     * 初期化
     * @method ngOnInit
     */
    public ngOnInit() {
        this.locales();
        if (environment.ANALYTICS_ID !== '') {
            this.analytics();
        }
    }

    /**
     * 言語設定
     * @example {{ 'HOME.HELLO' | translate: { value: 'world'} }}
     */
    private locales() {
        this.translate.addLangs(['ja', 'en']);
        this.translate.setDefaultLang('ja');
        console.log('translate', this.translate);
    }

    /**
     * Googleアナリティクス pageview イベント
     */
    private analytics() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Googleアナリティクス pageview
                try {
                    ga('create', environment.ANALYTICS_ID, 'auto');
                    ga('set', 'page', event.urlAfterRedirects);
                    ga('send', 'pageview');
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }
}
