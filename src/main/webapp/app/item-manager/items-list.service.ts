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

}
