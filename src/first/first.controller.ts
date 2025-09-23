import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { User } from './model/user.model';

@Controller('users')
export class FirstController {
    users: User[] = [];
    @Get()
    getUsers(@Query() pagination) {
        const {page, nombre} = pagination;
        
        return this.users;
    }
    @Get(':id')
    getUserById(@Param('id') id: number) {
        const user = this.users.find((userActuel) => userActuel.id === +id);
        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user;
    }
    
    @Post()
    addUser(@Body() newUser: Partial<User>): User {
        const {name} = newUser;
        const id = !this.users.length ? 1 : this.users[this.users.length - 1].id + 1;
        const user: User = {id, name};
        this.users.push(user); 
        return user;
    }
}
