import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class AddUserDto {
    @IsNumber()
    @Type((jeMenFou) => Number)
    id: number;
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    name: string;
}