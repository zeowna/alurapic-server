import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator';

export class Usuario {
  id: number;

  @Expose({
    name: 'userName',
  })
  @IsNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser único.',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  nomeDeUsuario: string;

  @IsNotEmpty({
    message: 'email é obrigatório.',
  })
  @IsEmail(
    {},
    {
      message: 'email precisa ser um endereço de e-mail válido.',
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'senha é obrigatório.',
  })
  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  senha: string;

  @Expose({
    name: 'fullName',
  })
  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório.',
  })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;

  // constructor(
  //   id: number,
  //   nomeDeUsuario: string,
  //   email: string,
  //   senha: string,
  //   nomeCompleto: string,
  //   dataDeEntrada: Date,
  // ) {
  //   this.id = id;
  //   this.nomeDeUsuario = nomeDeUsuario;
  //   this.email = email;
  //   this.senha = senha;
  //   this.nomeCompleto = nomeCompleto;
  //   this.dataDeEntrada = dataDeEntrada;
  // }
}
