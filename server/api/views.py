from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, response
from .serializers import YoutubeVideoSerializer
from .models import YoutubeVideo
from .extras import get_video_links


# Create your views here.


@api_view(['POST', ])
def slack_config_view(request):
    """
    Function to get the slack configurations.
    :param request: Request Object.
    :return: Response
    """
    slack_token = request.data['token']
    channel_id = request.data['channel_id']
    get_video_links(slack_token=slack_token, channel_id=channel_id)
    return response.Response({"success": "True"})


class YoutubeVideoListView(generics.ListAPIView):
    """
    List view class to list all the youtube links and its votes.
    """
    permission_classes = (permissions.AllowAny, )
    queryset = YoutubeVideo.objects.all()
    serializer_class = YoutubeVideoSerializer

