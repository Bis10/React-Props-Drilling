import useData from "../contexts/useData";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  const { data, setData } = useData();
  console.log("Data in Component B Re-rendered");

  return (
    <div>
      <h1>Component B</h1>
      <div>
        <h2>{data?.name}</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {data?.orders?.map((order, orderIndex) => {
            return (
              <div key={orderIndex}>
                <p>Order ID: {order.orderId}</p>
                <p>Product: {order.product}</p>
                <p style={{ backgroundColor: "red" }}>
                  Quantity: {order.quantity}
                </p>
                <p>Price: {order.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ComponentC data={data} setData={setData} />
    </div>
  );
};

export default ComponentB;
