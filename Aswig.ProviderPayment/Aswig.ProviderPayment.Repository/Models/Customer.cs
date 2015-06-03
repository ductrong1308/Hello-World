using System;
using System.ComponentModel.DataAnnotations;

namespace Aswig.ProviderPayment.Repository.Models
{
    public class Customer
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "First name is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required")]
        public string LastName { get; set; }
        public int Age { get; set; }
        public DateTime DOB { get; set; }
        public DateTime JoinDate { get; set; }
        public string PersonalInformation { get; set; }

        public string DOBToString
        {
            get
            {
                return DOB.ToString("dd/MM/yyyy");
            }
        }

        public string JoinDateToString
        {
            get
            {
                return JoinDate.ToString("dd/MM/yyyy");
            }
        }
    }
}
