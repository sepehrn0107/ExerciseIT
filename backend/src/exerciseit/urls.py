from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
#from backend.src.users import views as v


urlpatterns = [

    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('exercises.api.urls')),
    
    path('accounts/', include('django.contrib.auth.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),

   # re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
