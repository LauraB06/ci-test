describe("Home test", () => {
  it("should get title", () => {
    cy.visit("http://e2e.hcp.com:8080");
    cy.contains("Welcome to Your Vue.js App");
  });
});
