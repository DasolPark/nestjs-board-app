import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {};

  @Get('/')
  getBoards() {
    return this.boardsService.getBoards();
  }
}
