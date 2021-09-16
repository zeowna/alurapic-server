import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private _usuarios: Usuario[] = [];

  buscaPorNomeDeUsuario(nomeDeUsuario: string) {
    return this._usuarios.find(
      (usuario) => usuario?.nomeDeUsuario === nomeDeUsuario,
    );
  }

  cria(usuario: Usuario) {
    this._usuarios.push(usuario);
    return usuario;
  }
}
