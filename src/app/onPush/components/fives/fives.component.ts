import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-fives',
  templateUrl: './fives.component.html',
  styleUrls: ['./fives.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FivesComponent implements AfterViewChecked {
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
