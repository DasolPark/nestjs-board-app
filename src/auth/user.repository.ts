import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser({ username, password }: AuthCredentialDto): Promise<void> {
    const user = this.create({ username, password });
    await this.save(user);
  }
}
