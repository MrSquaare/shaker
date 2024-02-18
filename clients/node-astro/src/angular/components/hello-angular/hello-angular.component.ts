import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  inject,
  type OnInit,
} from "@angular/core";

import { FIBER_BASE_URL } from "../../../constants/servers";

@Component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [HttpClientModule],
  selector: "app-hello-angular",
  templateUrl: "./hello-angular.component.html",
})
class HelloAngularComponent implements OnInit {
  @Input() value!: string;

  #http = inject(HttpClient);

  data?: string;
  isError = false;

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.isError = false;

    this.#http.get(FIBER_BASE_URL, { responseType: "text" }).subscribe({
      next: (data) => {
        this.data = data;
      },
      error: () => {
        this.isError = true;
      },
    });
  }
}

export default HelloAngularComponent as astroHTML.JSX.Element;
