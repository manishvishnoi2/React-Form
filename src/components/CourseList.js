import React from "react";
import { Link } from 'react-router-dom';

function CourseList(props){
    return(
        <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Ttile</th>
              <th>Author Id</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {props.courses.map((course) => {
              return (
                <tr key={course.id}>
                  <td> <Link to={"/course/"+course.slug}>{course.title}</Link></td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
}

export default CourseList;