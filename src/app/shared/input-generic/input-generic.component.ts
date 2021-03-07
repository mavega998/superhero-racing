import {
	Component,
	EventEmitter,
	forwardRef,
	Input,
	OnInit,
	Output,
	ViewEncapsulation,
} from '@angular/core';
import {
	ControlValueAccessor,
	FormControl,
	NG_VALUE_ACCESSOR,
} from '@angular/forms';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Heroe, ResponseHero } from '../../models/interfaces.model';
import { ApiSuperheroeService } from '../../services/api-superheroe.service';

@Component({
	selector: 'app-input-generic',
	templateUrl: './input-generic.component.html',
	styleUrls: ['./input-generic.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputGenericComponent),
			multi: true,
		},
	],
	encapsulation: ViewEncapsulation.None,
})
export class InputGenericComponent implements ControlValueAccessor, OnInit {
	heroe: Heroe;
	heroes: Observable<Heroe[]>;
	heroeControl = new FormControl({ value: '' });
	isDisabled = false;
	count: any;

	loading = false;
	isNull = false;

	@Output() selectHeroe = new EventEmitter();

	@Input() width: any;

	onTouched = () => {};

	constructor(private superHeroeService: ApiSuperheroeService) {}

	ngOnInit(): void {
		this.subscribeHeroes();
	}

	subscribeHeroes() {
		this.heroeControl.valueChanges.subscribe((value) => {
			if (value && value.id) {
				return;
			}
			if (_.isString(value)) {
				this.heroe = undefined;
				this.propagateChange(this.heroe);
			}
			return this._filter(value);
		});
	}

	onHeroesChange(event) {
		const newCliente = event.option.value as Heroe;
		this.onChange(event, newCliente);
		this.selectHeroe.emit(event.option.value);
	}

	onChange(e: Event, value: any) {
		this.heroe = value;
		this.propagateChange(this.heroe);
		this.onTouched();
	}

	get value(): any {
		return this.heroe;
	}

	set value(v: any) {
		if (v !== this.heroe) {
			this.heroe = v;
		}
	}

	propagateChange = (_: any) => {};

	writeValue(heroe: any) {
		this.heroe = heroe;
		this.heroeControl.setValue(heroe);
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	displayFn(heroe?: Heroe): string | undefined {
		return heroe ? heroe.name : undefined;
	}

	private _filter(value: string) {
		if (value) {
			if (value.length >= 3) {
				clearTimeout(this.count);
				this.count = setTimeout(() => {
					this.loading = true;
					return this.superHeroeService.search(value).subscribe(
						(listResponse: ResponseHero) => {
							this.loading = false;
							if (listResponse.response === 'success') {
								this.heroes = new Observable<Heroe[]>((observer) => {
									return observer.next(listResponse.results);
								});
							} else {
								this.isNull = true;
							}
						},
						() => {
							this.loading = false;
						},
					);
				}, 200);
				setTimeout(() => {
					this.isNull = false;
				}, 3000);
			}
		} else {
			this.heroes = null;
			this.selectHeroe.emit(null);
		}
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = isDisabled;
	}
}
