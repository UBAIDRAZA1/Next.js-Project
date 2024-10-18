import React from 'react';

interface StudentProps {
  name: string;
  age: number;
  rollNo: string;
  classDay: string;
}

const StudentIDCard: React.FC<StudentProps> = ({ name, age, rollNo, classDay }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-xs md:max-w-md mx-auto">
      <div className="flex items-center">
        <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">Age: {age}</p>
          <p className="text-gray-600">Roll No: {rollNo}</p>
          <p className="text-gray-600">Class: {classDay}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentIDCard;
