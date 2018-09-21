from bs4 import BeautifulSoup
from splinter.exceptions import ElementDoesNotExist
import requests
import platform
import os
from splinter import Browser
import time


def scrape_mars():
    
    
    executable_path = {'executable_path': 'chromedriver.exe'}
   

    browser = Browser("chrome", **executable_path, headless=False)
    url = 'https://mars.nasa.gov/news/'
    browser.visit(url)
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')
    news = soup.find('div', class_='content_title')
    news_title=news.a.text
    news_p = soup.find('div', class_='article_teaser_body')
    news_paragraph=news_p.text
    url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    browser.visit(url)
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')
    button=soup.find_all('div', class_='carousel_items')
    button_text=button[0].a.text.strip()
    browser.click_link_by_partial_text(button_text)
    time.sleep(20)
    browser.click_link_by_partial_text('more info')
    image_html=browser.html
    soup = BeautifulSoup(image_html, 'lxml')
    # pull image_url
    image=soup.find('figure',class_='lede').a
    image_url=image['href']
    featured_image_url= 'https://www.jpl.nasa.gov'+image_url
    url='https://twitter.com/marswxreport?lang=en'
    browser.visit(url)
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')
    mars_weather=soup.find('div',class_='js-tweet-text-container').p.text
    
    import pandas as pd
    url='http://space-facts.com/mars/'
    tables = pd.read_html(url)
    df=tables[0]
    df.columns=['Fact','Value']

    # convert the data to a HTML table string.
    fact_table = df.to_html().replace('\n', '')
    url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
    browser.visit(url)
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')
    hemisphere_image_urls=[]
    click_text=soup.find_all('div',class_='description')
    for items in click_text:
        image_links=items.find_all('a')
        text=image_links[0].h3.text
        browser.click_link_by_partial_text(text)
        current_page_html=browser.html
        soup = BeautifulSoup(current_page_html, 'lxml')
        title=soup.find_all('section',class_='block')[0].h2.text
        url=soup.find_all('img',class_='wide-image')[0]
        image_url='https://astrogeology.usgs.gov'+url['src']
        image_dict={}
        image_dict['Title']=title
        image_dict['Image_URL']=image_url
        hemisphere_image_urls.append(image_dict)
        browser.back()
    # Store in dictionary
    mars_facts = {
       "News_Title": news_title,
       "News_Paragraph": news_paragraph,
       "Featured_Image": featured_image_url,
       "Mars_Weather": mars_weather,
       "Mars_Facts":fact_table,
       "Hemisphere_Images": hemisphere_image_urls
   }

   # Return results
    return mars_facts
    

