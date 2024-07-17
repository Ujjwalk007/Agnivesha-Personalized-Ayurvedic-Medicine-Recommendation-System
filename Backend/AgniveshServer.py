import pickle
from flask import Flask,request,jsonify
import os
from xgboost import XGBClassifier
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

with open('Backend/models/Agnivesh.pkl','rb') as file:
    Agnivesh = pickle.load(file)
    
with open('Backend/models/encoders.pkl','rb') as file:
    encoders = pickle.load(file)
    
Dis_coder = encoders['DiseaseCoder']
Gender_coder = encoders['GenderCoder']
Dia_coder = encoders['DiabetesCoder']
Pra_coder = encoders['PrakrutiCoder']
Rem_coder = encoders['RemedyCoder']
age_coder = encoders['AgeCoder']

for key, encoder in encoders.items():
    print(f"Encoder '{key}':")
    print(f"Type: {type(encoder)}")



app = Flask(__name__)

@app.route('/',methods=['POST'])
def GetRemedy():
    data = request.get_json()
    
    # Attributes to be given to Model =>
    # Disease_name
    # user_gender
    # user_age 
    # Prakrutii 
    # Diabetes 
    
    Disease_name = data['Disease_name']
    user_gender = data['user_gender']
    user_age = data['user_age']
    Prakrutii = data['Prakrutii']
    Diabetes = data['Diabetes']
        

    if(int(user_age)<15):
        user_age = 'Child'
    elif(int(user_age)<45):
        user_age = 'Adult'
    else:
        user_age = 'Old'


    new_data = pd.DataFrame({
    'Disease': [Disease_name],
    'gender': [user_gender],  
    'age': [user_age],
    'prakruti': [Prakrutii],
    'diabetic' :[Diabetes]
    
    })


    new_data['Disease_Name'] = Dis_coder.transform(new_data['Disease'])
    new_data['Gender'] = Gender_coder.transform(new_data['gender'])
    new_data['Dia'] = Dia_coder.transform(new_data['diabetic'])
    new_data['Pra'] = Pra_coder.transform(new_data['prakruti']) 
    new_data['Age'] = age_coder.transform(new_data['age'])


    col_to_drop = ['Disease','gender','prakruti','age','diabetic']
    Test_case = new_data.drop(columns=col_to_drop)
    
    Prediction = Agnivesh.predict(Test_case)

    Upchar = Rem_coder.inverse_transform(Prediction)
    
    return jsonify({'Treatment':Upchar[0]})
    
    
    
    
if __name__ == '__main__':
    app.run(debug=True)
    
    



