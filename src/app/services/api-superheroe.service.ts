import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ApiSuperheroeService {
	constructor(private http: HttpClient) {}

	search(name: string) {
		return this.http.get(
			`${environment.apiUrl}${environment.apiKey}/search/${name}`,
		);
	}
}
