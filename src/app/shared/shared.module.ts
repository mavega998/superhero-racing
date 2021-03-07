import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { InputGenericComponent } from './input-generic/input-generic.component';
import { CardHeroeComponent } from './card-heroe/card-heroe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [InputGenericComponent, CardHeroeComponent],
	imports: [
		CommonModule,
		MatAutocompleteModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatProgressBarModule,
		MatBadgeModule
	],
	exports: [InputGenericComponent, CardHeroeComponent],
})
export class SharedModule {}
