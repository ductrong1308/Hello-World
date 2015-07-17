using System.Web.Mvc;

namespace Omega.Controllers
{
    public class AdminController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
	}
}