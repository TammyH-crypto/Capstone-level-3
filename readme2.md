echo "# capstone-projectmv3ybsyp0ookwpbbeafu5olmfvxuglkh3u" >> README.md
git init
git add README.md
git config user.name "TammyH-crypto"
git config user.email "tmhiggins1986@gmail.com"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TammyH-crypto/capstone-projectmv3ybsyp0ookwpbbeafu5olmfvxuglkh3u.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push -u origin main


//add changes made to read.me file
git add README.md

//add changes to all files
git add .

//attach a memo to the save point
git commit -m "changes made to readme files"

//sync changes to github
git push

//for use with vscode to pull files from github
git pull --set-upstream origin main 

//copy the files from github with default parameters
git pull

//view the value of origin
git remote -v

//assigns a url to the origin variable
git remote add origin

//change the value of my origin file
git remote set-url origin https://github.com/TammyH-crypto

//activates git source control
git init

//gets current version of git
git --version

//renames current branch to main
git branch -M main
