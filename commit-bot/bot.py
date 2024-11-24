#it is required to install these packages
import git
from random import randint
from datetime import datetime
import pytz

# use the absolute ROOT of your file in which you are commiting to
repo_dir = "YOUR FILE PATH"
repo = git.Repo(repo_dir)
index = repo.index

# Function to create a commit with a specified past date
def create_commit(past_date):
    # Set timezone (e.g., UTC)
    tz = pytz.timezone("UTC")
    past_date = tz.localize(past_date)  # Make the datetime timezone-aware
    
    commit_message = f"Commit for {past_date.strftime('%B %d, %Y')}"
    
    # Create a dummy file for the commit
    file_path = "YOUR FILE PATH/example_file.txt (or any other random file you want)"
    with open(file_path, "w") as f:
        f.write(f"Commit for {past_date.strftime('%B %d, %Y')}")
    
    # Add the file to the staging area
    index.add([file_path])
    
    # Commit with the specified past date
    index.commit(commit_message, author_date=past_date, commit_date=past_date)

# Function to push commits to GitHub
def push_commits():
    origin = repo.remotes.origin
    origin.push()

# Loop to make 8 commits on October 23rd and 24th
dates = [datetime(2024, 10, 23), datetime(2024, 10, 24)]
for _ in range(8):
    random_date = dates[randint(0, 1)]  # Pick either date
    create_commit(random_date)
push_commits()

print("Commits complete and pushed to github")
