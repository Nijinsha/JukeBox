# JukeBox
> A challenge task from Entri.me

## Prerequisites

* Python 3.6.*
* pipenv python package (`pip install pipenv`)
* Node 8.* (with npm)
* Create a slack workspace.
    1. Create a channel if none available.
    2. Create an app, add it to channel and obtain API token.
    3. Now get the channel ID from slack URL.
        1. Open the slack the workspace in a web browser.
        2. Click on the preferred channel.
        3. Get the channel ID from the URL.
        ```
        https://example-workspace.slack.com/messages/CC90T1PTP/
        CC90T1TP in the url is the channel ID

        ```
 * Add some youtube videos to the slack channel.
        

## Run Instructions


1. Open terminal.
2. Clone the repository.
3. Change directory to server.
    1. Run `pipenv install` followed by `pipenv shell`.
    2. Run `python manage.py migrate` followed by python manage.py runserver.
    3. The server will be running at `localhost port 8000` successfully.
4. Change directory to client.
    1. Run `npm install` followed by `npm start`.
    2. The client will be running at `localhost port 3000`. 

