def makeCapitalize(config,libs):
    logger = libs.createLogger(__name__)
    def capitalize(text):
        logger.info(f'the input text: {text}')
        return text.upper()
    return capitalize