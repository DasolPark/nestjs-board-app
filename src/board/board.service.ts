import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './board.status-enum';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  async getBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  // v1
  async getMyBoards(user: User): Promise<Board[]> {
    return await this.boardRepository.find({ user });
  }

  // v2
  async getMyBoardsWithQueryBuilder(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');

    query.where('board.userId = :userId', { userId: user.id });

    return await query.getMany();
  }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne(id);

    if (!board) {
      throw new NotFoundException(`Can't find Board with id: ${id}`);
    }
    return board;
  }

  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.boardRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find board with id: ${id}`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
