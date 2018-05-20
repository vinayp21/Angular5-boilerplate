import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() data;
    title = 'app';
    myObj = {
        test: 'success'
    };
    receiveChildData(data) {
        alert('received ' + data);
    }
}
