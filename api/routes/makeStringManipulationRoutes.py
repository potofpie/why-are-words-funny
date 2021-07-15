def makeStringManipulationRoutes(libs,use_cases,path):
    @libs.app.route(f'{path}/')
    def stringManipulation():
        logger = libs.createLogger(__name__)
        try:
            logger.info({'body' : f'the path is {path}'})
            return {'body' : f'the path is {path}'}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400
    @libs.app.route(f'{path}/capitalize', methods=["POST"])
    def capitalize():
        logger = libs.createLogger(__name__)
        try:
            print(libs.flask.request.json)
            string = libs.flask.request.json['string']
            return {'body' : f'{use_cases.capitalize(string)}'}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400