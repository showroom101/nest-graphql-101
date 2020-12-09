// import { Scalar, CustomScalar } from '@nestjs/graphql'
// import { Kind, ValueNode } from 'graphql'

// @Scalar('Date', type => Date)
// export class DateScalar implements CustomScalar<number, Date> {
//   description = 'Date custom scalar type'

//   parseValue(value: number): Date {
//     return new Date(value) // value from the client
//   }

//   serialize(value: Date): number {
//     return value instanceof Date ? value.getTime() : value // value sent to the client
//   }

//   parseLiteral(ast: ValueNode): Date {
//     console.log(ast)
//     if (ast.kind === Kind.INT) {
//       return new Date(ast.value)
//     }
//     return null
//   }
// }
