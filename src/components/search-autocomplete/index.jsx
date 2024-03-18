import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function AutoCompleteSearch() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterdUsers, setFilteredUsers] = useState([]);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  // Handle when a name is clicked
  const handleClick = (event) => {
    setShowDropdown(false);
    setSearchParam(event.target.innerText)
    setFilteredUsers([]);
  }

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return <div>Loading data, please wait</div>;
  }

  if (error) {
  }

 // console.log(users, filterdUsers, showDropdown);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <div>Loading data, please wait</div>
      ) : (
        <input
          name="search-users"
          value={searchParam}
          onChange={handleChange}
          placeholder="Enter a username"
        />
      )}

      {showDropdown && <Suggestions handleClick={handleClick} data={filterdUsers} />}
    </div>
  );
}
