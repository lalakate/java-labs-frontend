import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Delete from "./Delete";

export const Students = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const result = await fetch(
      `http://localhost:8080/api/v1/student/in?universityId=${id}`
    );
    const data = await result.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Link to="add" className="add-student">
        add student
      </Link>
      <table>
        <tr>
          <th>number</th>
          <th>surname</th>
          <th>name</th>
          <th>faculty</th>
          <th>specialization</th>
          <th> </th>
          <th> </th>
        </tr>
        {students.map((item) => (
          <tr key={item.id}>
            <td>{item.number}</td>
            <td>{item.surname}</td>
            <td>{item.name}</td>
            <td>{item.faculty}</td>
            <td>{item.specialization}</td>
            <td>
              <Delete fetchStudents={fetchStudents} item={item} />
            </td>
          </tr>
        ))}
      </table>
      <Outlet />
    </>
  );
};