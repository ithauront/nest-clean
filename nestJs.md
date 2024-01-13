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
