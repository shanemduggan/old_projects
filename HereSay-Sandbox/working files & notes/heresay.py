from flask import render_template

@app.route('/app/index.html')
def index(name=None):
    return render_template('index.html')