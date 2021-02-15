describe("Home test", () => {
  it("should get title", () => {
    cy.visit("/");
    cy.contains("Welcome to Your Vue.js App");
  });
});
