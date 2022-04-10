import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Distribution, Fish } from './fishes/fishes.component';

@Injectable({
  providedIn: 'root',
})
export class FishDataService {
  base_url: String = environment.REST_API_URL;
  constructor(private http: HttpClient) {}

  getFishes(search: string): Observable<Fish[]> {
    return this.http.get<Fish[]>(
      this.base_url + environment.GETALL_URL + search
    );
  }
  getFish(fishId: string): Observable<Fish> {
    return this.http.get<Fish>(
      this.base_url + environment.GET_FISH_URL + fishId
    );
  }
  addFish(fishToAdd: Fish): Observable<Fish> {
    return this.http.post<Fish>(
      this.base_url + environment.PATH_FISHES,
      fishToAdd
    );
  }
  updateFish(fishToUpdate: Fish): Observable<Fish> {
    return this.http.put<Fish>(
      this.base_url + environment.GET_FISH_URL + fishToUpdate._id,
      fishToUpdate
    );
  }
  deleteFish(fishId: String): Observable<any> {
    return this.http.delete<any>(
      this.base_url + environment.GET_FISH_URL + fishId
    );
  }
}
