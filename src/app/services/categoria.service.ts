import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  public listarCategorias(){
    return this.http.get(`${baserUrl}/categoriaId/`);
  }

  public agregarCategoria(categoria:any){
    return this.http.post(`${baserUrl}/categoriaId/`,categoria);
  }
}
