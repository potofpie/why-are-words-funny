import config
import libs
import routes
import models


@libs.app.route('/api/')
def home():
    logger = libs.createLogger(__name__ + '(app.py)')
    try:
        logger.info({'body' : 'Welcome to the Flask Template!'})
        return {'body' : 'Welcome to the Flask Template!'}, 200
    except Exception as error:
        logger.exception(error)
        return {'body': str(error)}, 400

routes.makeRoutes('/api')

if __name__ == '__main__':
    libs.app.run(host=config.FLASK_IP, port=config.FLASK_PORT)


    


    