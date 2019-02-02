import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { factory } from '@cinerino/api-javascript-client';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { getTicketPrice } from '../../../functions';

@Component({
    selector: 'app-order-detail-modal',
    templateUrl: './order-detail-modal.component.html',
    styleUrls: ['./order-detail-modal.component.scss']
})
export class OrderDetailModalComponent implements OnInit, AfterViewInit {
    @Input() public order: factory.order.IOrder;
    public moment: typeof moment = moment;
    public getTicketPrice = getTicketPrice;

    constructor(
        public activeModal: NgbActiveModal,
        private elementRef: ElementRef
    ) { }

    public ngOnInit() {
    }

    public ngAfterViewInit() {
        const element: HTMLElement = this.elementRef.nativeElement.querySelector('.scroll');
        setTimeout(() => {
            element.scrollTo(0, 0);
        }, 0);
    }

}
