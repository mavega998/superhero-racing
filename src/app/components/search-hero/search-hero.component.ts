import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiSuperheroeService } from '../../services/api-superheroe.service';
import { Heroe } from '../../models/interfaces.model';

@Component({
	selector: 'app-search-hero',
	templateUrl: './search-hero.component.html',
	styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit {
	heroeElegido: Heroe;
	@Input() ganoHeroe = false;
	@Output() heroeCargado = new EventEmitter();

	constructor(private apiHeroeService: ApiSuperheroeService) {}

	ngOnInit(): void {}

	heroeSelected(heroe: Heroe) {
		this.heroeElegido = heroe;
		this.heroeCargado.emit(heroe);
		if (heroe === null) {
			this.ganoHeroe = false;
		}
	}

	showPowerStats() {
		let listHTML = '';
		for (const stat in this.heroeElegido.powerstats) {
			if (true) {
				listHTML += `<li>
					<b class="text-capitalize">${stat}:</b> ${this.heroeElegido.powerstats[stat]}
				</li>`;
			}
		}
		return listHTML;
	}
}
