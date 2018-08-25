from rest_framework import serializers
from .models import YoutubeVideo

# Create your serializers here.


class YoutubeVideoSerializer(serializers.ModelSerializer):
    """
    Serializer class of youtube video model.
    """
    class Meta:
        model = YoutubeVideo
        fields = ("id", "link", "title", "thumb_url", "vote",)
        read_only_fields = ("id", "link", "title", "thumb_url", "vote", )

