import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Categoria } from './interfaces/categorias/categoria.interface';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name)
  
  constructor(private readonly appService: AppService) {}

  @EventPattern('vinicius-criar-categoria')
  async criarCategoria(
    @Payload()
    categoria: Categoria
    ) {

      let typeOfX: string = typeof categoria

      this.logger.log(`verificando tipo: ${typeOfX}`)

      this.logger.log(`categoria: ${JSON.stringify(categoria)}`)

      this.appService.criarCategoria(categoria)
  }

  @MessagePattern('vinicius-consultar-categorias')
  async consultarCategorias(
    @Payload() _id: string
    ) {

    if (_id) {
      return await this.appService.consultarCategoriaPeloId(_id)
    }

    return await this.appService.consultarCategorias()
  }
}
