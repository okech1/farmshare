FarmShare
FarmShare is a web application designed to connect farmers with the market, making it easy to rent farm equipment and land. Our platform enhances efficiency and productivity in the agricultural sector by simplifying the process of listing, searching, and renting agricultural resources.

Table of Contents
Introduction
Features
Architecture
APIs
Data Model
User Stories
Mockups
Installation
Usage
Contributing
License
Introduction
FarmShare aims to streamline the agricultural rental process by providing a platform where users can create and manage listings for farm equipment and land. Whether you're a farmer looking to rent equipment or a service provider offering your resources, FarmShare makes the connection seamless and efficient.

Features
User Registration & Authentication: Securely manage user accounts with registration and login features.
Farm Listings: Create, update, and manage farm equipment and land listings.
Search & Filter: Find the perfect farm equipment and land with advanced search and filter options.
Messaging System: Communicate directly with other users through our built-in messaging system.
Architecture
The FarmShare application follows a client-server architecture:

Frontend: Built with HTML, CSS, and JavaScript, providing a user-friendly interface.
Backend: Developed using Node.js and Express, handling API requests and database interactions.
Database: MySQL database to store user data, listings, and messages.
Diagram
css
Copy code
[Client] <---> [Express Server] <---> [MySQL Database]
APIs
User APIs
/api/register
POST: Register a new user.
/api/login
POST: Authenticate a user.
Listing APIs
/api/listings
GET: Retrieve all listings.
POST: Create a new listing.
/api/listings/:id
GET: Retrieve a specific listing by ID.
PUT: Update a specific listing by ID.
DELETE: Delete a specific listing by ID.
Messaging APIs
/api/messages
POST: Send a message.
/api/messages/:userId
GET: Retrieve messages for a specific user.
Data Model
Users
id: INT, Primary Key, Auto Increment
name: VARCHAR(255)
email: VARCHAR(255)
password: VARCHAR(255)
Listings
id: INT, Primary Key, Auto Increment
title: VARCHAR(255)
description: TEXT
price: DECIMAL
location: VARCHAR(255)
userId: INT, Foreign Key
Messages
id: INT, Primary Key, Auto Increment
senderId: INT, Foreign Key
receiverId: INT, Foreign Key
content: TEXT
timestamp: TIMESTAMP
User Stories
As a user, I want to register and create an account so that I can list my farm equipment and land.
As a user, I want to log in to my account so that I can manage my listings.
As a user, I want to search and filter listings so that I can find the equipment or land I need.
As a user, I want to send and receive messages so that I can communicate with other users.
As an admin, I want to manage all listings and users so that I can ensure the platform runs smoothly.
Mockups



Installation
To run the FarmShare application locally, follow these steps:

Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/farmshare.git
cd farmshare
Install dependencies:

sh
Copy code
npm install
Set up the database:

Ensure MySQL is installed and running.
Create a new database:
sql
Copy code
CREATE DATABASE farmshare;
Configure environment variables:

Create a .env file in the root directory with the following content:
env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=farmshare
Run database migrations:

sh
Copy code
npm run migrate
Start the application:

sh
Copy code
npm start
Access the application:

Open your browser and go to http://localhost:3000.
Usage
Register: Create a new account.
Login: Access your account.
Create Listing: Add new farm equipment or land for rent.
Search Listings: Find available resources.
Send Messages: Communicate with other users.

