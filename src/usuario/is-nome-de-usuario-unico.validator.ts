import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioService } from './usuario.service';

@Injectable()
@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstract
  implements ValidatorConstraintInterface
{
  constructor(private usuarioService: UsuarioService) {}

  validate(nomeDeUsuario: string) {
    return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
  }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeDeUsuarioUnicoConstract,
    });
  };
}
