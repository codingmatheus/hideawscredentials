# Hide AWS Credentials
Code to mask the credentials from the AWS Console

# Requirements:
## Install Tamper Monkey on your browser. This is an extension available for all major browsers and you should be able to easily find it on the browser's add-ons/extension stores.
## You may need to turn off content security policies on your browser otherwise the script won't work. 
### Firefox:
  1. on the URl bar type about:config
  2. search for security.csp
  3. change the value of security.csp to False
  4. reload the AWS Console page and you should see the script working if it wasn't before (no need to close and reopen the browser)

## Steps

# Step 1
Download and install TamperMonkey on your browser: https://www.tampermonkey.net/

# Step 2
Click on the extension icon in your browser then choose "Create a new script..."
[Screenshot 1](assets/screenshots/hideawscredentials_screenshot1.PNG)

# Step 3
Copy/paste the contents of hide_aws_credentials.js into the TamperMonkey script window replacing the default generated code and save

# Step 4
You should now see both the main account info as well as the account details when expanding the menu replaced the word DEMO. 
[Screenshot 2](assets/screenshots/hideawscredentials_screenshot2.PNG)

Personally, I like to have my name and social handle instead of just saying DEMO, so I replace it with Matheus | @codingmatheus. Feel free to experiment :)

