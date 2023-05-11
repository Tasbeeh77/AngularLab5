namespace angularConnection.Data.Model
{
    public class Course
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public int lecHours { get; set; }
        public int labHours { get; set; }

        public Course(int id, string name, int lecHours, int labHours)
        {
            this.id = id;
            this.name = name;
            this.lecHours = lecHours;
            this.labHours = labHours;
        }

    }
}
