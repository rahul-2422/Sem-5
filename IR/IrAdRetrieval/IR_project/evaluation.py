import json
import numpy
from math import log10, floor


def round_to_1(x):
   return round(x, -int(floor(numpy.log10(x, where=x > 0))))


f = open('similarity_coefficients.json','r')
results = json.load(f)
f.close()

f = open('query_info.json','r')
query = json.load(f)
f.close()



docs = results["0"]
len = len(docs)



eval = []

print(" Give input as 1 if Relevant doc and 0 if Non-Relevant doc for the retrieved docId's")

total_relevant = 0

for j in range(len):
    i = int(input("docId: " + str(docs[j]) + " - "))
    if i == 1:
        total_relevant += 1
        eval.append(1)
    else: 
        eval.append(0)



relevance = dict()
eval_dict = dict()

def convert_to_string(list):
    str = ""
    for i in range(len(list)):
        str+=list[i]
    
    return str




for j in range(len):
    eval_dict[str(docs[j])] = eval[j]    
    relevance[str(query.keys()[0])] = dict(eval_dict.items())

 
with open('relevance_feedback.json', 'w', encoding='utf-8') as file:
        json.dump(relevance, file, indent=4)
        file.close()

print("\n")

relevant = 0
retrieved = 0
for i in eval:
    retrieved += 1
    if i == 1:
        opinion = "R "
        relevant += 1
    else: 
        opinion = "NR"
    print(opinion, "Precision : ", round_to_1(relevant / retrieved), "\t\tRecall : ", round_to_1(relevant / total_relevant))

print("\nRelevant docs retrieved : ", relevant)
print("Total no of relevant docs: ", total_relevant)
print("Total no of documents retrieved : ", retrieved)