import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdComponent implements AfterViewChecked {
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
