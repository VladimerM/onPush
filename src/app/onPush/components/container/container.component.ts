import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements AfterViewChecked{
  arr = [1, 2, 3];
  ngAfterViewChecked(): void {
    console.log('container component rendered');
  }
}
