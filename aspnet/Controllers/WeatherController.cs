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

        [HttpGet]
        [Route("light")]
        public IActionResult GetDaylight([FromQuery] int hour)
        {
            Console.WriteLine(hour);
            var result = hour < 6 || hour > 18 ? "Dark" : "Light";
            return Content(result);
        }
    }
}
