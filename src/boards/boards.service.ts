import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [
    {
      id: 1,
      title: 'hi',
      author: 'dasol',
    },
    {
      id: 2,
      title: 'bye',
      author: 'david',
    }
  ];

  getBoards() {
    return this.boards;
  }
}
