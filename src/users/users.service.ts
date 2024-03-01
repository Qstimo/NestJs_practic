import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUsersDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {

    }
    async createUser(dto: CreateUsersDto) {
        const user = await this.userRepository.create(dto)
        return user
    }
    async getUsers() {
        const users = await this.userRepository.findAll()
        return users
    }
}
//fffffffffffffftest