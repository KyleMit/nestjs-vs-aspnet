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
mkdir -p _site/_assets && cp -r _assets _site/ && (npx live-server _site &) && (npx @marp-team/marp-cli -w readme.md -o _site/index.html --html &)

# build
mkdir -p _site/_assets && cp -r _assets _site/ && npx @marp-team/marp-cli readme.md -o _site/index.html --html
```

-->

# AspNET vs NestJS

<style>
.logos p {
    display: flex;
    justify-content: center;
    align-items: center;
}
.logos img {
  width: 124px;
  margin: 20px;
}
</style>

<div class="logos">

![aspnet](/_assets/aspnet-core.png) vs ![nestjs](/_assets/nestjs.png)

</div>

with me, Kyle 👋


---

## [**ASP.NET**](https://dotnet.microsoft.com/apps/aspnet)

> ASP.​NET Core is a cross-platform .NET framework for building modern cloud-based web applications on Windows, Mac, or Linux.

---

## [**NestJS**](https://nestjs.com/)

> A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8) 🚀

---

## Github

- [nestjs/nest](https://github.com/nestjs/nest)
- [dotnet/aspnetcore](https://github.com/dotnet/aspnetcore)

---

## Docs

- [NestJS Documentation](https://docs.nestjs.com/)
- [ASP.NET Core Docs](https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-5.0)

---

<!--
## Overview

- Get Started
- Syntax
  - Controllers
  - Dependency Injection
- Deployment


--- -->


## Architecture

- **aspnet** - built on top of dotnet core
- **nestjs** - built on top of node / express

---


## Model View Controller

![model view controller](/_assets/model-view-controller.png.png)

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
```

---

### Getting Started (nest)

```bash
git clone https://github.com/nestjs/typescript-starter.git nestjs --depth 1
cd nestjs
npm install
```

---

## Running Locally

---

### Running Locally (.net)

```bash
dotnet run       # run once
dotnet watch run # run with watch

open http://localhost:5000
```

---

### Running Locally (nest)

```bash
npm run start     # run once
npm run start:dev # run with watch

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

---

## Create Controller

---

### Create Controller (.net)

[nest schematics](https://docs.nestjs.com/cli/usages#nest-generate)

```bash
nest generate controller weather
```

---

### Create Controller (nest)

[aspnet-codegenerator](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-5.0)

```bash
dotnet aspnet-codegenerator controller -name weather
```

---

## Controllers

---


### Controller (.net)

[Add a controller](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/adding-controller?view=aspnetcore-5.0&tabs=visual-studio)

```cs
// Controllers/WeatherController.cs
[Route("weather")]
public class WeatherController : Controller
{
    [HttpGet]
    public IActionResult GetWeather()
    {
        return Content("Frightful");
    }
}
```

---

### Controller (nest)

[Controllers](https://docs.nestjs.com/controllers)

```ts
// weather.controller.ts
@Controller('weather')
export class WeatherController {

  @Get()
  getWeather(): string {
    return 'Frightful';
  }
}
```


---

## Model Binding

---

### Model Binding (.net)

```cs
[HttpGet]
[Route("light")]
public IActionResult GetDaylight([FromQuery] int hour)
{
    var result = hour < 6 || hour > 18 ? "Dark" : "Light";
    return Content(result);
}
```

---

### Model Binding (nest)

```ts
@Get('light')
getDaylight(@Query('hour') hour: number): string {
  console.log(hour);
  return hour < 6 || hour > 18 ? 'Dark' : 'Light';
}
```

---

## Models

---

### Models (.net)

```cs
public class Home
{
    public Home(string msg)
    {
        this.Message = msg;
    }
    public string Message { get; set; }
}
```


---

### Models (nest)

```ts
@Injectable()
export class Home {
  message: string;

  constructor(msg: string) {
    this.message = msg;
  }
}
```

---

## Views Setup

---

### Views Setup (.net)

```cs
// startup.cs
public void ConfigureServices(IServiceCollection services)
{
    // ...
    services.AddMvcCore().AddRazorViewEngine();
    // ...
}
```

---

### Views Setup (nest)

[MVC for NestJS](https://docs.nestjs.com/techniques/mvc)

```bash
npm install --save hbs
```

```ts
// main.ts
app.useStaticAssets(join(__dirname, '..', 'public'));
app.setBaseViewsDir(join(__dirname, '..', 'views'));
app.setViewEngine('hbs');
```

---

## View Controllers

---

### View Controllers (.net)

```cs
[Route("home")]
public class HomeController : Controller
{
    public IActionResult Index()
    {
        var model = new Home("Hi There!");
        return View(model);
    }
}
```

---

### View Controllers (nest)

```ts
@Controller('home')
export class HomeController {
  @Get()
  @Render('index')
  root() {
    const model = new Home('Hello');
    return model;
  }
}
```

---

## Views

---

### Views (.net)

Razor Syntax

```cs
// views/home/index.cshtml
@model.Message
```

---

### Views (nest)

[Handlebars / hbs](https://github.com/pillarjs/hbs#readme)

```hbs
<!-- views/home/index.hbs -->
{{message}}
```



<!-- ---

## Dependency Injection

---
 -->

---

## Resources

- [KyleMit/**nestjs-vs-aspnet**](https://github.com/KyleMit/nestjs-vs-aspnet)
- [Introduction to NestJS](https://docs.nestjs.com/)
- [Introduction to ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-5.0)

---

## Fin

### Thanks ya'll! 🎉

### Questions?
