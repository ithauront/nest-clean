vamos começar a usar o nestJs e aprender sovbre ele e so la na frente que iremos acoplar ele com o que criamos no forum.

# nest Js
é uma feramente framework. ele é um framework opinado, ou seja ele traz muita opinição sbre como voce vai construir as coisas dentero dele. ele te da muitas receitas de como fazera as coisas
então quando usar o nest e quando usar o fastify? quando precisamos dessa opinião ao nosso lado a gente usa o nest. por exemplo quando o time esta sem lideraça perdemos menos tempo com decisao e vamos direto a mao na massa
ele não tem estrutura de pastas preestabelecida e ele acaba deixando liberdade para a gente tomar decisoes na parte de arquitetura, enauqnto ele traz preferencias na parte de ferramentas
a gente pode instalar ele globalmente ou se não quiser a gente da um gitclone no repotisotio que tem na documentaçéao e instala
https://docs.nestjs.com/
instalando global a gente vai ter no terminal a cli do nest instazlada q vqi permitir a gente fazer comandos do nest
o nest pode com esses comands criar arqivos em uma estrutura pronta pra vc como por exemplo um controler. mas a gente vai fazer eles a mao 
vamos criar o nosso projeto em uma pasta nova. sparado do forum
 testevite nest new nest-clean
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? npm
CREATE nest-clean/.eslintrc.js (663 bytes)
CREATE nest-clean/.prettierrc (51 bytes)
CREATE nest-clean/README.md (3340 bytes)
CREATE nest-clean/nest-cli.json (171 bytes)
CREATE nest-clean/package.json (1950 bytes)
CREATE nest-clean/tsconfig.build.json (97 bytes)
CREATE nest-clean/tsconfig.json (546 bytes)
CREATE nest-clean/src/app.controller.ts (274 bytes)
CREATE nest-clean/src/app.module.ts (249 bytes)
CREATE nest-clean/src/app.service.ts (142 bytes)
CREATE nest-clean/src/main.ts (208 bytes)
CREATE nest-clean/src/app.controller.spec.ts (617 bytes)
CREATE nest-clean/test/jest-e2e.json (183 bytes)
CREATE nest-clean/test/app.e2e-spec.ts (630 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project nest-clean
👉  Get started with the following commands:

$ cd nest-clean
$ npm run start


                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.


               🍷  Donate: https://opencollective.com/nest

➜  testevite cd nest-clean
➜  nest-clean git:(master) ✗
assim tem como fazer a instalação eu escolhi npm porque o pnpm deu um erro, mas a rockeseat fez com o pnpm que é mais rapido.
agora a gente entra na pasta que a gente criou e vai dar uma limpada nela pq ele ja cria uma estrtutura.
apagamos o readme
apagamos o prettier e o eslint
apagamos tudo que esta na pasta teste
na pasta src a gente retira o arquivo.spec.ts pa ele é um teste
agora vamos no package json e removemos tosos os scripts de testes pa eles séao jtest e a gente vai usar o vitest
vamos tambem remover todas as configuraçéoes do jest
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
  nas dev dependencies a gente tira os
   "ts-jest": "^29.1.0",
    "ts-loader": "^9.4.3",
     "supertest": "^6.3.3",
     "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "jest": "^29.5.0",
    "prettier": "^3.0.0",
     "@types/supertest": "^6.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.42.0",
      "@types/jest": "^29.5.2",

o packagejson fica assim:
{
  "name": "nest-clean",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix"   
  },
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.1"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@nestjs/schematics": "^10.0.0",
    "@nestjs/testing": "^10.0.0",
    "@types/express": "^4.17.17",
    "@types/node": "^20.3.1",
    "source-map-support": "^0.5.21",  
    "ts-node": "^10.9.1",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.1.3"
  }

}

apos isso tudo a gente volta pro terminal e roda um npm i para ele instalar agora as dependencias como estao 
e depois de instalar a gente roda o npm run start:dev
para garantir que esteja funcionando e ele deve mostrar esse log;
[1:42:45 PM] Starting compilation in watch mode...


[1:47:55 PM] Found 0 errors. Watching for file changes.

[Nest] 1246  - 01/13/2024, 1:50:01 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1246  - 01/13/2024, 1:50:01 PM    WARN [ModuleTokenFactory] The module "InternalCoreModule" is taking 11.28ms to serialize, this may be caused by larger objects statically assigned to the module. More details: https://github.com/nestjs/nest/issues/12738 +25ms
[Nest] 1246  - 01/13/2024, 1:50:01 PM     LOG [InstanceLoader] AppModule dependencies initialized +47ms
[Nest] 1246  - 01/13/2024, 1:50:03 PM     LOG [RoutesResolver] AppController {/}: +1570ms
[Nest] 1246  - 01/13/2024, 1:50:03 PM     LOG [RouterExplorer] Mapped {/, GET} route +9ms
[Nest] 1246  - 01/13/2024, 1:50:03 PM     LOG [NestApplication] Nest application successfully started +8ms

agora o nest ja vemcom um helloword então se a gente abrir um outro terminal e rodar uma chamada htttp para a portq que ele esta rodando que é por padréao a 3000 como a gente pode ver no main então se a gente abrir o navvegador e der um http://localhost:3000 ele vai mostrar hellowordl
para evitar conflito de portas bvamos colocar para a porta 3333 
# estrutura basica do nest
o nest vem no src com tres arquivos alem do main: o service o module e o controler
controller: é uma porta de entrada para nossa aplicação. geralmente uma porta de entrada via HTTP. entéao uando um cliente faz uma requisição http o primeiro arquivo que ouve essa requisição é um controller. todo controller no nest é identificado com um decoratror @controller()
isso é uma caracteristica dierente do nest o uso de decorators. o nest faz muito uso de decorators
os decorators são uma função que adiciona comportamento em algo pode ser uma classe um metodo, propriedade, qualquer coisa.
uma representaão basica dele é ver ele como uma função que recebe algo como paramtro e devolve esse algo modificado
então no caso do controler quando a gente clocar o @controller() e cima da classe que esta la a gente esta passando essa classe como parametro
então usando o decorator controler a gente esta dizendo que a classde abaixo vai conter metodos que são rotas
e as rotas são identificadas com outros decorators; no caso nos temos o @get()
como a gente não passou nenhum parametro no get ele entende que é a rota root no nosso caso a que a gente definiu no main 3333
tanto os metodos(decorator get) quando o decorator controller podem receber parametros. nos metodo a gente define a rota para aquele metodo por exemplo um /hello e no controller a gente define como parametro para todos os metodos que estão dentro dele como por exeplo ele vem no padrão / mas se a gente botar /api so chamar o 3333 néao funciona mais tem que chamar 3333/api e se quiser chamar o metodo que esta como hello la dentro vai ter que ser  3333/api/hello
e nos temos todos os decoators para todos os metodos disponiveis no nest/comum é so importar.
no caso o nosso controler ele ja esta sendo injetado com uma dependencia:
 constructor(private readonly appService: AppService) {} 
 o que mostra que no nest desde o inicio a gente ja esta usando o conceito de inversão de dependencia
  ou seja o app controler não esta instanciando o appservice, el não faz new appService. ele esta recebendo o appservice como uma propriedade na verdade uma parametro no construtor que vira uma propriedade por causa do privetq que a gente coloca na frente ai depois a dente pode usar o app service nas funçéoes do controler.

  app.module = a raiz do nosso projeto porque é ele que é usqdo no nest factory create. o modulo é um arquivo que junta tudo, todos os controlers, conexçoes com bando de dados e etc.
  todo modulo é uma classe vazia (ele pode ter coisas dentro dele mas geralmente não vai ter)
  o module é uma classe que tem o decorator module. e  ele recebe primariamente duas coisas o controlers e o providers (a gente pode tirar o import por enquanto) o controllers mostra quais controllers a gente recebe nesse modulo e como o controller esta recebendo uma dependencia a gente declara em providers todas as dependencias que o controllers possam receber
  ai o nest vai perceber que o controller esta precisando de uma dependencia desse tipo e vai procurar dentro do modulo se tem alguma dependencia que bate com esse nome; ai ele olha no import, ve que tem e passa ela para la ele faz a injeção de dependencia totalmente automatizada. porem para a injeção acontecer o app.service precisa obrigatoriamente estar com o decorator injetable
  ou seja a gente diz que o app service é injetavel que ele tem coisas que possam servir a outras classes e por isso podemos injetar ela.
  no fim todo que não é controller provavelmente é um provider. por exemplo um repositorio do banco de dados, é um provider, caso de uso, etc. tudo que não recebe requisição http é provider, tudo que a gente vai precisar injetar em outras classes é provider.
  a gente tem um outro conceito que é o import export mas vamos ir mas a fundo nele depois. mas ele basicamente serve para separar as coisas, se a gente ta com a aplicação muito grande e queremos separar por partes fazendo um efeito cascata a gente usa isso.
  # eslint  prittier
  camos configurar o eslint e o prettier no projeto
  vamos instalar com a configuração da rocketseat
  npm i eslint @rocketseat/eslint-config -D
  e vamos na raiz do projeto criar um arquivo chamado .eslintrc.json e nele a gente coloca esse codigo:
  {
    "extends": "@rocketseat/eslint-config/node"
}
agora so de salvar essearquivo ele deve começar a apontar alguns erros
a gente pode dar o npm run lint para dar fix em tudo.
alem disso no controller fica um erro por causa do construtor vazio e em projetos typescript com injeção de dependencia pode acontecer frequante de ter construtor vazio então bamos voltar la no arquivo do extends do eslint e vamos subescrever essa regra fica assim:
{
    "extends": "@rocketseat/eslint-config/node",
    "rules": {
        "no-useless-constructor":"off"
    }
}
vamos tambem criar um arquivo .eslintignore porque nas pastas dist e nodemodules tem varios codigos compilados que podem dar erro então para não ficar pesando isso a gente vai ignorar eles

# docker compose
vamos usar banco de dados postgres e vamos para isso usar o docker
vamos criar um arquivo chamado docker-compose.yml na raiz do projeto
e a gente ai fazendo ele com cuidado com a identação
usamos a versão do docker compose 3.8
e nos servios a gente da o primeiuro com nome de postrgres mas podemos dar qualquer nome o containername a gente coloca para le não gerar aleatorio
e na porta a gente direciona a porta 5432 do postgres para a 5432 do nosso localhost
e na image a gente usa a image oficial do postgres porem para produção tamvez seja melhor usar a do bitnami que tem mais proteção
agora vamos definir variaveis ambiente começando pela postgre_user que é qual usuario que é o usuario
a postgrespassword para definir um password
o postgresdb que é o nome do banco de dados
e por ultimo um volumes que é o que perlite que a gente persista uma pasta do container em nossa maquina local ou seja a gente mantemos dados do container em nossa maquina para se um dia perdemos o container a gente possa recriar ele com base nos dados
a gente vai criar uma pasta data na raiz do projeto e vamos dizer que a pasta data/pb vai ser mapeada para dentro do caminho data/postgres la do docker para fazer isso a gente da essa linha
- ./data/pg:/data/postgres
e ai dentro das variavbeis ambiente a gente pode definir uma pgDATA para dizer em qual pasta vai ser armazenada os dados do postgres e ai a gente usa essa /data/postgres assim tudo que for salvo a vai ser sincronizado com nossa pasta local
agora com isso pronto a gente no terminal roda
docker-compose up -D
o arquivo que o rocketseat mandou fazer foi esse:
version: '3.8'

services:
  postgres:
    container_name: nest-clean-pg
    image: postgres
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: nest-clean
      PGDATA: /data/postgres
    volumes:
      - ./data/pg:/data/postgres

      mas ele não estava funcionando ai eu vi com o chatgpt e ele fez esse:
      version: '3.8'

services:
  postgres:
    container_name: nest-clean-pg
    image: postgres
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: nest-clean
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:

e esse funcionou.
porem agora aquela peristencia vai ficar no proprio docker como explicado aqui:
Quando você define um volume no Docker, especialmente um volume gerenciado pelo Docker como no seu caso, os dados armazenados dentro desse volume são persistentes. Isso significa que, mesmo se você remover o container, os dados dentro do volume permanecerão intactos e disponíveis para serem usados novamente quando você criar um novo container com o mesmo volume.

No entanto, esses dados não estão armazenados em um diretório visível ou acessível diretamente em sua máquina local como estavam quando você mapeava para ./data/pg. Eles estão, em vez disso, armazenados em um local gerenciado pelo Docker, geralmente em /var/lib/docker/volumes/ no seu sistema host.

Se você deseja ter um backup físico desses dados em um local específico do seu sistema host (como você estava tentando fazer com ./data/pg), você pode seguir estas etapas:

Backup Manual: Você pode fazer backup dos dados do volume manualmente. Isso geralmente envolve copiar os dados do volume Docker para outro local em seu sistema host. Você pode encontrar o local exato dos dados do volume com docker volume inspect <nome_do_volume> e, em seguida, copiar esses dados para o local desejado.

Mapear para um Diretório Local: Se você prefere que os dados estejam sempre sincronizados em um diretório específico do seu host (como era o caso com ./data/pg), você pode voltar para a configuração anterior de mapeamento de volume, mas terá que garantir que as permissões do diretório no host sejam compatíveis com as necessidades do container.

Automatizar Backups: Para uma solução mais robusta, você pode configurar um processo de backup automático que periodicamente copia os dados do volume Docker para um local seguro.

Lembre-se, a escolha entre usar volumes gerenciados pelo Docker e mapear diretórios locais depende das suas necessidades específicas de persistência de dados e backup. Se a persistência de dados é a única preocupação (e não o backup), os volumes gerenciados pelo Docker são geralmente a melhor opção devido à facilidade de uso e à menor probabilidade de problemas de permissão.
 em outras palavras da forma que u fiz:
 esses dados fica armazenados no meu proprio hd, porem de uma forma que eu não conseguiria acessar apenas o programa docker teria como usar eles para recriar o container com todos os dados que foram persistidos ao longo da vida desse container

 vamos ter que lembrar de rodar o doker quando a gente for fazer requisção.

 mas com isso nos temos nosso banco de dados confugurado.
 
 # setup do prisma
 vamos configurar e usar o prisma nesse projeto
 vamos instalar ele como dependencia de desenvolvimento
 npm i prisma -D 
 isso instala a cli do prisma para rodar as migrations e tudo mais
 e vamos instalar tambem o client do prisla
 npm i @prisma/client
 e essa como dependencia normal e não como dependencia de desenvolvimento.
 com essas duas dependencias instaladas a gente pode rodar um npm ou npx ver qual funciona
 npx prisma init
 assim el vai criar a pasta prisma com o schema .prism dentro dele
 para ver a sintaxe certinha temo que estar com a extenção do prisma instalada, se néao nao vai ter a sintax highlight
 e ele vai criar tambem um arquivo .env
 ai a gente vai logo la no gitignore e comoca o .env dentro dele
 e vamos colocar tambem a pasta data do docker para ela não ser adicionada no github
 

como não tem muito o que configurar vamos ja começar a criar o nosso primeiro schema.

vamos la no prisma/shema.prisma
e vamos adicionar o model User
ele vai ter um id que vai ser a chave primaria e vai ser por default um uuid
ele vai ter um nome
um email que vai ser unico e vai ter uma senha
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id String @id @default(uuid())
  name String
  email String @unique
  password String
}

porem a gente vai adicionar um map para essa tabela para renomear ela como user com letra minuscula assim a gente pode seguir o padrao de todas as tabelas começarem com letra minuscula e er um _ entre as palavras para isso a model user vai ficar assim ai ela via ficar no plural e com letra minuscula
model User {
  id String @id @default(uuid())
  name String
  email String @unique
  password String

  @@map("users")
}

agora que essa tabela esta feita nos vamos criar mais uma
que é o model de question
mais na frente a gente vai trazer as outras mas por enquanto vamos ter so o usuario e a pergunta

ela vai ter tambem um id como a outra um title um slug que vai ser unico  um contente um created at que vai ser datetaime com o default para now e com um map para escrever ele em snakecase
updatedAt com tambem um DateTime mas como opcional porque quando criar a pergunta ela não vai ter datade updatedAt e a gente coloca a flag do prisma  @updatedAt que vai atualizar automaticamente quando uma pergunta for atualizada ele vai atualizar automaticamente. colocamos o map tambem peo mesmo motivo para updated_at
e fazemos o map da tabela para questions e vamos fazer um relacionamento author User e com a estenção do prisma se a gente salvar ele cria o relacionamento para a gente então fica assim antes de salvar

model Question {
  id String @id @default(uuid())
  title String
  slug String @unique
  content String
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  author User

  @@map("questions")
}

apos salvar
model Question {
  id        String   @id @default(uuid())
  title     String
  slug      String   @unique
  content   String
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  author User   @relation(fields: [userId], references: [id])
  userId String

  @@map("questions")
}
ele faz essa ateração automatica
ele criou um campo UserId dentro dele que a gente vai renomear para authorId e trocamos tambem na relação o fields para authorId e fazemos o map dele tambem para ser snakecase

model Question {
  id        String   @id @default(uuid())
  title     String
  slug      String   @unique
  content   String
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")
  authorId  String   @map("author_id")

  author User @relation(fields: [authorId], references: [id])

  @@map("questions")
}

e no user ele tambem criou o question
model User {
  id       String     @id @default(uuid())
  name     String
  email    String     @unique
  password String
  Question Question[]

  @@map("users")
}

e  a gente vai mudar par questions no plural e com minusucula fica tudo assim
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       String     @id @default(uuid())
  name     String
  email    String     @unique
  password String
  questions Question[]

  @@map("users")
}

model Question {
  id        String   @id @default(uuid())
  title     String
  slug      String   @unique
  content   String
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")
  authorId  String   @map("author_id")

  author User @relation(fields: [authorId], references: [id])

  @@map("questions")
}

