def makeParticipantRoutes(libs,use_cases,path):
    @libs.app.route(f'{path}/create', methods=["POST"])
    def createParticipant():
        logger = libs.createLogger(__name__)
        try:
            logger.info(libs.flask.request.data)
            data = libs.flask.request.json
            data['created'] =  libs.datetime.datetime.fromtimestamp(data['created'])
            return {'body' : use_cases.createParticipant(data)}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400

    @libs.app.route(f'{path}', methods=["GET"])
    def getParticipant():
        logger = libs.createLogger(__name__)
        try:
            id = libs.flask.request.args.get("id")
            return {'body' : use_cases.getParticipant(id)}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400