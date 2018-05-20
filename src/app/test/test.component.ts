import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    @Input() props;
    @Output() dataUp = new EventEmitter();
    constructor() {}

    ngOnInit() {}
    CallMe() {
        alert('called!');
        this.dataUp.emit('Child Data');
    }
}
