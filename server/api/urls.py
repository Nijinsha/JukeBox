from django.urls import path
from .views import YoutubeVideoListView, slack_config_view

urlpatterns = [
    path('slack_config/', slack_config_view, name="slack config"),
    path('videos/', YoutubeVideoListView.as_view(), name="videos"),
]