agora podemos rodar as migrations mas antes temos que rodar o nosso banco de dados então vamos no docker e inicialisamos ele
depois de inicializar a gente vai no terminal e rodamos
npx prisma migrate dev
deu erro porque a gente não trocou as variaveis no .env vamos no arquivo .env e mudamos as coisas e e agente troca o johndoe pelo nome que a gente usou quando a gente fez o banco de dados e o ramdompassowrd pelo password que a gente a gente poderia tambem colocar o nome do banco nest-clean 
 fez fica assim:


DATABASE_URL="postgresql://postgres:docker@localhost:5432/nest-clean?schema=public"

agora a gente roda de novo o npx prisma migrate dev vai pedir um nome para  a migration a gente diz createusersandquestions
e agora com o npx prisma studio a gente ja pode ver nossa tabela.
funcionou

## criando serviço do prisma
vamos configurar o service do prisma para que os controlers da aplicação possam acessar a conexão com o prisma em outros frameworks a gente criaria o arquivo prisma e criaria o prismaClient. mas dentro do nest como ele ja trabalha com a parte de inversção de dependencia vai ser um pouco diferente
a gente vai criar no src uma pasta chamada prisma
e dentro dela um arquivo chamado prisma.service.ts e como tudo que não é controller é um service a gete vai fazer uma classe para esse prisma service dentro desse aqruivo dessa forma:
export class PrismaService {
    
}
e todo servico que vai precisar ser inhetado em algum outro lugar da aplicação vai precisar ter o decorator injetable
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaService {
    
}
assim a gente permite que ele seja usado em outras partes da aplicação.
agora a gene vai la no nosso appmodules e eclara ele
  providers: [AppService, PrismaService],

  importando ele do lugar que a gente criou
  agora todo o metodo que a gente colocar no nosso prismaService a gente pode pegar ela em outros controlers porque o nest vai injetar automaticamente
  então agora dentro do prismaService a gente percisa fazer a conexão com o banco de dados e tem dois jeitos para isso.
  a gente pode criar um construtor
  passando para a classe um public client: PrismaClient e importando isso de @prisma/client
  e ai no construtor a gente fae um this.client = new PrismaClient()

  e agora a gente pode ir no controller e fazer um @post("/hello") {
    store(): string
    return this.prisma.client ( e qgora a gente ja vai ter acesso ao client aqui) e podenmos dar um .user.findMany()
  }
  
  se a gente dar um post agora nessa rota vai retornar um array vazio porque não tem usuario no banco de dados mas se a gente criar um usuario com o prisma studio e dar o post nessa rota ele vai achar. então essa é uma forma de criar. MAS TEM UMA FORMA MAIS SIMPLES 
  e assim que vamos fazer.
  a gente vai na nossa classe prismaService e faz ela extender a prismaCleint
  e agora não precisamos mais do public e podemos no constructor so chamar um super que ai ele vai chamar o constructor do prismaClient fica assim 
  import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super()
  }
}

e agora a gente não precisa mais usar o client la na nossa rota a gente pode usar direto this.prisma.user.findByMany() porque como ele ja esta estendendo o prismaClient ele ja é o client em si. o controller fica assim:
import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('/hello')
  async store() {
    return await this.prisma.user.findMany()
  }
}

mas podemos melhorar isso. o super esta chamando o construtor do prismaClient então tudo que passamos para ele são os paramentros que podemos enviar direto para o prismaCleinte então podemos fazer um objeto e passar um log: ['query] 
assim ele vai fazer um log nas query sql mas no nosso caso a gente so vai colocar o log em warn e em erro .
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }
}

com isso a nossa conexão esta finalizada. mas outra coisa que é legal de fazer é que dentro dos services do nest a gente pode implementar algimas interfaces  e tem uma que se chama onoduleInit e outra que se chama OnModuleDestroy e essas interfaces a gente pode pedir para o vscode implementar ai fica assim:
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }

  onModuleInit() {
    throw new Error('Method not implemented.')
  }

  onModuleDestroy() {
    throw new Error('Method not implemented.')
  }
}
esses dois metodos são metodos que o nest chaa automaticamente quando o modulo que usa esse servico nesse caso o prisma service for ou instanciado no caso do init ou destruido no caso do destroy. isso acontece caso a nossa aplicação de um crash a gente quer que a conexão com o database feche então a gente vai configurar esses metodos
vamos dar dentro desses metodos um return this.conect ou return this.disconect fica assim:
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }

  onModuleInit() {
    return this.$connect()
  }

  onModuleDestroy() {
    return this.$disconnect()
  }
}


é importante implementar os dois porque pode dar um problema e a gente fazer o disconenct mas depois de concertar esse erro a aplicação vai subir de novo com o autorestart e ai ela vai ter que conectar

## controller de criação de conta
agora nos podemos começar a construir nossa aplicação do zero. para iniciar essa fase vamos logo apagar o nosso app controller e o nosso app service que a gente não estara usando.
e agora vamos começar a construir
vamos criar uma pasta no src chamada controllers e uma pratica legal é que para cada rota a gente tenha um arquivo de controller diferente.
teoricamente ul controller pode abrigar varias rotas, porem podem acontecer problemas de uma nova rota a gente não saber em qual controller usar, e pode se perder onde esta cada rota.
então a gente vai criar uma rota para cada coisa. 
vamos então criar uma rota para criação de conta
create-account.controller.ts
o .controller.ts é padr padrão do nest e agora ele funciona como uma extenção mas não precisa realmente usar o .controller a gente pode fazer so .ts
dentro do arquivo a gente exporta a classe createaccount-controller
ele vai usar o @controller
e a gente pode botar logo o prefixo da rota accounts assim todas as rotas ai dentro vão usar esse prefixo
ai dentro vai ter umunico metodo porque vamos ter um controlle por rota
esse metodo vai ser o handle e ela vai receber o @Post e como a gente ja define o /acounts no controler a gente não precisa definir tambem no post mas sea gente quisesse a gente podia definir a rota no @Post e não no @Cotroller fica assim:
import { Controller, Post } from '@nestjs/common'

@Controller('/accounts')
export class CreateAccountController {
  @Post()
  async handle() {}
}

agora vamos fazer o metodo handle. esse controller vai chamar o banco de dados então vamos dar um contructor antes do handle nesse constructor a gente mete um private Prisma : que vai ser do tipo PrismaService e a gente importa isso e na handle a gente faz uma cont name para ser jhon doe
uma const para email e uma para password e vamos colocar123456
agora para ciar o usuario a gente faz um await this.prisma.user.create({}) dentro do objeto a gente coloca data: {} e dentro do objeto de data a gente passa as informações
fica assim:
import { Controller, Post } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle() {
    const name = 'Jhon Doe'
    const email = 'jhon@doe.com'
    const password = '123456'

    await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
  }
}

agora vamos para o app modules e retiramos os arquivos que deletamos e detro de controllers a gente passa o createAccountController
sempre que a gente cria algo assim e com o app rodando o nosso log ai mostrar todas as rotas que estão e como elas funcionam e tudo mais. para evistar isso que no futuro vai ficar enrome a gente pode ir no arquivo main.ts
e no nestFactoryCreate a gente passa logger colo false
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false })
  await app.listen(3333)
}
bootstrap()

mas isso pode ser mais pra frente, por enquanto não vamos botar.

agora que a rota esta feita e o controller cadastrado se a gente rodar o banco de dados e chamar essa rota com o post ele vai criar e vai retornar 201 porque por ser rota post isso ja vem configurado. porem a gente pode mudar essa resposta de 201 usando outro decorator que é o httpCode(201) por exemplo que é o codigo que ja vem mas dessa forma a gente força que o codigo de sucesso dessa rota seja sempre o 201.
assim:
  @Post()
  @HttpCode(201)
  async handle() {
    const name = 'Jhon Doe'
    const email = 'jhon@doe.com'
    const password = '123456'

como a gente determinou que o email é unico se a gente chamar essa rota de novo vai dar erro nesse caso um 500 internal server error pq ele não consegue criar o usuario porque o email ja existe
e como a gente não fez nenhuma tratativa de erro ainda ele vem assim no padrão.
mas nossa criação esta em hardcode e a gente quer permitir que um usuario mande as coisas que ele quer para criar o usuario. como fazer isso. em um express por exemplo a gente pegaria o request e response das rotas e criaria isso. mas no nest não é assim. a gente vai usar decorator
uma requisição pode ter parametros, headers, body etc. muita coisa vem em uma requisição e a gente não quer pegar tudo. nesse caso a gente quer apenas o body que é onde vai vir o name email e password
então para isso dentro dos argumentos da handle a gente coloca @Body() body:any isso significa que a gente esta pegando o que vem no body da requisição e esta salvando em uma variavel chamada body que tem como tipo any
sabendo que esse @Body é importado do nest commum
se a gente der um conole.log nesse body e comentar o resto da função e rodar o post o body a gente vai ver no console.log que ele veio vazio porque a gente néao enviou nada. se a gente fizer um novo envio passando {name:iuri} no json a gente vai ver que dentro do body vai vir isso.
então para capturar isso a gente pode fazer uma desestruturação e pegar de dentro do body o name, email e password dessa forma
const {name, email, password} = body
e descomentamos a parte do codigo de criação de usuario.
import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    const { name, email, password } = body

    await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
  }
}

com isso a gente consegue ja criar o usuario usando a requisição

agora que ja conseguimos criar o usuario a gente pode verificar antes de fazer a criçéao qe o email néao esta ducplicado para poder fazer uma tratatica de erro/ mas antes disso vamos corrigir um erro do nest que é no tsConfig.json o a gente tem que adicionar um campo para stric pq o padrão dele não vem como true a gente adiciona a linha do stric e modifica a do stricnullcheks para true fica assim:"strict": true,
    "strictNullChecks": true,
    logo depois do skipLibCheck
    com isso a tipagem do nosso typescript vai verificar mais coisas. porque por exemplo ao fazermos um findunique a gente pode não encontrar um usuario. e nesse caso vai voltar nullo e ai o typescript antes não avisaria. e agora com essa nova regra ele avisa.

    agora voltamos para o controller
const userWithSameEmail = this.prisma.user.findUnique({ where: { email } })
com essa linha a gente verifica se tem um email no banco de dados que é igual ao email que a gente recebeu.
agora a gente faz o if para se ele econtrar
pq se ele não encontrar ele vai direto para a criação de usuario
no nosso if a gente coloca um throw new porem o nest tem varios tipos de exeption se a gente colocar expeption e dar un cntrl espaço a gente tem varias. a http expection que é para coisas http generica, mas tem outras, como forbiden, conflit, badrequest etc no nosso caso a gente vai usar a conflit que ja é o codigo 409 ( a gente pode ver deixando o mouse em cima dela.) e a gentepode passar uma msg passando uma string pra ela. o controller fica assim e agora podemos rodar o docker e ele com o nest:start e testar ele com o imsonmina
testei e funconou.
# hash de senha
vamos agora fazer o hash da senha para isso
vamos instalar o bcryptJs
npm i bcryptjs
e como ele não é desenvolvido com o typescript a gente precisa tambem intstalat o types dele npm i @types/bcrptjs -D
com isso instalado a gente vai para a pagina do controller de create acount e importamos o hash de dentro do bcryptjs
e depois do condicional do user com mesmo email a gente faz uma const para hashedPassowrdf para a agente fazer o hash do password
e ai como a hash é uma função assincrona a gente tem que fazer o await, e passamos para o hash o password e a gente pode passar um salt(que éuma string que é usada para gerar o hash) u a gente pode gerar o numero de rounds da senha, isso de rounds é mais comum. quanto mais alto mais forte a senha, porem mais lento 8 é um bom numero e padrão.
então nos vamos fazer assim, passando so o round de 8 fica assim:
const hashedPassword = await hash(password, 8)
e agora para o password na criação do usuario a gente passa o hashedpassword
e agora a senha ja esta sendo salva como hash. fica assim:
import {
  ConflictException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import { hash } from 'bcryptjs'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    const { name, email, password } = body

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: { email },
    })

    if (userWithSameEmail) {
      throw new ConflictException('e-mail already exists.')
    }

    const hashedPassword = await hash(password, 8)

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
  }
}

## pipe de validaçéao de dados
vamos instalar o zod que é a biblioteca que vamos usar para validação de dados.
npm i zod
agora la no arquivo de create account a gente vai importar o z de dentro do zod e vamos criar um schemma
entéao antes de explortar a classe a gente faz o const createAccountBodySchemma = e ela via ser um z.oject e a gente fala o que ela recebe entéao ela vai receber um nome um email e uma password todos vão ser string e o email a gente adiciona que vai ser email

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

e agora o legal com o zod é que a gentez pode inferir uma tipagem então abaixo disso a gente pode criar o type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema >
ou seja a gente faz a const e a gente passa essa const como a tipagem. agora no lugar do any que era o tipo do body a gente pode usar essa tipagem
esse trecho fica assim:
import { z } from 'zod'

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateAccountBodySchema) {

    porem porenquanto a gente so ta tipando e não esta validando. 
    para validar o que a gente pode fazer é que para pegar o name email e password do body a gente pode colocar esse body dentro de um parse do nosso esquema
        const { name, email, password } = createAccountBodySchema.parse(body)
        com isso ja valida porem a gente não trata os possiveis erros, por exemplo se a gente colocar algo que não é email no lugar de email. ele vai dar um internal server error
  
  tem varias formas de lidar com essa tratativa de erro. a gente poderia fazer um safeparse e um if para o caso de não ser sucesso, poderia fazer um try catch, etc. mas como vamos precisar usar isso em todas as rotas a gente pode fazer uma tratativa mais global que vai poder ser reaproveitada depos.
  então na documentação do nest a gente pode achar algo para a construção de pipes. que são interceptadores, como middleware, uma tubulação que vai reenaminhar o fluxo caso aconteça algo, um erro. eles tem uma sintaxe um pouco diferente de um midleware mas servem o mesmo proposito.
  vamos fazer pipe para validation
  a gente vai no src criar uma pasta chamada pipes e dentro dela um arquivo chamado zod-validation-pipe.ts
a base do arquivo é essa
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common'
import { ZodObject } from 'zod'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      this.schema.parse(value)
    } catch (error) {
      throw new BadRequestException('Validation failed.')
    }
    return value
  }
}

a gente troca o zobObject por zodSchema para não precisar passar o <any> essa classe que a gente tem vai ter um construtor então a gente precisa passar para ela um schema
a gente pode tirar o metadata tambem
e ai eme tem o metodo transforme que a gente usa por causa do pipe transtofme que é o unico tipo de coisa que o pipe vai fazer que é receber o valor pelo pipe e transformar isso em outra coisa no caso vai ser um parse que caso falhe ele vai mandar uma bad request exception
e no value a gente coloca unknonw fica assim mas logo a gente vai melhorar um pouco isso:
import { BadRequestException, PipeTransform } from '@nestjs/common'
import { ZodSchema } from 'zod'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      this.schema.parse(value)
    } catch (error) {
      throw new BadRequestException('Validation failed.')
    }
    return value
  }
}

agora a gente vai no nosso controller e logo depois do @Post a gente vai fazer @usePipes e passar para ele o nez zodValidation piope que fizemos e passamos para ele o schema que criamos e poremos tirar o parse do body que a gente fazia antes porque quem vai faer o parse é  body:
 @Post()
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  @HttpCode(201)
  async handle(@Body() body: CreateAccountBodySchema) {
    const { name, email, password } = body

    dessa forma se a gente mandar algo que néao valide ele ja retorna cpma  messagem
    de validation error que a gente fez
    agora amos voltar para o nosso pipe para melhorar ele. na parte do erro a gente vai fazer um if error for instanci de zod error a gente vai dar throw new BadRequest expection mas a gente pode mandar para ele um objeto entéao dentro vaos tar um error.format() assim ele vai formatar o erro de uma maneira mais facil de ler, e tambem vamos mandar message 'validationErroré e o status code 400
     transform(value: unknown) {
    try {
      this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed.',
          statusCode: 400,
          errors: error.format(),
        })
      }
      throw new BadRequestException('Validation failed.')
    }

    assim no error format a gente recebe o tipo de erro que é invalid email e a gente pode sar isso. se passar por não ser um instance of zod Error ele vai vair no validation failed normal.
    a gente pode instalar uma biblioteca para ajudar azod-validation-error
    vamos instalar npm i zod-validation-error
    e ela deixa nossos error ainda mais legiveis
    então a gente vai chamar o fromZodError dessa biblioteca e comocar no errors e o erro dentro do fromZodError assim
    errors: fromZodError(error),
    com isso a gente vai ter no log dentro de error o details que vai nos dar o codigo que vai ser invalid string a mensgame que é a invalid email  o path que é email e o validation que é o email ou seja em qual validação falhou. clarro que isso para o caso de a gente ter feito um teste que tenha falhado porque a gente não colocou um email possivel.
    agora o nosso pipe esta feito e sempre que a gente precisar de uma validação a gente vai usao @UsePipies
    a o nosso pipe fica assim:
    import { BadRequestException, PipeTransform } from '@nestjs/common'
import { ZodError, ZodSchema } from 'zod'
import { fromZodError } from 'zod-validation-error'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed.',
          statusCode: 400,
          errors: fromZodError(error),
        })
      }
      throw new BadRequestException('Validation failed.')
    }
    return value
  }
}

# est client extention
a gente vai instalar a extenção rest client essa extenção fica armazenada no projeto enão se oitra pessoa pegar ele tambem vai ter acesso
a gente vai no vscode e instala essa extenção
para colocar ela no projeto a gente cria um arquivo na raiz do projeto que a gente pode dar o nome que quiser nesse caso vai ser client.http
e nesse arquivo vamos escrever as nossas requisições
vamos no caso colocar a nossa unica que temos porenauqnto que é a de criação de usuario
a gente coloca o tipo de requisição POST  e o endereço
embaixo a gente coloca o tipo do conteudo application/json 
e abaixo disso a gente manda um objeto com o body da requisiàao
POST http://localhost:3333/accounts
Content-Type: application/json

{
    "name": "Iuri Reis",
    "email": "iuri@reis.com",
    "password": "123456"
}

