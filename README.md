# Steps to run

Create a Volume to docker storage
- docker volume create <VOLUME NAME>

After already run container of mongodb, run line below to execute
- docker run -d -p 27017:27017 -v <VOLUME NAME>:/data/db --name mongodb mongo
