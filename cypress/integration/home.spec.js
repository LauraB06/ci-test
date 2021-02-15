describe("Home test", () => {
  it("should get title", () => {
    cy.visit("http://localhost:8080");
    cy.contains("Welcome to Your Vue.js App");
  });
});
