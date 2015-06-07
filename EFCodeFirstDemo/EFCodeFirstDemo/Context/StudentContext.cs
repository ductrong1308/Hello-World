using EFCodeFirstDemo.Models;
using System.Data.Entity;

namespace EFCodeFirstDemo.Context
{
    public class StudentContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseRegistration> CourseRegistration { get; set; }

        public DbSet<Blog> Blogs{ get; set; }

        public DbSet<Post> Post{ get; set; }
    }
}