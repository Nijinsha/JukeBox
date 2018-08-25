from slackclient import SlackClient
from .models import YoutubeVideo
from pprint import pprint
from urllib.parse import urlparse, parse_qs


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
                url_data = urlparse(message['attachments'][0]['from_url'])
                query = parse_qs(url_data.query)
                video = query["v"][0]
                YoutubeVideo.objects.create(video=video,
                                            title=message['attachments'][0]['title'],
                                            thumb_url=message['attachments'][0]['thumb_url'])
