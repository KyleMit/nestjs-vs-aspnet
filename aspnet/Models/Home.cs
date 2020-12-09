using System;

namespace aspnet
{
    public class Home
    {
        public Home(string msg)
        {
            this.Message = msg;
        }
        public string Message { get; set; }
    }
}
