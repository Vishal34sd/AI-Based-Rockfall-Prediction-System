import pandas as pd
import requests
import os

# Example: Read new data from a CSV file (replace with your actual file path)
NEW_DATA_CSV = "new_sensor_data.csv"
MAIN_DATA_CSV = "rockfall_dataset_10k_BALANCED.csv"

def fetch_new_data_from_csv():
    if os.path.exists(NEW_DATA_CSV):
        new_data = pd.read_csv(NEW_DATA_CSV)
        print(f"Loaded {len(new_data)} new records from {NEW_DATA_CSV}")
        return new_data
    else:
        print("No new data file found.")
        return pd.DataFrame()

# Example: Fetch new data from an API endpoint (replace with your actual API)
def fetch_new_data_from_api():
    url = "https://your-sensor-api.com/data"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        new_data = pd.DataFrame(data)
        print(f"Loaded {len(new_data)} new records from API")
        return new_data
    except Exception as e:
        print("API fetch failed:", e)
        return pd.DataFrame()

def append_to_main_dataset(new_data):
    if new_data.empty:
        print("No new data to append.")
        return
    if os.path.exists(MAIN_DATA_CSV):
        main_df = pd.read_csv(MAIN_DATA_CSV)
        combined = pd.concat([main_df, new_data], ignore_index=True)
        combined.to_csv(MAIN_DATA_CSV, index=False)
        print(f"Appended new data. Main dataset now has {len(combined)} records.")
    else:
        new_data.to_csv(MAIN_DATA_CSV, index=False)
        print(f"Created new main dataset with {len(new_data)} records.")

if __name__ == "__main__":
    # Choose one of the following:
    new_data = fetch_new_data_from_csv()
    # new_data = fetch_new_data_from_api()
    append_to_main_dataset(new_data)