/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUserByid(userId: string) {
    return { userId };
  }
}
