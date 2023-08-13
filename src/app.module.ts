import { Module } from '@nestjs/common';
import { BoardsModule } from './board/board.module';

@Module({
  imports: [BoardsModule],
})
export class AppModule {}
