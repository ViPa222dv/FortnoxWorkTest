import React, { useState } from "react";
import testData from "./test-data.json";
import "../App.less";

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

//Gets the json data from the GET request.
function getBoxData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    } else if (this.readyState === 4 && this.status <= 400) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "http://localhost:8080/api/box/all_boxes", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}
const BoxData = () => {
  //Gets correct type of data from the GET request, but something is not working when I try to add it to the useState.
  //I can get data from json test data, so I'm not entirely sure how to fix the issue.
  console.log(getBoxData());
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
