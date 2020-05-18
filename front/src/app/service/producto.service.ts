
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class productoService {
    apiURL: 'http://localhost:3000/api/';
    constructor(private http: HttpClient) {

    }

    crearProducto(productoNuevo) {
        const params = JSON.stringify(productoNuevo);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        return this.http.post(
            this.apiURL,
            params,
            options
        ).pipe(map(res => res));
    }


}

