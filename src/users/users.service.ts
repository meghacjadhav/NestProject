import {Injectable} from '@nestjs/common';
import {User} from './users.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async createUser(user: User) {
       return this.usersRepository.save(user)
    }

    async findAll() {
       return this.usersRepository.find()
    }

    async updateUser(user: User) {
        return this.usersRepository.save(user)
    }
    async deleteUser(user: User) {
        return this.usersRepository.delete(user);
    }
}
