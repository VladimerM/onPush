import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { FirstComponent } from './components/first/first.component';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FivesComponent } from './components/fives/fives.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { InnerSecondComponent } from './components/second/inner-second/inner-second.component';



@NgModule({
  declarations: [ContainerComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FivesComponent,  SixthComponent, SeventhComponent, InputComponent, InnerSecondComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContainerComponent,
      },
    ]),
  ],
})
export class PartOnPushModule {}
