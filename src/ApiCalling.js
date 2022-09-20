import React from "react";
const ApiCalling = () => {
  // https://reactnative.dev/movies.json
  const callApi = () => {
    fetch(`http://localhost:8085/Student/addStudent`).then((result) => {
      result.json().then((res) => {
        console.log("Response API ", res);
      });
    });
  };

  callApi();
  return <></>;
};
export default ApiCalling;
