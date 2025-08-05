import React, { useState, useEffect, useCallback } from "react";
import { Search, X, Filter, ChevronDown, ChevronUp } from "lucide-react";

const FilterSection = ({ title, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-3 border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between text-left font-medium text-gray-700 hover:text-purple-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div className="mt-2 space-y-2 max-h-[180px] overflow-auto pr-1 custom-scrollbar">
          {options?.length > 0 ? (
            options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`${title}-${option}-${index}`}
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => onChange(option)}
                  className="h-4 w-4 accent-purple-600 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-colors"
                />
                <label
                  htmlFor={`${title}-${option}-${index}`}
                  className="ml-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
                >
                  {option}
                </label>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 italic">No options available</p>
          )}
        </div>
      )}
    </div>
  );
};

const SearchSidebar = ({
  jobs,
  filters,
  setFilters,
  className,
  closeModal,
}) => {
  const [searchInput, setSearchInput] = useState(filters.search);
  const [jobType, setJobTypes] = useState([]);
  const [experienceOpt, setExperiencOpt] = useState([]);
  const [cityOpt, setCityOpt] = useState([]);
  const [stateOpt, setStateOpt] = useState([]);
  const [countryOpt, setCountryOpt] = useState([]);
  const [qualificationsOpt, setQualificationsOpt] = useState([]);
  const [skillsOpt, setSkillsOpt] = useState([]);

  const filteTypes = useCallback(() => {
    try {
      let types = [];
      let exp = [];
      let cit = [];
      let stat = [];
      let country = [];
      let skills = [];
      let qual = [];

      for (const element of jobs || []) {
        if (element?.job_type && !types.includes(element.job_type)) {
          types.push(element.job_type);
        }
      }
      for (const element of jobs || []) {
        if (element?.experience && !exp.includes(element.experience)) {
          exp.push(element.experience);
        }
      }
      for (const element of jobs || []) {
        if (element?.property_city && !cit.includes(element.property_city)) {
          cit.push(element.property_city);
        }
      }
      for (const element of jobs || []) {
        if (element?.property_state && !stat.includes(element.property_state)) {
          stat.push(element.property_state);
        }
      }
      for (const element of jobs || []) {
        if (
          element?.property_country &&
          !country.includes(element.property_country)
        ) {
          country.push(element.property_country);
        }
      }
      for (const element of jobs || []) {
        if (element?.skills) {
          for (const ski of element?.skills) {
            if (!skills.includes(ski)) {
              skills.push(ski);
            }
          }
        }
      }
      for (const element of jobs || []) {
        if (element?.qualification) {
          for (const ski of element?.qualification) {
            if (!qual.includes(ski)) {
              qual.push(ski);
            }
          }
        }
      }

      setQualificationsOpt(qual);
      setCountryOpt(country);
      setStateOpt(stat);
      setCityOpt(cit);
      setExperiencOpt(exp);
      setSkillsOpt(skills);
      setJobTypes(types);
    } catch (error) {
      console.log(error);
    }
  }, [jobs]);

  useEffect(() => {
    filteTypes();
  }, [filteTypes]);

  useEffect(() => {
    setSearchInput(filters.search);
  }, [filters.search]);

  const handleSearchSubmit = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
    if (closeModal) closeModal();
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(searchInput);
    }
  };

  const toggleFilterOption = (category, option) => {
    setFilters((prev) => {
      const currentOptions = prev[category];
      return {
        ...prev,
        [category]: currentOptions.includes(option)
          ? currentOptions.filter((item) => item !== option)
          : [...currentOptions, option],
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      experience: [],
      jobType: [],
      city: [],
      state: [],
      country: [],
      salary: [],
      skills: [],
      category: [],
      qualifications: [],
    });
    setSearchInput("");
    if (closeModal) closeModal();
  };

  const hasActiveFilters = () => {
    return Object.entries(filters).some(([key, value]) => {
      if (key === "search") return !!value;
      return value.length > 0;
    });
  };

  return (
    <aside className={`bg-white rounded-lg shadow-sm p-4 ${className} `}>
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex items-center">
          <Filter size={18} className="text-purple-600 mr-2" />
          <h2 className="font-medium text-gray-800">Filters</h2>
        </div>

        {hasActiveFilters() && (
          <button
            onClick={clearFilters}
            className="text-sm text-purple-600 hover:text-purple-800 flex items-center transition-colors"
          >
            <X size={14} className="mr-1" />
            Clear all
          </button>
        )}
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchInput}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
        />
        <div className="absolute left-3 top-2.5">
          <Search size={18} className="text-gray-400" />
        </div>
        {searchInput && (
          <button
            onClick={() => {
              setSearchInput("");
              handleSearchSubmit("");
            }}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
        {searchInput && searchInput !== filters.search && (
          <button
            onClick={() => handleSearchSubmit(searchInput)}
            className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Search
          </button>
        )}
      </div>

      <div className="overflow-y-auto max-h-[calc(100vh-280px)] custom-scrollbar pr-1 scrollbar-0 ">
        <FilterSection
          title="Job Type"
          options={jobType}
          selectedOptions={filters.jobType}
          onChange={(option) => toggleFilterOption("jobType", option)}
        />

        <FilterSection
          title="Experience"
          options={experienceOpt}
          selectedOptions={filters.experience}
          onChange={(option) => toggleFilterOption("experience", option)}
        />

        <FilterSection
          title="Skills"
          options={skillsOpt}
          selectedOptions={filters.skills}
          onChange={(option) => toggleFilterOption("skills", option)}
        />

        <FilterSection
          title="Qualifications"
          options={qualificationsOpt}
          selectedOptions={filters.qualifications}
          onChange={(option) => toggleFilterOption("qualifications", option)}
        />

        <FilterSection
          title="City"
          options={cityOpt}
          selectedOptions={filters.city}
          onChange={(option) => toggleFilterOption("city", option)}
        />

        <FilterSection
          title="State"
          options={stateOpt}
          selectedOptions={filters.state}
          onChange={(option) => toggleFilterOption("state", option)}
        />

        <FilterSection
          title="Country"
          options={countryOpt}
          selectedOptions={filters.country}
          onChange={(option) => toggleFilterOption("country", option)}
        />
      </div>
    </aside>
  );
};

export default SearchSidebar;
