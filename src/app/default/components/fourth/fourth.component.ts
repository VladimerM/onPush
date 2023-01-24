import { AfterViewChecked, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss'],
})
export class FourthComponent implements AfterViewChecked {
  constructor(private el: ElementRef, private zone: NgZone) {}
  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.querySelector('p').classList.add('highlight');
      setTimeout(() => {
        this.el.nativeElement.querySelector('p').classList.remove('highlight');
      }, 1500);
    });
  }
}