agora aparece la um send request e se a gente tiver com a aplicação rodando a gente pode mandar esse sendrequest
porem da para melhorar isso porque usando o rest client a gente pode fazer algumas variaveis como o @baseUrl e a gente define ela como o localhost aue estamos usando
e agoraem cada requisição ao inves de chamar o nome inteiro a gente vai chamar so o baserl e se a gente tivr elas com ### tres hashtags
gente tem que separar elas com ### tres hashtags

e a gente tambem pode colocar nome nas requisições usando # @name fica assim:
@baseUrl = http://localhost:3333

# @name create_account
POST {{baseUrl}}/accounts
Content-Type: application/json

{
    "name": "Iuri Reis",
    "email": "iuri@reis.com",
    "password": "123456"
}

###

# @name autenticate
POST {{baseUrl}}/sessions
Content-Type: application/json

{
    "email": "iuri@reis.com",
    "password": "123456"
}


com isso a gente fez o esqueletp de nossas requisições. a sessions ainda não existe. e tambem se a gente ficar mandado a create vai dar erro porque o email ja existe. mas pelo menos o rest client jporem estava tendo um erro que eu vi que algumas pessoas na internet tambem estavam tendo se a gente deixar como localhost. por qlgum motivo temos que trocar o localhost por [::1] e dessa forma ele funciona então fica assim:
@baseUrl = http://[::1]:3333

# @name create_account
POST {{baseUrl}}/accounts
Content-Type: application/json

{
    "name": "Iuri Reis",
    "email": "iuri@rei7.com",
    "password": "123456"
}

###

# @name autenticate
POST {{baseUrl}}/sessions
Content-Type: application/json

{
    "email": "iuri@reis.com",
    "password": "123456"
}

## cofigurar env
geralmente a gente pega as env usano o process.env mas isso não permite toda e qualquer manipulação no nest a gente vai usar o zod junto com o process env para poder validar e transformar as variaveis ambientes
vamos usar um modulo do nest para poder fazer isso que é o nest config isso é a recomendação do proprio nest ent éaio valois instalar isso
npm i @nestjs/config
dentro de src a gente cria um arquivo chamado env.ts
neal vamos exportar uma const chamada envScmeha sendo um z.object e vamos declarar todas nossas variaveis ambiente nessa classe a gente começa tendo so a databaseURL
import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})
vamos colocar tamber uma para port e ai qa gente tem que usar o vcoerce para ela transormal em numero. ela vai ser tambem opcional e ter default de 3333
agora vamos exoportar o type env que  = z.infer<envSchema>
assim ele vai pegar o type das variaveis q a gente informar
import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
})

export type Env = z.infer<typeof envSchema>


agora a gente tem que ir no appmodule e importar o ConfigModule de nest:config
import { ConfigModule } from '@nestjs/config'
agora no module a gente da um imports e nele um array no qual a gente passa o configmodule
teemos tambem que passar forroot()
o forroot significa que nesse modulo a gente pode passar configuração
e ai dentro do forroot a gente vai passar o esquema de validação não vamos passar o validaionschemma porque para o nest ele néao esta usando o zod e sim o joi então para ontornar isso a gente vai usaro o validate
para o validate a gente passa o env e usamos uma função para ele validar se é true ou false então passamos uma arrow e o envSchema.parse(env) 
e depois passamos uma outra opção que é isglobal como true
assim a gente pode separar a nossa aplicação em varios modulos menores e kuntar eles todos sem problemas e sem configurar as variaveis em todos eles. com o true ele pode ser acessado em todos modulos da aplicação. fica assim:
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}


agora para usar a gente vai usar o configService que vai serusado como o prismaService com inversão de dependencia e elas sendo injetadas automaticamente.
ou seja a gente joga ele nos construcotrs das classes
no prisma não precisamos pq ele pega automaticamente mas va:os usar no main,
so que para o main é um pouco diferente
a gente tem logo depois de definir o app colocamos uma linhq aue a gente copia da propria documentação do nest que é assim
const configService = app.get(ConfigService)
importamos o configService
o app.get pega uma dependencia da nossa aplicação
a gente poderia por exemplo passar o prismaService e teriamos acesso ao prismaService nele
agora com o configService a gete pode pegar a portq qeu é fazerndo uma const para port sendo igual a configService.get('e o nome da variavel ambiente aqui no caso PORT')
 const port = configService.get('PORT')
 e agora no listen a gente passa a port
 porem se a gente passar o mouse em port a gente ve que a tipagem esta como any.
 ele não ta conseguindo fazer a inferencia porque o configService esta com um tipo unknown e boolean o unknown é o tipo das variaveis ambeientes e a gente precisa passar isso para ele a gente pode fazer de varias formas uma é dar :ConfigService<env> e importar isso e ai ja funcionaria
 a gente pode tambem no fim da linha do configserv passar um as ConfigService<env> mas nesse caso a gente esta forçando a tipagem dele o que nãoé tão bom e a outra forma seria passar no get um < e aqui a gente passa a tipagem>
 vamos usar essa mas ela funciona da mesma forma que a primeira
   const configService = app.get<ConfigService<Env>>(ConfigService)

   porem apesar de ele fazer a inferencia no get e ele ja sugerir o port e as variaveis que a gente tem la, se a gente passar o mouse no port continua como any. para fazer a inferencia la tambem a gente tem que passar o infer:true dentro de um objeto como segundo argumnto do get
   assim:
     const port = configService.get('PORT', { infer: true })
     porem ai no listen vai dar erro porque le diz que pode ser undefined. e é porque a gente diz que ele pode ser opcional no env. porem caso ele seja opcional a gente da um default então ele nunca vai ser undefined. aparece o undefind entéao porque por padrão para o nest todas as variaveis ambiente podem ser undefined
     porque alguem pode copiar isso e não passar as variaveis ambientes e tudo. entéao a gente precisa avisar para o nest que a gente fez a validação das variaveis ambientes. para isso tem no ConfigService um segundo paramentro chamado wasValidated que como padrão é falso. e se a gente passar isso para true o erro para. então tudo fica assim e não tem erro:
     import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get<ConfigService<Env, true>>(ConfigService)
  const port = configService.get('PORT', { infer: true })

  await app.listen(port)
}
bootstrap()

## configurar jwt e autentication
vamos criar uma pasta chamada auth para colocar tudo que é de autenticação dentro dela. e ai dentro dessa pasta a gente pode fazer varios arquivos como um auth.module.ts
a gente faz nela uma classe para authmodule e usa o decorator module nela
import { Module } from '@nestjs/common'

@Module({})
export class authModule {}

passando para ele um objeto vazio por enquanto
e agora dentro do app.module.ts a gente pode iportar o authmodule assim:
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { authModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    authModule,
  ],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}


o legal disso é que agora tudo que a gente definir na classe authModule vai funcionar em todo o app porqiue ele esta dentro dos imports
e o nest automaticamente coloca ele para funcionar na aplicação inteira.
agora a gente para comecar a construir o nosso auth.module vamos ter que instalar antes o nestjs passport e o nestjs jwt. para isso a gente vai dar o comando no terminal
npm i @nestjs/passport @nestjs/jwt

o passport é uma biblioteca bem famosa para autentificação ele automatica fluxos de autenteificação que são comuns em aplicação web como o jwt tradicional e tal. como tokens que exipram tokens que néao expiram e etc
com isso instalado a gente vai no decorator do module do authmodule e importamos o passport e o jwt porem o jwt a gente precisa configurar então damos um ponto nele e ja tem o register e passamos esse metodo e ai a gente pode passar varias coisas como secret algoritmo e etc; a gente quer usar as nossas env aqui porque a gente quer que a nossas chaves sejam armazenadas nas nossas envs

para isso a gente vai na nosso arquivo env e colocar um JWT_SECRET = 'define qlguma chave aqui'
e no nosso env.ts a gente vai definir ela para validaàéao por enquanto como uma string
import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
  JWT_SECRET: z.string(),
})

export type Env = z.infer<typeof envSchema>


porem agora voltando no nosso auth.module se a gente colocar o secret nas configs do jwt a gente ainda não consegue acessar o configservice para pegar as variaveis ambiente
porque o config service é uma classe
então no nest para resolver isso a gente e usar nas configuraçéoes de um modulo dados de algum serviço. para isso a gente tem a registerAsync no lugar da register
JwtModule.registerAsync({

  })],
  com o registerAsync a gente tem dentro do objeto outras opções temos o inject que é para a gente passar uma lista de serviços que a gente quer que sejam injetados enquanto estéaos registrando esse modulo então a gente passa o inject: [configService]
  ai a gente pode criar uma função usando o useFactory que ja vem automatico a gente define ela como async e dentro do useFactory a gente diz que recebe config; configservice e passamos o generic detipo env e , true
  e ai de dentro dessa função a gente vai retornar as nossas configurações
  mas agora dentro dessa funçõa a gente ja tem acesso as env
  para pegar ele a gente colocar uma const secret e passa para ela 
   const secret = config.get('JWT_SECRET', { infer: true })
   a gente pega ela pelo config.get e a gente precisa passar o infer true
   ai no return da função a gente retorna o secret, mas nos podemos retornar varias outras configurações tambem se a gente quiser
   é legar entender que no jwt existem varios algoritmos como esse qu a partir de um secret faz o nosso jwt
   porem esse não é o modelo mais seguro. porque imagina que a gente criou um backend principal da aplicaçõa que é onde o usuario faz autentificação. nesse momento ele gera um jwt. imagina que em algum momento a gente tenha um segundo backend na aplicaçõa. e algumas rotas desse segundo backend a gente precise garantir que o ususario esteja logado para ter acesso a essas rotas
   para garantir esse login a gente vai precisar validar o token que foi regado no primeiro servico do primeiro backend e ai o secret para gerar esse jwt esta dentro desse primeiro serviço. para a gente validar no segundo backend a gente teria talvez ue replicar o secret em dois backends é um pouco inseguro porque o segundo serviço não quer gerar novos tokens, ele so quer validar. e ainda assim ele teria o secret nele.
   para contornar isso a gente usa o algoritmo rs256
   nesse caso ele é melhor porque nosso secret não vai ser so uma chave secret. ele vai ser uma chave privada e uma chave publica.
   a chave privada pode ser usada para criação de novos tokens. e o public apenas para validação sem permitir criar nosvos
   assim a chave publica vai poder estar presente em todos os servicços que possam validar o usuario.
   a chave publica não tem problema de vazar porque com ela não da para criar novos tokens.
   vamos fazer esse fluxo de autentificação na nossa aplicação. mas antes disso vou colocar como os arquivos estão agora.
   import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { Env } from 'src/env'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      async useFactory(config: ConfigService<Env, true>) {
        const secret = config.get('JWT_SECRET', { infer: true })

        return {
          secret,
        }
      },
    }),
  ],
})
export class authModule {}

import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { authModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    authModule,
  ],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}

vamos agora então criar a chae publica e a chave privada do noso app. porem elas precisam seguir umcerto padrão e se a gente for la no site do jwt e olhar o  rs256 vai ter algumas possibilidades então a gente precisa gerar essas chaves então a gente pode pedir no google ou no chatgpt um generate private e public key on rsa256 for windows
ai o chat vai ensinar a fazer usando o openssl
ele da um comando para usarmos no terminal e geramos isso na raiz do nosso projeto
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048

colei isso e ele rodou 
vai aparecer um novo arquivo no nossa raiz chalado private_key.pey e vai ter um formato que começa com begin private key e termina com end private key
gora apartir da chave privada a gente vai gerar uma chave publica. a gente pode gerar varias chaves publicas para gerar a chave publica a gente usa o segundo comando que a 
openssl rsa -pubout -in private_key.pem -out public_key.pem

ai ele gera um arquivo public_key.pem é uma chave bem menor
e agora o que a gente vai fazeré converter o conteudo desse arquivo para base64 porque se não fica uma chave enorme com varias quebras de linha
vamos pedir pro gpt convert file content to base64
o chat ensina a fazer de varias formas uma delas usando o proprio o proprio base64 para não ter a quebra de linhas vamos colocaro -w 0 no inicio
no caso a gente colocar o camoninho do file
fica
base64 -w 0 private_key.pem > private_key_base64.txt

vamos fazer igual com a publickey
base64 -w 0 public_key.pem > public_key_base64.txt

agora vamos copiar essas chaves geradas e vamos colar no nosso env.
sob o nome correto de public e private key
JWT_PRIVATE_KEY
JWT_PUBLIC_KEY

com isso feito ja podemos deletar os arquivos do base64. e mais tarde vamos tambem deletar os .pem
é muito importante deletar os base64 porque ele não é um processo de hashing então a partir dele da pra pegar de volta a chave.
mas agora vamos la no nosso env.ts e vamos validar as keys
import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
})

export type Env = z.infer<typeof envSchema>

agora a gente pode ir no nosso authModule e ter pegar a public e private
porem no nosso return como ela esta em base64 a gente não pode simplismente passar essa string a gente tem que fazer um processo de decode então vamos dar um buffer from e passar a key e depois o tipo de encode que é o base64 o buffer é uma forma do node de ir lendo arquivo. a gente podia dar uma representação em texto se a gente colocasse um .toString no fim mas como as keys aceitam buffer não vamos precisar disso 
 publicKey: Buffer.from(publicKey, 'base64'),
 e precidamos tambem passar o singoptions com o algoritmo rs256 para ele saber em qual tiopo estamos escrevendo essas keys   return {
          signOptions: { algorithm: 'RS256' },
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
    
      com isso a gente ja esta pronto para fazer a nossa autentificação.
      para isso então ainda nesse mesmo arquivo
nos vamos para logo abaixo do inject
e vamos passar a opção global como true
isso é para quea gente que esta usado a jwtmodule dentro do authmodule mas a gente quer usar a geração de token por dentro de um controller a gente precisa que seja global. então vamos colocar esse true e o authmodule fica assim:
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { Env } from 'src/env'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      async useFactory(config: ConfigService<Env, true>) {
        const privateKey = config.get('JWT_PRIVATE_KEY', { infer: true })
        const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })

        return {
          signOptions: { algorithm: 'RS256' },
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
        }
      },
    }),
  ],
})
export class authModule {}

agora vamos criar um arquiv de autentication-controller.ts
dentro da pasta de controlers
vamos copiar o createaccountcontroler e colar nesse novo autanticatin-conttoller
e apagamos varias coisas e comentamos outras, apenas para a gente testar se estamos conseguindo gerar um token
fica assim:
import { Controller, Post } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'

// const createAccountBodySchema = z.object({
//  name: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// })

//  type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/sessions')
export class AutenticateController {
  constructor(private prisma: PrismaService) {}

  @Post()
  //  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  // @HttpCode(201)
  async handle() {}
}

e agora vamos alterar um pouco isso. no constructor ao invez do prisma vamos pegar o jwt: JWTService que vem do nestJWT
agora dentro do handle a gente faz o const token = this.jwt.sign({e qaui a gente passa um payload como um sub:user-id}) esse userId por enauqntro é ficticio.
e repois a gente da um return token
import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { PrismaService } from 'src/prisma/prisma.service'

// const createAccountBodySchema = z.object({
//  name: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// })

//  type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/sessions')
export class AutenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  //  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  // @HttpCode(201)
  async handle() {
    const token = this.jwt.sign({
      sub: 'user-id',
    })
    return token
  }
}

vamos agora no appmodule e passar o nosso controler
 controllers: [CreateAccountController, AutenticateController],
 e não podemos esquecer de importar ele.
 agora com isso feito a gene pode rodar o database e o app e a gente vai no client.http e manda a requisição para o sessions e ele devolve para a gente um token. ou seja o token esta sendo gerado.
 a gente pode pegar esse token e jogar la no site do jwt para descriptar ele e ver se bate a nossa sub.

 # controller de autenticação
vamos tirar as partes comentadas no nosso conreller de autentication e importar o zod
 e a gente muda o nome para autenticatebodyschema 
 a gente importa o zod validation pipe e tudo mais o httpcode a gente pode tirar porque ele ja vai lançar o basico que é o 201.
 agora a função handle vai receber o @body que é do tipo AutenticateBodySchema
   async handle(@Body() body: AutenticateBodySchema) {
    agora dentro do handle a gente pega de dentro do body o email e a senha e fazemos o processo de validação
mas precisamos do prisma então no constructor em qualquer ordem a gente tem que jogar ele com um private prisma : PrismaService
constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  agora a gente faz a const user ser igual a await this.prisma.user.findUnique e ai a gente procura onde o email é igual o email para saber se o usuario existe
   const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

agore ra a gente faz a condicional para caso a gente não ache a gente restornar o erro de usuario não encontrado com uma mensagem essa exception ja vai com o codigo 401 automatico.
  if (!user) {
      throw new UnauthorizedException('user credentials do not match')
    }

agora se o usuario existir a gente tem que verificar se a senha dele bate então vamos fazer a const isPasswordValid para isso a gente usa o await com o metodo compare que vem de dentro do bctypt e a gente passa a senha do usuario e em segundo argumento a senha que esta salva no banco de dados
const isPasswordValid = await compare(password, user.password)
podemos fazer um novo erro para se a senha não for valida usando o mesmo unautorized epection
  if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match')
    }

e ai depois disso tudo a gente faz o token que ja estava sendo feito, vamos so renomare ele para acess token e no sub a gente coloca o id do usuario e no return a gente devolve dentro de um objeto e apenas para ficar padr éao para o fronend a gente retorna ele com underline 
  const acessToken = this.jwt.sign({
      sub: user.id,
    })
    return {
      acess_token: acessToken,
    }

    agora se a gente testar isso com um usuario que tenha  senha em hash ele ja consegue validar temos tambem que tirar o name do validationSchema
    a pagina fica assim:
    import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { z } from 'zod'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { compare } from 'bcryptjs'

const autenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AutenticateBodySchema = z.infer<typeof autenticateBodySchema>

@Controller('/sessions')
export class AutenticateController {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(autenticateBodySchema))
  async handle(@Body() body: AutenticateBodySchema) {
    const { email, password } = body

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new UnauthorizedException('User credentials do not match')
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match')
    }

    const acessToken = this.jwt.sign({
      sub: user.id,
    })
    return {
      acess_token: acessToken,
    }
  }
}


 # protegendo rotas com guard
 vamos criar rotas que so vao poder ser acessadas se o usuario estiver autenticado
