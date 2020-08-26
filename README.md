# UNDER DEVELOPMENT

---

# React Demo

Example React SPA with authorization and user management. 

Contains mocked Json Server for demonstration purposes, with two notable differences from real API:
- There is only one hard coded auth user:  
   **login:** test@test.com  
   **pass:** test
   
- passwords in users table are stored as strings (goes without saying that passwords are hashed in real API)

## Install

Download or clone this repo, then:

`npm install`

Run in development mode with react-scripts and json server running concurrently:

`npm run start:mock`

React app will run on standard localhot:3000, while json server will run on localhost:8000

## Licence
MIT
