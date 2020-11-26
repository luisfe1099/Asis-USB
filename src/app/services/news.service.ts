import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  public url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.urlBack + "news";
  }

  public getAllNews(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
