import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DevFestDto, DevFestDtoSchema } from "./models/devfest.dto";
import { DevfestController } from "./controllers/devfest.controller";
import { DevfestService } from "./services/devfest.service";
import { DevfestRepo } from "./repository/devfest.respository";

@Module({
    
    controllers: [DevfestController],
    providers: [DevfestService, DevfestRepo],
})
export class DevFestModule { }
