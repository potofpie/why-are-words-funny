def makeGetParticipant(config,libs, models, utils):
    logger = libs.createLogger(__name__)
    def getParticipant(id):
        # print(models.Participants.collection.get(__id))
        logger.info(f'got user id : {id}')
        return models.Participants.collection.get(f'participants/{id}').to_dict()
        # return {"status": 200 }
    # print(getParticipant(u'OqldxsJ3iv6NTp0nNsHA'))
    return getParticipant

