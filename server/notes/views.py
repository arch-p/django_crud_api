from rest_framework import viewsets
from .serializer import NoteSerializer
from .models import Note

class NotesModelViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()