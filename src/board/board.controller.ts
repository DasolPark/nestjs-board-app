import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/')
  getBoards(): Board[] {
    return this.boardService.getBoards();
  }

  @Post('/create')
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }
}
