import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from '../shared/map/map.module';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListEntryComponent } from './rental-list-entry/rental-list-entry.component';
import { RentalComponent } from './rental.component';

import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { UppercasePipe } from '../shared/pipes/uppercase.pipe';

const routes: Routes = [
  {path: 'rentals', component: RentalComponent, 
    children: [
      { path: '', component: RentalListComponent },
      { path: ':rentalId', component: RentalDetailComponent }
    ]},
]

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListEntryComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MapModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule {}