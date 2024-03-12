# Bloggy - Personal/Community Blog

## Preview URL

https://bloggy.vercel.app/

## Description

Welcome to the Bloggy Webapp!  
Your digital sanctuary for expression and exploration. Unleash your thoughts, share your stories, and connect with a community of diverse voices on our dynamic blog platform.

## Why?

Bloggy is essential for those seeking a personalized and inclusive space to share experiences, insights, and passions. In a world filled with noise, Bloggy empowers individuals to amplify their voices, fostering genuine connections, and providing a platform for authentic expression and meaningful storytelling.

## Quick Start

Get the project up and running on your local machine with these steps:  
  
1. **Clone the repository:**  
   git clone https://github.com/your-username/bloggy-nextjs.git  

2. **Navigate to the project folder:**  
   bloggy-nextjs  
   
4. **Install dependencies:**  
   npm install  
   
5. **Set up MongoDB:**  
   Create a MongoDB database and obtain the connection URL.  
   Create a .env file in the root of the project and add your MongoDB connection URL:   
   MONGODB_URI=your-mongodb-connection-url  

7. **Setup Providers:**  
   You will have to manually setup providers with OAuth accessibility like Google/Github. You'll need Provider Secret and ID.  
   Your .env file should look like something like this  
   MONGODB_URI=your-mongodb-connection-url  

  AUTH_SECRET=RANDOM_UNIQUE_SECRET (Generate using: openssl rand -base64 32)    
  AUTH_URL=http://localhost:3000/api/auth  
    
  GITHUB_ID=GET FROM GITHUB DEVELOPMENT SECTION  
  GITHUB_SECRET=GET FROM GITHUB DEVELOPMENT SECTION  
    
  GOOGLE_ID=GET FROM GOOGLE CLOUD CONSOLE  
  GOOGLE_SECRET=GET FROM GOOGLE CLOUD CONSOLE  
  
  DOMAIN=http://localhost:3000  

8. Next step would be getting you EmailJS API, register and get API key.
   NEXT_PUBLIC_SERVICE_ID=service_id  
   NEXT_PUBLIC_TEMPLATE_ID=template_id  
   NEXT_PUBLIC_USER_ID=user_id  

9. **Run the development server:**  
   npm run dev  

Visit http://localhost:3000 in your web browser to interact with the Bloggy website.    

NOTE: if any problem with getting id or secret keys, connect with me, I'll be glad to help.

## Usage and Features  

**User Authentication:**  
Sign up or log in using GitHub, Google, or custom credentials to access the task manager platform securely.  

**CRUD Operations:**  
Create new blog posts, delete posts as needed. Or if you're an admin, you can create as many users as you want.

**Responsive Design:**  
Enjoy a seamless user experience across various devices and screen sizes. The application is designed to be visually appealing and functional on desktops, tablets, and mobile devices.  

**Personal Profile Section:**  
Dedicated profile section where a user can see all their posts, and create new or delete some.

**Admin Panel:**  
Exclusive admin access to manage users and posts. The admin can create and delete users, as well as oversee the blog management system.  


## Contributing
Thank you for considering contributing to our Task Manager App! Contributions are highly valued and can come in various forms. Here's how you can get involved:  

Bug Reports, Feature Requests, Code Contributions, Testing, Documentation

