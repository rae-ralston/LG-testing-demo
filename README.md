# Testing

## Types of Testing

### UNIT TESTING
![unit testing](https://martinfowler.com/bliki/images/unitTest/sketch.png)

Unit testing is the practice of testing small pieces of code, typically individual functions, alone and isolated. If your test uses some external resource, like the network or a database, it’s not a unit test. These are usually relevant to engineering and beneficial to the product because the users will see fewer errors.
- great for preventing regressions – bugs that occur repeatedly


### INTEGRATION TESTING
![Integration testing](http://istqbexamcertification.com/wp-content/uploads/2012/01/What-is-IntegrationTesting.jpg)

As the name suggests, in integration testing the idea is to test how parts of the system work together – the integration of the parts. Integration tests are similar to unit tests, but there’s one big difference: while unit tests are isolated from other components, integration tests are not. For example, a unit test for database access code would not talk to a real database, but an integration test would.
- useful for situations where unit testing is not enough


### FEATURE TESTING
![bug or feature?](https://i.pinimg.com/736x/e6/97/cd/e697cd3fb8cea4f0a3a92657bd084987--software-bug-software-testing.jpg)

Features are changes that add new functionality or significantly modify existing functionality. Feature testing tests how your new code interacts with existing systems. In real-life scenario, these tests are responsible for the product release cycle and are measured by things like users using the functionality in unexpected ways.


### END TO END TESTING
![end to end testing](http://qatestlab.com/assets/End-to-end-Testing-1.png)

End-to-end testing is a technique used to test whether the flow of an application right from start to finish is behaving as expected. The purpose of performing end-to-end testing is to identify system dependencies and to ensure that the data integrity is maintained between various system components and systems.
The entire application is tested for critical functionalities such as communicating with the other systems, interfaces, database, network, and other applications.



#### Sources
- [What are Unit Testing, Integration Testing and Functional Testing?](https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/)
- [What is the difference between feature testing and functionality testing](https://sqa.stackexchange.com/questions/9818/what-is-the-difference-between-feature-testing-and-functionality-testing)
- [What is End-to-End Testing?](https://www.tutorialspoint.com/software_testing_dictionary/end_to_end_testing.htm)
