using EFCodeFirstDemo.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EFCodeFirstDemo.Models
{
    public class CourseRegistration
    {
        [Column(Order = 0), Key, ForeignKey("Course")]
        public int CourseId { get; set; }

        [Column(Order = 1), Key, ForeignKey("Student")]
        public int StudentId { get; set; }

        public Course Course { get; set; }
        public Student Student { get; set; }
        public string CourseName { get; set; }
        public string StudentName { get; set; }
    }
}