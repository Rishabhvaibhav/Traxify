# trains/views.py
from django.shortcuts import render
from django.http import JsonResponse

def train_search(request):
    # Perform API call to retrieve train data based on user input (source and destination)
    # Dummy data for demonstration
    train_data = [
        {'train_name': 'Sample Train 1', 'departure_time': '08:00', 'arrival_time': '16:00'},
        {'train_name': 'Sample Train 2', 'departure_time': '10:00', 'arrival_time': '18:00'},
    ]
    return JsonResponse({'train_data': train_data})
