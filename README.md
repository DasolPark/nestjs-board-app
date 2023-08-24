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
- nest g module [NAME] (g: generate)

## Controller
- nest g controller [NAME] [--no-spec] (--no-spec: 테스트 코드 생성X)

### Handler
@Get, @Post, @Patch, @Delete, ...
- postman: method, Body(raw with JSON), { "blah": "blah" } for testing
- @Get('/:id'), @Param() or @Param('id')
- @Delete('/:id'), @Param() or @Param('id')
- @Patch('/:id/status'), @Param('id'), @Body('status')

## service
- nest g service [NAME] [--no-spec]
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

/* implements PipeTransform */
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

## Error handling
- `throw new NotFoundException();`

## DB(Postgresql)

- postgresql 13 (https://postgresapp.com/downloads.html)
  - start
- pgadminv4 v7.1 (https://www.postgresql.org/ftp/pgadmin/pgadmin4/v7.1/macos/)
  - Add New Server -> Set General - name -> Set Connection - Host name/address, Post, Maintenance database, Username, Password -> SAVE
  - CREATED SERVER -> craete -> database -> Set General - Database -> SAVE
- password: postgresql or postgres

## ORM(TypeORM - Object Relational Mapping)
- node.js에서 실행되고 TypeScript로 작성된 객체 관계형 매퍼 라이브러리
- MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana 그리고 WebSQL과 같은 여러 데이터베이스를 지원

### 특징과 이점
- 모델을 기반으로 데이터 베이스 테이블 체계를 자동으로 생성
- 데이터베이스에서 개체를 쉽게 삽입, 업데이트 그리고 삭제 할 수 있음
- 테이블 간의 매핑(1:1, 1:n, n:n)을 만들 수 있음
- 간단한 CLI 명령 제공
- TypeORM은 간단한 코딩으로 ORM 프레임워크를 사용하기 쉬움
- TypeORM은 다른 모듈과 쉽게 통합

### Install
- @nestjs/typeorm: nest.js에서 TypeORM을 사용하기 위해 연동시켜주는 모듈
- typeorm: TypeORM 모듈
- pg: Postgres 모듈
- `npm install pg typeorm @nestjs/typeorm --save` (typeorm@0.2.34, @nestjs/typeorm@8.0.1)
- https://docs.nestjs.com/techniques/database

### Entity 생성
- @Entity(): equivalent to `CREATE TABLE board`
- @PrimaryGeneratedColumn(), @Column(), ...
- `@Entity`, `extends BaseEntity`

### Repository
- 엔티티 개체와 함께 작동하며, 엔티티 찾기/삽입/업데이트/삭제 등 처리(Repository Pattern)
- https://typeorm.delightful.studio/classes/_repository_repository_.repository.html
- `@EntityRepository`, `extends Repository`
- `imports: [TypeOrmModule.forFeature([BoardRepository])]`
```
// Inject Repository to service
constructor(
  @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
) {}
```
- remove VS delete: remove는 존재하는 아이템만 제거할 수 있음(없으면 에러 발생), delete는 있으면 지우고 없으면 아무 영향 없음

### Relation
관계를 형성함으로써 연결 관계에 있는 정보를 넣어줄 수 있다
- OneToMany
- ManyToOne
- ManyToMany

## Encrypt password
- bcryptjs (`npm install bcryptjs --save`)
- asynchrous
- genSalt(), hash(password, salt)
- compare(password, foundUser.password)
### 1. Encryption key + 알고리즘(양방향)
- https://www.online-toolz.com/tool/encrypt-text
- 암/복호화 가능
- 암호화 키가 노출되면 알고리즘은 대부분 오픈되어 있기 때문에 위험도 높음

### 2. SHA256 같은 방식으로 HASH 저장(단방향)
- https://emn178.github.io/online-tools/
- 레인보우 테이블을 이용해 암호화된 비밀번호를 비교해서 비밀번호를 알아낼 수 있음
- 1234 => 03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4, qwe123 => 18138372fad4b94533cd4881f03dc6c69296dd897234e0cee83f727e2e6b1f63 이런식으로 모든 값을 저장해 놓은 후 비교하여 계정 탈취 가능
- 같은 문자에선 같은 해시가 결과로 나옴

### 3. SALT + Plain password => Hash ✅
- E.g. 1234 => adsfdasfg+1234 => fdslkmgslkm, 1234 => gfnklmerkgld+1234 => daslkgmdsaf
- 같은 비밀번호여도 다르게 해시값이 저장될 수 있음

## JWT(JSON Web Token)
- https://jwt.io/
- 당사자 간에 정보를 JSON 개체로 안전하게 전송하기 위한 컴팩트하고 독립적인 방식을 정의하는 개방형 표준(RFC 7519)
- 디지털 서명이 되어 있으므로 신뢰할 수 있음
- 3 segment
  - Header: metadata about the token(type, hash algorithm SHA256, RSA, and ...)
  - Payload: issuer, expiration time, subject, and etc
  - Verify Signature: 토큰이 보낸 사람에 의해 서명되었으며 어떤 식으로든 변경되지 않았는지 확인하는 데 사용되는 서명. 서명은 헤더 및 페이로드 세그먼트, 서명 알고리즘, 비밀 또는 공개키를 사용하여 생성됨

### Installation
- `npm i @nestjs/jwt @nestjs/passport jwt passport-jwt --save`
- register jwt/passport module
- `npm i @types/passport-jwt --save` to get ExtractJwt, Strategy

### Usage
- class JwtStrategy extends PassportStrategy(Strategy by jwt)
- @UseGuards(@AuthGuard())
  - middleware

## Middlewares
middleware -> guard -> interceptor (before) -> pipe -> controller -> service -> controller -> interceptor (after) -> filter (if applicable) -> client
- Pipes: 요청 유효성 검사 및 페이로드 변환. 데이터를 예상한 대로 직렬화
- Filters: 오류 처리. 특정 오류 처리기를 사용할 경로와 각 경로 주변의 복잡성을 관리하는 방법을 알 수 있음.
- Guards: 인증. 지정된 경로로 통과할 수 있는 사람과 허용되지 않는 사람을 서버에 알려줌.
- interceptors: 응답 매핑 및 캐시 관리와 함께 요청 로깅과 같은 전후 미들웨어.

## Custom decorator
- createParamDecorator 같은 걸로 만들 수 있다.
- ctx: ExecutionContext
- `ctx.switchToHttp().getRequet()`

## Logging
- 원래 로그는 개발을 하면서 넣는 게 정석이다. (기능 하나 당)
- express.js에선 보통 winston을 쓰지만, 여기선 nest.js build-in `Logger` 이용
### log의 종류
- Log: 중요한 정보의 범용 로깅
- Warning: 치명적이거나 파괴적이지 않은 문제
- Error: 치명적이거나 파괴적인 문제
- Verbose: 응용 프로그램의 동작에 대한 통찰력을 제공(운영자용)

### Log level
- Development
- Staging
- Production