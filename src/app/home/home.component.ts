import { Component, Inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";
import { HousingService } from "../housing.service";
import { Subject, delay, map } from "rxjs";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        [housingLocation]="housingLocation"
        *ngFor="let housingLocation of housingLocationList"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  private unsubscribe$ = new Subject<void>();
  constructor(private housingService: HousingService) {}
  ngOnInit(): void {
    this.housingService.getAllHousingLocation().subscribe({
      next: (res) => {
        console.log("res", res);
        this.housingLocationList = res;
      },
      error: (err) => {
        console.error("Error", err);
      },
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
