import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckUserDto } from "./dto/check-user.dto";
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('Users')
export class AppController {
  constructor(private readonly userService: UserService) {}
  
  /*@Post()
  checkUser(@Body() checkUserDto: CheckUserDto){
    const{email, password} = checkUserDto;
    return this.userService.checkUser(email, password);
  }*/
  @Get()
  getHello(){
    return "Hello World";
  }
  @Get(':email')
  async findUser(@Param('email') email: string): Promise<User | undefined> {
    return this.userService.findUserByEmail(email);
  }
  // @Post()
  // authUser(@Body('username') username, @Body('password') password){
  //   return this.appService.checkUser(username, password);
  // }
  /*@Post()
  authUser(@Body('username') username, @Body('password') password){
    return this.userService.checkUser(username, password);
  }


  @Post('signup')
  registerNewUser(@Body() checkSignupUserDto: CheckUserDto){
    const{email, password} = checkSignupUserDto;
    return this.userService.registernewuser(email, password);
  }*/
}
