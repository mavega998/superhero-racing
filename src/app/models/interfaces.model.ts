export interface ResponseHero {
	response: string;
	'results-for': string;
	results: Heroe[];
}

export interface Heroe {
	id: string;
	name: string;
	powerstats: Powerstats;
	biography: Biography;
	appearance: Appearance;
	work: Work;
	connections: Connections;
	image: Image;
}

export interface Appearance {
	gender: Gender;
	race: string;
	height: string[];
	weight: string[];
	'eye-color': string;
	'hair-color': string;
}

export enum Gender {
	Empty = '-',
	Female = 'Female',
	Male = 'Male',
}

export interface Biography {
	'full-name': string;
	'alter-egos': AlterEgos;
	aliases: string[];
	'place-of-birth': string;
	'first-appearance': string;
	publisher: Publisher;
	alignment: Alignment;
}

export enum Alignment {
	Bad = 'bad',
	Good = 'good',
}

export enum AlterEgos {
	NoAlterEgosFound = 'No alter egos found.',
	ScarletSpider = 'Scarlet Spider',
	SpiderCarnage = 'Spider-Carnage',
}

export enum Publisher {
	MarvelComics = 'Marvel Comics',
	ScarletSpider = 'Scarlet Spider',
	SpiderCarnage = 'Spider-Carnage',
}

export interface Connections {
	'group-affiliation': string;
	relatives: string;
}

export interface Image {
	url: string;
}

export interface Powerstats {
	intelligence: string;
	strength: string;
	speed: string;
	durability: string;
	power: string;
	combat: string;
}

export interface Work {
	occupation: string;
	base: string;
}
