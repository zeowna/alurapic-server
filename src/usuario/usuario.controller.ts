import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeDeUsuario')
  buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    return this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
  }

  @Post()
  cria(@Body() usuario: Usuario) {
    return this.usuarioService.cria(usuario);
  }
}