vamos criar um novo controller create-question-controller.ts
a gente copia o autenticate e joga no create question
e a gente tira tudo que tem nela para ela ficar o mais vazio possivel. fica assim:
import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Controller('/questions')
export class CreateQuestionController {
  constructor(private jwt: JwtService) {}

  @Post()
  async handle() {}
}

ja mudando o endereço para questions e o nome da clsse

agora vamos la no nosso clien.http e fazemos uma solicitação para isso por enquanto sem o usuario assim:
# @name create-question
POST {{baseUrl}}/questions
Content-Type: application/json

vamos no app module e cadastramos o controller
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    authModule,
  ],
  controllers: [
    CreateAccountController,
    AutenticateController,
    CreateQuestionController,
  ],
  providers: [PrismaService],
})
export class AppModule {}

porem a gente quer que essa rota so seja acessivel se o user estiver autenticado ou seja se ele enviar um token.
então a gente precisa em primeiro lugar configurar a strategy para isso a gente cria um novo arquivo dentro da pasta auth chamado jtw.strategy.ts
porque o passport que iremos usar possi varias estategias que séao formas de autenticar o usuario. uma delas é a jwt. então nesse arquivo a gente vai criar a estrategia jwt de autenticação
a gente vai instalar o passport-jwt e sua tipagem
npm i passport-jwt
npm i @types/passport-jwt -D

e ai no arquivo jwt.strategy a gente vai exportar a classe JwtStrategy que vaio extender PassportStrategy (que vamos importar) e passando para ele o strategy que tambem vamos importar
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy) {}

agora dentro da classe a gente vai passar o constructor e a gente vai precisar usar env então a gente vai passar para o constructor o config sendo configService<Env>, true e pegamos a publickey usando o config get
   constructor(config: ConfigService<Env, true>){
        const publicKey = config.get('JWT_PUBLIC_KEY', {infer: true})
    }

    a gente usa a public pa para validar a gente consegue apenas com a public a private é apenas para gerar novos tokens
    então não precisamos da private

apos isso a gente chama o super que vai chamar o constructor da classe passportStrategy e a gente vai passar para ele alguns parametros
o primeiro vai ser o jwtFromRequest e ele vai receber segundo a propria documentação do nest a definição de ExtractJWT que vamos importar e dele a gente da um . e pegafromAuthheaderandbarertoken
per({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }
    a gente poderia pegar o token de varios lugares, como do body ou outros; mas nesse caso a gente pega do header que éo mais comum
    a segunda config q iremos passar é a secretOrKey que vai ser a publicKey porem como ela esta em base64 a gente faz o processo do buffer
       secretOrKey: Buffer.from(publicKey, 'base64'),

       e por ultimo vamos passar o algoritm
       e para ele a gente tem que passar um array com dentro o rs256
       o total fica assim:
       import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Env } from 'src/env'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService<Env, true>) {
    const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64'),
      algorithms: ['rs256'],
    })
  }
}

agora que o constructor esta configurado a gente vai fora dele criar um metodo chamado validate esse metodo vai ser opcional e o foco dele é validar que o token enviado seja realmente feito pela nossa chave
e que ele possua as informações dentro do payload necessarias para que a nossa aplicação funcione
entéao vamos fazer antes disso um const tokenSchema = para validar as informações por enquanto nos so temos um sub entéao é isso que vai ter la e ela é uma string que é um uuide tabem fazermo o nosso type para inferir o type desse esauema de validação
então antes da classe a gente coloca isso:
const tokenSchema = z.object({
  sub: z.string().uuid(),
})
const tokenSchema = z.object({
  sub: z.string().uuid(),
})

type TokenSchema = z.infer<typeof tokenSchema>

e agora a gente faz o nosso async validate a gente passa o payload como tokenSchema e dentro da função a gente retorna o tokenSchema.parse passando o payload. ai se o payload não tiver o id do usuario ele vai dar erro
como essa classe vai ser um provider a gente precisa colocar nela o decorator @injectable se não ela não vai ser injetada
o strategy total fica assm:
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Env } from 'src/env'
import { z } from 'zod'

const tokenSchema = z.object({
  sub: z.string().uuid(),
})

type TokenSchema = z.infer<typeof tokenSchema>

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService<Env, true>) {
    const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64'),
      algorithms: ['RS256'],
    })
  }

  async validate(payload: TokenSchema) {
    return tokenSchema.parse(payload)
  }
}


agora para a gente garantir que uma rota seja protegia a gente vai no controller que queremos proteger o createQuestion e vamos logo antes da classe passar o decorator @UseGuardse e passamos o guard que é AuthGuard que importamos do nest passport e passamos coo parametro a strategy que é a jwt

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  esse jwt que a gente passa quer dizer que nos queremos usar a estrategia passportJWT que a gente usa no nosso arquivo de strategy.
  porem faltou cadastrar o strategy que a gente criou no module, então por enquanto o nest nem sabe que ele existe.
  entéao a gentevai la no autModule e depois de todos os imports a gente passa providers e para ele um array com o JwtStrategy
  import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { Env } from 'src/env'
import { JwtStrategy } from './jtw.strategy'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      async useFactory(config: ConfigService<Env, true>) {
        const privateKey = config.get('JWT_PRIVATE_KEY', { infer: true })
        const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })

        return {
          signOptions: { algorithm: 'RS256' },
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
        }
      },
    }),
  ],
  providers: [JwtStrategy],
})
export class authModule {}

com tudo isso em mãos a gente pode voltar para o createQuestionController que por enquanto esta assim, a gente adicionou um ok so para a função handle não ficar dando erro:
import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  constructor(private jwt: JwtService) {}

  @Post()
  async handle() {
    return "ok"
  }
}

agora a gente vai la no clientHTTP e se a gente passar autorization bearer e o numero do token ele ja funciona.
porem a gente não vai ficar a cada vez copiando o numero do token para cada rota (por enquanto so tem uma) então uma coisa que angete pode fazer é la em cima na pagina @AuthToken = e aqui copiar  numero do token e ai na passagem a gente vai passar o authToken para todas as authorizations e ai vai funcionar tambem./
ficaria assim mas sem o numero do token copiado porque eu ainda não fiz a requisição
@baseUrl = http://[::1]:3333
@AuthToken = token

# @name create_account
POST {{baseUrl}}/accounts
Content-Type: application/json

{
    "name": "Iuri Reis",
    "email": "iuri@rei7.com",
    "password": "123456"
}

###

# @name autenticate
POST {{baseUrl}}/sessions
Content-Type: application/json

{
    "email": "iuri@reis.com",
    "password": "123456"
}

###

# @name create-question
POST {{baseUrl}}/questions
Content-Type: application/json
Authorization: Bearer {{AuthToken}}

so que mais legal do que isso seria ao invez de passar o numero do token e ter que passar um novo sempre que ele exprizasse a gente pode usar o formato de variavel ou seja {{}} quando a gente vai definir o token e ai dentro a gente pode pegar varias coisas cada requisição que a gente fez tem um nome então a gente pode ir e pegar algo de dentro da nossa requisição de autenticate, então a gente pega da resposta dessa requisição. o body e do body o acess_token
@AuthToken = {{{{autenticate.response.acess_token}}}}
e ele fica dizendo que a autenticate ainda não foi enviada.entéao quando a gente fizer uma requisição de autenticate ele ja salva automaticamente o access_token nessa vatiavel authToken e usa e assim podemos deixar pre prenchido em todos os lugares que a gente precisa. lembrar de sempre separar as requisições com ###
fica assim:
@baseUrl = http://[::1]:3333
@AuthToken = {{{{autenticate.response.acess_token}}}}

# @name create_account
POST {{baseUrl}}/accounts
Content-Type: application/json

{
    "name": "Iuri Reis",
    "email": "iuri@rei7.com",
    "password": "123456"
}

###

# @name autenticate
POST {{baseUrl}}/sessions
Content-Type: application/json

{
    "email": "iuri@reis.com",
    "password": "123456"
}

###

# @name create-question
POST {{baseUrl}}/questions
Content-Type: application/json
Authorization: Bearer {{AuthToken}}

e ai ja funciona porem podemos ainda melhorar talvez todo o esquema criando um novo arquvo no auth chamado jwt-auth.guard.ts e nele criar uma classe JwtAuthGuard que vai extender o authguard passando o parametro Jwt e ela nem precisa ter nenhuma implementação
e agora na nossa createquestion a gente pode passar para o decoratos simplismente essa classe no lugar de como a gente fazia antes. é meio inutil mas é legal para ver como funciona o uso de classes
a jwtauthguard fica assim:
import { AuthGuard } from '@nestjs/passport'

export class JwtAuthGuard extends AuthGuard('jwt') {}


a create question fica assim:
import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private jwt: JwtService) {}

  @Post()
  async handle() {
    return 'ok'
  }
}


eu tive alguns erros nesses para validar. mas eu ja corrigi (acho que em todos os colados aqui) os erros eram que no arquivo de http client eu não estava separando as requisições com ### e tambem quando eu definia o algorithm no strategy eu tinha colocado o rs em minusculo. tem que colocar em maisuculo. tambem no authModule a gente estava exportando semo Auth em maisuclo eu acho que isso não estava dando erro mas mesmo assim eu mudei isso no arquivo e tambem no modules que recebe ele.
## decorator de autenticidade
agora que a gente ja valida que o usuario foi autenticado a gente vai precisar agora é buscar os dados do usuario atravez do token no controller no caso no createquestion
uma das coisas que a gente pode fazer é na função handle passar para ela um decorator, a gente tem varios decorators que a gente pode usar para diversos motivos nas funções a gente pode passar o body, o params, entre outros no nosso caso a gente vai usar o @Request para pegar o request (podemos usar tambem o @Req ambos são iguais) o tipo que vamos usar para isso a gente pode usar o tipo Request que a gente vai pegar do express e como vamos usar o tipo Request do express que é o mesmo nome do Request do decarator a gente usa apenas Req para o decorator para não dar erro.
e ai dentro do request a gente pode pegar os dados do usuario usando o request.user como a gente fez nesse console.log.
eu coloquei o type na importação do request do express porque a rockesteat tambem colocou mas néao seiu se é mesmo necessario , pelo visto o type faz o codigo ficar mais rapido porque o typescript vai detectar que não vai precisar de todo o request e apenas de usar ele como um tipo.
import { Controller, Post, Req, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import type { Request } from 'express'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private jwt: JwtService) {}

  @Post()
  async handle(@Req() request: Request) {
    console.log(request.user)
    return 'ok'
  }
}

se  a gente rodar o codigo agora. vai aparecer no console.log o sub que é o id do usuario. ou seja a gente ja consegue pegar o id do usuario e com isso se a gente precisar de mas coisa a gente pega ele no banco de dados.
porem para melhorar isso e não precisar importar a tipagem do express nem nada, a gente pode criar um decorator especial apenas para pegar os dados do usuario.
na pasta auth a gente vai criar um arquivo chamado current-user-decorator.ts e nele a gente faz uma const CurrentUser com letra maiuscua porque como ele é um decorator ele vai ser usado assim @CurrentUser
e essa const vai ser igual aalgo que vem do nest que é o creatParamDecorator a gente usa o param porque estamos criando um decorator para um parametro e não para uma classe
e para isso a gente vai colocar dentro dele uma função que recebe em primeiro parametro da função os parametros que nos queremos enviar para o decorator então se a gente colocar @CurrentUser('oque a gente colocar aqui como o sub para pegar o id') o que a gente passar como parametro na chamada do decorator a gente pode pegar como parametro no primeiro parametro da arrowfunciton que vai estar dentro dessa criação de decorator. como no nosso caso não vai ter nada a gente passa um _:never para dizer que nunca vai ter nada
o segundo parametro ja é um que vai acontecer sempre que é o context e ele vai ser o execute context que é o contexto de nossa requisição entéao a gente consegue pegar a classe que esse decorator foi chamado, o metodo, os argumentos e etc. fica asism
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {},
)

e agora com esse context a gente pode pegar usando o switchtoHTTP a requisição então fazermos uma const request = context.switchToHttp().getRequest() e dai a gente ja tem o user. se a gente fizer depois return request.user
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()

    return request.user
  },
)

so que o user ainda esta como any. então podemos mehorar isso
a gente pode colocar o request.user as TokenSchema que foi o que a gente criou de type la no strategy. mas para isso a gente te que ir no arquivo de strategy e exportar esse type

export type TokenSchema = z.infer<typeof tokenSchema>

porem para ficar mais semantico vamos trocar os nomes para tokenPayloadSchema e no type apenas UserPayload a pagina de strategy fica assim:

import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Env } from 'src/env'
import { z } from 'zod'

const tokenPayloadSchema = z.object({
  sub: z.string().uuid(),
})

export type UserPayload = z.infer<typeof tokenPayloadSchema>

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService<Env, true>) {
    const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64'),
      algorithms: ['RS256'],
    })
  }

  async validate(payload: UserPayload) {
    return tokenPayloadSchema.parse(payload)
  }
}

e la no decorator que estamos criando vamos usar tambem o userPayload
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserPayload } from './jtw.strategy'

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()

    return request.user as UserPayload
  },
)


e agora ao invez de usar @Req na nossa createQuestionController a gente pode usar o @CurrentUser e podemos pegar o user com o tipo TokenPayload de la fica assim:
  async handle(@CurrentUser() user: UserPayload) {

    agora temos alguns erros na formataçéao da função prque estamos usando request, mas agora a gente pode usar diretamente o user sem precisar do request.user
    a pagina fica assim:
    import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jtw.strategy'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private jwt: JwtService) {}

  @Post()
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user)
    return 'ok'
  }
}

e agora se a gente der a requisição vai mostrar o id do usuario e ja ta tipado se a gente der um user. ele ja da a opçéao de user.sub


e agora a gente pode usar ele o nosso decorator e podemos ter acesso ao id do usuarion dentro dos controlers.
enviei a requisiçao e funcionoiu assim o console log
{ sub: 'bbcbf8f5-da19-44bc-8e71-458977e63994' }
ta funcionando

# controller de criaçao de pergunta finalizacao
vamos copiar a parte de validaçao que a gente tinha feito no zod para a create account e vamos colar nele mudando o nome de create account schema para  create question body schema importamos o zod e para criar uma pergunta vamos mudar o esquema de validação vamos pegar apenas o titulo e o conteudo

import { z } from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

e agora ndentro da classe a gente pega o body com o decorator e passamos o CreateQuestionBodySchema como type dentro dos parametros da post handle
 @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body() body: CreateQuestionBodySchema,
  ) {
    e ate o momento a gente passaria o UsePipes e o nosso validationPipe entre o @post e o async handle
    mas tem uma outra forma de fazer isso que é a seguinte
    dentro do @Body(aqui) a gente pode passar o new ZodValidationPipes( e qaui passar nosso scheme)
    ficaria assim:
      @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(new ZodValidationPipe(createQuestionBodySchema))
    body: CreateQuestionBodySchema,
  ) {
    para não quevrar em duas linhas a gente pode fazer uma const emcima para ser bodyValidationPipe = new ValidationPipe(createQuestionBodySchema) e a gente passaria ela para o body. fica assim a pagina
import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jtw.strategy'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { z } from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createQuestionBodySchema)

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private jwt: JwtService) {}

  @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
  ) {
    console.log(user)
    return 'ok'
  }
}

agora no lugar do console.log a gente vai fazer uma const para desestruturar do body o title  o content
a gente coloca o prisma no nosso cosntructor usando o prismaService 
e agora a gente pega o await this.prisma.questions.create() e passamos para o create um objeto e dentro dele um data que vai ter o title e content e o slug que é obrigatorio tambem
vamos tambem logo abaido da const que pega o title e content fazer uma const userId = user.sub
assim temos acesso a userId
e ai a gente passa no author id o user id
para o slug a gente vai pedir ao chatgpt para fazer uma função para a gente que converta uma string em um slug tirando os acentos ele da isso
function convertToSlug(text: string): string {
    // Normalize the string to remove accents and other diacritics
    const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Convert the string into slug format: lowercase, hyphens instead of spaces, remove non-alphanumeric characters
    return normalizedText
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading and trailing spaces
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single hyphen
}


vamos copiar isso na nossa pagina tirando os comentarios e transformando em metodo ou seja tirando o funcion ai fica sendo um metodo e vamos colocar ele como privado e ai a gente pode usar esse metodo para converter o title to slug mas isso vai ser so por enquanto. mais para frente vamos dar outro jeito
o regex que ele criou não estava tão bom então apos melhorar um pouco ficou assim:
import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jtw.strategy'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createQuestionBodySchema)

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
  ) {
    const { title, content } = body
    const userId = user.sub
    const slug = this.convertToSlug(title)

    await this.prisma.question.create({
      data: {
        authorId: userId,
        title,
        content,
        slug,
      },
    })
  
  }

  private convertToSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
  }
}
ai ja temos a pagina toda inclusive com o uso do slug correto
porem o slug é unico ent#oa temos que tomar cuidado porque se a gente cadastrar duas perguntas com o mesmo titulo por enquanto ele vai usar o mesmo slug e vai dar erro note tamem que tiramos o return porque como é uma criação não tem muito porque ele dar um return. com isso pronto vamos no client.http para testar vamos enviar um body na reuisição de criação de pergunta. a pagina client.http fica asim:
@baseUrl = http://[::1]:3333
@AuthToken = {{autenticate.response.body.acess_token}}

# @name create_account
POST {{baseUrl}}/accounts
Content-Type: application/json

{
    "name": "Iuri Reis",
    "email": "iuri@rei7.com",
    "password": "123456"
}

###

# @name autenticate
POST {{baseUrl}}/sessions
Content-Type: application/json

{
    "email": "iuri@rei.com",
    "password": "123456"
}

###

# @name create-question
POST {{baseUrl}}/questions
Content-Type: application/json
Authorization: Bearer {{AuthToken}}

