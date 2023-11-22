import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/services/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos: Producto[] = [];

  constructor(private productoServicio: ProductoService, private enrutador: Router) {}

    ngOnInit(){
      //Cargamos los productos
      this.obtenerProductos();
    }

    private obtenerProductos(){
      //Consumir los datos del observable (suscribirnos)
      this.productoServicio.obtenerProductosLista().subscribe(
        (datos => {
          this.productos = datos;
        })
      );
    }

    editarProducto(id: number){
      this.enrutador.navigate(['editar-producto', id]);
    }

    buscarCodigo(codigo: number){
      this.enrutador.navigate(['editar-producto', codigo]);
    }

  comprarProducto(id: number){
      this.enrutador.navigate(['comprar-producto', id]);
    }

    eliminarProducto(id: number){
      this.productoServicio.eliminarProducto(id).subscribe(
        {
          next: (datos) => this.obtenerProductos(),
          error: (errores) => console.log(errores)
        }
      );
    }
  }
