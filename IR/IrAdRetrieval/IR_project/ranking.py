import json
import math
import numpy as np
from collections import OrderedDict

f = open('positional_index.json','r')
positional_index = json.load(f)
f.close()

f = open('query_info.json','r')
query_info = json.load(f)
f.close()

f = open('idf_values.json','r')
idf_values = json.load(f)
f.close()

f = open('relevance_feedback.json','r')
relevance_feedback = json.load(f)
f.close()


def get_query_vector(query):

    query_vector = list()
    index = dict()

    print(len(query))

    for word in query:
        if word in index.keys():
            index[word] += 1 
        else: 
            index[word] = 1

    tf_query = dict()

    for word in query:
        tf_query[word] = math.log2(index[word]) + 1

    for word in sorted(positional_index.keys()):
        if word in query:
            tf_idf = tf_query[word] * idf_values[word]
            query_vector.append(tf_idf)
        else: 
            query_vector.append(0)

    

    return(query_vector)

def get_query_vector_matrix():

    query_vector_matrix = dict()

    for key in query_info.keys():
        query_vector_matrix[key] = get_query_vector(query_info[key])

    with open('query_vectors.json', 'w', encoding='utf-8') as file:
        json.dump(query_vector_matrix, file, indent=4)
        file.close()
    
get_query_vector_matrix()

def cosine_similarity(query_vector, doc_vector):

    query_magnitude = math.sqrt(sum([ value * value for value in query_vector ]))
    doc_magnitude = math.sqrt(sum([ value * value for value in doc_vector ]))

    dot_product = 0

    for i in zip(query_vector, doc_vector):
        q,d = i
        dot_product += (q * d)

        

    return dot_product / ( query_magnitude * doc_magnitude )


def get_similarity_coeff():

    f = open('doc_vectors.json','r')
    doc_vectors = json.load(f)
    f.close()

    f = open('query_vectors.json','r')
    query_vectors = json.load(f)
    f.close()

    similarity_coefficients = dict()
    sim_coeff = dict()
    sim_coeff_array = dict()
    ranking = dict()


# Current code -------------------------------------------------
    if len(query_vectors) == 1:
        for docId in doc_vectors.keys():
            if str(list(query_info)[0]) in relevance_feedback.keys() and str(docId) in relevance_feedback[str(list(query_info)[0])].keys():
                similarity_coefficients[str(docId)] = cosine_similarity(query_vectors[str(list(query_info)[0])], doc_vectors[docId])  + (0.05 * relevance_feedback[str(list(query_info)[0])][str(docId)]) 
            else:
                similarity_coefficients[str(docId)] = cosine_similarity(query_vectors[str(list(query_info)[0])], doc_vectors[docId]) 
    
        sim_coeff = OrderedDict(sorted(similarity_coefficients.items(), key=lambda x:x[1], reverse=True))

        
        sim_coeff_array[str(list(query_info)[0])] = sim_coeff
    
        ranking[str(list(query_info)[0])] = list(sim_coeff_array[str(list(query_info)[0])][i][0] for i in range(10))[:10]  
    
    else:
        for query in query_vectors.keys():

            for docId in doc_vectors.keys():
                if str(docId) in relevance_feedback[query].keys():
                    similarity_coefficients[str(docId)] = cosine_similarity(query_vectors[query], doc_vectors[docId])  + (0.05 * relevance_feedback[query][docId])
                else: 
                    similarity_coefficients[str(docId)] = cosine_similarity(query_vectors[query], doc_vectors[docId]) 

            
            sim_coeff = sorted(similarity_coefficients.items(), key=lambda x:x[1], reverse=True)
        
            sim_coeff_array[query] = sim_coeff[:]

        
            ranking[str(query)] = list(sim_coeff_array[str(query)])[:10]




    # print(ranking['0'])

    with open('similarity_coefficients.json', 'w', encoding='utf-8') as file:
        json.dump(ranking, file, indent=4)
        file.close()


        
get_similarity_coeff()
