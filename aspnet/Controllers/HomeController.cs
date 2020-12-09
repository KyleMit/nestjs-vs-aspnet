using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnet
{
    [Route("home")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var model = new Home("Hi There!");
            return View(model);
        }
    }
}
