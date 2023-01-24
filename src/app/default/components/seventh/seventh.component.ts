import { AfterViewChecked, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.scss'],
})
export class SeventhComponent implements AfterViewChecked {
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
