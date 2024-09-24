describe('Facebook Application', () => {
    it('Signup', () => {
        cy.visit('https://en-gb.facebook.com/reg/');
        cy.get('[aria-label="First name"]').type('khushi');
        cy.get('#u_0_a_Hx').type('sharma');
        cy.get('[name="reg_email__"]').type('6267021603');
        cy.get('#day').select('19').should('have.value','19');
        cy.get('#month').select('Jun').should('have.value','6');
        cy.get('#year').select('2004').should('have.value','2004');
        cy.contains('Female').checked('be.checked','Female');
        cy.contains('Male').checked('be.checked','Male');
        cy.contains('Custom').checked('be.checked','Custom');
        cy.get('#u_0_n_P6').click();
        

        
    });
    
});