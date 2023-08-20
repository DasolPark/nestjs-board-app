import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status-enum';
import { v1 as uuid } from 'uuid'; // uuid의 v1버전을 사용하는데 이름은 uuid로 하겠다.
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  // getBoards(): Board[] {
  //   return this.boards;
  // }
  // getBoardById(id: string): Board {
  //   const foundBoard = this.boards.find((board) => board.id === id);
  //   if (!foundBoard) {
  //     throw new NotFoundException(`Can't find Board with id: ${id}`);
  //   }
  //   return foundBoard;
  // }
  // createBoard({ title, description }: CreateBoardDto) {
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // deleteBoard(id: string): void {
  //   const foundBoard = this.getBoardById(id);
  //   if (foundBoard) {
  //     this.boards = this.boards.filter((board) => board.id !== foundBoard.id);
  //   }
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
