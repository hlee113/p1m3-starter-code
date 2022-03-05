import flask
from flask import Flask, jsonify,request,json
import random
import json

app = flask.Flask(__name__)


# set up a separate route to serve the index.html file generated
# by create-react-app/npm run build.
# By doing this, we make it so you can paste in all your old app routes
# from Milestone 2 without interfering with the functionality here.
##bp = flask.Blueprint(
  #  "bp",
   # __name__,
    #template_folder="./static/react",
#)

# route for serving React page
@app.route("/members", methods=['GET'])
def members():
    info = ['Avocados are a fruit, not a vegetable','The Eiffel Tower can be 15 cm taller during the summer',
    'Trypophobia is the fear of closely-packed holes.']
    members = random.choice(info)
    print(members)
    return jsonify(members)
     
    # NB: DO NOT add an "index.html" file in your normal templates folder
    # Flask will stop serving this React page correctly
    return flask.render_template("index.html")


#app.register_blueprint(bp)

if __name__ == "__main__":

    app.run(debug = True)
