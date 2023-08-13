import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './board.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {};

  @Get('/')
  getBoards(): Board[] {
    return this.boardsService.getBoards();
  }
}