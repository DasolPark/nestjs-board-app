import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  constructor(private boardsService: BoardsService) {}
}
