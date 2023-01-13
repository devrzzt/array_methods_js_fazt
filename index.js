var students = [
    {
        name: 'name1',
        lastname: 'lastname1',
        age: 1,
        course: 'course1'
    },
    {
        name: 'name2',
        lastname: 'lastname2',
        age: 2,
        course: 'course2'
    },
    {
        name: 'name3',
        lastname: 'lastname3',
        age: 3,
        course: 'course3'
    },
    {
        name: 'name4',
        lastname: 'lastname4',
        age: 4,
        course: 'course4'
    },
];
/**
 *  * FOREACH method
 */
// const fullnames = []
// students.forEach(student => {
//   fullnames.push(student.name + ' ' + student.lastname)
// })
// console.log(fullnames)
/**
 *  * MAP method
 */
// const studentsAux = students
//   .map(student => ({
//     ...student,
//     course: 'Programming',
//   }))
//   .map(student => ({
//     ...student,
//     age: student.age * 2,
//   }))
// console.log(studentsAux)
/**
 * * FILTER method
 */
// const result = students.filter(student => student.course === 'course4')
// console.log(result)
/**
 * * REDUCE method
 */
// const result = students.reduce((total, student) => total + student.age, 0)
// console.log(result)
// type Developers = {
//   id: number
//   name: string
//   skills: string[]
// }
// const developers: Developers[] = [
//   { id: 1, name: 'name1', skills: ['skill1', 'skill2', 'skill5'] },
//   { id: 2, name: 'name2', skills: ['skill2', 'skill3', 'skill6'] },
//   { id: 3, name: 'name3', skills: ['skill3', 'skill4'] },
// ]
// const result = developers.reduce(
//   (allSkills: any, developer) =>
//     Array.from(new Set([...allSkills, ...developer.skills])).sort(),
//   []
// )
// console.log(result)
/**
 * * SORT method
 */
// const numbers = [10, 30, 1000, 100]
// console.log(numbers.sort((a, b) => a - b)) //asc
// console.log(students.sort((a, b) => b.age - a.age)) //desc
/**
 * * FIND method
 */
// const result = students.find(student => student.name === 'name1')
// console.log(result)
/**
 * * SOME method
 */
// const result = students.some(student => student.age > 3)
// console.log(result)
/**
 * * EVERY method
 */
// const result = students.some(student => student.name.includes('w'))
// console.log(result)
/**
 * * COMBINE methods
 */
var result = students
    .map(function (_a) {
    var name = _a.name, lastname = _a.lastname, age = _a.age;
    return ({
        student: "".concat(name, " ").concat(lastname),
        age: age
    });
})
    .filter(function (student) { return student.age > 2; })
    .sort(function (a, b) { return a.age - b.age; })
    .reduce(function (total, student) { return total + student.age; }, 0);
console.log(result);
