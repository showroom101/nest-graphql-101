// import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'
// import { Injectable } from '@nestjs/common'
// import { join } from 'path'

// const isProduction = process.env.NODE_ENV !== 'production' ? true : false

// @Injectable()
// export class GraphqlOptions implements GqlOptionsFactory {
//   createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
//     return {
//       context: ({ req, res }) => ({ req, res }),
//       /**
//        * Auto generated schema.gql from models 
//        */
//       autoSchemaFile: join(process.cwd(), 'src/graphql.schema.generated.gql'),
//       sortSchema: true,
      
//       /**
//        * Auto generated schema type file from GraphQL SDL schema 
//        */
//       // typePaths: ['./src/*/*/*.graphql'], // path for gql schema files
//       // definitions: {
//       //   // will generate .ts types from gql schema files
//       //   path: join(process.cwd(), 'src/graphql.schema.generated.ts'),
//       //   outputAs: 'class',
//       // },
      
//       resolverValidationOptions: {
//         requireResolversForResolveType: false,
//       },
//       installSubscriptionHandlers: true,
//       debug: isProduction,
//       playground: isProduction,
//       introspection: true,
//       cors: true,
//       uploads: {
//         maxFileSize: 10000000, // 10 MB
//         maxFiles: 12,
//       },
//     }
//   }
// }
