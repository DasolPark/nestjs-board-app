import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardStatus } from './board.status-enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}
  // @Get('/')
  // getBoards(): Board[] {
  //   return this.boardService.getBoards();
  // }
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }
  // @Post('/create')
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   return this.boardService.deleteBoard(id);
  // }
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
