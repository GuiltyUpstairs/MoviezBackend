import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckUserDto } from "./dto/check-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post()
  checkUser(@Body() checkUserDto: CheckUserDto){
    const{email, password} = checkUserDto;
    return this.appService.checkUser(email, password);
  }
  @Get()
  getHello(){
    return "Hello World";
  }
  // @Post()
  // authUser(@Body('username') username, @Body('password') password){
  //   return this.appService.checkUser(username, password);
  // }
  @Post()
  authUser(@Body('username') username, @Body('password') password){
    return this.appService.checkUser(username, password);
  }


  @Post('signup')
  registerNewUser(@Body() checkSignupUserDto: CheckUserDto){
    const{email, password} = checkSignupUserDto;
    return this.appService.registernewuser(email, password);
  }
}
