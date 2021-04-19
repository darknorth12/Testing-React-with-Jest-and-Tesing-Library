# Testing-React-with-Jest-and-Tesing-Library

Section 1: Introduction

    React Testing Library is opinionated and encourages certain set of practices.
          1. Test your software the way users actiually use it (not internal implementation)
          2. Find elements by accessibility markers, not test IDs
    
    React Testing Library : provides a virtual DOM for tests
    Jest : Test runer that finds tests, runs tests and determines whether tests pass or fail

    npm test
     ------------------------xxxxxxxxxxxxxxxxxxxxx---------------------------------
    import { render, screen } from '@testing-library/react';
    import App from './App';
    
    test('renders learn react link', () => {
      render(<App />);                                       ------> render creates virtual DOM for argument jsx
      const linkElement = screen.getByText(/learn react/i);  ------> acccess virtual DOM via screen global
      expect(linkElement).toBeInTheDocument();               ------> jest assertion
    });
     ------------------------xxxxxxxxxxxxxxxxxxxxx---------------------------------
     expect(linkElement).toBeInTheDocument();

     expect : jest global, starts the assertion
     linkElement => expect argument : subject of the assertion
     toBeInTheDocument() => matcher : type of assertion; this matcher comes from the Jest-DOM
     matcher argument : refines matcher

     More assertion examples
        expect(element.textContent).toBe('hello');
        expect(elementsArray).toHaveLength(7);
    
    jest-dom
        comes with create-react-app
        src/setupTests.js imports it before each test, makes matchers available
        DOM-based matchers
           examples : toBeVisible() or toBeChecked()
    
    Jest
        React Testing Library helps with
           rendering components into virtual DOM
           searching virtual DOM
           interacting with virtual DOM
        
        npm test runs an npm script that runs Jest in watch mode
    
    Jest Watch Mode
        watch for changes in files since last commit 
        Only run test related to these files
        No changes? No tests

    How does Jest work?
        global test method has two arguments: string description , test function
        the test fails if the test function throw error
            assertions throw error when expectation fails
        No error -> tests pass
    
    TDD (Test-Driven Development)
        Write tests beofre writing code
            then write code according to "spec" set by tests
        "red-green" testing
            Tests fail before code is written
    
    Why TDD?
        Makes a huges difference in how it feels to write tests
           part of the coding process, not a "chore" to do at the end
        More efficient
           Re-run test "for free" after changes
        
    React Testing Libarary Philosophy
        What does Recat Testing Library do?
           Creates virtual DOM for testing
               and ultilities for interacting with DOM
           Allows testing without a browser
        
        Types of Tests
            Unit test : tests one unit of code in isolation
            integration test : how multiple units work together
            funcitonal test : tests a particular function of software (behavior of software)
            Acceptance/ End-to-end (E2E) Tests: use actual browser and server (Cypress, Selenium)

            Note => React testing library encourages functional test
    
    Functional Testing
        different mindset from unit testing

        unit testing => [Isolated: mock dependencies, test internals
                         very easy topinpoint failures
                         further from how users interact with software
                         more likely to break with refactoring]
        
        function testing => [include all relevant units, test behaviour
                             close to how users interact with software
                             Robust tests -less likely to break with refactoring
                             More difficult to debug failing tests]
    
    TDD vs BDD
       BDD involves collaboration between lots of roles developers, QA, business partners, etc.
       defines process for different groups to interact

    Accesibility
       Testing library ecommends fidig elements by accessibility handles
            https://testing-library.com/docs/guide-which-query
        
        create-react-app's example test uses getByText
           ok for non-interactive elements
           better: getByRole
        
        a(anchor tag) has built in role: link => eg. screen.getByRole("link", { name: /learn react/i })
        https://ww.w3.org/TR/wai-aria/#role_definitions

        can't find an element like a screen reader would?
           then your app isn't friendly to screen readers
        
