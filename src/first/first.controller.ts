import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { User } from './model/user.model';
import { AddUserDto } from './dto/add-user.dto';
import { FirstService } from './first.service';

@Controller('users')
export class FirstController {
    users: User[] = [];
    constructor(private firstService: FirstService) {}
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
    addUser(@Body() newUser: AddUserDto): Promise<User> {
        console.log( newUser instanceof AddUserDto);
        console.log({newUser});
        
        return this.firstService.addUser(newUser);
    }
}
