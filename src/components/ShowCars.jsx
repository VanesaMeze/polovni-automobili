import { useContext } from "react";
import { Link } from "react-router-dom";
import CarsContext from "../storage/CarsContext";

const ShowCars = () => {
  const { cars } = useContext(CarsContext);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table table-hover"
          style={{ width: "300px", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Model</th>
              <th>Brand</th>
              <th>Year</th>
              <th>Max speed</th>
              <th>Automatic</th>
              <th>Engine</th>
              <th>No of doors</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cars)
              ? cars.map((car, id) => (
                  <tr key={id}>
                    <td style={{ width: "10px", textAlign: "center" }}>
                      {car.model}
                    </td>
                    <td style={{ width: "10px", textAlign: "center" }}>
                      {car.brand}
                    </td>
                    <td style={{ width: "10px", textAlign: "center" }}>
                      {car.year}
                    </td>
                    <td style={{ width: "10px", textAlign: "center" }}>
                      {car.maxSpeed}
                    </td>
                    <td style={{ width: "10px", textAlign: "center" }}>
                      {car.isAutomatic ? "Yes" : "No"}
                    </td>
                    <td style={{ width: "10px", textAlign: "center" }}>
                      {car.engine}
                    </td>
                    <td style={{ width: "10px", textAlign: "center" }}>
                      {car.numberOfDoors}
                    </td>
                    <td>
                      <Link to={`edit/${car.id}`}>Edit</Link>
                    </td>
                    <td>
                      <Link to={`/cars/${car.id}`}>Show</Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShowCars;
