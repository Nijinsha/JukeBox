from slackclient import SlackClient
from .models import YoutubeVideo
from pprint import pprint


def get_video_links(slack_token, channel_id):
    """
    Function to get youtube videos from given slack channel.
    :param slack_token: <string> Token to access the slack channel.
    :param channel_id:  <string> Slack channel id.
    :return:
    """
    sc = SlackClient(slack_token)
    messages = sc.api_call("channels.history", channel=channel_id, count=100)
    pprint(messages)
    videos = YoutubeVideo.objects.all()
    if videos:
        videos.delete()
    if messages['ok']:
        for message in messages['messages']:
            if 'attachments' in message:
                print(message['attachments'][0]['from_url'])
                YoutubeVideo.objects.create(link=message['attachments'][0]['from_url'],
                                            title=message['attachments'][0]['title'],
                                            thumb_url=message['attachments'][0]['thumb_url'])
