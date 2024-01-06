import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";

  constructor(public http: HttpClient) {}

  getAllHousingLocation(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(`${this.url}`);
  }

  getHousingLocationById(id: number): Observable<HousingLocation> {
    return this.http.get<HousingLocation>(`${this.url}/${id}`);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
