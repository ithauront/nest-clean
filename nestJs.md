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