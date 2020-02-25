const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
  
  //function 1
 
 function getSubjects (student){
  const teaching= Object.keys(student.subjects);
  const studentsSubjects = teaching.map(function(value){
  const nameSubjects = value.split('_').join(' ');
    return nameSubjects.slice(0,1).toUpperCase()+nameSubjects.slice(1);
  });
  return studentsSubjects;
};
document.write(`<p> Function #1 - Lists items for a particular student:${getSubjects(students[0])}</p>`);


 //function 2
 function getAverageMark(arr){
    const average = Object.values(arr.subjects).flat();
   return Number(average.reduce((sum, element) => {
      return sum += element;
  }, 0 )/average. length).toFixed(2);
  
}

document.write(`<p> Function #2 - The average mark on all subjects:${getAverageMark((students[0]))}</p>`);


//function 3
function getStudentInfo(student){
    const {course, name} = student;
    const objStudentInfo = { course, name,
      averageMark: getAverageMark(student),
  };
  return objStudentInfo;
}
console.log(getStudentInfo(students[0]));
document.write(`<p> Function #3 - Returns general information on the transferred student: in console </p>`);

 //function 4
 function getStudentsNames(students){
  const result =students.map((object,i)=>object.name).sort();
      return result;
 }
 document.write(`<p> Function #4 - Counts arithmetic mean  :${getStudentsNames(students)}</p>`);


 //function 5
 function getBestStudent(students){
   let bestMark=0;
    return students.map(Obj=>getStudentInfo(Obj)).reduce((name,element)=>{
  if(bestMark<element.averageMark){
    bestMark=element.averageMark;
    name=element.name;
  }
  return name;
   })
 }
 document.write(`<p> Function #5 - Returns the best student on the average grade list  :${getBestStudent(students)}</p>`);

 //function 6
function calculateWordLetters(letter){
const sums={};
for (let i = 0; i < letter.length; i++) {
if(sums[letter[i]]){
  sums[letter[i]]+=1;
}
else{
sums[letter[i]]=1;
}
}
return sums;
}
console.log(calculateWordLetters('test'))
document.write(`<p> Function #6 - Counts the number of times a letter is repeated in a word: in console </p>`);
