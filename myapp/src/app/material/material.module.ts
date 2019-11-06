import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSliderModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressBarModule,
        MatGridListModule,
        MatSliderModule,
    ],
    exports: [
        MatIconModule,
        MatProgressBarModule,
        MatGridListModule,
        MatSliderModule,
    ],
    providers: [
    ],
})

export class AngularMaterialModule {}