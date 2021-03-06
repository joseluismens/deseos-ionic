import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas :Lista[]=[];
  constructor() { 
    this.cargarStorage();
    
    
  }
  crearLista(titulo:string){
    const nueva =new Lista(titulo);
    this.listas.push(nueva); 
    this.guardarStorage();

    return nueva.id;

  }
  obtenerLista(id:string | number){
    id = Number(id);
    return this.listas.find(listaData=> listaData.id===id);
    
  }
  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }
  cargarStorage(){
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = []
    }
  }
  borrarLista(lista:Lista){
    this.listas = this.listas.filter(listaData =>{
      return listaData.id !==lista.id 
    });
    this.guardarStorage();
  }
 
  
  

}
