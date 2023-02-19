# Steps

1 - docker volume create <VOLUME NAME>
2 - docker run -d -p 27017:27017 -v <VOLUME NAME>:/data/db --name mongodb mongo
