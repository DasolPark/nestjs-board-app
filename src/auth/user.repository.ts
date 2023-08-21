import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser({ username, password }: AuthCredentialDto): Promise<void> {
    const user = this.create({ username, password });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      }
      throw new InternalServerErrorException();
    }
  }
}
