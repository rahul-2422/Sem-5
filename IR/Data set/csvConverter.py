import pandas as pd
import openpyxl


data = pd.read_json('dataset.json')

data[["description", "title"]].to_csv("description.csv", index=None)