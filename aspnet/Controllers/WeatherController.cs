using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnet
{
    [ApiController]
    [Route("weather")]
    public class WeatherController : Controller
    {
        [HttpGet]
        public IActionResult GetWeather()
        {
            return Content("Frightful");
        }
    }
}
