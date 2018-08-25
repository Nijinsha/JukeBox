from django.db import models

# Create your models here.


class YoutubeVideo(models.Model):
    """
    Database model to store youtube video details.

    @member_variables
    video: <string>Video ID of youtube video.
    title: <string>title of the video.
    thumb_url:<string> Url or the thumbnail of the video.
    vote: <int>number of vote the video got.
    """
    video = models.CharField(max_length=10)
    title = models.CharField(max_length=100)
    thumb_url = models.CharField(max_length=50)
    vote = models.IntegerField(default=0)


class Slack(models.Model):
    """
    Database Model to store the slack configuration.

    @member_variables
    token : <string> slack token to access the channel.
    channel_id:<string> channel ID.
    """
    token = models.CharField(max_length=100)
    channel_id = models.CharField(max_length=10)
