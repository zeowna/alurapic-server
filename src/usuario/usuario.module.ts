import { Module } from '@nestjs/common';
import { IsNomeDeUsuarioUnicoConstract } from './is-nome-de-usuario-unico.validator';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, IsNomeDeUsuarioUnicoConstract],
})
export class UsuarioModule {}
