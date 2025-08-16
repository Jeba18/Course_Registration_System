function showCourses()
{
    fetch("http://localhost:8080/courses")
    .then((response) => response.json())
    .then((courses) =>{
        const table=document.getElementById("coursetable")

        courses.forEach(course => {
            var row=`<tr>
            <td>${course.courseId}</td>
            <td>${course.courseName}</td>   
            <td>${course.trainer}</td>
            <td>${course.durationInWeeks}</td>
            </tr>`

            table.innerHTML+=row;
        });

    }
    );
}
function showEnrolledStudents()
{
    fetch("http://localhost:8080/courses/enrolled")
    .then((response) => response.json())
    .then((students) =>{
        const enrolledtable=document.getElementById("enrolledtable")

        students.forEach(student => {
            var row=`<tr>
            <td>${student.name}</td>
            <td>${student.emailId}</td>   
            <td>${student.courseName}</td>
            </tr>`

            enrolledtable.innerHTML+=row;
        });

    }
    );
}