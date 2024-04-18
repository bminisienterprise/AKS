import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { DevFestDto } from '../models/devfest.dto';
import { DevfestService } from '../services/devfest.service';

@Controller('devfest')
export class DevfestController {
    constructor(private readonly devFestService: DevfestService) { }

    @Post()
    async addFormData(@Res() res: any, @Body() payload: DevFestDto) {
        console.log(process.env.GREETINGMESSAGE);        
        console.log('payload:', payload);
        return res.status(HttpStatus.CREATED)

    }

    @Get()
    async getAllFormData() {
        return this.devFestService.findAll();
    }
}
