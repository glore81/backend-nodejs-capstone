# User Story Template

**As a** registered user,  
**I want to** browse, search, and manage second-chance items,  
**So that** usable household goods can be reused and kept out of landfills.

### Acceptance Criteria
- Given the user visits the home or search page
- When the user selects a specific category or enters a search query
- Then the matching items are retrieved and displayed in real time

### Details and Assumptions
- The user is authenticated via JWT tokens for performing protected actions.
- Items are retrieved from and persisted into the MongoDB collection.
- Sentiment analysis microservice evaluates user comments upon submission.