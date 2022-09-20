import ApiCalling from "./ApiCalling";
it("API Testing ", async function () {
  const Response = ApiCalling();
  console.log("API Response in Testing Component ", Response);
});
