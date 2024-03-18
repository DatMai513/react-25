import { useEffect, useState } from "react";

// The function takes a key:value pair
// ex. (theme: dark)
export default function useLocalStorage(key, defaultValue) {
  
  // The state is defaulted to either what is already stored in localStorage,
  // or the default value
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // Update local storage anytime key or value is changed
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
