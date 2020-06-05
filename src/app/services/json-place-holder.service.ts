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

   guardarArticulo(jsonPlaceholder:DataPlaceHolder):Observable<DataPlaceHolder>{
      return this.http.post<DataPlaceHolder>(`${this.ruta}/posts`, jsonPlaceholder)
   }

   leerTodosLosUsuarios():Observable<User[]>{
     return this.http.get<User[]>(`${this.ruta}/users`)
   }

   borrarArticulo(id:number):Observable<any>{
     return this.http.delete<any>(`${this.ruta}/posts/${id}`)
   }

   actualizarArticulo(jsonPlaceholder:DataPlaceHolder):Observable<DataPlaceHolder>{
    return this.http.put<DataPlaceHolder>(`${this.ruta}/posts/${jsonPlaceholder.id}`, jsonPlaceholder)
   }


}
