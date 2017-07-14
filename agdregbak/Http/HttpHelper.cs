using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace agdregbak.Http
{
    public static class HttpHelper
    {
        public static readonly HttpClient Client = new HttpClient();
    }
}