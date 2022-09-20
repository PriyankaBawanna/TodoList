import Sum from "./sum";
it("when a and b is Number ", () => {
  const result = Sum("8", 2);
  expect(result).toBe("82");
});
