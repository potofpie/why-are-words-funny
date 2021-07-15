from fireo import models as mdl
from fireo.fields import TextField, DateTime, ReferenceField, NumberField
 


class Participants(mdl.Model):
    aid = TextField()
    # created = DateTime()

class Tests(mdl.Model):
    type = TextField()
    created = DateTime()

class PickStims(mdl.Model):
    stimId = TextField()
    created = DateTime()

class RateStims(mdl.Model):
    stimId = TextField()
    created = DateTime()

class RateAnswers(mdl.Model):
    stimId = ReferenceField(RateStims)
    created = DateTime()
    answer = NumberField()

class PickAnswers(mdl.Model):
    stimId = ReferenceField(PickStims)
    created = DateTime()
    answer = TextField()




