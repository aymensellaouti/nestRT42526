import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { User } from './model/user.model';
import { AddUserDto } from './dto/add-user.dto';
import { FirstService } from './first.service';
import { UpdateUserDto } from './dto/update-user.dto';

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
        
        return this.firstService.create(newUser);
    }
    @Patch(':id')
    updateUser(
        @Param('id') id: number,
        @Body() udpateUserDto: UpdateUserDto): Promise<User> {
        
        return this.firstService.update(id, udpateUserDto);
    }
    @Delete(':id')
    softDeleteUser(
        @Param('id') id: number): Promise<{count: number}> {
        return this.firstService.softDelete(id);
    }
    @Patch('restore/:id')
    retstoreUser(
        @Param('id') id: number): Promise<{count: number}> {
        return this.firstService.softRestore(id);
    }
}
