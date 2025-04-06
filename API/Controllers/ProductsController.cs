using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;
        }

     
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
            //returns ok pershkak te actionResult
            // return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            // var product = context.Products.Find(id);
            // if (product == null) return NotFound("Product not found");
            // return Ok(product);
            var product = await _context.Products.FindAsync(id);

            if(product == null) return NotFound();

            return product;
        }
    }
}