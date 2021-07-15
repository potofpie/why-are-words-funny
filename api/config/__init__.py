import os
from dotenv import load_dotenv
# load_dotenv()

# OR, the same with increased verbosity
load_dotenv(verbose=True)
load_dotenv(dotenv_path='./envs/.env')

# import 



#logger config
LOG_LEVEL='DEBUG'
LOG_LOCATION='info.log'

#flask config
FLASK_PORT=os.getenv('FLASK_PORT')
FLASK_IP=os.getenv('FLASK_IP')