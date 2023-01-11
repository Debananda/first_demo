import React, { useState } from "react";

export default function useAuth(initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      let item = window.localStorage.getItem("auth");
      let currentUser = !!item ? JSON.parse(item) : initialValue;
      if (
        currentUser &&
        (!currentUser.expirationTime ||
          new Date().getTime() - currentUser.expirationTime >= 0)
      ) {
        currentUser = undefined;
        window.localStorage.removeItem("auth");
      }
      return currentUser;
      // Parse stored json or if none return initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      let valueToStore = value instanceof Function ? value(storedValue) : value;
      if (!!value) {
        valueToStore = {
          ...valueToStore,
          expirationTime: new Date().setSeconds(+valueToStore.expiresIn),
        };
      }
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (!value) {
        window.localStorage.removeItem("auth");
      } else if (typeof window !== "undefined") {
        window.localStorage.setItem("auth", JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
