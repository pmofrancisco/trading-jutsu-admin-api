import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSectorDto } from './dtos/create-sector.dto';

@Controller('sectors')
export class SectorsController {
  @Get()
  listSectors() {
    return [{ name: 'Property' }, { name: 'Services' }];
  }

  @Post()
  createSector(@Body() body: CreateSectorDto) {
    console.log(body);
    return body;
  }

  @Get('/:id')
  getSector(@Param('id') id: string) {
    return { id };
  }
}
