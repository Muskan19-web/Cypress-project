describe('Test for driven', () => {
    //define before hook
    before(() => {
        
             // code to connect with the external file -  example.json
            cy.fixture('example').then((data)=>{
                //  // intialize my  data, i have to  make it a  global instance
                globalThis.data=data //This  is first block  we have to write
            })
        });
    it('Test', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type(data.username);
        cy.get('#password').type(data.password);
        cy.get('#login').click();
        
    });
            
       
    
    
});