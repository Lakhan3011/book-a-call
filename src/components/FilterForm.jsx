import data from "/src/data.json";

import React, { useState, useEffect } from "react";

const FilterForm = ({ onFilter }) => {
  const [university, setUniversity] = useState("");
  const [language, setLanguage] = useState("");
  const [subject, setSubject] = useState("");
  const [country, setCountry] = useState("");

  const [universitySuggestions, setUniversitySuggestions] = useState([]);
  const [languageSuggestions, setLanguageSuggestions] = useState([]);
  const [subjectSuggestions, setSubjectSuggestions] = useState([]);
  const [countrySuggestions, setCountrySuggestions] = useState([]);

  useEffect(() => {
    setUniversitySuggestions(getSuggestions("university_name", university));
  }, [university]);

  useEffect(() => {
    setLanguageSuggestions(getSuggestions("spoken_language", language));
  }, [language]);

  useEffect(() => {
    setSubjectSuggestions(getSuggestions("subject", subject));
  }, [subject]);

  useEffect(() => {
    setCountrySuggestions(getSuggestions("country", country));
  }, [country]);

  const getSuggestions = (field, value) => {
    if (!value) return [];
    return [
      ...new Set(
        data
          .filter((item) =>
            item[field].toLowerCase().includes(value.toLowerCase())
          )
          .map((item) => item[field])
      ),
    ];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ university, language, subject, country });
  };

  const handleSuggestionClick = (setter, value) => {
    setter(value);
    setUniversitySuggestions([]);
    setLanguageSuggestions([]);
    setSubjectSuggestions([]);
    setCountrySuggestions([]);
  };

  const renderSuggestions = (suggestions, setter) =>
    suggestions.length > 0 && (
      <ul className="border border-gray-300 rounded bg-white absolute z-10 w-full">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(setter, suggestion)}
            className="p-2 cursor-pointer hover:bg-gray-200"
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  const handleClear = () => {
    setUniversity("");
    setLanguage("");
    setSubject("");
    setCountry("");
    setUniversitySuggestions([]);
    setLanguageSuggestions([]);
    setSubjectSuggestions([]);
    setCountrySuggestions([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow-md flex flex-wrap gap-4 relative"
    >
      <div className="flex-1 min-w-[150px] relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          University Name:
        </label>
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {renderSuggestions(universitySuggestions, setUniversity)}
      </div>
      <div className="flex-1 min-w-[150px] relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Spoken Language:
        </label>
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {renderSuggestions(languageSuggestions, setLanguage)}
      </div>
      <div className="flex-1 min-w-[150px] relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Subject:
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {renderSuggestions(subjectSuggestions, setSubject)}
      </div>
      <div className="flex-1 min-w-[150px] relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Country:
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {renderSuggestions(countrySuggestions, setCountry)}
      </div>
      <div className="flex gap-2 items-end mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Filter
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
