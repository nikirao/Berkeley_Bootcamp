# import necessary libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars

# create instance of Flask app
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/weather_app"
mongo = PyMongo(app)

# create route that renders index.html template and finds documents from mongo
@app.route("/")
def home():

   # Find data
   mars = mongo.db.collection.find().sort([('_id', -1)]).limit(1)

   # return template and data
   return render_template("index.html", mars=mars)

# Route that will trigger scrape functions
@app.route("/scrape")
def scrape():

   # Run scraped functions
   mars_facts = scrape_mars.scrape_mars()

   # Store results into a dictionary
   mars = {
       "News_Title": mars_facts["News_Title"],
       "News_Paragraph": mars_facts["News_Paragraph"],
       "Featured_Image": mars_facts["Featured_Image"],
       "Mars_Weather": mars_facts["Mars_Weather"],
       "Mars_Facts":mars_facts["Mars_Facts"],
       "Hemisphere_Images": mars_facts["Hemisphere_Images"]
   }

   # Insert forecast into database
   mongo.db.collection.insert_one(mars)

   # Redirect back to home page
   return redirect("/", code=302)


if __name__ == "__main__":
   app.run(debug=True)