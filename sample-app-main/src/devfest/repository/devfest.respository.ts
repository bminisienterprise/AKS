import { Injectable } from "@nestjs/common";
import { DevFestDocument, DevFestDto } from "../models/devfest.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class DevfestRepo {
    /*constructor(@InjectModel(DevFestDto.name) private readonly devFestModel: Model<DevFestDocument>) { }*/

    async create(data: DevFestDto) {
        return true;
    }

    async findAll() {
        return true;
    }
}