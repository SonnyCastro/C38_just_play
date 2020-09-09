# Just Play

## Intro

Just Play is a user-friendly web app for people who love to be active. Just Play allows people to connect and participate on events of their choosing. Users can look at information posted by Admins and later make a reservation to their desired event. Admins can also create events and incentivize users to participate. This makes it easy, reliable and fun for active people to participate new events and meet new people.

Specific features include: 

- Admin & Player Signup
- Admin creation of Events
- Profile Management 
- Player or Admin Reservations to Events
- Payment transaction for event.
- Players & Admin email notification 
- Admin image hosting.

## Apis & FrameWorks

We intevrated several APIs and frameworks into our site:

- SendGrid for email notifications
- React-Bootstrap for the front end components and design
- Cloudinary to upload and manage user images
- Momentjs for our date formatting
- React-payment-inputs for our payment feature
- To keep track of login information, we used JWT-based token authentication, bcrypt for password hashing, and Passport for user authentication.

## Screenshots
![Home]("./readme_assets/Home.png")
![Events]("./readme_assets/Events.png")
![Create]("./readme_assets/Create.png")
![Login]("./readme_assets/Login.png")
![Reservation]("./readme_assets/Reservation.png")
![Profile]("./readme_assets/Profile.png")
![Reset]("./readme_assets/Reset.png")
![Update]("./readme_assets/Update.png")
![CreateU]("./readme_assets/CreateU.png")

## Installation and Run on Local Machine 

'#clone it
git clone https://github.com/wyncode/C38_just_play.git

#run yarn to install dependencies
yarn install
yarn && cd client && yarn

#start both front and back end severs on one command
cd .. && yarn dev'

## Data
- We used the MERN stack for our app: MongoDB to store data, Express for our server, React for our front end and Node.js as our runtime.
- Used the MongoDB database to store our information. We have three models/collections: events, reservations and users, who can be classified as either admin who can create events or players who can reserve events. Players can reserve spots for events, but can't create events.

## Sample Event: 
![Eve]("./readme_assets/Eve.png")

## Sample User:
![User]("./readme_assets/User.png")

## Sample Reservation:
![Res]("./readme_assets/Res.png")

## Dependencies
| Client Side | Server Side |
| --- | ----------- |
| axios | @sendgrid/mail |
| bootstrap | bcryptjs |
| moment | axios |
| react | cloudinary |
| react-bootstrap | concurrently |
| react-dom | cookie-parser |
| react-router-dom | express |
| react-scripts | express-fileupload |
|  | fs |
|  | jsonwebtoken |
|  | moment |
|  | mongodb |
|  | mongoose |
|  | multer |
|  | passport |
|  | passport-jwt |
|  | react-payment-inputs |
|  | sweetalert |
|  | validator |
|  | fs |

## About Us 
We are a group of Wyncode students who wanted to use this opportunity to showcase what we have learned through this journey. By creating Just Play we created a fun, easy and reliable way to connect and be active with new people.

**Sonny C.** Full Stack Junior Web Developmer from Wyncode's Cohort 38. With a background in hospitality and sports management, I have dived into my new passion about coding. Find my GitHub Porfile [here]!(https://github.com/SonnyCastro)  

**Kendrick S.** Full Stack Junior Web Developer and recent graduate of Wyncode's Cohort 38. With an Associates Degree in Business Administration, a Certification in Business Management, and as an Army Veteran, coding is now my new mission. Find my GitHub Porfile [here]!(https://github.com/skeedrick)

## Deployment 
This project is deployed via heroku at [JustPlay]!(https://justplayy.herokuapp.com/)
