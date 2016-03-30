using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Weixin.Startup))]
namespace Weixin
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
