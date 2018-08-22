from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics
# Create your views here.


@api_view(['POST', ])
def slack_config_view(request):
    """
    Function to get the slack configurations.
    :param request: Request Object.
    :return:
    """
    # TODO: get the post data and populate the database with video links.

