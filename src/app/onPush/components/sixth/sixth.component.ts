import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SixthComponent implements AfterViewChecked {
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
