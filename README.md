# NestJs vs AspNet


[**NestJS**](https://nestjs.com/)

> A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8) 🚀

[**ASP.NET**](https://dotnet.microsoft.com/apps/aspnet)

> ASP.NET Core is a cross-platform .NET framework for building modern cloud-based web applications on Windows, Mac, or Linux.

## Github

* [nestjs/nest](https://github.com/nestjs/nest)
* [dotnet/aspnetcore](https://github.com/dotnet/aspnetcore)

## Overview

* Get Started
* Syntax
  * Controllers
  * Dependency Injection
* Deployment


## History

* aspnet - built on top of dotnet core
* nestjs - built on top of node / express

## Prerequisites

* [.NET SDK](https://dotnet.microsoft.com/download/visual-studio-sdks)
* [Node JS](https://nodejs.org/en/download/)

## Getting Started

### .NET

```bash
dotnet new mvc -o aspnet
dotnet run
open http://localhost:5000
```

### Nest

```bash
git clone https://github.com/nestjs/typescript-starter.git nestjs --depth 1
cd nestjs
npm install
npm run start
open http://localhost:3000
```



## Controller

```ts

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```
