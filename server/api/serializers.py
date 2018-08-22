from rest_framework import serializers
from .models import YoutubeVideo

# Create your serializers here.


class YoutubeVideoSerializer(serializers.ModelSerializer):
    """
    Serializer class of youtube video model.
    """
    class Meta:
        model = YoutubeVideo
        read_only_fields = ("link", "vote", )

