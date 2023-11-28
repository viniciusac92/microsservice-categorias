import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
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

      this.logger.log(`categoria: ${JSON.stringify(categoria)}`)

  }
}
