using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(agdregbak.Startup))]
namespace agdregbak
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
