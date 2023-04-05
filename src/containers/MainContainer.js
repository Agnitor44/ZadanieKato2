import List from "@/components/List";
import Menu from "@/components/Menu";
import { fetchData } from "@/services/fetchData";
import React, { useEffect, useState } from "react";

export default function MainContainer() {
  const [location, setLocation] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (location) {
      clearInterval(interval);
      loadData();
      interval = setInterval(() => loadData(), 10000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [location]);

  const loadData = async () => {
    await fetchData(location, setList, setError, setIsLoading);
  };

  return (
    <div>
      <Menu setLocation={setLocation} location={location} />
      <List
        list={list}
        error={error}
        isLoading={isLoading}
        location={location}
      />
    </div>
  );
}
