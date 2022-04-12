import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  
  @ViewChild(IonList) lista :IonList;
  @Input() terminada = true;              

  constructor(public deseosService:DeseosService, private router:Router, private alertController:AlertController) { }

  ngOnInit() {}
  listaSeleccionada(lista:Lista){
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);

    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);

    }
  }
  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
  }
  async editarLista(lista) {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header:'Editar lista',
      inputs:[
        {
          name:'titulo',
          type:'text',
          placeholder:'Nombre de la lista',
          value:lista.titulo
        }
      ],
      buttons: [
        {
          text:'cancelar',
          role:'cancel'
        },
        {
          text:'crear',
          handler:(data)=>{
            if(data.titulo.length ===0){
              return ;
            }
            lista.titulo =data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
    //this.router.navigateByUrl('/tabs/tab1/agregar');
  }


}