{
    "title": "Nova Pergunta",
    "content": "essa é a nova pergunta"
}

se a gente der um send request ele devlve 201 significa que criou.

# rota de listage de perguntas
vamos criar um novo arquivo na pasta de controller chamado fetch-recent-questions.controller.ts
e vamos colar nele o codigo do createquestion e vamos mudar umas coisas, vams tirar logo o codigo de transformação para o slug
mudamos o medoto para get podemos tirar o currentUser e podemos tirar toda a logica tambem. fica assim
import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {}
}
 e vamos la no app.module e passamos o FetchRecentQuestionsController la tambem.

agora voltamos ara o controller e a logica vai ser. vamos criar uma const para questions e el vai ser o await this.prisma.question.findMany assim ele vai pegar varios e dentro disso a gente passa o orderBy e a gente passa para o orderby o createdAt e pede para vir em ordem decrescente (la ja tem o enum de crescente e decrescente ) fica assim:
import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
    const questions = await this.prisma.question.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return { questions }
  }
}

com isso salvo a gente vai la no client.http para criar uma nova requisição
e
a requisição a gente quer que a gente possa enviar a paginação usando o ?page=2 ou 1 no nosso caso a gente vai enviar 1 para néao dar erro. e claro que aqui a gente vai definir que o query vai ter nome de page
para 

# @name fetch-recent-questions
GET {{baseUrl}}/questions?page=1
Content-Type: application/json
Authorization: Bearer {{AuthToken}}

para a gente definir isso a gente volta la no nosso fetch recent questions
dentro dos parametros do handle a gente passa o decorator @Querry('aqui botamos o nome que quermos definir no caso page)  depois passamos page:nummber para saber que é numero.
  async handle(@Query('page') page: string) {
o page sempre vai vir como string a menos que a gente faça alguma validação por isso deixamos string nele.
porem o query pode receber um pipe para fazer validação então vamos criar antes de tudo uma const queryValidationPipe = ZodValidationPipe() e esse zodvalidationpipe vai receber um schema 
então vamos criar um schema vai começar como um z.string porque todo queryparametro é string, depois a gente diz que é opcional e que o default é 1 e depois a gent transfrma para numero. mas ai a gente quer quer nunca de um numero negativo e para isso a gente z um pipe para ele ja dizer que tudo que a gente passou foi validado. e ai a gente faz uma nova validação dentro do pipe apartir da trasnformação do numero então vai ser Z.number e o min 1
fica assim

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

com isso a gente ja poderia passar o page como number mas a gente pode fazer o type inferindo assim
type PageParamsTypeSchema = z.infer<typeof pageQueryParamsSchema>
e agora passamos esse type para o page

@Get()
  async handle(@Query('page', queryValidationPipe) page: PageParamsTypeSchema) {
agora fazemos uma const chamada perPage para definir quantos registros queremos mostrar por pagina e dizemos que & 1
agora vamos definir a paginação a gente vai dentro do objeto do findMany
e define take: perPage para dizer que vamos retornar 1 item 
 e damos um skip page -1 * perPage para dizer que ele vai pular do numero definido no perPage para ir para a proxima pagina.
 a pagina fica assim porem da um erro na requisição porque ele diz que falta o skip
 import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

type PageParamsTypeSchema = z.infer<typeof pageQueryParamsSchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(@Query('page', queryValidationPipe) page: PageParamsTypeSchema) {
    const perPage = 1
    const questions = await this.prisma.question.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: { createdAt: 'desc' },
    })
    return { questions }
  }
}


o erro era por conta da nossa calidação do zod, que não é apenasuma validaçéao nesse caso. a gente faz uma transformação
e ai no nosso zodValidationParse a gente faz so a validação e não a transformação tambem. para fazer a transformação tambem a gente precisa ir no arquivo zodValidationPipe e retornar o valor ou seja esse try no arquivo do zod validation pipe

  transform(value: unknown) {
    try {
      this.schema.parse(value)
    } catch (error) {

      precisa ser return this.schema.parse(value)
ou seja o qrtuivo de fetchrecentquestion esta certo mas a gente tinha que alterar isso no zodValidation. e ai podemos tirar o return value do fim porque ele fica unreachable.
ai o arquivo de zod validation fica assim e ai deve rodar a paginaçéao
import { BadRequestException, PipeTransform } from '@nestjs/common'
import { ZodError, ZodSchema } from 'zod'
import { fromZodError } from 'zod-validation-error'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed.',
          statusCode: 400,
          errors: fromZodError(error),
        })
      }
      throw new BadRequestException('Validation failed.')
    }
  }
}

agora se a gente criar duas ou tres questoes e a gente fizer a requisição assim
# @name fetch-recent-questions
GET {{baseUrl}}/questions?page=1
Content-Type: application/json
Authorization: Bearer {{AuthToken}}ou até sem passaro page ele deve mostrar a questao mais recente
e se a gente passar page 2  ou 3 ele deve mostrar uma outra questão.
esta fiuncionando.

## configurar test usando vitest
o nest por padrão usa o jest mas a gente pode configurar para ser o vitest
por padrão o nest compila todo o codigo do typescript para o javascript pela cli do typescript mas isso é um processo bem lento
se a gente quier mudar isso a propria dcumentação do nest recomenda mudar para o swc e é isso que a gente vai fazer
vamos começar instaladno algumas ferramentas
npm i vitest unplugin-swc @swc/core @vitest/coverage-v8 -D
agora nos vamos criar um arquivo na raiz chamado vitest.config.ts
e a gente joga nele esse codigo:
import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})

agora nos bamos instalar um pacote que chama 
npm i vite-tsconfig-paths -D
com isso a gente pode ir no nosso tsconfig e definir os caminhos dos testes
então abrimos o arquivo tsConfig.json e neme a gente passa o paths assim:
"paths": {
      "@/*":["./src/*"]
    }
assim ele redireciona o que é @/ para ./src/

ai agora com o tsconfigPaths a gete pode usar essa configuração agora nos arquivos do vitest então vamos la no arquiov de vitest.config e importamos o tsconfig tepaths
e a gete passa ele nos plugins assim:

import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})

como geralmente os testes end to end e os testes unitarios tem configurações diferentes a gente vai criar um arquivo de config para ele  então vamos na raiz do projeto e criamos um arquivo chamado vitest.config.e2e.ts
nesse aruivo a gente copaia o outro porem dentro de test a gente passa um include para esse qrquivo de configuração do vitest pegar todos com a terminação e2e-spec
import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})

por enquanto é isso depois a gente vai especificar melhor.
agora podemos ir fazer os nossos scripts
"test" : "vitest run",
    "test:watch" : "vitest",
    "test:cov": "vitest run --coverage",
    "test:e2e": "vitest run --config ./vitest.config.e2e.ts",
    "test:debug": "vitest run --inspect-brk --inspect --logHeapUsage --threads=false"
vamos de volta no tsconfig .json para passar o test e etc como global para a gente não precisar importar
e tambem mudamos o target do letra maiuscula para moinuscula para os testes funcionar
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2021",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false,
    "paths": {
      "@/*":["./src/*"]
    },
    "types": ["vitest/globals"]

  }
}


    agora vamos na pasta de controlers para criar o nosso primeiro teste
    create-account-controller.e2e-spec.ts
se a gente criar um teste basico so para ver se a config esta funcionando assim no arquivo e2e
test('1+1', () => {
  expect(1 + 1).toBe(2)
})
e rodar o npm run test:e2e ele passa então a config fucnionou

# banco de dados isolado nos testes
teste end to end precisa ser o mais proximo possivel do ambiente real da aplicação então o ideal é usar o minimo de mocks possivel.
então ao testar uma rota é legal a gente bater no banco de dados.
pra isso o ideal é usarmos um banco de dados paralelo para não sujar o nosso banco de dados e não ter problema de repetição.
da para fazer de varias formas vamos fazer de uma facil e que provavelmente vai ser compativel com novas atualizações.
vamos no arquivo vitest.config.e2e.ts para configurar isso apenas para os testes e2e
dentro da chave de test a gente vai passar um setupFiles
que é um array e para esse array a vai passar './test/setup-e2e.ts'
import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    setupFiles: ['./test/setup-e2e.ts'],
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})

e vamos criar esse aruqivo na pasta de test. esse aruqivo vai ser agora chamado antes de cada arquivo de teste
para testar se esta funcionando a gente pode colocar um console.log la dentro e rodar os testes e2e

agora para confgurar esse arquivo. como ele não é parte do projeto do nest e sim apenas um arquivo do vitest ele néao vai ser capaz de pegar as nossas variaveis ambiente pelo config. e etc. então para esse caso especifico nos vamos instalar o dotenv
npm i dotenv -D

ai agora no arquivo a gente importa o dotenv/config
para poder fazer a conexção com o banco de dados e depois pegamos logo o prisma
const prisma = new PrismaClient()

e agora nos podemos usar o before e afterall que são globais então nao precisa importar.
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

beforeAll(async () => {})

afterAll(async () => {})


nos vamos agora criar uma função chamada generateUniqueDatabaseURL que vai receber um schemaId que é uma string e dentro dessa função vamos criar uma exceção para se não for encontrado no env uma databaseURL usando um if
if (!process.env.DATABASE_URL) {
  throw new Error('Please provide a DATABASE_URL environment variable')
}
isso porque nos queremos usar a variavel de conexção que o usuario ja tem mas mudarmos o schema no final porque no postgress a gente pode mudar o schema pra criar subdicição no mesmo banco de dados. depois a gente vai pegar a url do process env e agora a gente faz um searchparams nessa url e faz um set para mudar o que vem no schema por schemaId que a gente recebe na fucnção e depois damos um retorno na url fazendo ela virar string de novo com o toString()
function generateUniqueDatabaseURL(schemaId : string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schemaId)

  return url.toString()
}

ou seja com isso a gente substitui uma parte da string da url que define o schema com o schemaId que a gnete jogar nessa função que pode ser por exemplo um uuid
agora o que a gente faz é no beforeAll a gente da um const databaseUrl = e joga nela a finção passando um ramdom que vei do node:crypto e para testar q gente da um consoleLog nela e ver se esta funcionando:
beforeAll(async () => {
  const databaseUrl = generateUniqueDatabaseURL(randomUUID())
  console.log(databaseUrl)
})
agora que sabemos que funciona podemos tirar o console.log e no lugar dele a gente sobescreve dentro do process.env a nossa DATABASE_URL 
  process.env.DATABAS_URL = databaseUrl
  como isso esta rodando antes do teste uando o teste for executar ele vai pegar essa url de coneção que a gente criou e não a tradicional e depois disso a gente tem que rodar as migrations pqvai ser um database novo então a gente usa o comando execSync()
  passando o comando das migrations mas usando o deploy e não o dev porque o deploy so vai ler as migrations sem ver se tem um schema ou algo assim:
  execSync('npm prisma migration deploy')

  agora ao rodar o teste ele cria um novo banco para isso.

  agora apos de todos os testes a gente vai deletar esse banco que a gente criou.
  então a gente vai no afterAll e da um await prisma para pegar a conexão que a gente fez quando instanciamos o prisma e damos um executeRawUnsafe pq como vamos deletar um banco que é algo perigoso ele tem essa verificação e sabe que vai ser algo não seguro.
  e a gente da como comando o DROP SCHEMA IF EXISTS "${aqui comlocamos o nome do banco}" a gente coloca o if exists apenas como verificação para ele não tentar deletar algo se ele ja não existir mais.
  e passamos o id do schema. porem como a gente não sabe qual é o id ao invez de gerar ele dentro da chamada da função a gente coloca ele fora como um schemaId= radomUUID() e ai a chente passa o schema id
    await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
    e a opção cascade para que ele delete tudo que depende desse schema.
    ai depois a gente da um prisma disconect
    fica assim:
    import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { execSync } from 'node:child_process'

const prisma = new PrismaClient()

function generateUniqueDatabaseURL(schemaId: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schemaId)

  return url.toString()
}
const schemaId = randomUUID()
beforeAll(async () => {
  const databaseUrl = generateUniqueDatabaseURL(schemaId)
  process.env.DATABASE_URL = databaseUrl

  execSync('npx prisma migrate deploy')
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
  prisma.$disconnect()
})

detalhe que a gente usa o before all ou seja a ente cria o banco de dados antes de rodar todos os testes de um atrquivo e néao um beforeeach que criaria um novo a cada teste so que isso gastaria muito mais tempo para realizar os testes. entéao a gente tem que tomar cuidado com isso de que no arquivo total de testes esta usando o mesmo banco de dados. e a gente tem que criar nossos testes pensando nisso.

## criar os testes
vamos criar o teste primeiro do create account controller vamos no arquivo e fazemos um describe para colocar o nome
vamos instalar o supertest
npm i supertest -D
e os types dele
npm i @types/supertest -D
e vamos fazer o nosso teste colocando o nome
e o test vai ser asyncrono
describe('Create account tests (e2e)', () => {
  test('[POST]/account', async () => {
    
  } )
})

porem antes do test a gente tem que fazer um beoreAll que ja é padrão e podemos achar na documentação do nest
import { AppModule } from '@/app.module'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'

describe('Create account tests (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  test('[POST]/account', async () => {})
})

com isso o que a gente faz para conseguir testar a aplicação a gente precisa subir a aplicação mas não usando um npm run start pq ai ele rodaria na porta 3333 e ficaria tambem ruim para rodar os testes em paralelo
por isso a gente usa o createTestingModule que é uma forma de rodar ela sem rodar ela de verdade. a gente salva o app dentro dessa variavel e agora a gente pode fazer requisições usando o request do supertest e passamos para ele app.getHTTPserver
 await request(app.getHttpServer())

 agora a gente pode fazer requisições nisso ai como por exemplo no nosso caso vamos fazer uma post para accounts e enviar os dados que queremos e ai colocamos isso como sendo uma const response para poder usar ela no expect para ver se o statuscode dela é 201 a pagina fica assim:
 import { AppModule } from '@/app.module'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Create account tests (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  test('[POST]/account', async () => {
    const response = await request(app.getHttpServer()).post('/accounts').send({
      name: 'Jhon Doe',
      email: 'jhon@doe.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
  })
})

agora ja temos um teste criado. e como temos um ambiente isolado de testes que no fim do arquivo vai deletar o banco de dados a gente pode rodar esse teste varias vezes que não vai ter problema porque não vai ter email duplicado.

mas para deixar o teste mais refinado e como é o end2end a gente pode fazer alguma operação para verificar se o usuario foi mesmo salvo no banco e dados. e podemos fazer isso usando o primsa. a gente pode importa o prisma pelo prismaClient e tal. porem podemos e vai ser mais simples usar a vantagem que o nosso appmodule ele usa o prismaService a gente pode pegar o prismaServide de dentro do app por dentro dos testes.
la embaixo do let a gente faz um prisma: prismaService apenas para que ele fique visivel dentro dos testes
a gente vai fazer  dentro do beforall depois do app o prisma = moduleRef.get(prismaService)
e agora a gente ja pode usar o prisma dentro do nosso teste
describe('Create account tests (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })


agora a gente faz depois do nosso expect do test uma const para user sendo ela prisma.users.findUniwue onde o email é o email que a gente passou. e ai a gente pode fazer um expect disso para que seja truthy 
o truhtu sgnifica que se ele n;éao achar ele retorna undefined ou nulo e não realmente false entéao o trhthy so ve se é um valor valido ou seja néão nulo ou undefined e isso ja valida suficiente para nos.
a pagina fica assim:
import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Create account tests (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST]/account', async () => {
    const response = await request(app.getHttpServer()).post('/accounts').send({
      name: 'Jhon Doe',
      email: 'jhon@doe.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)

    const userOnDatabase = prisma.user.findUnique({
      where: {
        email: 'jhon@doe.com',
      },
    })

    expect(userOnDatabase).toBeTruthy()
  })
})

com database rodando ela funciona.

e agora vamos fazer o arquivo de teste de autenticare entéao criamos o arquivo
autenticate-controller.e2e-spec.tsx e copiamos o nosso teste de create account nele

agora nele a gente vai mudar pouca coisa.
aa gente muda o describe para autenticate a gente muda o post para sessions
a gente tira o name do response pq para autenticar a gente so manda email e senha
e a gente cria um usuario no banco antes de autenticar porque ele precisa ser criado para ser autenticado então antes de mandar a const response a gente faz um await prisma.user.create({
  data: e mandamos o nome email e password so que criando u o ussario assim a gente precisa mandar a senha ja hasheada então no password a gente faz um await hash que a gente pega do bcrypt e passa para ele a senha 123456  os rounds que são 8

})

agora a gente pode apagar a parte do userOnDatabase. a gente faz a const reponse tirando o name. e o expect tamem vai ser statuscode 201 e tambem podemos fazer um segundo expect para que dentro do body tenha o accesToken então a gente faz um expect response.body seja igual a gente coloca um objeto e dentro dele tendo um acces_token que seja xpect any(string ) assim:
expect(response.body).toEqual({
        access_token: expect.any(String)
    })
  })

  a pagina completa fica assim:
  import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { hash } from 'bcryptjs'
import request from 'supertest'
import { string } from 'zod'

describe('Autenticate tests (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST]/sessions', async () => {
    await prisma.user.create({
      data: {
        name: 'Jhon Doe',
        email: 'jhon@doe.com',
        password: await hash('123456', 8),
      },
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      email: 'jhon@doe.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({
      access_token: expect.any(String),
    })
  })
})

com isso ja criamos os testes de criação de conta e de autenticação.

## testes e2e perguntas
vamos agora criar os testes de perguntas
vamos criar o create-question.controller.e2e-spec.ts
vamos colar nele o teste de create account
mudamos o describe para vreate question. o post é em /questions para criar a question a gente precisa mandar o titulo e o conteudo
porem para criar a pergunta a gente precisa estar autenticado e para estar autenticado o usuario precisa existir então vamos pegar a parte de criação do usuario que tem no autenticate e colar la salvando ele em uma const user
vamos la onde a gente tem os lets e colocar uma let jwt que vai ser o jwtService
describe('Create questions tests (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService

  e fazemos o moduleRef.get(jwtService) igual fazemos no prisma
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)
    jwt = moduleRef.get(JwtService)

