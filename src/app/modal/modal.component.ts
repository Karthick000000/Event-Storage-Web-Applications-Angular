import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { $ } from 'protractor';

import { ModalService } from './modal.service';

@Component({ 
    selector: 'rc-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
            if (el.target.className === 'rc-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    // open(): void {
    //     console.log(this.size);
    //     this.element.style.display = 'block';
    //     document.body.classList.add('rc-modal-open');
    // }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('rc-modal-open');
    }
    open(size:string){
        console.log(size);
        this.element.style.display = 'block';
        // this.element.addClass(size);
        // console.log(this.element);
        this.element.firstChild.classList.add(size);
        document.body.classList.add('rc-modal-open');
        // $('#rc-modal').addClass(size);
    }
}