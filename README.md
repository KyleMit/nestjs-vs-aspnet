---
marp: true
theme: uncover
title: NestJS vs AspNET
description: Comparison of web server frameworks
url: https://nestjs-vs-aspnet.netlify.app/
---

<!--
kick off with:

```bash
# serve
cp -r _assets _site && (npx live-server _site &) && (npx @marp-team/marp-cli -w readme.md -o _site/index.html --html &)

# build
cp -r _assets _site && npx @marp-team/marp-cli readme.md -o _site/index.html --html
```

-->

# AspNET vs NestJS

<style>
.logos img {width: 124px;}
</style>

<div class="logos">

![aspnet](/_assets/aspnet-core.png) vs ![nestjs](/_assets/nestjs.png)

</div>

with me, Kyle 👋


---

### [**ASP.NET**](https://dotnet.microsoft.com/apps/aspnet)

> ASP.​NET Core is a cross-platform .NET framework for building modern cloud-based web applications on Windows, Mac, or Linux.

---

### [**NestJS**](https://nestjs.com/)

> A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8) 🚀

---

## Github

- [nestjs/nest](https://github.com/nestjs/nest)
- [dotnet/aspnetcore](https://github.com/dotnet/aspnetcore)


---


## Overview

- Get Started
- Syntax
  - Controllers
  - Dependency Injection
- Deployment


---


## Architecture

- **aspnet** - built on top of dotnet core
- **nestjs** - built on top of node / express

---


## Dependencies

---

### Dependencies (.net)

[.NET SDK](https://dotnet.microsoft.com/download/visual-studio-sdks)

```bash
dotnet tool install --global dotnet-aspnet-codegenerator
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
```

---

### Dependencies (nest)

[Node JS](https://nodejs.org/en/download/)

```bash
npm install @nestjs/cli -g
```

---


## Getting Started

---

### Getting Started (.net)

```bash
dotnet new mvc -o aspnet
dotnet run
open http://localhost:5000
```

---

### Getting Started (nest)

```bash
git clone https://github.com/nestjs/typescript-starter.git nestjs --depth 1
cd nestjs
npm install
npm run start
open http://localhost:3000
```

---

## Entry Point

---

### Entry Point (.net)

```cs
// Program.cs
public static void Main(string[] args)
{
    CreateHostBuilder(args).Build().Run();
}

public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
```

---

### Entry Point (nest)

```ts
// main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

## Controller

---


### Controller (.net)

```cs

```


### Controller (nest)

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


---



---

## Resources

[KyleMit/**nestjs-vs-aspnet**](https://github.com/KyleMit/nestjs-vs-aspnet)

---

## Fin

### Thanks ya'll! 🎉

### Questions?
