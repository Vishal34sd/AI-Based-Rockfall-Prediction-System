from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI()

# Load models
model_bin = joblib.load("rockfall_model_lgbm_bin.pkl")
model_multi = joblib.load("rockfall_model_lgbm_multi.pkl")

class RockfallInput(BaseModel):
    # Add all your feature fields here, example:
    slope: float
    displacement: float
    pore_pressure: float
    rainfall: float
    temperature: float
    # ... add all other features used in your model

@app.post("/predict-binary")
def predict_binary(data: RockfallInput):
    df = pd.DataFrame([data.dict()])
    prob = model_bin.predict_proba(df)[:,1][0]
    pred = model_bin.predict(df)[0]
    return {"probability": float(prob), "prediction": int(pred)}

@app.post("/predict-multiclass")
def predict_multiclass(data: RockfallInput):
    df = pd.DataFrame([data.dict()])
    pred = model_multi.predict(df)[0]
    return {"risk_class": str(pred)}