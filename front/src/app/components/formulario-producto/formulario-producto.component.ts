import { Component } from '@angular/core';
import { producto } from '../../models/producto';
import { productoService } from '../../service/producto.service'

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent {
  public Producto: producto;
  constructor(private service: productoService) {
    this.Producto = new producto;
  }

  FormularioUp() {
    this.service.crearProducto(this.Producto).subscribe((res: any) => {
     
      if (res.statusCode !== 200) {
        alert('Error al crear el producto');
      } else {
        alert("Usuario creado correctamente")
      }
    });
  }



}
