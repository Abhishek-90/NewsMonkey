
<h1>Steps to get your API KEY</h1>

Step 1: Go to [News API](https://newsapi.org/)

Step 2: Sign up and Go to your profile

Step 3: Copy your API Key


<h1>Steps to run NewsMonkey on Your local Machine.</h1> 

Step 1(optional): Fork the repository.

Step 2: Open your terminal and Clone the repository into your local machine
        'git clone https://github.com/Abhishek-90/NewsMonkey.git'

Step 3: cd NewsMonkey

Step 4: Run the following command into your terminal
        npm i (Make sure you have NodeJS installed else install Nodejs and then run this command)

Step 5: Create a file name 'Secret.js' in NewsMonkey -> src -> Components folder

Step 6: Copy and paste below code into Secret.js file 
        
        const API_KEY = '% Your API KEY %'; (Put the API KEY you got in above step)

        export {API_KEY};

Step 7: Save above file.

Step 8: Inside terminal go to root folder of the project i.e. NewsMonkey and copy paste below command
        npm run start

Step 9: Go to http://localhost:3000 or the link the terminal gives you.


<h3>Happy News Reading!</h3>
        