import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreatePayloadDto } from './dto/create-payload.dto';
import { UpdatePayloadDto } from './dto/update-payload.dto';

@Injectable()
export class PayloadsService {
  create(createPayloadDto: CreatePayloadDto) {
    return 'This action adds a new payload';
  }

  async findAll() {
    const result = await axios.get('https://api.spacexdata.com/v4/payloads/');
    return result.data.slice(0,20);
  }

  findOne(id: number) {
    return `This action returns a #${id} payload`;
  }

  update(id: number, updatePayloadDto: UpdatePayloadDto) {
    return `This action updates a #${id} payload`;
  }

  remove(id: number) {
    return `This action removes a #${id} payload`;
  }
}
