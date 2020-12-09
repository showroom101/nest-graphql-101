import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// injection

// import { GraphQLModule } from '@nestjs/graphql'
// import { GraphqlOptions } from './common/graphql.options'

import modules from './modules/modules'
import scalars from './graphql'

@Module({
  imports: [
    // GraphQLModule.forRootAsync({
    //   useClass: GraphqlOptions,
    // }),
    ...modules,
    ...scalars,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
