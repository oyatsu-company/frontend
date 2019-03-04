/**
 * NgModule
 */

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {
    AuthIndexComponent,
    AuthSigninComponent,
    AuthSignoutComponent,
    BaseComponent,
    CongestionComponent,
    ErrorComponent,
    ExpiredComponent,
    InquiryConfirmComponent,
    InquiryInputComponent,
    MaintenanceComponent,
    NotfoundComponent,
    OrderListComponent,
    PurchaseBaseComponent,
    PurchaseCinemaCartComponent,
    PurchaseCinemaScheduleComponent,
    PurchaseCinemaSeatComponent,
    PurchaseCinemaTicketComponent,
    PurchaseCompleteComponent,
    PurchaseConfirmComponent,
    PurchaseEventScheduleComponent,
    PurchaseEventTicketComponent,
    PurchaseInputComponent,
    PurchaseRootComponent,
    SettingComponent
} from './components/pages';
import {
    AlertModalComponent,
    ConfirmModalComponent,
    ContentsComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    LoadingComponent,
    MvtkCheckModalComponent,
    OrderDetailModalComponent,
    PurchaseCinemaScheduleFilmComponent,
    PurchaseCinemaTicketModalComponent,
    PurchaseEventScheduleWorkComponent,
    PurchaseEventTicketModalComponent,
    PurchaseInfoComponent,
    PurchaseTransactionModalComponent,
    QrCodeModalComponent,
    ScreenComponent,
    SecurityCodeModalComponent,
    TransactionRemainingTimeComponent
} from './components/parts';
import { ChangeLanguagePipe } from './pipes/change-language.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { LibphonenumberFormatPipe } from './pipes/libphonenumber-format.pipe';
import { StoreModule } from './store.module';
import { CoreStoreModule } from './store/core/store';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/i18n/');
}

@NgModule({
    declarations: [
        AppComponent,
        AuthSigninComponent,
        AuthSignoutComponent,
        PurchaseBaseComponent,
        PurchaseInputComponent,
        PurchaseConfirmComponent,
        PurchaseCompleteComponent,
        NotfoundComponent,
        AuthIndexComponent,
        ContentsComponent,
        HeaderComponent,
        FooterComponent,
        ScreenComponent,
        PurchaseCinemaTicketModalComponent,
        PurchaseEventTicketModalComponent,
        AlertModalComponent,
        PurchaseInfoComponent,
        LoadingComponent,
        ErrorComponent,
        BaseComponent,
        HeaderMenuComponent,
        ConfirmModalComponent,
        MvtkCheckModalComponent,
        SettingComponent,
        InquiryInputComponent,
        InquiryConfirmComponent,
        LibphonenumberFormatPipe,
        CongestionComponent,
        MaintenanceComponent,
        PurchaseTransactionModalComponent,
        SecurityCodeModalComponent,
        QrCodeModalComponent,
        TransactionRemainingTimeComponent,
        ExpiredComponent,
        OrderListComponent,
        OrderDetailModalComponent,
        ChangeLanguagePipe,
        FormatDatePipe,
        PurchaseCinemaCartComponent,
        PurchaseCinemaScheduleComponent,
        PurchaseCinemaSeatComponent,
        PurchaseCinemaTicketComponent,
        PurchaseEventTicketComponent,
        PurchaseEventScheduleComponent,
        PurchaseRootComponent,
        PurchaseCinemaScheduleFilmComponent,
        PurchaseEventScheduleWorkComponent
    ],
    entryComponents: [
        PurchaseCinemaTicketModalComponent,
        PurchaseEventTicketModalComponent,
        AlertModalComponent,
        ConfirmModalComponent,
        QrCodeModalComponent,
        MvtkCheckModalComponent,
        PurchaseTransactionModalComponent,
        SecurityCodeModalComponent,
        OrderDetailModalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SwiperModule,
        StoreModule,
        CoreStoreModule,
        NgbModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
