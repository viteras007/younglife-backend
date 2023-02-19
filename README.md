# Steps to run

Create a Volume to docker storage
1 - docker volume create <VOLUME NAME>

After already run container of mongodb, run line below to execute
2 - docker run -d -p 27017:27017 -v <VOLUME NAME>:/data/db --name mongodb mongo
