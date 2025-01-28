Task Assignment: Building a Humble Superhero API
Background
At our company, we believe that every team member is a superhero in their own unique way-solving problems, building amazing things, and helping others along the journey. To celebrate this, your task is to build a "Humble Superhero API".

Objective
Create a simple API that lets users:
Add a new superhero, specifying their name, superpower, and a "humility score" (e.g., a rating out of 10 that shows how humble they are).
Fetch the list of superheroes, ordered by their humility score in descending order.
Requirements

Backend:
Use NestJS or any Node.js framework you're comfortable with.
Store the superhero data in a simple in-memory database (e.g., an array).
Create two endpoints:
POST /superheroes: Add a new superhero (name, superpower, and humility score required).
GET /superheroes: Fetch the list of superheroes sorted by humility score.

Frontend (Optional):
If you have time, create a quick React interface where users can add superheroes and see the sorted list in real-time.

Bonus Points:
Add validation to ensure the humility score is a number between 1 and 10.
Write a brief test using Jest for one of the endpoints.

Evaluation Criteria
Technical Skills: Code quality, simplicity, and functionality.
Team Player Attitude: Write a brief note (in comments or README) on how you'd collaborate with a teammate to improve or expand this task.
Eagerness to Learn: Include a small section in your README titled "If I had more time," and mention what you’d improve or explore further.
Humility and Communication: Clear and thoughtful explanations in comments and README.

---

Team player Attitude:
Firstly discuss it together and agree upon how we should go about it. divide and conquer or in tandem. Giving each other hints and suggestions. Using tools like Scrum.
Communicate often to make shure everything is in order and working.

---

If I had more time:
Backend - improve reusability and add a service folder to handle the get and post. More validations and error handling to make shure the page works correctly.

Frontend - improve reusability and add a component folder to split up the page (e.g. superheroes table and add superhero). add a modules folder with an actions file that handles the GET and POST. Add and use a .env.local to hide APIs.

Probably clean it up much more since I used "npx express-generator --view=ejs" to get a quick start to create the backend. And "npx create-next-app@latest" for the frontend. This helps with scaling and readability since it can be build upon quite easily and is already split up into folders.

---

Intructions on use

1. Download the reposotory.
2. Open in vscode or other program.
3. Open Backend in a new terminal and type "npm i" and then "npm audit fix --force" and lastly "npm run start". (open http://localhost:3000/superheroes to see it running).
4. Open frontend in a new terminal and type "npm i" and then "npm run dev". (open http://localhost:3001/superheroes to see the page).

Here you can see the page and add superheroes

To test
Open a new Backend terminal and while the server is still running type "npm run test". (1 test is supposed to pass)
