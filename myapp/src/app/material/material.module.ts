import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSliderModule,
    MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressBarModule,
        MatGridListModule,
        MatSliderModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatIconModule,
        MatProgressBarModule,
        MatGridListModule,
        MatSliderModule,
        MatProgressSpinnerModule,
    ],
    providers: [
    ],
})

export class AngularMaterialModule {}