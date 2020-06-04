import { Injectable } from '@angular/core';
import { DataPlaceHolder } from '../models/dataJsonPlaceHolder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  jsonPlaceholder: DataPlaceHolder = new DataPlaceHolder()
  ruta:string = 'https://jsonplaceholder.typicode.com';
  user:User = new User();

  constructor(private http:HttpClient) {

   }

   leerNoticia():Observable<DataPlaceHolder[]>{
     return this.http.get<DataPlaceHolder[]>(`${this.ruta}/posts`)
   }

   leerUsuario(userId:number):Observable<User>{
    return this.http.get<User>(`${this.ruta}/users/${userId}`);
   }


}
