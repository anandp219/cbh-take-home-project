# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Assumptions:

1. Facilities, Agents, and Shifts are SQL table
2. The same agent can work for multiple facilities.

Tickets

0. Ask the facility to provide an excel sheet with the matching of the agent metadata and the custom id they want for the same agent. 
	Acceptance criteria :- Excel sheet is provided by each of the facility.
	Time/effort :- This task can done in parallel with other tasks and needed by step 3. This task requires communicating with all the facilities via email or other comm means and asking them for a reponse in excel sheet. 

1. Create a db for the custom id to database id matching. It will contain 3 columns, facility id, agent id and the custom id for agent for that facility with primary key being the facility id and agent id. Create an ORM and DAO object for the same. 
	Acceptance criteria :- The db has been created in all the env instances. The ORM for the db is done. Passes basic fetch and set test for db
	Time/effort :- 1 week SWE job including implementation and testing. 

2. Create a custom script which takes the data from the facility in excel sheet and update the db. This can be done with a fake data. 
	Acceptance criteria :- The script works in the non prod envs. It takes the data from the fake excel sheet and fills the database created in step 1.
	Time/effort :- 2 days SWE job including implementation and testing. 

3. Update the generateReport API to have the custom id in the response. For this step generateReport is updated to fetch the custom id. In the getShiftsByFacility when we are fetching the shifts with the agent's metadata, we use the metadata and the facility id to fetch the custom id of the agent. Update the JSON/Prooto response and the PDF.
	Acceptance criteria :- generateReport returns the custom id for the agents for the facility
	Time/effort :- 2 week SWE job including implementation and testing. 
