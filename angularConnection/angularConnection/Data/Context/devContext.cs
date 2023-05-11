using angularConnection.Data.Model;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace angularConnection.Data.Context
{
    public class devContext :DbContext
    {
        public DbSet<Course> Courses { get; set; }
        public DbSet<Department> Departments { get; set; } 
        public devContext(DbContextOptions<devContext> options):base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder); 
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var courses = new List<Course>
            {
                new Course(1,"C#",36,36),
                new Course(2,"node.js",12,12),
                new Course(3,"Angular",18,18),
                new Course(4,"MVC",24,24),
            };

            var departments = new List<Department>
            {
                new Department(1,"PD",50),
                new Department(2,"AI",15),
                new Department(3,"SA",25),
                new Department(4,"OS",40),
            };

            modelBuilder.Entity<Course>().HasData(courses);
            modelBuilder.Entity<Department>().HasData(departments);
        }

    }
}
