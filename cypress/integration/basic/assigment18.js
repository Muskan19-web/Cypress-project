// cypress/integration/iframeTest.spec.js

describe('Handle iframe on the page', () => {
    it('Switch to iframe and interact with the text editor', () => {
        // Visit the page with the iframe
        cy.visit('https://the-internet.herokuapp.com/iframe');

        // Get the iframe and wrap its body
        cy.get('#mce_0_ifr')
            .its('0.contentDocument.body') // Access the body inside the iframe
            .should('not.be.empty') // Ensure the body is loaded
            .then(cy.wrap) // Wrap the body so Cypress commands can be used

            // Interact with the text area inside the iframe
            //.find('#tinymce').clear()
             // Clear the existing text
            .type('Hello, this is a test message!'); // Type the new message

       
       
        
           

        // Optionally interact with elements outside the iframe
        // For example, click on the "Elemental Selenium" link
        cy.contains('Elemental Selenium').click();
    });
    it('Double Click Test', () => { // Test case to perform a double-click action
          // Visit the jQuery double-click demo page
        cy.visit('https://api.jquery.com/dblclick/');
        //cy.xpath('//*[@class="dbl"]').should('be.visible').dblclick();
         // Check if the text "Double click the block" is visible on the page
        cy.contains('Double click the block').should('be.visible','Double click the block');
    });
    it('Right click', () => {// Test case to perform a right-click action
        cy.visit('https://the-internet.herokuapp.com/context_menu');   // Visit the page with a context menu
        cy.get('#hot-spot').rightclick();// Perform a right-click on the element with ID "hot-spot"
        cy.on('window:alert',(aler1)=>{ // Handle the alert that appears after the right-click
            expect(aler1).to.contains('You selected a context menu');   // Verify the alert contains the expected text
        })

        
    });
    it('Mouse Hover', () => { // Test case for mouse hover action
        cy.visit('https://the-internet.herokuapp.com/hovers') // Visit the page with hoverable elements
        cy.xpath('//*[@id="content"]/div/div[1]').trigger('mousehover'); // Hover over the first image (XPath selector)
        cy.contains('View profile').click({force:true}) // Click the "View profile" link that appears after hovering (force the click)
        cy.visit('https://the-internet.herokuapp.com/hovers')// Hover over the second image
        cy.xpath('//*[@id="content"]/div/div[2]').trigger('mousehover')// Click the second "View profile" link
        cy.contains('View profile').click({force:true})

        
    });
    it('Drag & Drop', () => {// Test case for drag-and-drop action
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')  // Visit the page with the drag-and-drop functionality

        // Simulate dragging Column A to Column B
        cy.get('#column-a').trigger('mousemove').trigger('mouseup',{force:true});
        cy.get('#column-b').trigger('mousemove').trigger('mouseup',{force:true});
        

        
    });
});
