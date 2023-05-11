using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace angularConnection.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lecHours = table.Column<int>(type: "int", nullable: false),
                    labHours = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Capacity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "id", "labHours", "lecHours", "name" },
                values: new object[,]
                {
                    { 1, 36, 36, "C#" },
                    { 2, 12, 12, "node.js" },
                    { 3, 18, 18, "Angular" },
                    { 4, 24, 24, "MVC" }
                });

            migrationBuilder.InsertData(
                table: "Departments",
                columns: new[] { "id", "Capacity", "Name" },
                values: new object[,]
                {
                    { 1, 50, "PD" },
                    { 2, 15, "AI" },
                    { 3, 25, "SA" },
                    { 4, 40, "OS" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Departments");
        }
    }
}
