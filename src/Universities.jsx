import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Universities = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countires, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        "http://localhost:8080/api/v1/university/country/all"
      );
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchUniversities = async () => {
      if (selectedCountry) {
        const response = await fetch(
          `http://localhost:8080/api/v1/university/in?countryId=${selectedCountry}`
        );
        const data = await response.json();
        setUniversities(data);
      }
    };
    fetchUniversities();
  }, [selectedCountry]);

  console.log({ universities });

  return (
    <>
      <h2>There is some information about universities by country name</h2>
      <select
        className="select"
        onChange={(event) => setSelectedCountry(event.target.value)}
      >
        <option value="">Please choose country </option>
        {countires.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <section>
          <ul className="universities-list">
            {universities.map((item) => (
              <li key={item.id} className="card">
                  <h3 className="card-title">{item.name}</h3>
                  <a href={`${item.web_page}`} > {item.web_page} </a>
                  <Link to={`/universities/${item.id}`} className="">go to students</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
