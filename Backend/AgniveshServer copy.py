import pickle
from flask import Flask,request,jsonify
import os

with open('Backend/models/Agnivesha.pkl','rb') as file:
    Agnivesh = pickle.load(file)
    
with open('Backend/models/encoders.pkl','rb') as file:
    encoders = pickle.load(file)
    
Dis_coder = encoders['DiseaseCoder']
Gender_coder = encoders['GenderCoder']
Dia_coder = encoders['DiabetesCoder']
Pra_coder = encoders['PrakrutiCoder']
Rem_coder = encoders['RemedyCoder']
age_coder = encoders['AgeCoder']



app = Flask(__name__)

@app.route('/',methods=['POST'])
def GetRemedy():
    data = request.get_json()
    
    
    
if __name__ == '__main__':
    app.run(debug=True)
    
    



