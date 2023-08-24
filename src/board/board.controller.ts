import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardStatus } from './board.status-enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('board')
@UseGuards(AuthGuard())
export class BoardController {
  private logger = new Logger('Board Controller');
  constructor(private boardService: BoardService) {}

  @Get('/')
  async getBoards(): Promise<Board[]> {
    return await this.boardService.getBoards();
  }

  @Get('/my')
  async getMyBoards(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`${user.username} is trying to get his/her all board`);
    return await this.boardService.getMyBoards(user);
  }

  @Get('/my-with-builder')
  async getMyBoardsWithQueryBuilder(@GetUser() user: User): Promise<Board[]> {
    return await this.boardService.getMyBoardsWithQueryBuilder(user);
  }

  @Get('/:id')
  async getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    this.logger.verbose(
      `${user.username} is creating a new board. 
      payload: ${JSON.stringify(createBoardDto)}`,
    );
    return this.boardService.createBoard(createBoardDto, user);
  }

  @Delete('/:id')
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.boardService.deleteBoard(id, user);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status);
  }
}
