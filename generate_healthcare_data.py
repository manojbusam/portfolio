"""
Healthcare Data Generator for Power BI Dashboard
Generates realistic sample healthcare data including patient records, appointments, and metrics
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

# Generate patient data
def generate_patients(n=1000):
    """Generate patient demographic data"""
    first_names = ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 
                   'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica',
                   'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa']
    last_names = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
                  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Wilson', 'Anderson', 'Thomas', 'Taylor']
    
    patients = []
    for i in range(n):
        patient_id = f"PAT{str(i+1).zfill(6)}"
        first_name = random.choice(first_names)
        last_name = random.choice(last_names)
        age = np.random.randint(18, 85)
        gender = random.choice(['M', 'F', 'Other'])
        blood_type = random.choice(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        insurance = random.choice(['Medicare', 'Medicaid', 'Private', 'Uninsured'])
        registration_date = datetime.now() - timedelta(days=np.random.randint(0, 1825))  # Last 5 years
        
        patients.append({
            'PatientID': patient_id,
            'FirstName': first_name,
            'LastName': last_name,
            'Age': age,
            'Gender': gender,
            'BloodType': blood_type,
            'InsuranceType': insurance,
            'RegistrationDate': registration_date.strftime('%Y-%m-%d')
        })
    
    return pd.DataFrame(patients)

# Generate appointments data
def generate_appointments(patients_df, n=5000):
    """Generate appointment records"""
    departments = ['Cardiology', 'Orthopedics', 'Pediatrics', 'Emergency', 'Oncology', 
                   'Neurology', 'Dermatology', 'Internal Medicine', 'Surgery', 'Radiology']
    appointment_types = ['Consultation', 'Follow-up', 'Surgery', 'Check-up', 'Emergency', 'Lab Test']
    statuses = ['Completed', 'Cancelled', 'No-show', 'Scheduled']
    
    appointments = []
    patient_ids = patients_df['PatientID'].tolist()
    
    for i in range(n):
        patient_id = random.choice(patient_ids)
        department = random.choice(departments)
        appointment_type = random.choice(appointment_types)
        status = random.choice(statuses)
        
        # Generate appointment date (past 2 years)
        appointment_date = datetime.now() - timedelta(days=np.random.randint(0, 730))
        appointment_time = appointment_date.replace(
            hour=np.random.randint(8, 17),
            minute=random.choice([0, 15, 30, 45])
        )
        
        duration = random.choice([15, 30, 45, 60, 90])
        cost = np.random.uniform(50, 500) if status == 'Completed' else 0
        
        appointments.append({
            'AppointmentID': f"APT{str(i+1).zfill(6)}",
            'PatientID': patient_id,
            'Department': department,
            'AppointmentType': appointment_type,
            'AppointmentDate': appointment_time.strftime('%Y-%m-%d'),
            'AppointmentTime': appointment_time.strftime('%H:%M:%S'),
            'Duration': duration,
            'Status': status,
            'Cost': round(cost, 2)
        })
    
    return pd.DataFrame(appointments)

# Generate diagnoses data
def generate_diagnoses(appointments_df, n=3000):
    """Generate diagnosis records"""
    diagnoses_list = [
        'Hypertension', 'Diabetes Type 2', 'Common Cold', 'Pneumonia', 'Fracture',
        'Migraine', 'Asthma', 'Arthritis', 'Bronchitis', 'Sinusitis',
        'Urinary Tract Infection', 'Gastroenteritis', 'Anemia', 'Obesity', 'Depression',
        'Anxiety', 'High Cholesterol', 'Back Pain', 'Knee Injury', 'Flu'
    ]
    severity = ['Mild', 'Moderate', 'Severe', 'Critical']
    
    diagnoses = []
    completed_appointments = appointments_df[appointments_df['Status'] == 'Completed']
    
    if len(completed_appointments) > 0:
        sample_size = min(n, len(completed_appointments))
        sampled_appointments = completed_appointments.sample(n=sample_size, replace=True)
        
        for idx, row in sampled_appointments.iterrows():
            diagnosis = random.choice(diagnoses_list)
            severity_level = random.choice(severity)
            
            diagnoses.append({
                'DiagnosisID': f"DX{str(len(diagnoses)+1).zfill(6)}",
                'AppointmentID': row['AppointmentID'],
                'PatientID': row['PatientID'],
                'Diagnosis': diagnosis,
                'Severity': severity_level,
                'DiagnosisDate': row['AppointmentDate']
            })
    
    return pd.DataFrame(diagnoses)

# Generate medications data
def generate_medications(diagnoses_df, n=2000):
    """Generate medication prescriptions"""
    medications = [
        'Aspirin', 'Metformin', 'Lisinopril', 'Atorvastatin', 'Amlodipine',
        'Omeprazole', 'Levothyroxine', 'Albuterol', 'Metoprolol', 'Amlodipine',
        'Losartan', 'Gabapentin', 'Sertraline', 'Tramadol', 'Furosemide',
        'Montelukast', 'Pantoprazole', 'Trazodone', 'Carvedilol', 'Warfarin'
    ]
    
    medications_list = []
    if len(diagnoses_df) > 0:
        sample_size = min(n, len(diagnoses_df) * 2)
        sampled_diagnoses = diagnoses_df.sample(n=sample_size, replace=True)
        
        for idx, row in sampled_diagnoses.iterrows():
            medication = random.choice(medications)
            dosage = f"{random.choice([10, 20, 25, 50, 100, 250, 500])}mg"
            frequency = random.choice(['Once daily', 'Twice daily', 'Three times daily', 'As needed'])
            
            medications_list.append({
                'MedicationID': f"MED{str(len(medications_list)+1).zfill(6)}",
                'PatientID': row['PatientID'],
                'DiagnosisID': row['DiagnosisID'],
                'MedicationName': medication,
                'Dosage': dosage,
                'Frequency': frequency,
                'PrescriptionDate': row['DiagnosisDate']
            })
    
    return pd.DataFrame(medications_list)

# Generate lab results
def generate_lab_results(appointments_df, n=1500):
    """Generate laboratory test results"""
    lab_tests = [
        'Blood Glucose', 'Cholesterol', 'Hemoglobin', 'White Blood Cell Count',
        'Blood Pressure', 'BMI', 'Creatinine', 'Liver Function Test'
    ]
    
    lab_results = []
    completed_appointments = appointments_df[appointments_df['Status'] == 'Completed']
    
    if len(completed_appointments) > 0:
        sample_size = min(n, len(completed_appointments))
        sampled_appointments = completed_appointments.sample(n=sample_size, replace=True)
        
        for idx, row in sampled_appointments.iterrows():
            test_name = random.choice(lab_tests)
            
            # Generate realistic values based on test type
            if test_name == 'Blood Glucose':
                value = round(np.random.normal(100, 20), 1)
                unit = 'mg/dL'
                normal_range = '70-100'
            elif test_name == 'Cholesterol':
                value = round(np.random.normal(200, 40), 1)
                unit = 'mg/dL'
                normal_range = '<200'
            elif test_name == 'Hemoglobin':
                value = round(np.random.normal(14, 2), 1)
                unit = 'g/dL'
                normal_range = '12-16'
            elif test_name == 'White Blood Cell Count':
                value = round(np.random.normal(7, 2), 1)
                unit = 'K/μL'
                normal_range = '4-11'
            elif test_name == 'Blood Pressure':
                systolic = np.random.randint(110, 140)
                diastolic = np.random.randint(70, 90)
                value = f"{systolic}/{diastolic}"
                unit = 'mmHg'
                normal_range = '<120/80'
            elif test_name == 'BMI':
                value = round(np.random.normal(25, 5), 1)
                unit = 'kg/m²'
                normal_range = '18.5-24.9'
            else:
                value = round(np.random.uniform(0.5, 2.0), 2)
                unit = 'mg/dL'
                normal_range = '0.6-1.2'
            
            result_status = 'Normal' if random.random() > 0.3 else random.choice(['High', 'Low', 'Abnormal'])
            
            lab_results.append({
                'LabResultID': f"LAB{str(len(lab_results)+1).zfill(6)}",
                'AppointmentID': row['AppointmentID'],
                'PatientID': row['PatientID'],
                'TestName': test_name,
                'TestValue': value,
                'Unit': unit,
                'NormalRange': normal_range,
                'ResultStatus': result_status,
                'TestDate': row['AppointmentDate']
            })
    
    return pd.DataFrame(lab_results)

# Main execution
if __name__ == "__main__":
    print("Generating healthcare data...")
    
    # Generate all datasets
    print("Generating patients...")
    patients_df = generate_patients(1000)
    
    print("Generating appointments...")
    appointments_df = generate_appointments(patients_df, 5000)
    
    print("Generating diagnoses...")
    diagnoses_df = generate_diagnoses(appointments_df, 3000)
    
    print("Generating medications...")
    medications_df = generate_medications(diagnoses_df, 2000)
    
    print("Generating lab results...")
    lab_results_df = generate_lab_results(appointments_df, 1500)
    
    # Save to CSV files
    print("Saving data to CSV files...")
    patients_df.to_csv('data/patients.csv', index=False)
    appointments_df.to_csv('data/appointments.csv', index=False)
    diagnoses_df.to_csv('data/diagnoses.csv', index=False)
    medications_df.to_csv('data/medications.csv', index=False)
    lab_results_df.to_csv('data/lab_results.csv', index=False)
    
    print("\nData generation complete!")
    print(f"Generated {len(patients_df)} patients")
    print(f"Generated {len(appointments_df)} appointments")
    print(f"Generated {len(diagnoses_df)} diagnoses")
    print(f"Generated {len(medications_df)} medications")
    print(f"Generated {len(lab_results_df)} lab results")
    print("\nFiles saved in the 'data' directory")
