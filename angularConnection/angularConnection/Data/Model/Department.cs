namespace angularConnection.Data.Model
{
    public class Department
    {
        public int id { get; set; }
        public string Name { get; set; }= string.Empty;
        public int Capacity { get; set; }

        public Department(int id,string Name, int Capacity)
        {
            this.id = id;
            this.Name = Name;
            this.Capacity = Capacity;
        }
    }
}
