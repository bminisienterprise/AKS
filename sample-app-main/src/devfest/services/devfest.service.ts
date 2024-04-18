import { Injectable } from '@nestjs/common';
import { DevFestDto } from '../models/devfest.dto';
import { DevfestRepo } from '../repository/devfest.respository';

@Injectable()
export class DevfestService {
    constructor(private readonly devfestRepo: DevfestRepo) { }

    async addFormData(payload: DevFestDto) {
        return this.devfestRepo.create(payload);
    }

    async findAll() {
        return this.devfestRepo.findAll();
    }
}
