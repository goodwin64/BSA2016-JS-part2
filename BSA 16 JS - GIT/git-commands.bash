# [begin] task 0: preparation 
git init  # (current branch - "master")


# make 2 commits in master
subl index.html  # create index.html
git add index.html
git commit -m "Initial commit: add basic index.html"
subl index.html  # change index.html
git add index.html
git commit -m "0-1: 2nd commit in master before branching off"


# create branch "develop" and make there 2 commits:
# 	1) add gallery template 2x3 images
# 	2) extend gallery template (images + their titles)
git checkout -b develop
subl gallery.html  # fill gallery.html
git add gallery.html
git commit -m "0-2: add gallery template"
subl gallery.html  # change gallery.html
git add gallery.html
git commit -m "0-2: add gallery template"


# create branch "develop-feature1" and make there 1 commit:
# 	*) append 1 gallery element to second row (now: 3 images + 4 images)
git checkout -b develop-feature1
subl gallery.html  # change second row
git add gallery.html
git commit -m "0-3: second row in gallery has 4 images"
git checkout develop # it's my mistake, I forgot this action, so "develop-feature2" is a "develop-feature1" child, not "develop"


# create branch "develop-feature2" and make there 2 commits:
# 	1) add images and their paths to gallery.html
# 	2) add css rules
git checkout -b develop-feature2
subl gallery.html  # add paths to images
git add gallery.html images/*
git commit -m "0-4: add images and their paths to gallery"
subl gallery.html  # add link to css
subl css/style.css  # fill style.css
git add gallery.html css/style.css
git commit -m "0-4: add css-rules to gallery elems"


# merge df1 + df2, when conflict - use OURS (dev-f1) branch
git merge -Xours develop-feature2


# task 0-1
git checkout develop
git merge develop-feature1
# task 0-2
git checkout master
git merge develop
git tag -a v1.0 -m 'release 1'
# task 0-3
git branch -d develop-feature2
git push origin --delete develop-feature2


# task 1-1
git log develop-feature1 --pretty=format:"%s [%an]" --since="3 hours ago" --date-order
# task 1-2
# IDK how to extract task number :(
# I found only this command, it outputs the first lexema (task number):
# git log --format=%s | cut -f 1 -d ' ' | sed 's/\(.*\)/\1/'
git log master develop --pretty=format:"%cd: %s [%an]" --date-order --graph --date=short


# TODO: other tasks
