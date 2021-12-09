from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import re
import json

from django.urls.conf import path

from FourPartTime.settings import DATABASES

from django.views.decorators.csrf import csrf_exempt

from .models import Task

from django.utils.html import strip_tags

# 检验 任务类型设计是否合法
def type_isValid(type):
    return type in [1,2,3,4]

# 检验 日期格式是否合法
def deadline_isValid(deadline):
    res = re.search(r'[0-9]{4}-[0-1][0-9]-[0-3][0-9]', deadline)
    if res:
        return True
    else:
        return False

#  ===================== 以下是具体的数据库操作 ========================

# 所有 POST 请求会访问到的函数都要用 @csrf_exempt 进行修饰

# 创建
@csrf_exempt
def create_task(request):
    try:
        if(request.method == 'POST'):
            # 解析 POST 中的 JSON
            print("=========有 “创建” 数据传入=========")
            postBody = request.body
            print("=======执行到这了1========")
            print(postBody)
            post_body_json = json.loads(postBody)

            # postBody_decode=postBody.decode('UTF-8')
            print("=======decode postBody========")
            # print(postBody_decode)

            # post_body_json = json.loads(postBody)
            print("=======执行到这了2========")
            print(post_body_json)

            print("=======执行到这了3========")
            name = post_body_json['name']
            name = strip_tags(name) # 对提交的表单进行过滤，防止 xss 攻击
            print("name：=============")
            print(name)

            taskType = post_body_json['task_type']
            taskType = int(strip_tags(taskType))
            print("type:=============")
            print(taskType)

            desc = post_body_json['desc']
            desc = strip_tags(desc)
            print("desc:=============")
            print(desc)


            deadline = post_body_json['deadline']
            deadline = strip_tags(deadline)
            print("deadline:=============")
            print(deadline)

            # 对插入字段进行检查
            if(name != '' and deadline_isValid(deadline) and type_isValid(taskType)):
                # 实例化对象
                t = Task()

                # 属性/字段 赋值
                t.name=name
                t.type=taskType
                t.description=desc
                t.deadline=deadline

                # 执行保存
                t.save()

                data = {
                    'status':200,
                    'message':'创建成功',
                }
                # json_dumps_params={"ensure_ascii":False} : 防止中文乱码
                return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})
            else:
                data = {
                    'status':204,
                    'message': '创建任务失败，传入参数不合理'
                }
                return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})
    except:
        data = {
            'status': 401,
            'message':'创建任务失败'
        }
        return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})

# 查询
def get_tasks(request, taskType):
    try:
        if(type_isValid(taskType)):
            # -deadline 表示降序排列
            t = Task.objects.filter(type__exact=taskType).order_by('-deadline')
            # tasks={}
            # for task in t.values:
            #     tasks.append(task)
            data = {
                'status':200,
                'message': '查询成功',
                'tasks':list(t.values())
            }
            return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})
        else:
            data = {
                'status':204,
                'message': '查询失败，任务类型输入不合法',
            }
            return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})
    except:
        data = {
            'status':401,
            'message': '查询失败',
        }
        return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})

# 更新
@csrf_exempt
def update(request):
    try:
        if(request.method == 'POST'):
            # 解析 POST 中的 JSON
            print("=========有 “更新” 数据传入=========")
            postBody = request.body
            postBody=postBody.decode('UTF-8')
            post_body_json = json.loads(postBody)
            print(post_body_json)
            id = post_body_json['id']
            id = int(strip_tags(id))

            name = post_body_json['name']
            name = strip_tags(name)

            taskType = post_body_json['task_type']
            taskType = int(strip_tags(taskType))

            desc = post_body_json['desc']
            desc = strip_tags(desc)

            deadline = post_body_json['deadline']
            deadline = strip_tags(deadline)

            # 对插入字段进行检查
            if(name != '' and deadline_isValid(deadline) and type_isValid(taskType)):
                update_data = {
                    "name": name,
                    "type": taskType,
                    "description": desc,
                    "deadline": deadline,
                }
                Task.objects.filter(id=id).update(**update_data)
                data = {
                    'status':200,
                    'message':'更新成功',
                }
                return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})
            else:
                data = {
                    'status':204,
                    'message': '更新失败，传入参数不合理'
                }
                return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})
    except:
        data = {
            'status': 401,
            'message':'更新失败'
        }
        return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})

# 删除
def delete(request, task_key):
    try:
        Task.objects.filter(id=task_key).delete()
        data={
            'status':200,
            'message':'删除成功'
        }
        return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})
    except:
        data={
            'status':401,
            'message':'删除失败'
        }
        return JsonResponse(data=data, json_dumps_params={"ensure_ascii":False})


# test
@csrf_exempt
def test(request):
    print(request)
    return JsonResponse({
        'status':200,
        "message":"Post成功",
    })