import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "https://backend-ifsp-thiago300144x.glitch.me/api";

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + "/produtos");
  }

  cadastrarProduto(produto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", produto.title);
    body = body.set("preco", String(produto.price));
    body = body.set("descricao", produto.description);
    return this.http.post(this.baseURL + "/produtos", body, {observe: "response"});
  }

  updateProduct(product) : Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", product.title);
    body = body.set("preco", product.price);
    body = body.set("descricao", product.description);
    return this.http.put(this.baseURL + '/produtos/' + product._id, body, { observe: "response" });
  }

  deleteProduct(product): Observable<any>{
    return this.http.delete(this.baseURL + '/produtos/' + product._id);
  }

  constructor(private http : HttpClient) { }
}
