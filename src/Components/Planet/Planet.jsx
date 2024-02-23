import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Planet.css";
import axios from "axios";
import Card from "../Card/Card";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const Planet = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://swapi.dev/api/planets/?format=json"
      );
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      // console.log(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleNextPage = async () => {
    try {
      const response = await axios.get(nextPage);
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error("Error fetching next page: ", error);
    }
  };

  const handlePrevPage = async () => {
    try {
      const response = await axios.get(prevPage);
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error("Error fetching previous page: ", error);
    }
  };

  return (
    <div className="planet_container">
      <div className="pages">
        {prevPage && (
          <button className="pages_btn" onClick={handlePrevPage}>
            <CiCircleChevLeft style={{ fontSize: "3.5rem" }} />
          </button>
        )}
        {nextPage && (
          <button className="pages_btn" onClick={handleNextPage}>
            <CiCircleChevRight style={{ fontSize: "3.5rem" }} />
          </button>
        )}
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 2 }}
          className="card_det"
        >
          {planets.map((planet) => (
            <Card
              name={planet.name}
              climate={planet.climate}
              population={planet.population}
              terrain={planet.terrain}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Planet;
