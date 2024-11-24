# Github commit bot

This is a simple python script so that you can create commits, in the past.
Useful for when your using a new machine, and you didnt commit under your username.

## Setup

Follow these instructions to get the script up and running:

1. For linux to install python3:
   -  sudo apt install python3

2. Set up a virtual environment in python3:
   - python3 -m venv venv

3. Activate the virtual environment:
   - source venv/bin/activate

4. In the terminal copy and paste:
   - pip install GitPython pytz

5. Set the remote repository as the repo you intend to commit to:
   - git remote add origin https://github.com/your-username/your-repo.git

6. Specify your !local! repository location inside the script:
   -  "/home/user/repos/this-project"

7. Finish off by running the script:
   - python3 bot.py


## Note

I am not taking credit for making this script, I got the idea from 
https://github.com/RickyBhatti

I just modified the script

