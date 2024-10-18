import React from 'react';
import StudentIDCard from './studentsidcard';

const students = [
  { name: 'Ali Ahmed', age: 16, rollNo: '101', classDay: 'Monday' },
  { name: 'Sara Khan', age: 17, rollNo: '102', classDay: 'Tuesday' },
  { name: 'Zain Malik', age: 15, rollNo: '103', classDay: 'Thursday' }
];

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student ID Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <StudentIDCard
            key={index}
            name={student.name}
            age={student.age}
            rollNo={student.rollNo}
            classDay={student.classDay}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