porque é isso que vai gerar o token para nos
então a gente vai depois da criação do usuario fazer uma const token e vamos passar para ela o jwtsing com o sub do userId
fica assim a criação de usuario e do token:
 test('[POST]/questions', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Jhon Doe',
        email: 'jhon@doe.com',
        password: await hash('123456', 8),
      },
    })

    const accessToken = jwt.sign({ sub: user.id })

    se a gente quiser a gente podetirar o hash da senha. mas eu prefiro deixar.
    agora que a gente tem o token. na hora que a gente for criar a pergunta a gente pode colocar um .set para ele mandar algo no header passamos uma string de Authorization para ele entender que é um header de autoriação passamos outa de bearer para ele saber que é esse tipo de autorização  e mandamos o accessToken assim a gente consegue criar a pergunta sem passar pela chamada de autentificação tradicional no banco de dados. pq a gente gera um token no proprio teste.
    a criação da pergunta fica assim:
    
    const response = await request(app.getHttpServer())
      .post('/questions')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        title: 'Question',
        content: 'This is the question',
      })

agora a gente espera que a resposta disso seja 201 
e tambem vamos fazer uma verificação para ver se a pergunta esta no database./ a gente muda o nome da const e tambem de findunique para find first porque podem ter outras perguntas com o mesmo titulo.
  expect(response.statusCode).toBe(201)

    const QuestionOnDatabase = prisma.question.findFirst({
      where: {
        title: 'Question',
      },
    })

    expect(QuestionOnDatabase).toBeTruthy()
  })

  a pagina fica assim:
  import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { hash } from 'bcryptjs'
import request from 'supertest'

describe('Create questions tests (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)
    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[POST]/questions', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Jhon Doe',
        email: 'jhon@doe.com',
        password: await hash('123456', 8),
      },
    })

    const accessToken = jwt.sign({ sub: user.id })

    const response = await request(app.getHttpServer())
      .post('/questions')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        title: 'Question',
        content: 'This is the question',
      })

    expect(response.statusCode).toBe(201)

    const QuestionOnDatabase = prisma.question.findFirst({
      where: {
        title: 'Question',
      },
    })

    expect(QuestionOnDatabase).toBeTruthy()
  })
})


agora vamos fazer o ultimo teste para pegar as questéoes recentes
fetch-recent-questions.controller.e2e-spec.ts
colmos o teste de create question nele
# importante
no controller de fetch questions a gente vai colocar 20 novamente para ele paginar or 20 fia assim:

  @Get()
  async handle(@Query('page', queryValidationPipe) page: PageParamsTypeSchema) {
    const perPage = 20
    const questions = await this.prisma.question.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: { createdAt: 'desc' },
    })
    return { questions }
  }
  agora de volta ao teste
mudamos o titulo. mudamos para get no titulo do teste. porem para testar se a gente tem as perguntas a gente precisa criar algumas perguntas enão antes de fazer a busca a gente vai criar alguma com await prisma.question.createMany({
  data: [] a gente passa um array e dentro dele a gente cria umas quatro questoes passando o title slug content e author sendo o user.id do user que a gente acabou de criar.
})
 await prisma.question.createMany({
      data: [
        {
          title: 'Question 01',
          content: 'This is the question',
          slug: 'question-01',
          authorId: user.id,
        },
        {
          title: 'Question 02',
          content: 'This is the question',
          slug: 'question-02',
          authorId: user.id,
        },
        {
          title: 'Question 03',
          content: 'This is the question',
          slug: 'question-03',
          authorId: user.id,
        },
        {
          title: 'Question 04',
          content: 'This is the question',
          slug: 'question-04',
          authorId: user.id,
        },
      ],
    })
    nesse caso a gente não precisa autenticar porque nos estamos criando direto no banco de dados e não fazendo a requisição e post é a requisição que pede a autorização.
  
  agora nos vamos fazer o nosso const response que vai ser a procura de varias questoes recentes. a gente da um get no /questions passamos o token de autenticação.
  const response = await request(app.getHttpServer())
      .get('/questions')
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

  a gente espera que o statusCode seja 200
    expect(response.statusCode).toBe(200)
  vamos tirar a parte de verificação do bancode dados com o findFirst porque a gente ja esta verificando no banco de dados nesse teste.
  e vamos ter um espect para ver se o corpo da resposta seja igual a um objeto constendo quesions que é um array e dentro desse array a gente faz um expect seja retornado um objectContaining (ai ele ja verifica o primeiro objeto do array) e dentro desse contain a gente coloca titulo question01 vazemos um expect para o segundo, terceiro, quarto. 
  
    const response = await request(app.getHttpServer())
      .get('/questions')
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      questions: [
        expect.objectContaining({ title: 'Question 01' }),
        expect.objectContaining({ title: 'Question 02' }),
        expect.objectContaining({ title: 'Question 03' }),
        expect.objectContaining({ title: 'Question 04' }),
      ],
    })
  })

  a pagina completa fica assim:
  import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { hash } from 'bcryptjs'
import request from 'supertest'

describe('Fetch recent questions -tests (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)
    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[get]/questions', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Jhon Doe',
        email: 'jhon@doe.com',
        password: await hash('123456', 8),
      },
    })

    const accessToken = jwt.sign({ sub: user.id })

    await prisma.question.createMany({
      data: [
        {
          title: 'Question 01',
          content: 'This is the question',
          slug: 'question-01',
          authorId: user.id,
        },
        {
          title: 'Question 02',
          content: 'This is the question',
          slug: 'question-02',
          authorId: user.id,
        },
        {
          title: 'Question 03',
          content: 'This is the question',
          slug: 'question-03',
          authorId: user.id,
        },
        {
          title: 'Question 04',
          content: 'This is the question',
          slug: 'question-04',
          authorId: user.id,
        },
      ],
    })

    const response = await request(app.getHttpServer())
      .get('/questions')
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      questions: [
        expect.objectContaining({ title: 'Question 01' }),
        expect.objectContaining({ title: 'Question 02' }),
        expect.objectContaining({ title: 'Question 03' }),
        expect.objectContaining({ title: 'Question 04' }),
      ],
    })
  })
})

com iso nos finalizamos esses testes end2end.

# arquitetura de camadas
no nosso caso tudo vai nascer de uma requisição http
assim que o usuario faz uma requisição http ela vai bater nos nossos controllers
o controler vai enviar essa requisição para um useCase
o caso de uso vai enviar uma ou mais chamadas(intereções) com entidades de nossa aplicação
porem esse fluxo não é bem uma linha reta. nos nossos casos de uso é comum tambem fazermos operações no nosso banco de dados. ou seja a gete chegou com a nossa requisição no caso de uso. mas as vezes desse caso de uso a gente volta para uma camada mais externa para buscar dados do repositorio que por sua vez vai bater no nosso ainda mais externo banco de dados. o prisma esta na camada mais externa de nossa aplicação.
então depois de todo esse fluxo de busca de informações a gene tem uma volta para devolver uma resposta para o usuario.
o controller vai chamar um uttro elemento que fica em sua mesma camada que é um presenter.
o presenter é uma parte de nossa aplcaição que vai adaptar a forma que a resposta é enviada para o usuario.
e ai o presenter devolve para o usuario a resposta do controler
para deixar mais claro o presenter.
imagina que vamos listar  usuarios
a gente envia na requisição alguns dados como o get e de onde vamos pegar esse get se queremos um ou varios usuarios etc que vao passar pelo controler o controller faz iterações com as entidades e repositorios, criptografias e ets. depois detudo isso que ele fez ele vai ter um output das operações que ele realizou.
ai ele tem a resposta com a lista de usuarios. como nos vamos apresentar isso para o usuario. a gente não pode mostrar como eles estão salvos, porque ai entregaria tudo para o usuario como a senha, o id etc. então a gente vai selecionar o qe a gente mostra para o usuario e entregar para ele apenas o que precisamos entregar.
apartir de agoa a gente vai dividir cada uma dessas camadas para que seja um processo mais visivel de onde esta cada coisa.
# copiando a camada de dominio para esse projeto
no outro projeto a gente criou a camada de dominio. 
vamos abir o outro projeto. e vamos pegar a pasta core e a pasta domain e copiar ela dentro do src desse nosso projeto atual.
pegamos tambem no projeto antigo dentro da pasta teste as pastas utils factory e repository e colamos em nossa pasta teste.
ainda vamos eventualmente instalar umas dependencias como o faker js e o dayjs que a gente estava usando no outro projeto mas ainda não instalou nesse.
mas isso a gente vai fazer mais tarde.
para garantir que nada esta dando erro a gente vai rodar a build mas de uma forma noemit com o comando
npx tsc --noEmit
esse comando faz um typechekin ou seja ele ve se tem algum erro de typescript mas sem fazer a compilação.

ao rodar isso encontramos erros no dayjs e o fakerjs que ele não encontra
vamosentão instalar o faker
npm i -D @faker-js/faker
e vamos instalar tambem a dayjs como uma dependencia normal porque ela tembam vai ser usada em produção.
npm i dayjs
agora rodamos de novo o tsc
para ver se ainda tem problema
ele não deu erro. 
agora vamos rodar o lint fix olhando o script no npm run lint --fix
e vamos ver os erros que ele nõa consegue resolver sowinho.
um dos erros que esta acontecendo é não usar um objeto em branco como um type. no typescript ele não entende que isso é um retorno vazio. então no caso do delete question a gente vai trocar isso por null
e no return tambem. o nosso delete question fica assim:
import { Either, left, right } from '@/core/either'
import { QuestionsRepository } from '../repositories/questions-repository'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '../../../../core/errors/errors/unauthorized'

interface DeleteQuestionUseCaseRequest {
  questionId: string
  authorId: string
}

type DeleteQuestionUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  null
>

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
    authorId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new UnauthorizedError())
    }
    await this.questionsRepository.delete(question)

    return right(null)
  }
}

é importante olar porque a gente tinha desabilitado essa linha no eslint.
vamos olhar arquivos um por um e modificar isso. basicamente em todos os delete.
tem uns warning s pq estamos usando any. a gente pode mudar para unknown ou deixar o any mesmo.
aindatemos o erro de do not use new for side effects.
isso acontece pq a gente esta usando o new para disparar o constructopara ouvir um evento e não exatambemte para pegar as propriedades dele. isso não é um erro muito grave então vamos mudar isso na regras do lint.
{
    "extends": "@rocketseat/eslint-config/node",
    "rules": {
        "no-useless-constructor":"off",
        "no-new": "off"
    }
}

com isso so sobra os erros de unused coisas que foram declaradas o que não é erro e sim warning e não é muito grave.
agora a gente roda o lint de novo para ver se esuaecemos  algo. se mostrar apenas o warn de declarado mas não usado esta ok e ai a gente passa a testar de novo com o npx tsc -noEmit para ver se não quebramos algo. e se funcionar a gente roda os testes unitarios
npm run test
e ver se a gente não quebrou algo. se tudo passar significa que tudo funcionou bem.
funciounou.

## criando a camada de infraestrutura
a camada de infraestrutura vai ficar responsavel pelas duas camadas mas externas da aplicação. os controllers repostitorios e etc.
a gentge vai em src fazer uma pasta chamada infra e vamos mover para essa pasta tudo que é expecifico dessa camada ou seja especifico do framework (nest) ou banco de dados ou tudo que é da camada mais externa coisas que a gente não pode testar unitariamente
vamos mover então para a pasta infra :
app.module
env
main
a pasta prisma
a pasta auth
a pasta controllers
e  pasta pipe

agora que esta tudo la nos vamos separar ainda um pouco melhor.
o pipe por exemplo é usado para fazer validação nos controllers então eles são coisas que andam juntas porem o prisma e os controllers ja não tem tanta relação
ou seja uma coisa é de banco de dados e outra é de http. então vamos criar uma pasta dentro de infra chamada http e tudo que for http a gente vai colocar nela.
ou seja. http tem controllers e pipes
a parte de autenticação tambem no nosso caso esta bem relacionada a http. porem a gente pode talvez usar autenticação mais na frente para outras coisas que não sejam relacionadas a http. então por isso porenquanto a gente vai deixar ela fora do http.
importante. a forma que a gente organiza as pastas na nossa aplicação não determina realmente se a gente esta usando uma clean architecture ou não. essa é so a forma que a gente se organiza melhor junto com o noso time.
agora que esta arrumado vamos verificar se tem alguma importação que quebrou.
em tdos os testes dos controllers temos que atualizar a importação do app.mpduels
no app module a gente atualiza a importaçéao do auth.module
e na pasta auth no jwt strategy e no authmodules a gente atualiza o env.

com isso a gente precisa atualizar um script no package json
o nest start hoje usa o main . e se a gente for no nest-cli.json ele esta assim:
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}

a gente pode mudar nesse arquivo para ele entender o novo endereço do main
depois de sourceRoot a gente abre um entryfile e a gente coloca ele como sendo infra/main
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "entryFile": "infra/main",
  "compilerOptions": {
    "deleteOutDir": true
  }
}


se a gente rodar o banco de dados e dar npm run start:dev agora vamos ver se ele roda corretamente.
o ideal é a gente tambem rodar nossos testes end2end para garantir que esta fucnionando.
se tudo funcionar a gente vai aproveitar para separar os nossos modulos. porque hoj esta tudo no app.module.ts
então vamos dentro da pasta http e vamos criar o http.module.ts
nele vamos exportar uma classe HttpModule
colocamos o decorator de module nele e tudo que for relacionado ao http a gente vai trazer para ele. ele fica assim antes de trazermos as coisas para dentro dele
import { Module } from '@nestjs/common'

@Module({})
export class HttpModule {}

agora vamos la no app.module.
vamos pegar por exemplo o arrayde controllers que esta la no app.module e fazemos todas as importaçõs
e agora dentro do app.module a gente importa o httpModule
porem a gente precisa no http modume tambem declarar o prisma porque se não os controllers não vao achar ele porque ele não é global então apos delarar os controllers a gente passa o provider e dentro dele a gente passa o PrismaService
e agora podemos tirar o prismaService do app.module uma vez que ele ja esta onde ele vai ser usado que é o http mdule.
asim fica o httpmodule:
import { Module } from '@nestjs/common'
import { AutenticateController } from './controllers/autentication-controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [
    CreateAccountController,
    AutenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}

e assim fica o app.MODULE:
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ],
})
export class AppModule {}

rodamos todos os nossos testes para verificar se nada quebrou

# imolementando repsitorios do primsa
pasta domain dentro de aplication a gente tem os repositorios.
esses são repositorios de interface(contratos) que falam os metodos que temos e quais parametros e respostas espearadas para esses repositorios. e a unica implementação que temos para esses repositorios até então soa os inmemory repositorio de teste que temos. mas agora que queremos fazer a app funcionar de ponta a ponta vamos precisar mplementar esses repositorios na parte do prisma;
então dentro da pasta de prisma a gente vai criar uma pasta chamada repositories e vamos implementar cada um desses repositorios.
porem antes disso vamos la em infra e vams criar uma pasta chamada database
essa parsta é para termos nossas coisas de banco de dados alinhada, porque por enquanto estamos usando primsa; mas na frente a gente pode talvez mudar isso.
vamos mover o primma para dentro de database e tudo que é de database a gente vai colocar na pasta database. vamos então criar um database.module.ts
fica assim:
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Module({
  providers: [PrismaService],
})
export class DatabaseModule {}

agora no httpModule a gente não precisa mais passar diretamente o provider PrismaService. a gente vai passar o databaseModule
a gente pode importar o databaSeModule.
porem se a gente tentar rodar a app so imprtando o databaseModule vai dar erro porque dentro do database mesmo tendo declarado o prisma service a gente esta dizendo que o prisma service precisa estar disponivvel dentro deste modulo e não necessariamente nos modulos que importam ele.
para que ele fique disponivel para quem importar esse modulo a gente tem que usar a propriedade exports então fica assim:
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}

e o http module assim:
import { Module } from '@nestjs/common'
import { AutenticateController } from './controllers/autentication-controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/prisma/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AutenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
})
export class HttpModule {}

agora vamos para dentro de prisma na pasta repositories
vamos criar os:
 prisma-questions-repository.ts
 prisma-answers-repository.ts
 prisma-question-comments-repostory.ts
 prisma-question-attachments-repository.ts
 prisma-answer-comments-repository.ts
 prisma-answer-attachments-repository.ts

e o que a gente vai fazer com eles. assi como nos inmemory a gente vai simplismente criar classes que implementam o repositorio da camada de dominio
lembrando que é importante que camadas mais externas podem depender de camadas internas. o contrario que não pode acontecer. e nesse caso a gente ta de uma camada de fora importando uma de dentro.
e agora que a gente faz a implementação a gente tem que implementar os metodos. e por enquanto vamos deixar o throw new error nos metodos
a umtima coisa que temos que lembrar é que o repositorio do prisma vai ser usado para a parte de injeção de dependencia então temos que colocar o decorato injetacble
tuso que vai ser inviado para o construtor de uma outra classe como é o caso aqui nos precisamos usar o injectable
então vamos fazer isso em todos os repositorios. cada arquivo vai ficar assim: repare o nome das classes para colocar nos arquivos certos.
import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAnswerAttachmentRepository implements AnswerAttachmentsRepository {
  findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]> {
    throw new Error('Method not implemented.')
  }

  deleteManyByAnswerId(answerId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}


