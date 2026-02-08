# Healthcare Power BI Dashboard

A comprehensive Power BI dashboard solution for healthcare data analytics, including patient records, appointments, diagnoses, medications, and lab results.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Data Structure](#data-structure)
- [Dashboard Features](#dashboard-features)
- [Files Included](#files-included)
- [Usage Guide](#usage-guide)

## 🎯 Overview

This project provides a complete Power BI dashboard solution for healthcare analytics. It includes:

- Sample healthcare data generator
- Pre-built DAX measures for common healthcare metrics
- Power Query transformation scripts
- Comprehensive documentation

## 📦 Prerequisites

- **Power BI Desktop** (free download from [Microsoft](https://powerbi.microsoft.com/desktop/))
- **Python 3.7+** (for data generation)
- **pandas** and **numpy** Python libraries

## 🚀 Setup Instructions

### Step 1: Generate Sample Data

1. Install required Python packages:
   ```bash
   pip install pandas numpy
   ```

2. Run the data generator script:
   ```bash
   python generate_healthcare_data.py
   ```

   This will create CSV files in the `data/` directory:
   - `patients.csv` - Patient demographic information
   - `appointments.csv` - Appointment records
   - `diagnoses.csv` - Diagnosis records
   - `medications.csv` - Medication prescriptions
   - `lab_results.csv` - Laboratory test results

### Step 2: Create Power BI Dashboard

1. **Open Power BI Desktop**

2. **Import Data:**
   - Click "Get Data" → "Text/CSV"
   - Navigate to the `data/` folder
   - Import all CSV files:
     - `patients.csv`
     - `appointments.csv`
     - `diagnoses.csv`
     - `medications.csv`
     - `lab_results.csv`

3. **Transform Data (Power Query):**
   - For each table, click "Transform Data"
   - Apply transformations from `PowerQuery_Transformations.txt`
   - Key transformations:
     - Add calculated columns (Age Group, Day of Week, etc.)
     - Create Date Table for time intelligence
     - Clean and standardize data types

4. **Create Relationships:**
   - Go to "Model" view
   - Create relationships between tables:
     - `Patients[PatientID]` → `Appointments[PatientID]` (One-to-Many)
     - `Appointments[AppointmentID]` → `Diagnoses[AppointmentID]` (One-to-Many)
     - `Appointments[AppointmentID]` → `LabResults[AppointmentID]` (One-to-Many)
     - `Diagnoses[DiagnosisID]` → `Medications[DiagnosisID]` (One-to-Many)
     - `Date[Date]` → `Appointments[AppointmentDate]` (One-to-Many)

5. **Add DAX Measures:**
   - Go to "Data" view
   - Create a new measure in the appropriate table
   - Copy measures from `DAX_Measures.txt`
   - Key measures to add:
     - Total Appointments
     - Completed Appointments
     - No-Show Rate
     - Total Revenue
     - Average Appointment Cost
     - Total Patients
     - Active Patients (Last 90 Days)
     - And many more...

6. **Build Visualizations:**
   - Create visualizations on the report canvas
   - Suggested dashboard layout:
     - **KPI Cards:** Total Patients, Total Appointments, Total Revenue, No-Show Rate
     - **Charts:** Appointments by Department, Appointments Over Time, Top Diagnoses
     - **Tables:** Patient Demographics, Appointment Details
     - **Filters:** Date Range, Department, Insurance Type

## 📊 Data Structure

### Patients Table
- `PatientID` - Unique patient identifier
- `FirstName`, `LastName` - Patient name
- `Age`, `Gender` - Demographics
- `BloodType` - Blood type
- `InsuranceType` - Insurance category
- `RegistrationDate` - Patient registration date

### Appointments Table
- `AppointmentID` - Unique appointment identifier
- `PatientID` - Foreign key to Patients
- `Department` - Medical department
- `AppointmentType` - Type of appointment
- `AppointmentDate`, `AppointmentTime` - Date and time
- `Duration` - Appointment duration (minutes)
- `Status` - Appointment status (Completed, Cancelled, No-show, Scheduled)
- `Cost` - Appointment cost

### Diagnoses Table
- `DiagnosisID` - Unique diagnosis identifier
- `AppointmentID` - Foreign key to Appointments
- `PatientID` - Foreign key to Patients
- `Diagnosis` - Diagnosis name
- `Severity` - Severity level (Mild, Moderate, Severe, Critical)
- `DiagnosisDate` - Date of diagnosis

### Medications Table
- `MedicationID` - Unique medication identifier
- `PatientID` - Foreign key to Patients
- `DiagnosisID` - Foreign key to Diagnoses
- `MedicationName` - Name of medication
- `Dosage` - Medication dosage
- `Frequency` - Frequency of administration
- `PrescriptionDate` - Date prescribed

### Lab Results Table
- `LabResultID` - Unique lab result identifier
- `AppointmentID` - Foreign key to Appointments
- `PatientID` - Foreign key to Patients
- `TestName` - Name of lab test
- `TestValue` - Test result value
- `Unit` - Unit of measurement
- `NormalRange` - Normal range for test
- `ResultStatus` - Result status (Normal, High, Low, Abnormal)
- `TestDate` - Date of test

## 🎨 Dashboard Feature

### Key Metrics (KPIs)
- Total Patients
- Total Appointments
- Appointment Completion Rate
- No-Show Rate
- Total Revenue
- Average Appointment Cost
- Active Patients (Last 90 Days)

### Visualizations
- **Appointment Trends:** Line chart showing appointments over time
- **Department Analysis:** Bar chart of appointments by department
- **Patient Demographics:** Pie charts for age groups, gender, insurance types
- **Diagnosis Analysis:** Top diagnoses, severity distribution
- **Lab Results:** Abnormal result rates, test trends
- **Revenue Analysis:** Revenue by department, month-over-month growth

### Filters & Slicers
- Date Range
- Department
- Insurance Type
- Appointment Status
- Diagnosis Category

## 📁 Files Included

- `generate_healthcare_data.py` - Python script to generate sample healthcare data
- `DAX_Measures.txt` - Pre-built DAX measures for healthcare metrics
- `PowerQuery_Transformations.txt` - Power Query M scripts for data transformation
- `README.md` - This documentation file
- `data/` - Directory containing generated CSV files

## 💡 Usage Guide

### Customizing the Dashboard

1. **Modify Data Generation:**
   - Edit `generate_healthcare_data.py` to adjust:
     - Number of records
     - Date ranges
     - Custom departments or diagnoses
     - Additional fields

2. **Add Custom Measures:**
   - Create new DAX measures based on your specific requirements
   - Reference existing measures for consistency

3. **Create Custom Visuals:**
   - Use Power BI's built-in visuals
   - Import custom visuals from AppSource if needed
   - Consider using:
     - Gauge charts for KPIs
     - Maps for geographic analysis
     - Waterfall charts for revenue breakdown

### Best Practices

1. **Performance Optimization:**
   - Use calculated columns sparingly (prefer measures)
   - Create aggregations for large datasets
   - Use DirectQuery for very large datasets

2. **Data Refresh:**
   - Set up scheduled refreshes if using Power BI Service
   - Consider incremental refresh for large datasets

3. **Security:**
   - Implement Row-Level Security (RLS) for sensitive healthcare data
   - Use appropriate data classification labels

## 🔒 Data Privacy & Compliance

**Important:** This is sample data for demonstration purposes. When working with real healthcare data:

- Ensure compliance with HIPAA regulations
- Implement proper data anonymization
- Use appropriate security measures
- Follow your organization's data governance policies

## 📝 Notes

- The generated data is synthetic and for demonstration purposes only
- Adjust date ranges in the Python script to match your needs
- The DAX measures can be customized based on your specific requirements
- Consider adding more tables (e.g., providers, facilities) as needed

## 🤝 Contributing

Feel free to extend this dashboard with:
- Additional data tables
- More sophisticated analytics
- Custom visualizations
- Advanced security features

## 📄 License

This project is provided as-is for educational and demonstration purposes.

---

**Happy Dashboard Building! 📊**
