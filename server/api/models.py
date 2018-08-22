from django.db import models

# Create your models here.


class YoutubeVideo(models.Model):
    """
    Database to store youtube url and the vote count.

    @member_variables
    link: <string> The link to the youtube video.
    vote: <int> The number of vot it go.
    """
    link = models.CharField(max_length=12)
    vote = models.IntegerField(default=0)
