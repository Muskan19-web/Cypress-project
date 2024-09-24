describe('ebay test', () => {
    it('Task 1 Test', () => {
        // Task 1 - open eBay  webiste by entering the URL
        // First visit the application
        cy.visit('https://www.ebay.com/n/all-categories');

     
        
    });
    it('Task 2', () => {
        cy.wait(2000);
        // Task 2 - Locate and click on advanced
        cy.visit('https://www.ebay.com/n/all-categories');
        cy.get('#gh-as-a').click();// Click on advanced
        cy.wait(1000);

        // Task 3
         //cy.xpath('/html/body/div[2]/div/main/form/fieldset[1]/div[5]/button').click({force:true})
        //cy.get('#gh-shop-a').click().select('Collectibles').should('have.value','Collectibles');
        
    });
    it('Task 4', () => {
        cy.wait(2000);
        // Task 4 Click on using advanced search
        cy.visit('https://www.ebay.com/n/all-categories');
        cy.get('#gh-as-a').click();// Click on advanced
        cy.xpath('/html/body/div[2]/div/main/form/fieldset[1]/div[5]/span/a[2]').click();

      
        
    });
    it('Task 5', () => {
        cy.wait(2000);

        // Task 5
        cy.visit('https://www.ebay.com/n/all-categories');
        cy.get('#gh-as-a').click();// Click on advanced
        cy.xpath('/html/body/div[2]/div/main/form/fieldset[1]/div[5]/span/a[2]').click();
        cy.go('back');
        
    });
    it('Task 6', () => {
        cy.wait(2000);
        cy.visit('https://www.ebay.com/n/all-categories');
        //cy.get('#gh-as-a').click();// Click on advanced
       // cy.xpath('/html/body/div[2]/div/main/form/fieldset[1]/div[5]/span/a[2]').click();
        //cy.get('#gh-title').should('not.have.text','Customer Service');
       // cy.go('back');
        cy.xpath('//*[@id="gh-ac"]').type('laptop');
        cy.get('#gh-btn').click();

        
    });
    it('Task 7', () => {
        cy.wait(2000);
        cy.visit('https://www.ebay.com/n/all-categories');
        cy.get('#gh-btn').click({force:true});
        cy.xpath('//*[@id="ebay-motors"]/div/div[1]/div/a').click({force:true})
        
    });
    it('Task 8', () => {
        // Task 8 Enter randome item and find not matches found
        cy.wait(2000);
        cy.visit('https://www.ebay.com/n/all-categories');
        cy.xpath('//*[@id="gh-ac"]').type('lkdjf');
        cy.get('#gh-btn').click();

        // Task 9 - Close the browser after assertion cypress will close the browser automatically.
        

        
    });
    
});