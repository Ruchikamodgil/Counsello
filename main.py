from fastapi import FastAPI
import joblib
import uvicorn
import pandas as pd

app = FastAPI()
model = joblib.load("modelnew.pkl")


@app.get('/')
def index():
    return {'message': 'Hello world_____API TESTER'}

@app.get('/predict/{data}')
def predict_cluster(data):

    if type(data)==str:
        # df = processor(data)
        dfx=[]
        for ix in data:
            dfx.append(int(ix))
        print(dfx)
        df = pd.DataFrame(dfx)

        df = df.T


        cluster = model.predict(df)
        return(int(cluster))
    else:
        return("PASS STRING") #-->testing


# if __name__ == '__main__':
#     uvicorn.run(app, host='127.0.0.1', port = 8000)


