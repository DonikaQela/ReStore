using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound("This is not found");
        }

         [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title = "This is a bad request"});
        }
         [HttpGet("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }
         [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first error");
            ModelState.AddModelError("Problem2", "This is the second error");
            return ValidationProblem(ModelState);
        }

           [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
           throw new Exception("This is a server error");
        }
        
    }
}