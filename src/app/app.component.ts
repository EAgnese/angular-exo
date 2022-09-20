import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public modif: number;
  name = 'Angular ' + VERSION.major;
  public festivals: { name: string; tables: number }[];
  ngOnInit(): void {
    this.festivals = [
      { name: 'FJM2020', tables: 160 },
      { name: 'FJM2018', tables: 80 },
      { name: 'FJM2019', tables: 110 },
    ];
    this.modif = 0;
  }

  add(): void {
    this.festivals.push({ name: 'FJM2021', tables: 1000000 });
  }
  update(): void {
    this.modif ++;
    this.festivals[0];
  }
}
