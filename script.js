const illnesses = {
  "flu": {
    name: "Flu (Influenza)",
    symptoms: "Fever, cough, sore throat, muscle aches, fatigue.",
    causes: "Caused by influenza viruses transmitted through droplets.",
    remedies: {
      natural: "Rest, hydration, herbal teas like ginger or chamomile.",
      nonNatural: "Antiviral drugs like oseltamivir, over-the-counter pain relievers."
    }
  },
  "diabetes": {
    name: "Diabetes",
    symptoms: "Increased thirst, frequent urination, fatigue, blurred vision.",
    causes: "Genetics, lifestyle factors, insulin resistance.",
    remedies: {
      natural: "Healthy diet, regular exercise, weight management.",
      nonNatural: "Insulin therapy, metformin, other prescribed medications."
    }
  },
  "asthma": {
    name: "Asthma",
    symptoms: "Shortness of breath, chest tightness, wheezing, coughing.",
    causes: "Allergens, respiratory infections, exercise, cold air.",
    remedies: {
      natural: "Breathing exercises, avoiding triggers, herbal remedies.",
      nonNatural: "Inhalers, corticosteroids, bronchodilators."
    }
  },
  "common cold": {
    name: "Common Cold",
    symptoms: "Runny nose, sneezing, sore throat, mild fever.",
    causes: "Viral infections like rhinoviruses.",
    remedies: {
      natural: "Steam inhalation, ginger tea, honey.",
      nonNatural: "Decongestants, over-the-counter cold medications."
    }
  },
  "covid-19": {
    name: "COVID-19",
    symptoms: "Fever, cough, loss of taste or smell, difficulty breathing.",
    causes: "Infection by SARS-CoV-2 virus.",
    remedies: {
      natural: "Isolation, hydration, rest.",
      nonNatural: "Antiviral medications, oxygen therapy, vaccines."
    }
  },
  "hypertension": {
    name: "Hypertension (High Blood Pressure)",
    symptoms: "Often asymptomatic; severe cases may cause headaches or nosebleeds.",
    causes: "Poor diet, lack of exercise, genetics, stress.",
    remedies: {
      natural: "Low-sodium diet, regular exercise, stress reduction.",
      nonNatural: "Antihypertensive drugs, ACE inhibitors, beta blockers."
    }
  },
  "anemia": {
    name: "Anemia",
    symptoms: "Fatigue, weakness, pale skin, shortness of breath.",
    causes: "Iron deficiency, vitamin deficiencies, chronic diseases.",
    remedies: {
      natural: "Iron-rich foods, folic acid, vitamin B12 supplements.",
      nonNatural: "Iron supplements, blood transfusion in severe cases."
    }
  },
  "migraine": {
    name: "Migraine",
    symptoms: "Severe headache, nausea, sensitivity to light and sound.",
    causes: "Stress, hormonal changes, certain foods, lack of sleep.",
    remedies: {
      natural: "Dark, quiet room, essential oils like lavender.",
      nonNatural: "Pain relievers, triptans, preventive medications."
    }
  },
  "arthritis": {
    name: "Arthritis",
    symptoms: "Joint pain, stiffness, swelling, reduced mobility.",
    causes: "Aging, autoimmune diseases, joint injuries.",
    remedies: {
      natural: "Gentle exercise, anti-inflammatory diet, turmeric.",
      nonNatural: "NSAIDs, corticosteroids, disease-modifying drugs."
    }
  },
  "eczema": {
    name: "Eczema",
    symptoms: "Dry, itchy, red skin patches.",
    causes: "Allergens, genetics, environmental factors.",
    remedies: {
      natural: "Moisturizing creams, oatmeal baths, avoiding triggers.",
      nonNatural: "Topical corticosteroids, antihistamines."
    }
  },
  "bronchitis": {
    name: "Bronchitis",
    symptoms: "Cough, mucus production, fatigue, slight fever.",
    causes: "Viral infections, smoking, air pollutants.",
    remedies: {
      natural: "Honey, ginger, steam inhalation.",
      nonNatural: "Bronchodilators, antibiotics (if bacterial)."
    }
  },
  "pneumonia": {
    name: "Pneumonia",
    symptoms: "Cough, fever, difficulty breathing, chest pain.",
    causes: "Bacterial, viral, or fungal infections.",
    remedies: {
      natural: "Hydration, rest, herbal teas.",
      nonNatural: "Antibiotics, antivirals, hospitalization in severe cases."
    }
  },
  "allergies": {
    name: "Allergies",
    symptoms: "Sneezing, runny nose, itchy eyes, skin rashes.",
    causes: "Reaction to allergens like pollen, dust, or certain foods.",
    remedies: {
      natural: "Avoiding allergens, saline nasal spray, quercetin supplements.",
      nonNatural: "Antihistamines, corticosteroids, allergy shots."
    }
  },
  "chickenpox": {
    name: "Chickenpox",
    symptoms: "Itchy red spots, fever, fatigue.",
    causes: "Infection with the varicella-zoster virus.",
    remedies: {
      natural: "Cool baths, calamine lotion, rest.",
      nonNatural: "Antihistamines, antiviral medications."
    }
  },
  "tuberculosis": {
    name: "Tuberculosis",
    symptoms: "Persistent cough, weight loss, night sweats, fever.",
    causes: "Infection by Mycobacterium tuberculosis bacteria.",
    remedies: {
      natural: "Good nutrition, rest, avoiding tobacco.",
      nonNatural: "Antibiotics like isoniazid, rifampin, ethambutol."
    }
  },
  "malaria": {
    name: "Malaria",
    symptoms: "Fever, chills, sweating, headache, vomiting.",
    causes: "Infection by Plasmodium parasites transmitted via mosquito bites.",
    remedies: {
      natural: "Quinine extracts from cinchona bark.",
      nonNatural: "Antimalarial drugs like chloroquine, artemisinin."
    }
  },
  "hepatitis": {
    name: "Hepatitis",
    symptoms: "Fatigue, jaundice, dark urine, abdominal pain.",
    causes: "Viral infections (Hepatitis A, B, C), toxins, alcohol.",
    remedies: {
      natural: "Avoid alcohol, liver-supporting diets.",
      nonNatural: "Antiviral drugs, immune boosters, vaccines for prevention."
    }
  },
  "measles": {
    name: "Measles",
    symptoms: "Fever, rash, runny nose, cough, red eyes.",
    causes: "Infection by the measles virus.",
    remedies: {
      natural: "Hydration, rest, vitamin A supplementation.",
      nonNatural: "No specific treatment, but vaccines prevent it."
    }
  },
  "dengue": {
    name: "Dengue",
    symptoms: "High fever, severe headache, joint pain, rash.",
    causes: "Infection by dengue virus transmitted by Aedes mosquitoes.",
    remedies: {
      natural: "Hydration, papaya leaf extract.",
      nonNatural: "Supportive care, monitoring for complications."
    }
  },
  "appendicitis": {
    name: "Appendicitis",
    symptoms: "Abdominal pain, nausea, vomiting, fever.",
    causes: "Blockage of the appendix leading to inflammation.",
    remedies: {
      natural: "No natural remedies; surgery is required.",
      nonNatural: "Appendectomy (surgical removal of the appendix)."
    }
  },
  "ulcer": {
    name: "Stomach Ulcer",
    symptoms: "Stomach pain, bloating, nausea, heartburn.",
    causes: "Helicobacter pylori infection, overuse of NSAIDs.",
    remedies: {
      natural: "Probiotics, cabbage juice, avoiding spicy foods.",
      nonNatural: "Antibiotics, proton pump inhibitors (PPIs)."
    }
  },
  "gout": {
    name: "Gout",
    symptoms: "Severe joint pain, redness, swelling, stiffness.",
    causes: "High levels of uric acid leading to crystal deposits.",
    remedies: {
      natural: "Cherries, celery seed extract, hydration.",
      nonNatural: "NSAIDs, colchicine, uric acid-lowering medications."
    }
  },
  "sinusitis": {
    name: "Sinusitis",
    symptoms: "Facial pain, nasal congestion, headache, fever.",
    causes: "Infections, allergies, nasal polyps.",
    remedies: {
      natural: "Steam inhalation, saline nasal spray, ginger tea.",
      nonNatural: "Decongestants, antibiotics if bacterial."
    }
  },
  "psoriasis": {
    name: "Psoriasis",
    symptoms: "Scaly red patches, itching, cracking skin.",
    causes: "Autoimmune disorder triggering rapid skin cell growth.",
    remedies: {
      natural: "Aloe vera, fish oil supplements, sunlight.",
      nonNatural: "Topical corticosteroids, biologic drugs."
    }
  },
  "mumps": {
    name: "Mumps",
    symptoms: "Swollen salivary glands, fever, headache, muscle aches.",
    causes: "Infection by the mumps virus.",
    remedies: {
      natural: "Rest, hydration, cold compress on swollen areas.",
      nonNatural: "Pain relievers, mumps vaccine for prevention."
    }
  },
  "rheumatoid arthritis": {
    name: "Rheumatoid Arthritis",
    symptoms: "Joint pain, swelling, stiffness, fatigue.",
    causes: "Autoimmune condition attacking joint linings.",
    remedies: {
      natural: "Anti-inflammatory diet, turmeric, yoga.",
      nonNatural: "DMARDs, biologics, NSAIDs."
    }
  },
  "osteoporosis": {
    name: "Osteoporosis",
    symptoms: "Bone fractures, loss of height, back pain.",
    causes: "Aging, calcium deficiency, hormonal changes.",
    remedies: {
      natural: "Calcium-rich foods, vitamin D, weight-bearing exercises.",
      nonNatural: "Bisphosphonates, hormone replacement therapy."
    }
  },
  "glaucoma": {
    name: "Glaucoma",
    symptoms: "Loss of vision, eye pain, blurred vision, halos around lights.",
    causes: "Increased pressure in the eye damaging the optic nerve.",
    remedies: {
      natural: "Leafy greens, omega-3 fatty acids, stress management.",
      nonNatural: "Eye drops, laser therapy, surgery."
    }
  },
    "anemia": {
      name: "Anemia",
      symptoms: "Fatigue, pale skin, shortness of breath, dizziness.",
      causes: "Iron deficiency, chronic diseases, or vitamin B12 deficiency.",
      remedies: {
        natural: "Iron-rich foods like spinach, lentils, red meat.",
        nonNatural: "Iron supplements, vitamin B12 injections."
      }
    },
    "depression": {
      name: "Depression",
      symptoms: "Persistent sadness, loss of interest, fatigue, difficulty concentrating.",
      causes: "Chemical imbalances, trauma, genetic predisposition.",
      remedies: {
        natural: "Exercise, meditation, therapy.",
        nonNatural: "Antidepressant medications, cognitive-behavioral therapy (CBT)."
      }
    },
    "hypertension": {
      name: "Hypertension",
      symptoms: "Often no symptoms; severe cases may cause headaches, dizziness, or nosebleeds.",
      causes: "High salt intake, stress, genetics, obesity.",
      remedies: {
        natural: "Low-sodium diet, regular exercise, relaxation techniques.",
        nonNatural: "Antihypertensive medications like ACE inhibitors."
      }
    },
    "bronchitis": {
      name: "Bronchitis",
      symptoms: "Cough, mucus production, chest discomfort, shortness of breath.",
      causes: "Viral or bacterial infections, smoking.",
      remedies: {
        natural: "Steam inhalation, honey, ginger tea.",
        nonNatural: "Bronchodilators, antibiotics if bacterial."
      }
    },
    "eczema": {
      name: "Eczema",
      symptoms: "Itchy, red, and inflamed skin.",
      causes: "Genetics, allergens, irritants.",
      remedies: {
        natural: "Coconut oil, oatmeal baths.",
        nonNatural: "Topical corticosteroids, antihistamines."
      }
    },
    "asthma": {
      name: "Asthma",
      symptoms: "Wheezing, shortness of breath, chest tightness, coughing.",
      causes: "Allergens, respiratory infections, exercise.",
      remedies: {
        natural: "Breathing exercises, avoiding triggers.",
        nonNatural: "Inhalers, corticosteroids, bronchodilators."
      }
    },
    "diarrhea": {
      name: "Diarrhea",
      symptoms: "Loose stools, abdominal cramps, dehydration.",
      causes: "Infections, food intolerances, contaminated water.",
      remedies: {
        natural: "Hydration, probiotics, BRAT diet (bananas, rice, applesauce, toast).",
        nonNatural: "Anti-diarrheal medications, antibiotics if bacterial."
      }
    },
    "migraine": {
      name: "Migraine",
      symptoms: "Severe headache, nausea, sensitivity to light and sound.",
      causes: "Stress, hormonal changes, certain foods.",
      remedies: {
        natural: "Ginger, peppermint oil, magnesium supplements.",
        nonNatural: "Triptans, pain relievers, preventive medications."
      }
    },
    "cystitis": {
      name: "Cystitis",
      symptoms: "Burning sensation during urination, pelvic pain, frequent urination.",
      causes: "Bacterial infection, irritants.",
      remedies: {
        natural: "Cranberry juice, drinking plenty of water.",
        nonNatural: "Antibiotics."
      }
    },
    "pneumonia": {
      name: "Pneumonia",
      symptoms: "Fever, cough, shortness of breath, chest pain.",
      causes: "Bacterial, viral, or fungal infections.",
      remedies: {
        natural: "Hydration, rest, steam inhalation.",
        nonNatural: "Antibiotics, antivirals, antifungals depending on cause."
      }
    },
    "lupus": {
      name: "Lupus",
      symptoms: "Fatigue, joint pain, butterfly-shaped rash on face.",
      causes: "Autoimmune disorder.",
      remedies: {
        natural: "Anti-inflammatory diet, stress management.",
        nonNatural: "Immunosuppressants, corticosteroids."
      }
    },
    "crohn's disease": {
      name: "Crohn's Disease",
      symptoms: "Abdominal pain, diarrhea, weight loss, fatigue.",
      causes: "Autoimmune response, genetic predisposition.",
      remedies: {
        natural: "Low-residue diet, probiotics.",
        nonNatural: "Anti-inflammatory drugs, biologics, surgery."
      }
    },
    "chronic fatigue syndrome": {
      name: "Chronic Fatigue Syndrome",
      symptoms: "Extreme fatigue, unrefreshing sleep, difficulty concentrating.",
      causes: "Unknown, may involve viral infections or immune issues.",
      remedies: {
        natural: "Regular light exercise, stress reduction.",
        nonNatural: "Symptom management with medications like antidepressants."
      }
    },
    "ear infection": {
      name: "Ear Infection",
      symptoms: "Ear pain, fever, hearing loss, fluid drainage.",
      causes: "Bacterial or viral infections.",
      remedies: {
        natural: "Warm compress, garlic oil drops.",
        nonNatural: "Antibiotics, ear tubes for recurrent cases."
      }
    },
    "parkinson's disease": {
      name: "Parkinson's Disease",
      symptoms: "Tremors, stiffness, difficulty with balance and movement.",
      causes: "Loss of dopamine-producing brain cells.",
      remedies: {
        natural: "Physical therapy, tai chi, healthy diet.",
        nonNatural: "Levodopa, dopamine agonists, deep brain stimulation."
      }
    },
    "urinary tract infection": {
      name: "Urinary Tract Infection",
      symptoms: "Frequent urination, burning sensation, cloudy urine.",
      causes: "Bacterial infection.",
      remedies: {
        natural: "Hydration, cranberry juice.",
        nonNatural: "Antibiotics."
      }
    },
    "acid reflux": {
      name: "Acid Reflux",
      symptoms: "Heartburn, regurgitation, sour taste in the mouth.",
      causes: "Weak esophageal sphincter, overeating, certain foods.",
      remedies: {
        natural: "Avoid trigger foods, ginger tea, smaller meals.",
        nonNatural: "Antacids, proton pump inhibitors."
      }
    },
    "insomnia": {
      name: "Insomnia",
      symptoms: "Difficulty falling asleep, daytime fatigue, irritability.",
      causes: "Stress, anxiety, caffeine, poor sleep habits.",
      remedies: {
        natural: "Chamomile tea, melatonin, sleep hygiene practices.",
        nonNatural: "Prescription sleep aids."
      }
    },
    "thyroid disorders": {
      name: "Thyroid Disorders",
      symptoms: "Fatigue, weight changes, hair thinning, mood swings.",
      causes: "Autoimmune conditions, iodine imbalance.",
      remedies: {
        natural: "Balanced iodine intake, selenium-rich foods.",
        nonNatural: "Thyroid hormone replacement therapy."
      }
    },
    "food poisoning": {
      name: "Food Poisoning",
      symptoms: "Nausea, vomiting, diarrhea, abdominal cramps.",
      causes: "Bacteria, viruses, or toxins in contaminated food.",
      remedies: {
        natural: "Hydration, bland diet.",
        nonNatural: "Antibiotics or antiemetics for severe cases."
      }
    }
  };
  



  
  


  document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; 
  
    if (illnesses[query]) {
      const illness = illnesses[query];
      resultDiv.innerHTML = `
        <div class="result-item">
          <h2>${illness.name}</h2>
          <p><strong>Symptoms:</strong> ${illness.symptoms}</p>
          <p><strong>Causes:</strong> ${illness.causes}</p>
          <p><strong>Natural Remedies:</strong> ${illness.remedies.natural}</p>
          <p><strong>Non-Natural Remedies:</strong> ${illness.remedies.nonNatural}</p>
        </div>
      `;
    } else {
      resultDiv.innerHTML = "<p>No information found. Please try a different illness.</p>";
    }
  });
