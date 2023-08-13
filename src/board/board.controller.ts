import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './board.service';
import { Board } from './board.model';

@Controller('board')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getBoards(): Board[] {
    return this.boardsService.getBoards();
  }

  @Post('/create')
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    console.log('title', title);
    console.log('description', description);
    return this.boardsService.createBoard(title, description);
  }
}
