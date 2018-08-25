from django.db import models

# Create your models here.


class YoutubeVideo(models.Model):
    """
    Database to store youtube url and the vote count.

    @member_variables
    link: <string> The link to the youtube video.
    title: <string> The title of the video.
    vote: <int> The number of vot it go.
    """
    link = models.CharField(max_length=12)
    title = models.CharField(max_length=100)
    thumb_url = models.CharField(max_length=50)
    vote = models.IntegerField(default=0)
