import { useEffect, useState } from "react";
import { getCarById } from "../service/carService";
import { useParams } from "react-router-dom";

const Singlecar = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCarById(id).then(({ data }) => {
        setCar(data);
      });
    }
  }, []);

  return (
    <div className="cars">
      <p>Model: {car.model}</p>
      <p>Brand: {car.brand}</p>
      <p>Year: {car.year}</p>
      <p>MaxSpeed: {car.maxSpeed}</p>
      <p>Automatic: {car.isAutomatic ? "Yes" : "No"}</p>
      <p>Engine: {car.engine}</p>
    </div>
  );
};

export default Singlecar;
