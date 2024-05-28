import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [faculty, setFaculty] = useState("");
  const [specialization, setSpecialization] = useState("");
  const ref = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/api/v1/student/create?universityIds=${id}`, {
      method: 'POST',
      body: new FormData(ref.current),
    });
    goBack();
  };

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
    goBack();
  }

  return (
    <div className="window" onClick={handleBackgroundClick}>
    <form onSubmit={handleSubmit} className="add-student-form" onClick={e => e.stopPropagation()} ref={ref}>
      <div className="field">
        <label for="name">Name:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John"
        />
      </div>
      <div className="field">
        <label for="surname">Surname:</label>
        <input
          name="surname"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Doe"
        />
      </div>
      <div className="field">
        <label for="number">Number:</label>
        <input
          name="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="25050066"
        />
      </div>
      <div className="field">
        <label for="faculty">Faculty:</label>
        <input
          name="faculty"
          type="text"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          placeholder="Faculty of Computer Systems and Networks"
        />
      </div>
      <div className="field">
        <label for="specialization">Specialization:</label>
        <input
          name="specialization"
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="Computer Science"
        />
      </div>
      <button type="submit">add student</button>
    </form>
      
      </div>
  );
}
