import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AppServiceService {

  constructor(private _http: Http) { }
}
