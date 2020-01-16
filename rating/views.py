from django.shortcuts import render,redirect
from django.http import HttpResponse, Http404
from django.contrib.auth.decorators import login_required
from .models  import Project,Profile,Rating,categories,technologies
from .forms import ProfileForm, UploadForm, RatingForm
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.
@login_required(login_url='/accounts/login')
def index(request):
    current_user = request.user 
    projects = Project.objects.order_by('-overall').all()
    
    runners=Project.objects.all()[:4]
    try:
        current_user = request.user
        profile =Profile.objects.get(user=current_user)
    except ObjectDoesNotExist:
        return redirect('edit')
    return render(request, 'index.html', locals())


@login_required(login_url='/accounts/login')
def profile(request):
    current_user=request.user
    profile =Profile.objects.get(user=current_user)
    projects = Project.objects.filter(user=current_user)
    my_profile = Profile.objects.get(user=current_user)
    return render(request, 'profile.html', locals())


