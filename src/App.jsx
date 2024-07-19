import BioCard from "./components/Card";
import Hero from "./components/Hero";
import FilterForm from "./components/FilterForm";
import PersonList from "./components/PersonList";
import { useEffect, useState } from "react";
import data from "/src/data.json";

function App() {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filters) => {
    const { university, language, subject, country } = filters;
    const filtered = data.filter((item) => {
      return (
        (!university ||
          item.university_name
            .toLowerCase()
            .includes(university.toLowerCase())) &&
        (!language ||
          item.spoken_language
            .toLowerCase()
            .includes(language.toLowerCase())) &&
        (!subject ||
          item.subject.toLowerCase().includes(subject.toLowerCase())) &&
        (!country || item.country.toLowerCase().includes(country.toLowerCase()))
      );
    });
    setFilteredData(filtered);
  };
  return (
    <>
      <div>
        <Hero />

        <div className=" bg-gray-800 p-8">
          <h1 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
            University Filter
          </h1>
          <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <FilterForm onFilter={handleFilter} />
          </div>
          {/* <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
            <PersonList people={filteredData} />
          </div> */}
        </div>
        <BioCard students={filteredData} />
      </div>
    </>
  );
}

export default App;