import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  findById(id: string): Promise<QuestionComment | null> {
    throw new Error('Method not implemented.')
  }

  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]> {
    throw new Error('Method not implemented.')
  }

  create(questionComment: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(questionComment: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  findById(id: string): Promise<AnswerComment | null> {
    throw new Error('Method not implemented.')
  }

  findManyByAnswerId(
    answerId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]> {
    throw new Error('Method not implemented.')
  }

  create(answerComment: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(answerComment: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAnswersRepository implements AnswersRepository {
  findById(id: string): Promise<Answer | null> {
    throw new Error('Method not implemented.')
  }

  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]> {
    throw new Error('Method not implemented.')
  }

  create(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.')
  }

  save(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.')
  }
}


import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]> {
    throw new Error('Method not implemented.')
  }

  deleteManyByQuestionId(questionId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  findById(id: string): Promise<Questions | null> {
    throw new Error('Method not implemented.')
  }

  findBySlug(slug: string): Promise<Questions | null> {
    throw new Error('Method not implemented.')
  }

  findManyRecent(params: PaginationParams): Promise<Questions[]> {
    throw new Error('Method not implemented.')
  }

  create(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }

  save(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }
}


assim se não me engano foram todos
ainda esta faltando os repositorios da parte de notificação. porenquanto a gente não vai fazer.
lembrando que como todos esses repositorios vão ser injetados dentro do nosso databaseModules a gente vai passar no provider cada um desses repostoriso que criamos.
@Module({
  providers: [
    PrismaService,
    PrismaAnswerAttachmentRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsRepository,
  ],

  porem se a gente deixar esses repositorios apenas na parte de providers eles vção estar visiveis apenas no databasmodules. para que eles funcionem em quem importar o databasemdoules a gente precisa colocar eles tambem no export da mesma forma que fizemos com o prismaService.
  o databaseModule fica assim:
  import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { PrismaAnswerAttachmentRepository } from './repositories/prisma-answer-attachments-repository'
import { PrismaAnswersRepository } from './repositories/prisma-answers-repository'
import { PrismaAnswerCommentsRepository } from './repositories/prisma-answer-comments-repository'
import { PrismaQuestionAttachmentsRepository } from './repositories/prisma-question-attachments-repository'
import { PrismaQuestionCommentsRepository } from './repositories/prisma-question-comments-repository'
import { PrismaQuestionsRepository } from './repositories/prisma-questions-repository'

@Module({
  providers: [
    PrismaService,
    PrismaAnswerAttachmentRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswerAttachmentRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsRepository,
  ],
})
export class DatabaseModule {}

vamos agora começar a implemenntar os metodos vamos começar com o prisma questions repository e metodo de findById
onde a gente vaio buscar uma question de dentro do banco de dados a travez de seu id e retornar ela. então a gente vai fazer uma cont pra question. aionar o prisma então vamos ter que colocar esse contructor em todos os repositorios
constructor(private prisma: PrismaService) {}
e agora a gente pode usar o prisma questions.findUnique e pegar pelo id. porem se a gente retornar essa question não vai funcionar. porque a question prometida esta no formato da question da entidade que não necessariamente é o formato do banco de dados. então uma coisa que é muito comum acontecer é a gente ter a mesma entidade representada de formas diferentes em diferentes camadas.
nesses casos é muito comum a gente fazer uso de algo quea gente chama de forma generica de mappers

## mappers
vamos dentro da pstar database/prisma criar uma nova pasta chamada mappers.
os mappers são classes responsaveis por converter uma entidade no formato de uma camada para o formato de uma outra camada.
nessa pasta vamos criar o prisma-question-mapper.ts
e ele vai ser uma classe e dentro dela vai ter um metodo static porque não vamos precisar instanciar essa classe. esse metodo vai se chamar toDomain() em outras palavras a gente vai pegar uma question do prisma e transformar ela em uma question do domain. a gente vai receber a question do prisma e chamar ela de raw e vamos tipar ela pegando o a Question do prisma/client  e renomear para PrismaQuestio,n so para a gente não confundir ela.
e agora a gente quer devolver uma question do domain então  gente promete uma Question
import { Questions } from '@/domain/forum/enterprise/entities/questions';
import { Question as PrismaQuestion } from '@prisma/client'

export class PrismaQuestionMapper {
  static toDomain(raw: PrismaQuestion): Questions {}
}


agora dentro desse metodo q gente so vai trocar um pelo outro então vamos fazer um return Questions.create ou seja vamos criar uma referencia para uma question ja existente. a gente pode fazer isso passando o nosso id pelas regras do nosso dominion. então no nosso segundo parametrp do create vamos logo passar o id raw.id
 return Questions.create({}, raw.id)
 porem ter um problema na nossa entity question ela fala que o id tem que ser do tipo uniqueEntityId
 e o nosso id do banco de dados é um string então q gente tem que tirar ele. fazer um newUniqueEntityId(raw.id)
   return Questions.create({}, new UniqueEntityId(raw.id))
   agora dentro do objeto nos vamos preencher cada um dos camos que a gente precisa preencher.
   no caso do bestAnswer a gente não criou ele no nosso schema da tabela questions do prisma então vamos ter que fazer depois. por enaqunto vamos colocar como undefined.
   no caso do slug ele é do tipo Slug então a gente vai ter que chamar esse Slug dar um create ou um createFrom text que são diferentes o create from text vai receber um texto e converter em um slug o create é para quando a gente quer criar um slug a parter de um slug ja existente. que é o nosso caso agora. entéao vamos dar slug.create(raw.slug)
   acho que tem um erro aqui que a gente não salvou o updatedAt como opcional no banco de dados do prisma. eu vou fazer como se ele fosse opcional e depois quando formos alterar o bestanswer vou tambem alterar isso no nosso schema do prisma/.
   então vamos la na entity questio e colocamos o camo como undefined de opcional mas dizemos que ele pode tambem ser nulo.
   export interface QuestionProps {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date | null
  attachment: QuestionAttachmentList
}

com isso a gente tem tres pssiveis valores para o updatedAt. ele pode ser uma data caso seja preenchido. ele pode ser undefined caso a questão esteja sendo criada e passado como não existente ainda. ou ele pode ser vazio caso a questão ja exista.
o nosso prisma question mapper fica asism:
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import { Question as PrismaQuestion } from '@prisma/client'

export class PrismaQuestionMapper {
  static toDomain(raw: PrismaQuestion): Questions {
    return Questions.create(
      {
        title: raw.title,
        content: raw.content,
        authorId: new UniqueEntityId(raw.authorId),
        bestAnswerId: undefined,
        slug: Slug.create(raw.slug),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityId(raw.id),
    )
  }
}

agora a gente pode ir no nosso prisma-question-repository e retornar usando o mapper assim lembrando de colocar o async await e tambem de colocar que se a questão não existir é para retornar null. o repositorio por enquanto fica assim:
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaQuestionMapper } from '../mappers/prisma-question-mapper'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}
  async findById(id: string): Promise<Questions | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        id,
      },
    })

    if (!question) {
      return null
    }
    return PrismaQuestionMapper.toDomain(question)
  }

  findBySlug(slug: string): Promise<Questions | null> {
    throw new Error('Method not implemented.')
  }

  findManyRecent(params: PaginationParams): Promise<Questions[]> {
    throw new Error('Method not implemented.')
  }

  create(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }

  save(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

e assim aprendemos sobre mappers.

## criando schema do prisma


temos que lembrar de colocar depois o opcional natabela do prisma para o updatedAt.


vamos na pasta root/prisma e acessamos o arquivo schema.prisma
colocamos como opcional o updateAt no questiont
model Question {
  id        String   @id @default(uuid())
  title     String
  slug      String   @unique
  content   String
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime? @updatedAt @map("updated_at")

  tambem no users a gente adiciona um role e para isso a gente vai criar fora da tabela um enum para dizer se é professor ou aluno
  enum UserRole
   enum UserRole {
  STUDENT
  INSTRUCTOR
}

ai no role a gente fala que o tipo é UserRole e o default dele é student
model User {
  id        String     @id @default(uuid())
  name      String
  email     String     @unique
  password  String
  role      UserRole   @default(STUDENT)
  questions Question[]

  @@map("users")
}


agora a gente vai fazer a tablea de answer para poder criar o campo best answerId no questions
fica assim:
model Answer {
  id        String    @id @default(uuid()) 
  content   String
  createdAt DateTime  @default(now()) @map("created_at")
  updatedAt DateTime? @updatedAt @map("updated_at")
  authorId  String    @map("author_id")

  author User @relation(fields: [authorId], references: [id])

  @@map("answers")
}

e ao salvar no user deve aparecer o relacionamento com o answer
agente so muda o nome de ANswer para answer assim:
answers    Answer[]

agora vamos no question e criamos um relacionamento bestAnswer passano para ele o answer? com a interrogação para mostrar que é opcional
  bestAnswer Answer? se a gente salvar isso ele cria todos esses campos para nos:
  bestAnswer Answer? @relation(fields: [answerId], references: [id])
  answerId   String?
  e tambem o relacionamento na tabela de answer
porem a ge,nte troca o field de answerId para bestAnswerId
e usamos o map para best_answer_id
  author     User    @relation(fields: [authorId], references: [id])
  bestAnswer Answer? @relation(fields: [bestAnswerId], references: [id])
  bestAnswerId String? @map("best_answer_id")

  e agora a gente coloca esse  bestAnswerId String? @map("best_answer_id") para cima junto com os outros acmpos para ficar separado dos relacionamentos
  FICA ASSIM
  
model Question {
  id           String    @id @default(uuid())
  title        String
  slug         String    @unique
  content      String
  createdAt    DateTime  @default(now()) @map("created_at")
  updatedAt    DateTime? @updatedAt @map("updated_at")
  authorId     String    @map("author_id")
  bestAnswerId String?   @map("best_answer_id")

  author     User    @relation(fields: [authorId], references: [id])
  bestAnswer Answer? @relation(fields: [bestAnswerId], references: [id])

  @@map("questions")
}

e no answer que criou o relacionamento automatico a gente vai trocar o nome para bestQuestionOn e ele vai ser opcional
  bestAnswerOn Question?

  porem ai ele vai dar um erro no nosso bestAnswer que esta na tabela question
  esse erro é porque ele pede para o bestAnswerId ser unique isso porque o unique adiciona um indice no bestAnserId e tambem é uma forma do prisma garantir que uma answer so pode ser a melhor resposta de uma unica question.
  ta faltando tambum uma outra coisa. uma question pode ter varias answer. então vamos criar esse relacionamento:
   answers Answer[]
   e isso vai criar um erro no bestAnswer porque temos dois relacionamentos com a mesma tabela o prisma se perde um pouco então temos que dar nomes para os relacionamentos então no bestAnswer dentro de relation a gente coloca logo no inicio "" e damos um nome para o relaiconamento.
   e la na tabela de answer onde tem o bestAnswer on a gente tambem tem que colocar o relation e dar o nome. agora se salvar ele não se perde mais e ele cria o restante sowinho.
   a gente so vai jogar o questionId de la do answer para a parte de campos e não de relações. e a gente tira ele de opcional e faz um mapa para escrever question_id e tambem tiramos do ralacional ele sendo opcional e colocamops com minusuculo.
   o best answer é opcional mas o question não. toda a resposta tem que estar atrelada a uma pergunta.
   por enquto a pagina fica assim:
   // This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  STUDENT
  INSTRUCTOR
}

model User {
  id        String     @id @default(uuid())
  name      String
  email     String     @unique
  password  String
  role      UserRole   @default(STUDENT)
  questions Question[]
  answers   Answer[]

  @@map("users")
}

model Question {
  id           String    @id @default(uuid())
  title        String
  slug         String    @unique
  content      String
  createdAt    DateTime  @default(now()) @map("created_at")
  updatedAt    DateTime? @updatedAt @map("updated_at")
  authorId     String    @map("author_id")
  bestAnswerId String?   @unique @map("best_answer_id")

  author     User    @relation(fields: [authorId], references: [id])
  bestAnswer Answer? @relation("bestAnswer", fields: [bestAnswerId], references: [id])

  answers Answer[]

  @@map("questions")
}

model Answer {
  id         String    @id @default(uuid())
  content    String
  createdAt  DateTime  @default(now()) @map("created_at")
  updatedAt  DateTime? @updatedAt @map("updated_at")
  authorId   String    @map("author_id")
  questionId String    @map("question_id")

  author       User      @relation(fields: [authorId], references: [id])
  bestAnswerOn Question? @relation("bestAnswer")
  question     Question  @relation(fields: [questionId], references: [id])

  @@map("answers")
}

e por enauqnto é so. mais tarde vamos fazer a parte de comentarios e anexos.

agora que as tabelas estão feitar a gente vai rodar o migration lembrar de colocar o banco de dados pra rodar
npm prisma migrate dev
e o nome da migration vai ser create answers and users role

agora ele ja rodou as migrations no meu banco de dados. e se eu voltar la no nosso mappers a gente pode dar algo no bestAnswer a gente antes tem que dar um restart no vs para ele ler as novas alterações do prisma. é so ir la na barra re pesquisa e escrever restar e eescolher o debug restar. ai a gente pode dar o raw.bestAnswerId
porem ai ainda vai ter um erro.
igual do updatedAt porque ele é opcional ou um unique entiti id e ai a gente tem que ir no entity dele e dizer que ele tambem pode ser nulo.
export interface QuestionProps {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId | null
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date | null
  attachment: QuestionAttachmentList
}

so que ai vai dar um erro no retun do bestAnswerId dentro da entity question
e para resolver isso a gente tem que ir no set bestanswer e dizer que ele tambem pode ser nulo

  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined | null) {
    if (bestAnswerId && bestAnswerId !== this.props.bestAnswerId) {
      this.addDomainEvent(new QuestionBestAnswerChosenEvent(this, bestAnswerId))
    }
    this.props.bestAnswerId = bestAnswerId
    this.touch()
  }

  ai para de dar erro e a pagina de questions ja esta boa.

  agora voltamos para o map e fazemos a logica para se o bestAnswerId existir ele vai ser um new uniqueEntityId(raw.bestAnswer) se não elev vai ser nulo
        bestAnswerId: raw.bestAnswerId
          ? new UniqueEntityId(raw.bestAnswerId)
          : null,

  agora esta tudo certo e a gente pode continuar a implementar os repositorios.

  vamos fazer o slug que é muito parecido com o outro so mudamos de id para slug
    async findBySlug(slug: string): Promise<Questions | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
    })
    if (!question) {
      return null
    }

    return PrismaQuestionMapper.toDomain(question)
  }

  
  vamos agora implementar o findManyRecent que ee quer listar as 20 recententes ordenandas pelo createdAt
  a gente transforma em async
  nos vamos pegar a page dedentro do paramst({page}: PaginationParams):
  e usamos o question para ser o findMany
  ai dentro do findMany a gente começa usando o orderBy a gente joga o createdAt : 'desc" para pegar de ordem decrescente com os mais recentes primeiro.
  e para a paginação a gente usa o take: 20 para pegar 20 e quantos a gente vai pular ai a gente faz o page -1 * 20
     const questions = await this.prisma.question.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
      skip: (page - 1) * 20,
    })
  

  agora para retonar como sendo varias questions a gente pode fazer com a manha de mapear a questions e fica assim
return questions.map((question) => {
      return PrismaQuestionMapper.toDomain(question)
    })

    e a gente pode simplicifar isso passando apenas o toDomain que é uma função e o questions.map precisa de uma função ele funciona tambem fica assim
    
    return questions.map(PrismaQuestionMapper.toDomain)

    fica assim o metodo todo
    
  async findManyRecent({ page }: PaginationParams): Promise<Questions[]> {
    const questions = await this.prisma.question.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return questions.map(PrismaQuestionMapper.toDomain)
  }

  agora vamos para o proximo metodo save. a gente criou o mapper para converter uma question do formato do prisma para o formato da entidade a nive de dominio. porem agora a gente precisa do formato contrario. se a gente fizer apenas o create o prisma nao entende alguns campos como o uniqueEntityId e etc.
  então a gente tem duas altenativas. a gente pode passar o create e passar data e cada campo separadamente e passando os values como question.slug.value.
  entéao para não fazer isso nos vamos la no mapper e alem do metodo static toDomain a gente vai criar o toPrisma esse metodo vai receber uma question do dominio e precisa devolver uma prismaQuestion
    static toPrisma(question: Questions): PrismaQuestion {}
    porem a prismaquestion tem varios campos que não necessariamente são necessarios para criar no banco de dados. então para melhorar isso a gente vai importatr o Prisma e de dentro dele vai ter o QuestionUnchecked 
    static toPrisma(question: Questions): Prisma.QuestionUncheckedCreateInput {}
    assim ele muda umas coisas como o id não ser ibrigatorio e outras coisas.
    e agora a gente da um retorno e vai enchendo os campos para os ids a gente usa o metodo toString pq eles são salvos como uniqueEntityId
    id: question.id.toString(),
      authorId: question.authorId.toString(),
      bestAnswerId: question.bestAnswerId?.toString(),
    para o slug como ele é um valueObject a gente tem que pegar so o valor para vir uma string
    fica assim:
      static toPrisma(question: Questions): Prisma.QuestionUncheckedCreateInput {
    return {
      id: question.id.toString(),
      authorId: question.authorId.toString(),
      bestAnswerId: question.bestAnswerId?.toString(),
      title: question.title,
      content: question.content,
      slug: question.slug.value,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt, 
    }
  }

  agora podemos voltar no repositorio e passamos esse metodo do mapper para fazer fica assim:
   
  async save(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.update({
      where: { id: data.id },
      data,
    })
  }

  o create é parecido so que muda o update pelo create e não precisa do whereId: data.id
  fica assim

   async create(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.create({
      data,
    })
  }

  e agora o delete
  a gente faz parecido e ele faz um meodo delete no where id: data.id
    async delete(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.delete({ where: { id: data.id } })
  }

com isso o repositorio ficou pronto:
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaQuestionMapper } from '../mappers/prisma-question-mapper'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}
  async findById(id: string): Promise<Questions | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        id,
      },
    })

    if (!question) {
      return null
    }
    return PrismaQuestionMapper.toDomain(question)
  }

  async findBySlug(slug: string): Promise<Questions | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
    })
    if (!question) {
      return null
    }

    return PrismaQuestionMapper.toDomain(question)
  }

  async findManyRecent({ page }: PaginationParams): Promise<Questions[]> {
    const questions = await this.prisma.question.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return questions.map(PrismaQuestionMapper.toDomain)
  }

  async create(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.create({
      data,
    })
  }

  async delete(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.delete({ where: { id: data.id } })
  }

  async save(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.update({
      where: { id: data.id },
      data,
    })
  }
}

