import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getBoards(): Board[] {
    return this.boards;
  }
}
