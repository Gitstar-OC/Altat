# Altat

###  Inspiration
I thought about what to make for days and then I see a dataset which moves my mind, so I thought why not to make something about it and help people make aware of how much CO2 is released by each of the items you eat and consume. So I created this eco friendly app

### What it does
It has been trained with nearly 216 global dishes that are the most popular and it gives the option to choose better option than the food item while keeping the protien and fats in mind. This website compares all of the data that has been created in 2022 - 2023 co2 food survery.

### How I built it
I started with training and getting good and proper output using jupyter notebooks first and tested the code. Then I developed the frontend with nextjs app and created 3 components the searchbox, the results page and pagination along with indexing. For the backend I created a basic flask app as I just havae to transfer small amount of data. I later moved the data from jupyter notebook to normal python file as it was helpful. I then tested all of the apis and backend using curl to make sure that everything is working, I did same for the frontend which took some time.

Later for the hosting part I hosted the frontend on Vercel and the Backend on Render.

### Challenges we ran into
While creating this project, I ran into various challenges which includes creating pagination for backends in different language, while easy if both are in javascript it takes a significant amount of time to do the same thing if the backend is in different language than the frontend. The hardest challenge I ran into is debugging the larger things and Items like beef which returned the most numbers of alternatives and due to it, what was happening is it was not showing the content when clicked on it, it took me more than 6 to 7 hours to debug this and after checking the networks tab, I understand that the data packets are way too big for some of the items as compared to others, so I used pagination and lazy loading to solve this issue.

### Accomplishments that we're proud of
I knew backend a little bit in production before this, to host this project which haave backend is a great achievement for me

### What we learned
I learned more about cURL concepts after this which I was unaware before doing this project, learned about backend deployment although I have done it on vercel for javascript and typescript, I hosted it for flask this time on another app.

###  What's next for this web app (deprecated) 
I will make it way more useful using unsupervised learning and logistic regression and add more data sets and other examples from the huge data I have trained and gained from various websites. I will make it default alternative for people to go while searching for healthy options.

Built With
- flask
- javascript
- nextjs
- pandas
- python
- tailwind

--- 

Steps to try it - 

## How to run the code 

- clone the repository first and move into it
- For `Frontend` run `npm install` and then  `npm run dev` this will install all the dependencies. Note that you can also use `yarn` or `pnpm` for this
- For `Backend` move to backend and then activate environment using `python3 -m venv venv`
- Activate it on mac using `source venv/bin/activate` or on windows using `venv\Scripts\activate`
- Then install all of the backend dependencies with this commmand `pip install -r requirements.txt`
- After than you can start the backend with `flask run`. 
