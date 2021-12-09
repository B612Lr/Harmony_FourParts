from django.urls.conf import path
from . import views


urlpatterns = [
    # C:创建任务
    path('create', views.create_task, name='createTest'),

    # R:查询
    path('read/<int:taskType>', views.get_tasks, name='get_diffType_task'),
    
    # 更新测试
    path("update", views.update , name="update"),

    # D:删除
    path("delete/<int:task_key>", views.delete , name="delete"),

    # test
    path("test", views.test, name="test")
]
