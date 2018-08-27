from django.urls import path
from .views import YoutubeVideoListView, slack_config_view, vote, is_config_available_view

urlpatterns = [
    path('slack_config/', slack_config_view, name="slack config"),
    path('videos/', YoutubeVideoListView.as_view(), name="videos"),
    path('vote/<uid>/', vote, name="vote"),
    path('config-available/', is_config_available_view, name="is available"),
]
