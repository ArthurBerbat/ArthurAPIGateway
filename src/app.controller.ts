import { Controller, Get, Param, Query } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('consulta')
export class ConsultaController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:5672/Artur'],
        queue: 'consulta_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  @Get(':id') // Aqui, o ':id' é o parâmetro de consulta
  async getConsulta(@Param('id') id: string): Promise<Observable<any>> {
    // Enviando a mensagem para a fila e esperando a resposta
    return this.client.send({ cmd: 'get_consulta' }, { id });
  }
}
