module.exports = {

  //users
  createUser: require("./user/createUser"),
  getUser: require("./user/getUser"),
  getUserById: require("./user/getUserById"),
  updateUser: require("./user/updateUser"),
  removeUser: require("./user/removeUser"),

     //course
     createCourse: require("./course/createCourse"),
     getCourse: require("./course/getCourse"),
     getCourseById: require("./course/getCourseById"),
     updateCourse: require("./course/updateCourse"),
     removeCourse: require("./course/removeCourse"),

      //student
      createStudent: require("./student/createStudent"),
      getStudent: require("./student/getStudent"),
      getStudentById: require("./student/getStudentById"),
      updateStudent: require("./student/updateStudent"),
      removeStudent: require("./student/removeStudent"),

       //teacher
       createTeacher: require("./teacher/createTeacher"),
       getTeacher: require("./teacher/getTeacher"),
       getTeacherById: require("./teacher/getTeacherById"),
       updateTeacher: require("./teacher/updateTeacher"),
       removeTeacher: require("./teacher/removeTeacher"),

        //teacherStudentHasCourse
        createTeacherStudentHasCourse: require("./teacherStudentHasCourse/createTeacherStudentHasCourse.js")
}