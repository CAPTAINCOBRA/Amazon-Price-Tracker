import React from "react";
import { useSelector } from "react-redux";
import { Table, Image, Container, Badge } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Grid } from "@mui/material";
import "./WatchList.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  options: {
    scales: {
      x: [
        {
          display: true,
          beginAtZero: true,
          ticks: {
            autoSkip: false,
          },
        },
      ],
    },
  },
};

const WatchList = () => {
  const { allProducts } = useSelector((state) => state.tracker);
  // const labels = allProducts.map((product) => product.priceHistory[]);

  const getLabels = (product) => {
    const labels = [];
    product.priceHistory.forEach((price) => {
      labels.push(price.date);
    });
    labels.forEach((label, i) => {
      labels[i] = new Date(label).toLocaleDateString();
    });
    return labels;
  };

  const data = (product) => {
    const labels = getLabels(product);

    return {
      labels, // use labels name here only
      datasets: [
        {
          label: "Price",
          data: product.priceHistory.map((price) => price.price),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  };

  const bgColorPrice = (product) => {
    if (product.priceHistory[0].price <= product.reqPrice) {
      return "TableSuccess";
    } else {
      return "TableDanger";
    }
  };

  const dataValues = allProducts.map((product) => data(product));

  return (
    <Container fluid md="auto" className="WatchListContainer">
      <h1 className="m-auto">WatchList</h1>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr className="TableHeader">
            <th>#</th>
            <th>Product Image</th>
            <th>Name</th>
            <th>Latest Price</th>
            <th>Required Price (Rs)</th>
            <th>Price History</th>
          </tr>
        </thead>
        {allProducts.map((product, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <Badge bg="dark">{index + 1}</Badge>
                </td>
                <td>
                  <a href={product.url} target="_blank">
                    <Image
                      // style={{ height: "10rem", width: "10rem" }}
                      src={product.imageUrl}
                    />
                  </a>
                </td>
                <td md="auto">{product.name}</td>
                <td className={bgColorPrice(product)}>
                  {/* {product.priceHistory[0].price} */}
                  {product.priceHistory[product.priceHistory.length - 1].price}
                </td>
                <td>{product.reqPrice}</td>
                <td style={{ width: "600px", height: "250px" }} md="auto">
                  {/* <Line options={options} data={(product) => data(product)} /> */}
                  {allProducts.length !== 0 && (
                    <Line
                      key={index}
                      options={options}
                      data={dataValues[index]}
                      style={{ width: "600px", height: "400px !important" }}
                    />
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default WatchList;
