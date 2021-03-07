import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/interfaces.model';

import Swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	heroe1: Heroe;
	heroe2: Heroe;
	fWinnerHeroe1 = false;
	fWinnerHeroe2 = false;

	constructor() {}

	ngOnInit(): void {}

	fight() {
		if (
			_.isEqual(
				this.heroe1.powerstats.strength,
				this.heroe2.powerstats.strength,
			)
		) {
			Swal.fire({
				icon: 'info',
				title: 'Fighting',
				text: `There was a tie between ${this.heroe1.name} and ${this.heroe2.name}`,
			});
			this.fWinnerHeroe2 = false;
			this.fWinnerHeroe1 = false;
			return;
		}

		if (
			Number(this.heroe1.powerstats.strength) >
			Number(this.heroe2.powerstats.strength)
		) {
			this.fWinnerHeroe1 = true;
			this.fWinnerHeroe2 = false;
		} else {
			this.fWinnerHeroe2 = true;
			this.fWinnerHeroe1 = false;
		}
	}

	run() {
		if (_.isEqual(this.heroe1.powerstats.speed, this.heroe2.powerstats.speed)) {
			Swal.fire({
				icon: 'info',
				title: 'Running',
				text: `There was a tie between ${this.heroe1.name} and ${this.heroe2.name}`,
			});
			this.fWinnerHeroe2 = false;
			this.fWinnerHeroe1 = false;
			return;
		}
		if (
			Number(this.heroe1.powerstats.speed) >
			Number(this.heroe2.powerstats.speed)
		) {
			this.fWinnerHeroe1 = true;
			this.fWinnerHeroe2 = false;
		} else {
			this.fWinnerHeroe2 = true;
			this.fWinnerHeroe1 = false;
		}
	}
}
