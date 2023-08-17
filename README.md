<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Study
- @(decorator): 말 그대로 ~을 꾸미다. 클래스를 @Module 데코레이터로 지정
- interface: 변수의 타입만 체크(VS class)
- class: 변수의 타입 체크 & 인스턴스 생성 가능


## Module

## Controller

### Handler
@Get, @Post, @Patch, @Delete, ...
- postman: method, Body(raw with JSON), { "blah": "blah" } for testing
- @Get('/:id'), @Param() or @Param('id')
- @Delete('/:id'), @Param() or @Param('id')
- @Patch('/:id/status'), @Param('id'), @Body('status')

## service
### @Injectable
다른 곳에서 주입하여 사용 가능하다는 의미
```
// As-is
class BoardsController() {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }
}

// To-be
// implicit declaration(Access modifier)
class BoardsController() {
  constructor(private boardsService: BoardsService);
}
```

## DTO(Data Transfer Object)
### Concept
- 계층 간 데이터 교환을 위한 객체
- DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체
- DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
- interface나 class를 이용해서 정의될 수 있음(NestJS는 class를 추천)
    - class는 interface와 다르게 runtime에서 작동하기 때문에 pipe 같은 기능을 이용할 때 유용. 그래서 class로 DTO를 사용
---
- 데이터 유효성을 체크하는데 효율적
- 더 안정적인 코드로 만들어 줌. TypeScript의 Type으로도 사용됨
    - 즉, 이곳저곳 고쳐야 될 부분을 한 곳만 고쳐되 되게 만들어주는 마법을 제공

## Pipe(NestJS Pipes)

- Data Transformation
  - E.g. string '7' -> integer 7
- Data Validation
  - E.g. checking length

### Binding Pipes

1. Parameter-level Pipes(<)

특정한 파라미터에만 적용
```
@Post()
@createBoard(
  @Body('title', ParameterPipe) title,
  @Body('description') description,
) {}
```
2. Handler-level Pipes(<)

모든 파라미터에 적용
``` 
@Post()
@UsePipes(pipe)
createBoard(
    @Body('title') title,
    @Body('description') description,
) {}
```
3. Global Pipes(application-level)

client에서 들어오는 모든 요청에 적용. 가장 상단 영역인 main.ts에 넣어주면 된다.
```
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(GlobalPipes);
  await app.listen(3000);
}
bootsrap();
```

### Built-in Pipes
- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

### Require modules
- class-validator
- class-transformer
- `npm install class-validator class-transformer --save`
- https://github.com/nestjs/class-validator#manual-validation