/* eslint-disable prettier/prettier */
import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, NotEquals, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  dbUrl: string;

  @IsString()
  @IsNotEmpty()
  @NotEquals('CHAVESECRETADOPROJETOFINCHECK')
  jwtSecret: string;
}

export const env: Env = plainToInstance(Env, {
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
});

const erros = validateSync(env);

if (erros.length > 0) {
  throw new Error(JSON.stringify(erros, null, 2));
}