antes de continuar implementando outros repositorios vamos testar o fluxo tentando usar o caso de uso do createQeustion la no nosso controller do createQuestion
atualmente o nosso createQeustion no http esta dependendo diretametne do prisma
export class CreateQuestionController {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  inclusuive podeos tirar esse jwt que não usamos.
  e tambem atualizar a importação para pegar o database:
  import { PrismaService } from '@/infra/database/prisma/prisma.service'

  mas então o fluxo certo seria que o controller usasse o caso de uso e esse caso de uso que chamasse o prisma.
  então se a gente trocar essa dependencia pela dependencia do caso de uso createQeustion com o tipo CreateQuestionUseCase que vamos importarla d caso de uso
  constructor(private createQuestion: CreateQuestionUseCase) {}

  e agora la dentro a gente pode dispençar o metodo converToSlug
  e ao inves de chamar o prisma a gente pode vir diretamente chamadno o useCase e passar para ele o attachmentId como um array vazio e o authorId como o userId e o title e content a gente passa tambem fica assim:
   @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
  ) {
    const { title, content } = body
    const userId = user.sub

    await this.createQuestion.execute({
      title,
      content,
      authorId: userId,
      attachmentIds: [],
    })
  }
}

com isso a gente ja esta usando o caso de uso da camada de dominio nos nossos controllers
so que s e a gente tentar usar assim não vai funcionar porque o nest toda classe que for injetada precisa obrigatoriamente o injectable o prisma tinha injectable e o caso de uso não tem por que ele esta na camada de dominio. ele não pode estar atrelado ao sistema nest então nos temos duas alternaticas
a mais facil porem que fere mais os principios do ddd que é colocar o injecable no caso de uso. isso so pode ser aceitaval porque apesar de ser um decorator e vir de uma camada de fora do dominio ele não vai modificar de forma alguma o codigo que temos na camada de dominio (e provavelmente se a gente não usar o nest não iria quebrar seria apenas uma linha de codigo morta) as vezes pode valer a pena se a vantahem da simplicidade for grande para a inconveniencia de uma sujada peauena na cleanarchitecture. porque a outra solução seria
criar uma representação desse cao de uso dentro de nossa camada infra tambem teriamos um nest-create-qeustion-useCase e criariamos uma classe que extenderia a createQeustionUseCase do dominio. ela não teria qualquer tipo de implementação
apenas um contrutor e nele repetir o que temos no caso de uso qyue é o construtor do caso de uso. depois um super para chamar o contrutor da classe pai e mandariamos para ele o nosso repositorio
e o injectable estaria nessa classe.
e ai no nosso controller a gente usaria esse nest-create-question-useècase
por um lado não sujaria o ddd e clean architecture mas por outro criaria toda uma sessão de repetição. ai teriamos que avaliar qual é o melhor caminho
então seria um tradeOff que vale a pena. a gente não precisa ter medo de as vezes quebrar as regras se isso for nos dar vantagem.
então vamos no nosso createQuestionUseCase e colocar o injectable. ele fica assim;
import { Either, right } from '@/core/either'
import { Questions } from '../../enterprise/entities/questions'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { QuestionsRepository } from '../repositories/questions-repository'
import { QuestionAttachment } from '../../enterprise/entities/question-attachment'
import { QuestionAttachmentList } from '../../enterprise/entities/question-attachment-list'
import { Injectable } from '@nestjs/common'

interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
  attachmentIds: string[]
}
type CreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Questions
  }
>

@Injectable()
export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
    attachmentIds,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Questions.create({
      authorId: new UniqueEntityId(authorId),
      title,
      content,
    })
    const attachment = attachmentIds.map((attachmentId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityId(attachmentId),
        questionId: question.id,
      })
    })

    question.attachment = new QuestionAttachmentList(attachment)

    await this.questionsRepository.create(question)

    return right({ question })
  }
}

agora precisamos ir la no nosso http module e colocar o createQeustionUseCase nos providers fica assim:
import { Module } from '@nestjs/common'
import { AutenticateController } from './controllers/autentication-controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/prisma/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AutenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [CreateQuestionUseCase],
})
export class HttpModule {}

porem se a gente tentar rodar o rpograma assim tambem vamos ter erro.
ele vai dizer que o nest não consegue resolver as dependencias de createQuestionUseCase isso porque o createQeustin depende do questionsrepository
porem o questionsRepository ele é uma interface e não uma classe (diferente das outras injeçoes de dependencia que a gente tinha feito antes) 
e a interface é epsecifica do typescript ela não existe no js e quando a gente for compilar ela deve ser eliminada e como a injeção acontece quando a aplicação esta sendo executada. no nest a aplicação vai ser sempre executada com javascript e não com typescript
então a recomenação do nest é que ao invez de a gente usar interfaces a gente use classes abstratas então so vamos trocar o repositorio de interface para classe abstrata e na frente de cada um dos metodos a gente coloca abstract. agora o repoitorio ficou assim:
import { PaginationParams } from '@/core/repositories/pagination-params'
import { Questions } from '../../enterprise/entities/questions'

export abstract class QuestionsRepository {
  abstract findById(id: string): Promise<Questions | null>
  abstract findBySlug(slug: string): Promise<Questions | null>
  abstract findManyRecent(params: PaginationParams): Promise<Questions[]>
  abstract create(question: Questions): Promise<void>
  abstract delete(question: Questions): Promise<void>
  abstract save(question: Questions): Promise<void>
}

agora temos que ir no nosso database.module e ao inves de enviar os providers como nos estamos enviando. no lugar do prisma question repository a gente vai botar um objeto e nele a gente coloca provide e passamos o nome da nossa classe abstrata e depois um useclass e  PrismaQuestionsRepository e nos exports precisamos tambem trocar de prismaquestionsReporistory para questionsRepository
fica assim:

import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { PrismaAnswerAttachmentRepository } from './repositories/prisma-answer-attachments-repository'
import { PrismaAnswersRepository } from './repositories/prisma-answers-repository'
import { PrismaAnswerCommentsRepository } from './repositories/prisma-answer-comments-repository'
import { PrismaQuestionAttachmentsRepository } from './repositories/prisma-question-attachments-repository'
import { PrismaQuestionCommentsRepository } from './repositories/prisma-question-comments-repository'
import { PrismaQuestionsRepository } from './repositories/prisma-questions-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

@Module({
  providers: [
    PrismaService,
    PrismaAnswerAttachmentRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    { provide: QuestionsRepository, useClass: PrismaQuestionsRepository },
  ],
  exports: [
    PrismaService,
    PrismaAnswerAttachmentRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    QuestionsRepository,
  ],
})
export class DatabaseModule {}


o que nos estamos falando para ele é toda vez que se soliciatar uma arquivo que esteja com dependencia na questionsRepository use a classe PrismaQuestionRepository


e para info o nosso controller de createuqestion depois de todas alterações ficou assim:
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jtw.strategy'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { z } from 'zod'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createQuestionBodySchema)

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private createQuestion: CreateQuestionUseCase) {}

  @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
  ) {
    const { title, content } = body
    const userId = user.sub

    await this.createQuestion.execute({
      title,
      content,
      authorId: userId,
      attachmentIds: [],
    })
  }
}

e tabme temos que colocar o database nessa linha em todos os controllers
import { PrismaService } from '@/infra/database/prisma/prisma.service'

se a gente rodar a aplicação e o database agora e tentar criar uma questão ele deve funcionar e ele vai estar usando o fluxo da clean architecture de uma chamada http sendo pega pelo controler que vai validar os dados que então vai chamar o caso de uso o caso de uso vai fazer uso de algumas entidades e tambem vai chamar o repositorio e esse questionRepository vai ser injetado no lugar dele usando a injeção de dependencia do nest o prismaquestionrepository
que é quem vai fazer o processo de criar uma question dentro do banco de dados. e para fazeressa criação ele usou o mapper para fazer a converção de uma entidade de dominio para uma entidade de persistencia. depois disso o controller devolveu a resposta no caso 201 created
esta funcionando porem eu tive que atualizar o authToken no client.http porque estava escrito errado fica assim:
@baseUrl = http://[::1]:3333
@AuthToken = {{autenticate.response.body.access_token}}

# @name create_account
POST {{baseUrl}}/accounts
Content-Type: application/json

{
    "name": "Iuri Reis",
    "email": "iuri@rei7.com",
    "password": "123456"
}

###

# @name autenticate
POST {{baseUrl}}/sessions
Content-Type: application/json

{
    "email": "iuri@rei7.com",
    "password": "123456"
}

###

# @name create-question
POST {{baseUrl}}/questions
Content-Type: application/json
Authorization: Bearer {{AuthToken}}

{
    "title": "Nova Pergunta7",
    "content": "essa é a nova pergunta"
}

###

# @name fetch-recent-questions
GET {{baseUrl}}/questions?page=3
Content-Type: application/json
Authorization: Bearer {{AuthToken}}


# listando perguntas recentes

vamos fazer o mesmo fluxo que fizemos para create question mas para a parte de listagem das perguntas
vamos no infra/controller fetch recent question a gente vai remover o prisma e vai usar o listRecentQuestionUseCase aqui a gente esta usando fetch mas no domain usamos list. vamos deixar assim.
e ai a questions vai ser o execute desse useCase passando a paginanque vem dos parametros e não precisamos mais de perPage tiramos o prisma service e fica assim:
import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { ListRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/list-recent-questions'

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

type PageParamsTypeSchema = z.infer<typeof pageQueryParamsSchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private listRecentQuestions: ListRecentQuestionsUseCase) {}

  @Get()
  async handle(@Query('page', queryValidationPipe) page: PageParamsTypeSchema) {
    const questions = await this.listRecentQuestions.execute({
      page,
    })
    return { questions }
  }
}


agora no caso de uso a gente tem que colocar o injectable
import { Either, right } from '@/core/either'
import { Questions } from '../../enterprise/entities/questions'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Injectable } from '@nestjs/common'

interface ListRecentQuestionsUseCaseRequest {
  page: number
}
type ListRecentQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Questions[]
  }
>

@Injectable()
export class ListRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: ListRecentQuestionsUseCaseRequest): Promise<ListRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({ questions })
  }
}

e no http module a gente passa o listRecenteQuestions no providers assim:
@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AutenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [CreateQuestionUseCase, ListRecentQuestionsUseCase],
})

a gente não precisa criar logo outro reporisotio porque esse metodo esta no repositorio dos questions que a gente ja fez.

porem da forma que o controller ta, ele vai receber um array com varias questions no formato da ntidade da camada de dominio. que não é o formato que a gente quer enviar para o nosso frontEnd. por isso que agora nos vamos usar um novo elemento da cleanArchitecture que é o presenter. para ajustar esses dados de forma que eles sejam melhor apresentados.
## presenter
no nosso caso o presenter é especifico da camada http então vamos na pasta http e criamos ma pasta chamada presenter
e dentro dela um arquivo chamado question-presenter.ts mas se a gente tivesse varias portas de saida de dados ai a gente colocaria o http no titulo para lembrar
vai ser uma classe chamada Questionpresenter que vai ter um unico metodo statico chaado toHTTP() e ele vai receber uma question que vem do dominio (cuidado para não importar do prisma) e vamos retornar o formato que queremos enviar para o frontEnd.
então fica assim antes de começarmos a preencher
import { Questions } from '@/domain/forum/enterprise/entities/questions'

export class QuestionPresenter {
  static toHTTP(question: Questions) {
    return {}
  }
}
agora vamos colocar as coisas que vamos retornar. o id, title, slug, bestanswerId, createdat e updated at
   return {
      id: question.id.toString(),
      title: question.title,
      slug: question.slug.value,
      bestAnswerId: question.bestAnswerId?.toString(),
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    }
    a gente podeira colocar mais campos, mas o ideal é não passar informação desnecessaria. a pagina fica assim:
    import { Questions } from '@/domain/forum/enterprise/entities/questions'

export class QuestionPresenter {
  static toHTTP(question: Questions) {
    return {
      id: question.id.toString(),
      title: question.title,
      slug: question.slug.value,
      bestAnswerId: question.bestAnswerId?.toString(),
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    }
  }
}

    agora no fetchRecentQuestion no return  a gente pode passar o questions e a gente pode pasar o map como sendo esse metodo toHttp do presenter
    porem da erro porque o questions pode ser um left ou right e ai então a gente pega o value dele que pode ser ou o questions[] ou null. a gente vai pegar então na verdade o result e vai fazer uma verificação desse result. então ao inves de ser uma const question a gente vai chamar a const de result e por enquanto apenas verificanco se for left a gente da um erro
    if (result.isLeft()) {
      throw new Error()
    }
    agoraa gente pega a questions atravez de result.value.questions porque dentro do value a gente tem um questions. assim ele vai ser obrigatoriamente o questions e não mais a possibilidade de ser left e logo nulo;
    const questions = result.value.questions

     com isso a gente pode fazer o nosso map assim:
     
    return { questions: questions.map(QuestionPresenter.toHTTP) }
  }

agora se a gente fizer uma listagem de perguntas elas vão vir em um formato muito mais agraavel.
a gente pode adicionar ampos mar por exemplo a gente néao colocou o content porque essa listagem de mostrar 20 geralmente vai mostrar so os titulos não precisamos mostrar o conteudo. então é comum a gente ter um presenter para cada ocasião. vamos ter um que vai mostrar o conteudo e outro que não.
por enqaunto a gente vai usar so isso. existe uma forma de pedir quais camopos a gente quer usando um graphql(acho que é esse o nome) que ele vai pedir exatambente quais campos queremos. mas em uma estrutura http tradicional a gente não pede.

# gateways de criptografia
na nossa parte de domain a gente não criou nenhum caso de uso para autenticação ou gestão de usuario. nos temos por exemplo a entidade de students e coisas assim mas não temos os casos de uso para autenticação e cadastros.
no nosso schema do prisma a gente ja tem uma tabela de user e ela tem role e nome email e password então  vamos la na nossa entidade student e colocamos nas props nome email e password e fazer metodos get para cada um deles. por enquanto não vai ter metodo set para eles.
fica assim:
import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'

interface StudentProps {
  name: string
  email: string
  password: string
}

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  static create(props: StudentProps, id?: UniqueEntityId) {
    const student = new Student(props, id)
    return student
  }
}

e agora a gente vai la nos reporistories do domain aplication repositories e vamos criar um novo repositorio students-repository.ts
a gente ja vai fazer ele na pegada de class abstract nesse repositorio por enquanto so vao ter os metodos create e o findByEmail.
fica assim:
import { Student } from '../../enterprise/entities/student'

export abstract class QuestionsRepository {
  abstract findByEmail(email: string): Promise<Student | null>
  abstract create(student: Student): Promise<void>
}

e agora que a gente ja esta com o student e o repositorio dele criado a gente ja pode começar a pensar no caso de uso para fazer login na aplicação.
e se a gente for nos nosssos controllers a gente tem o autenticate e o create account. e eles usam o hash de senha para criar ou para comparar. e alem disso na autenticação a gete tem a criação do token.
é omportante então a gente entender que a criptografia, é saudavel estar na camada mais externa da aplicação.
ou seja, no nosso caso de uso, tudo que ele precisar fazer que precise de criptografia ele chame algo que esteja na camada de infra para fazer.
porem o caso de uso, para se manter limpo ele não chama diretamente as coisas nas camadas infra, por isso por exemplo que usamos os repositorios eles são como gateways
e nesse caso a gente a gentetambem vai pcisar de um gateway para gerenciar a comunicação entre os casos de uso e as funçoes de criptografia.
o que nos vamos fazer então é la na camada de domain  aplication a gente cria a pasta cryptography
e dentro dele a gente vai ter um arquivo chamado encriptor.ts que vai ser o gateway para a parte de geração de tokens jwt. e ele vai ter contratos
então vamos fazer tambem uma export abstract class e dentro dela um unco metodo chamado encript que vai receber um payload que é o que queremos incluir dentro do token e ele vai ser do tipo Record<string, unknown> ou seja um objeto que a chave é uma string e o valor de cada propriedade é desconhecido e ele vai devolver um token qu é uma string fica assim:
export abstract class Encrypter {
  abstract encrypt(payload: Record<string, unknown>): Promise<string>
}


agora a gente vai na mesma pasta criar o arquivo hasher.ts para criar o contrato da parte de hasher.
e nele vamos ter dois metodos o primeiro vai ser o hash que vai ser o que vai realizar o hasher que vai converter a senha de um plain text para um hash
  abstract hash(plain: string): Promise<string>
  e o outro metodo que vai comparar o plain com um hash ja gerado e vai devolver o booleano.
    abstract compare(plain: string, hash: string): Promise<boolean>
    fica assim:
    export abstract class Hasher {
  abstract hash(plain: string): Promise<string>
  abstract compare(plain: string, hash: string): Promise<boolean>
}


e agora a gente ja tem os nossos contratos caso qualquer caso de uso precise de criptografia.
porem se a gente lembrar do solid o i dele vem de interface segregation
e lembrando que essas classes abstratas que a gente criou deveriam ser interfaces elas so estão sendo classes abstratas por problema no nest não acietar as interfaces na hora do deploy. 
então a interface segregation diz que nos temos que ter um contrato para cada coisa coisa que algo faz por exemplo uma xerox teria que ter um contrato para copiadora um contrato para imprimir e um contrato para scanear e se ela faz os tres a gente implementa os tres contratos entéao no nosso caso a gente pode separar para ter o hash generator e o hash compare então a gente divide esse arquivo em dois o hash-generator.ts e o hash-comparer.ts eles são assim
export abstract class HashComparer {
  abstract compare(plain: string, hash: string): Promise<boolean>
}

export abstract class HashGenerator {
  abstract hash(plain: string): Promise<string>
}


isso pode não ajudar mutio na parte do hash, mas em alguns casos pode ajudar então é sempre bom ir pensando nisso de interface segregation.
agora que isso esta criado nos podemos ir para os uso de caso.

