import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; // uuid의 v1버전을 사용하는데 이름은 uuid로 하겠다.
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  getBoards(): Board[] {
    return this.boards;
  }

  createBoard({ title, description }: CreateBoardDto) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
