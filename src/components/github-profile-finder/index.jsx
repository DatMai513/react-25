// Call githubs public API to get a profiles information
import { useEffect, useState } from "react";
import "./styles.css"
import User from "./user";

// Do it through searching
export default function GitHubProfile() {
  const [username, setUsername] = useState("datmai513");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleSubmit = () => {
    if (username !== "") {
      fetchGithubUserData();
    }
  }

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
    
      const response= await fetch(`https://api.github.com/users/${username}`)
      const data = await response.json();
  
      if (data) {
        setUserData(data);
        setLoading(false);
      }
  
      console.log(data);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  // On page load fetch data from the API
  useEffect(()=>{
    fetchGithubUserData();
  }, [])

  if (loading) {
    return (
      <h1>Loading data, please wait</h1>
    )
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          value={username}
          placeholder="Enter a Github username..."
          onChange={(event)=>setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }
    </div>
  );
}
