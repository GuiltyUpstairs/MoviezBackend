import { IsNotEmpty } from 'class-validator';


export class CheckUserDto {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}