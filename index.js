//object literal
let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [ 89, 34, 67 ]
      },
      {
        course: 'INFO 1601',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [ 100, 89, 79 ]
      }
    ]
  };
  
  let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  
  const students = [bob, sally, paul];

  function getAverageGrade(student, course) {
    for (let trans of student.transcript) {
        if (trans.course === course) {
            let sum =0;
            for (let grade of trans.grades) {
                sum =+ grade;
            }
            return sum / trans.grades.length;
        }
    }
    return -1;
  }

  function getAssignmentMark(student, course, num) {
    for (let trans of student.transcript) {
        if (trans.course === course) {
            return trans.grades[num - 1];
        }
    }

    return -1;
  }

  function averageAssessment(students, courseName, assignment) {
    let sum = 0;
    let count = 0;
    for (let stu of students) {
        for (let trans of stu.transcript) {
            if (trans.course === courseName) {
                sum += trans.grades[assignment - 1];
                count++;
            }
        }
    }
    return sum / count;
  }