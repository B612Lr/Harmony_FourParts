from django.core.exceptions import ValidationError
# from django.utils.translation import gettext_lazy as _
from django.db import models
from django.db.models.expressions import F

# 用来判定输入的值是否为空
def empty_validator(value):
    if value=='':
        raise ValidationError(
            ('%(value)s is empty'), 
            params={'value':value},
        )


# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=100, blank=False, validators=[empty_validator])
    # 任务类型：1.紧急-重要；2.重要-不紧急；3.不重要-紧急；4.不重要-不紧急
    type = models.IntegerField(blank=False, validators=[empty_validator])
    # blank 表示该字段是否允许为空
    description = models.TextField(blank=True)
    deadline = models.DateField(blank=False, validators=[empty_validator])

    class Meta:
        db_table='task'
        


