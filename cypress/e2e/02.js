// 📜 In this one you'll be using the following new built-in commands:
// - type: https://docs.cypress.io/api/commands/type.html
// - url: https://docs.cypress.io/api/commands/url.html
// - window: https://docs.cypress.io/api/commands/window.html
// - its: https://docs.cypress.io/api/commands/its.html
//
// 📜 You'll also probably want to use the following new commands from cypress-testing-library:
// - getByText: https://testing-library.com/docs/dom-testing-library/api-queries#bytext
// - getByLabelText: https://testing-library.com/docs/dom-testing-library/api-queries#bylabeltext
// - getByTestId: https://testing-library.com/docs/dom-testing-library/api-queries#bytestid

describe('anonymous calculator', () => {
  it('has the right title', () => {
    cy.visit('/')
      .title()
      .should('equal', 'React Calculator')
  })

  it('can make calculations', () => {
    cy.visit('/')
      .getByText(/^1$/)
      .click()
      .getByText(/^\+$/)
      .click()
      .getByText(/^2$/)
      .click()
      .getByText(/^=$/)
      .click()
      .getByTestId('total')
      .should('have.text', '3')
  })
})

// 🐨 create another describe block here for "registration"
// 🐨 create an it block called "should register a new user"
// 🐨 create a user object with a username and password (make it up)
// 💰 Try this: `const user = {username: 'chucknorris', password: 'ineednopassword'}`

// 🐨 Then visit the app and do the following actions
// 1. Click the register link
// 2. Get the username input by the label "Username" and type `user.username`
// 3. Get the password input by the label "Password" and type `user.password`
// 4. Get the submit button by it's text and click it.
// 5. Get the url (💰 cy.url()) and assert that it should equal `${Cypress.config().baseUrl}/`
// 6. Get the window (💰 cy.window()) and assert that its localStorage.token is a string (💰 cy.its('localStorage.token'))
// 7. Get the 'username-display' element by it's data-testid (💰 cy.getByTestId('username-display')) and verify that it should "have.text" user.username

// 💯 In our simple example, registering a user with the same username every
// time is fine because our backend is very basic and doesn't even validate
// username uniqueness. But it would definitely cause issues in a more
// real-world scenario. So instead of hard-coding the user here, try to generate
// the user's information.
// You could use `Math.random()` yourself, or you could use the `test-data-bot`
// package which we have installed already.
// 📜 https://github.com/jackfranklin/test-data-bot