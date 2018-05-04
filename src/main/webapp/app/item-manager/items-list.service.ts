import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Item} from './model/item.interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ItemsListService {
  constructor(private http: HttpClient) {
  }

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/items');
  }

  public getItem(id: number): Observable<Item> {
    return this.http.get<Item>('/api/items/' + id, httpOptions);
  }

  public createItem(item: Item): Observable<Item>  {
    return this.http.post<Item>('/api/items/', item, httpOptions);

  }

  public updateItem(item: Item): Observable<Item>  {
    return this.http.put<Item>('/api/items/', item, httpOptions);

  }

  public deleteItem(id: number): Observable<Item>  {
    return this.http.delete<Item>('/api/items/' + id, httpOptions);

  }

}
