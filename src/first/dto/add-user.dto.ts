import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class AddUserDto {
    // @IsNumber()
    // @Type((jeMenFou) => Number)
    // id: number;
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    name: string;    
    @IsNumber()
    @Min(18)
    @Max(145)
    @Type(() => Number)
    age: number;
}