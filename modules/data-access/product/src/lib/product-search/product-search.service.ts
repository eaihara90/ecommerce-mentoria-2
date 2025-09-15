import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductSearchService {
    private readonly http = inject(HttpClient);
    public readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

    public searchByName(name: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/products`, {
            params: { name },
        });
    }
}
