# import os
# import selenium.webdriver as webdriver
# from selenium.webdriver.firefox.service import Service
# from selenium.webdriver.firefox.options import Options

# user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0'
# FireFoxDriverPath = os.path.join(os.getcwd(), 'Drivers', 'C:/D/sonia/software test/project/scenario second/Drivers/geckodriver.exe')
# firefox_service = Service(FireFoxDriverPath)
# firefox_option = Options()
# firefox_option.set_preference("general.useragent.override", user_agent)
# browser = webdriver.Firefox(service=firefox_service, options=firefox_option)
# browser.implicitly_wait(7)

# url = "https://Python.org"
# browser.get(url)
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())