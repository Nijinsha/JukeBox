from django.db.models import F
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, response
from .serializers import YoutubeVideoSerializer
from .models import YoutubeVideo, Slack
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
    slack = Slack.objects.all()
    if slack:
        slack.delete()
    Slack.objects.create(token=slack_token, channel_id=channel_id)
    get_video_links(slack_token=slack_token, channel_id=channel_id)
    return response.Response({"success": "true"})


class YoutubeVideoListView(generics.ListAPIView):
    """
    List view class to list all the youtube links and its votes.
    """
    permission_classes = (permissions.AllowAny, )
    queryset = YoutubeVideo.objects.all()
    serializer_class = YoutubeVideoSerializer


@api_view(['GET', ])
def vote(request, uid):
    """
    View function to handle voting on videos.
    :param request: Request object.
    :param uid: uid(pk) of the video from url parameter.
    :return: Response object.
    """
    YoutubeVideo.objects.filter(id=uid).update(vote=F('vote')+1)
    return response.Response({"uid": uid})


@api_view(['GET', ])
def is_config_available_view(request):
    """
    View function to check whether an older configuration exists.
    :param request: Request object.
    :return: Response object.
    """
    available = False
    slack = Slack.objects.all()
    if slack:
        available = True

    return response.Response({"available": available})