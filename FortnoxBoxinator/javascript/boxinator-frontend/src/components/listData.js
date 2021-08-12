import React, { useState } from "react";
import testData from "./test-data.json";

function shippingPrice(box) {
  if (box.country === "sweden") {
    return box.weight * 1.3;
  } else if (box.country === "china") {
    return box.weight * 4.0;
  } else if (box.country === "brazil") {
    return box.weight * 8.6;
  } else {
    return box.weight * 7.2;
  }
}
const BoxData = () => {
  const [boxes] = useState(testData);
  return boxes.map((box) => (
    <tr>
      <td>{box.receiver}</td>
      <td>{box.weight}</td>
      <td
        style={{
          backgroundColor:
            "rgba(" + box.red + ", " + box.green + ", " + box.blue + ", 1)",
        }}
      ></td>
      <td>{shippingPrice(box).toFixed(2)}</td>
    </tr>
  ));
};
const ListData = () => {
  return <BoxData />;
};

export default ListData;
