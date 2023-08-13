import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/')
  getBoards(): Board[] {
    return this.boardService.getBoards();
  }

  @Post('/create')
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    console.log('title', title);
    console.log('description', description);
    return this.boardService.createBoard(title, description);
  }
}
