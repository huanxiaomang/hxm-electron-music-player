import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import './types/index'


@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('/')
    getMusicList(): Music[] {
        console.log('');
        return this.appService.getMusicList();
    }



    @Get('lyrics/:_name')
    getMusicLyrics(@Param('_name') name: string): string {
        return this.appService.getMusicLyrics(name);
    }

}
