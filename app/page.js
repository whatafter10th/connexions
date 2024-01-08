import React from 'react';

const getRandomColor = () => { 
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const IndexPage = () => {
  const employees = [
    {
      name: "Oliver Wilson ",
      position: "Consultant",
      photo: "emp.1.jpg",
      Linkdin : "https://www.linkedin.com/in/OliverWilson/",
      bio: "Oliver Wilson is an experienced consultant with expertise in...",
    },
    {
      name: "Rajesh Kumar",
      position: "Mentor",
      photo: "emp2.jpg",
      Linkdin:"https://www.linkedin.com/in/Rajeshkumar/",
      bio: "Jane Smith is a seasoned mentor with a passion for helping...",
    },
    {
      name: "Aarav Sharma",
      position: "Mentor",
      photo: "emp3.jpg",
      Linkdin:"https://www.linkedin.com/in/Aaravsharma/",
      bio: "Aarav Sharma is a seasoned mentor with a passion for helping...",
    },
    {
       name: "Shivam Joshi",
       position: "Mentor",
       photo: "emp4.jpg",
       Linkdin:"https://www.linkedin.com/in/ShivamJoshi/",
       bio: "5 years in digital marketing, specializing in social media strategy and content creation",
      },
      {
      name: "Shanaya Sharma ",
      position: "Mentor",
      photo: "emp5.jpg",
      Linkdin:"https://www.linkedin.com/in/Amitmishra/",
      bio: "Aarav Sharma is a seasoned mentor with a passion for helping...",
      },
    {
      name: "Armaan Merchant",
      position: "Mentor",
      photo: "emp6.jpg",
      Linkdin:"https://www.linkedin.com/in/ananyadesai/",
      bio: " 7 years in financial analysis, with expertise in budget planning and forecasting.",
    },
  ];

  return (
    <div className="font-sans">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold mb-6">What After 10th??  Meet out Team</h1>
      </div>

      <div className="flex flex-wrap justify-center p-4">
        {employees.map((employee, index) =>(
          <div
            key={index}
            className="m-4 p-4 border border-gray-300 text-center max-w-xs rounded-lg shadow-md"
            style={{ backgroundColor:getRandomColor()}}
          >
            <img
              src={employee.photo}
              alt={`${employee.name} Photo`}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h2 className="text-lg font-bold mt-2">{employee.name}</h2>
            <p className="text-gray-600 mt-1">{employee.position}</p>
            <h2 className="text-lg font-bold mt-2">
              <a
                href={employee.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline inline-block max-w-full"
                
              >
                {employee.name}
              </a>
            </h2>

            
            <p className="text-gray-600 mt-1">{employee.Linkdin}</p>
            <p className="text-sm text-gray-700 mt-2 inline-block max-w-full">{employee.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;