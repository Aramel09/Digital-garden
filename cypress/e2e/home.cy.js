it("shows a list of 4 thoughts", () => {
  cy.intercept("/thoughts", {
    fixture: "thoughts.json",
  });
  cy.visit("http://localhost:5173/");
  cy.get("[data-cy=thought-list] li").should("have.length", 4);
});

describe("Home 🏠", () => {
  it("shows a loader", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy=loading]");
  });
});

it("shows just thoughts for the clicked author", () => {
  cy.intercept("/thoughts", {
    fixture: "thoughts.json",
  });
  cy.visit("http://localhost:5173/");
  cy.contains("user2click").click();
});
