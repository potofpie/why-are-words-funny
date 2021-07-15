import json
import use_cases
import flask
import libs 

from routes.makeStringManipulationRoutes import makeStringManipulationRoutes
from routes.makeParticipantRoutes import makeParticipantRoutes

def makeRoutes(path):
    makeStringManipulationRoutes(libs,use_cases,f'{path}/stringManipulation')
    makeParticipantRoutes(libs,use_cases,f'{path}/participant')