import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-inner-second',
  templateUrl: './inner-second.component.html',
  styleUrls: ['./inner-second.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerSecondComponent implements AfterViewChecked {

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
