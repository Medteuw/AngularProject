import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotifPrimaryComponent } from './notif-primary/notif-primary.component';
import { NotifDangerComponent } from './notif-danger/notif-danger.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    NotifPrimaryComponent,
    NotifDangerComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavBarComponent,
    SideBarComponent,
    NotifPrimaryComponent,
    NotifDangerComponent,
  ],
})
export class ComponentsModule {}
