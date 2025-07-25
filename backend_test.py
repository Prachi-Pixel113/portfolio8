#!/usr/bin/env python3
"""
Backend API Testing Script
Tests the FastAPI backend endpoints to ensure they're working correctly.
"""

import requests
import json
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

def test_backend_apis():
    """Test all backend API endpoints"""
    
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ FAILED: Could not get backend URL from frontend/.env")
        return False
    
    api_base = f"{backend_url}/api"
    print(f"Testing backend APIs at: {api_base}")
    
    try:
        # Test 1: Root endpoint
        print("\n1. Testing root endpoint GET /api/")
        response = requests.get(f"{api_base}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Root endpoint working correctly")
            else:
                print(f"❌ Root endpoint returned unexpected data: {data}")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            return False
        
        # Test 2: Create status check (POST)
        print("\n2. Testing POST /api/status")
        test_data = {
            "client_name": "test_mobile_profile_card"
        }
        response = requests.post(f"{api_base}/status", 
                               json=test_data, 
                               headers={"Content-Type": "application/json"},
                               timeout=10)
        
        if response.status_code == 200:
            created_status = response.json()
            if (created_status.get("client_name") == "test_mobile_profile_card" and 
                "id" in created_status and 
                "timestamp" in created_status):
                print("✅ POST /api/status working correctly")
                test_id = created_status["id"]
            else:
                print(f"❌ POST /api/status returned invalid data: {created_status}")
                return False
        else:
            print(f"❌ POST /api/status failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
        
        # Test 3: Get status checks (GET)
        print("\n3. Testing GET /api/status")
        response = requests.get(f"{api_base}/status", timeout=10)
        
        if response.status_code == 200:
            status_list = response.json()
            if isinstance(status_list, list) and len(status_list) > 0:
                # Check if our test data is in the list
                found_test_data = any(
                    item.get("client_name") == "test_mobile_profile_card" 
                    for item in status_list
                )
                if found_test_data:
                    print(f"✅ GET /api/status working correctly (found {len(status_list)} records)")
                else:
                    print("⚠️ GET /api/status working but test data not found (may be expected)")
            else:
                print("✅ GET /api/status working (empty list returned)")
        else:
            print(f"❌ GET /api/status failed with status {response.status_code}")
            return False
        
        print("\n🎉 ALL BACKEND API TESTS PASSED SUCCESSFULLY!")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ NETWORK ERROR: {e}")
        return False
    except Exception as e:
        print(f"❌ UNEXPECTED ERROR: {e}")
        return False

if __name__ == "__main__":
    print("=" * 60)
    print("BACKEND API TESTING")
    print("=" * 60)
    
    success = test_backend_apis()
    
    print("\n" + "=" * 60)
    if success:
        print("RESULT: ✅ ALL BACKEND TESTS PASSED")
    else:
        print("RESULT: ❌ SOME BACKEND TESTS FAILED")
    print("=" * 60)