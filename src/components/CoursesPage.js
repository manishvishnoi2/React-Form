import React, {useState, useEffect} from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {

const [ courses, setCourses] = useState([]);

useEffect(()=>{
    getCourses().then((allCourses) => setCourses(allCourses))
},[])

   return (
       <>
       <h2>Courses</h2>
       <Link className="btn btn-primary" to="/course"> Add Course </Link>
       <CourseList courses={courses} />
       </>
   )
  }

export default CoursesPage;
