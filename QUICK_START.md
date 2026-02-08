# Quick Start Guide

## Option 1: Use Sample Data (Fastest)

Sample CSV files are already included in the `data/` folder:
- `patients_sample.csv`
- `appointments_sample.csv`

You can import these directly into Power BI Desktop to get started immediately!

## Option 2: Generate Full Dataset

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   # or
   pip3 install pandas numpy
   ```

2. **Generate data:**
   ```bash
   python generate_healthcare_data.py
   # or
   python3 generate_healthcare_data.py
   ```

   This will create full datasets with:
   - 1,000 patients
   - 5,000 appointments
   - 3,000 diagnoses
   - 2,000 medications
   - 1,500 lab results

## Next Steps

1. Open Power BI Desktop
2. Import the CSV files from the `data/` folder
3. Follow the setup instructions in `README.md`
4. Add DAX measures from `DAX_Measures.txt`
5. Apply transformations from `PowerQuery_Transformations.txt`
6. Build your dashboard!

## Troubleshooting

**Python not found?**
- Make sure Python 3.7+ is installed
- Try `python3` instead of `python`

**Module not found?**
- Run: `pip install pandas numpy`
- Or: `pip3 install pandas numpy`

**Power BI won't import CSV?**
- Make sure the CSV files are in the `data/` folder
- Check that the file paths don't have special characters
- Try importing one file at a time
