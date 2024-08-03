# Integration-Testing-using-Postman

## Problem Scenario
Create test cases (Positive and Negative cases under each scenario discussed in class, at least 15 or more) in a standard test format for dmoney rest API and upload to google drive based on this scenario: (10)
1. Admin creates an agent and random 2 customers. Admin email: admin@roadtocareer.net/ Pass: 1234
2. Deposit some money from SYSTEM account to the agent. System account: SYSTEM (range 10 tk to 10000 tk)
3. Agent deposit to any of 1 customer
4. Check agent balance
5. Then withdraw any amount by the customer from the agent (range 10 tk to 10000 tk)
6. Then the customer checks balance
7. Then send money to the other customer
8. Then from the another customer payment to any merchant (create a merchant account)
9. Then the second customer will check both balance and statement
10. Then the merchant will check his own balance

You will find API endpoints and details are here:https://dmoney.roadtocareer.net/api-docs/
Partner Key: X-AUTH-SECRET-KEY: ROADTOSDET

## Technology Used:
1. Postman
2. Newman

## Pre requisite:
1. NodeJs
2. Newman
3. Newman-html-extra

## To Generate Report:
- ``` git clone ```
- ``` npm i ```
- add the .env file(on request)
- ``` npm test ``` or ``` node report.js ```
## Documentataion

### API Documentation
https://documenter.getpostman.com/view/37278077/2sA3rwMZMC

### Bug and Improvement Report link
https://docs.google.com/spreadsheets/d/17v416-62qnJdBeDm81nUxUNrlsx68QHpq3jgy5pmzw0/edit?usp=sharing

### Newman Report
![image](https://github.com/user-attachments/assets/211cf32f-e63c-4fda-a339-80a0532ff3d7)

