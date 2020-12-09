import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// injection
import modules from './modules/modules'
import scalars from './graphql'

@Module({
  imports: [
    ...modules,
    ...scalars,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
