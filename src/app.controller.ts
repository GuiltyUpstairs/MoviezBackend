import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @Post()
  authUser(@Body('username') username, @Body('password') password){
    return this.appService.checkUser(username, password);
  }
}
