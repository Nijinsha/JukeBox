from slackclient import SlackClient
from .models import YoutubeVideo


def get_video_links(slack_token, channel_id):
    """
    Function to get youtube videos from given slack channel.
    :param slack_token: <string> Token to access the slack channel.
    :param channel_id:  <string> Slack channel id.
    :return:
    """
    sc = SlackClient(slack_token)
    messages = sc.api_call("channels.history", channel=channel_id, count=10)
    print(messages)
    if messages['ok']:
        for message in messages['messages']:
            if 'subtype' not in message:
                print(message['text'])
                YoutubeVideo.objects.create(link=message['text'])
