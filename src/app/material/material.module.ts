import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";



const modules = [
  Material.MatFormFieldModule,
  Material.MatToolbarModule,
  Material.MatInputModule,
  Material.MatDatepickerModule,
  Material.MatNativeDateModule,
  Material.MatSelectModule,
  Material.MatTableModule,
  Material.MatTabsModule,
  Material.MatGridListModule,
  Material.MatListModule,
  Material.MatAutocompleteModule,
  Material.MatChipsModule,
  Material.MatIconModule,
  Material.MatPaginatorModule,
  Material.MatButtonModule,
  Material.MatDialogModule,
  Material.MatIconModule
];

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ...modules

  ],
  exports: [...modules]
})
export class MaterialModule {

}
