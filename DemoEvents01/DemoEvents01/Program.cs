using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoEvents01
{
    class Program
    {
        static void Main(string[] args)
        {
            //Control a = new Control();
            //EventHandler b = new EventHandler();
            //a.OnClick += new Control.EventClick(b.HandlerControlClick);
            //a.ControlClick();

            MyAge myAge = new MyAge();
            myAge.AgeChanged += new EventHandler<TestAgeEvent>((s, e) => { Console.Write("Event fired!"); });
            myAge.Age = 10;
        }
    }

    public class Control
    {
        public delegate void EventClick(object sender, EventArgs e);
        public event EventClick OnClick;

        public void ControlClick()
        {
            if(OnClick!=null)
            {
                OnClick(this, EventArgs.Empty);
            }
        }
    }

    public class EventHandler
    {
        public void HandlerControlClick(object sender, EventArgs e)
        {
            Console.Write("Event fired!");
        }
    }

    public class TestAgeEvent : EventArgs
    {
        public int Age { get; set; }

        public TestAgeEvent(int age)
        {
            Age = age;
        }
    }

    public class MyAge
    {
        public event EventHandler<TestAgeEvent> AgeChanged;
        private int _age;

        public int Age
        {
            get
            {
                return _age;
            }
            set
            {
                _age = value;
                if(AgeChanged!=null)
                {
                    AgeChanged(this, new TestAgeEvent(value));
                }
            }
        }
    }
}
