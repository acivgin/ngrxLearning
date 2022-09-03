import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class GoogleProductService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  public searchProducts(queryTitle: string): Observable<Product[]> {
    return this.http
      .get<{ items: Product[] }>(
        `${this.API_PATH}?orderBy=newest&q=${queryTitle}`
      )
      .pipe(map((books) => books.items || []));
  }

  public retrieveBook(volumeId: string): Observable<Product> {
    return this.http.get<Product>(`${this.API_PATH}/${volumeId}`);
  }
}
