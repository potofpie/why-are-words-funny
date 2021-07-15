import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import fireo

def createDB():
  fireo.connection(from_file="./why-are-words-funny-firebase-admin-key.json")
  cred = credentials.Certificate('./why-are-words-funny-firebase-admin-key.json') 
  firebase_admin.initialize_app(cred, {
    'projectId': 'why-are-words-funny',
  })

  return firestore.client()