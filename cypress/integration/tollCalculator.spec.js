// cypress/integration/tollCalculator.spec.js

describe('Toll Calculator Tests', () => {
    beforeEach(() => {
      // Visit your application or the specific page with the Toll Calculator
      cy.visit('/toll-calculator');
    });
  
    it('should calculate toll when the button is clicked', () => {
      // Enter origin, destination, and waypoints
      cy.get('#originInput').type('Philadelphia, PA');
      cy.get('#destinationInput').type('New York, NY');
      cy.get('#waypointInput').type('Bridgewater Township, NJ');
  
      // Click the calculate toll button
      cy.get('#calculateToll').click();
  
      // Check if toll details are displayed on the map markers
      cy.get('.leaflet-marker-icon').should('have.length.greaterThan', 0);
    });
  
    it('should display a tooltip for user education', () => {
      // Click on the education tooltip icon
      cy.get('#educationTooltipIcon').click();
  
      // Check if the education tooltip is displayed
      cy.get('#educationTooltip').should('be.visible');
  
      // Close the tooltip
      cy.get('#closeEducationTooltip').click();
      cy.get('#educationTooltip').should('not.exist');
    });
  
    it('should visualize the calculated route on the map', () => {
      // Assuming there is a button to trigger route visualization
      cy.get('#visualizeRouteButton').click();
  
      // Check if the route polyline is displayed on the map
      cy.get('.leaflet-overlay-pane svg path.leaflet-interactive').should('be.visible');
    });
  
    it('should decode and display polyline coordinates', () => {
      // Assuming there is a button to trigger polyline decoding
      cy.get('#decodePolylineButton').click();
  
      // Check if the decoded polyline coordinates are displayed
      cy.get('#decodedPolylineCoordinates').should('be.visible');
    });
  
    it('should display toll details on markers along the route', () => {
      // Assuming there is a button to trigger toll details display
      cy.get('#displayTollDetailsButton').click();
  
      cy.get('.leaflet-marker-icon').should('have.length.greaterThan', 0);
      cy.get('.leaflet-popup').should('be.visible');
    });
  });
  