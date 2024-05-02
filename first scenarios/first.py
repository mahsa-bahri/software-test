from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--ignore-local-proxy")

driver = webdriver.Chrome('./chromedriver', options=chrome_options)


print(driver.title)

# driver_path = "C:/D/narmafzar/new/chromedriver.exe"
# service = Service(driver_path)
# driver = webdriver.Chrome(service=service)

# # باز کردن صفحه دیجی کالا
# driver.get("https://www.digikala.com/")

# # پیدا کردن المان سرچ با استفاده از نام کلاس
# search_box = driver.find_element_by_class_name("w-100 d-inline-block lazyloaded")

# # وارد کردن عبارت "گوشی" در جستجو
# #search_box.send_keys("گوشی")
# search_box.click()
# # فشردن کلید Enter برای اجرای جستجو
# #search_box.send_keys(Keys.ENTER)

# # صبر برای بارگیری نتایج جستجو
# driver.implicitly_wait(5000)

# # دریافت عناصر نتایج جستجو
# search_results = driver.find_elements_by_class_name("c-product-box")

# # نمایش نام هر محصول در نتایج جستجو
# for result in search_results:
#     product_name = result.text
#     print(product_name)

# # بستن مرورگر
# #driver.quit()
