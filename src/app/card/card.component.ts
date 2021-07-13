import { Component, OnInit } from "@angular/core";
import { interval } from 'rxjs';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
    randChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    origin: string = '';
    textClass: string = '';

    ngOnInit() {
        this.origin = this.generateString();
        this.textClass = this.checkString(this.origin);
        // this.origin = 'qwert';
        // this.textClass = 'text';
        
        const secondsCounter = interval(3000);
        const subscription = secondsCounter.subscribe(() => {
            this.origin = this.generateString();
            this.textClass = this.checkString(this.origin);
        });

        // setInterval(() => {
        //     this.origin = this.generateString();
        //     this.checkString();
        // }, 3000)
    }

    generateString(): string {
        let result: string = '';
        for (let i = 0; i < 5; i++) {
            // result += String.fromCharCode(Math.random() * (122-48) + 48);
            result += this.randChars.charAt(Math.random() * this.randChars.length)
        }
        return result;
    }

    checkString(string: string): string {
        if (string.includes('0')) {
            return 'none';
        }

        if (!isNaN(+string)) {
            return 'green'
        }

        if (string == string.split('').reverse().join('')) {
            return 'red';
        }

        return 'text';
    }

}