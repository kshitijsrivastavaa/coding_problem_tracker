# Coding Problem Tracker 📈

A web-based tool to **track coding problems**, **log solutions**, and **analyze performance** over time.

---

## 📸 Screenshots
<p align="center">
  <img src="https://raw.githubusercontent.com/kshitijsrivastavaa/coding_problem_tracker/main/pictures/Gif.gif" width="80%" style="border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);">
</p>

### 📝 Login Page
<p align="center">
  <img src="https://raw.githubusercontent.com/kshitijsrivastavaa/coding_problem_tracker/main/pictures/login.png" width="60%" style="border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);">
</p>

### 🏠 Dashboard
<p align="center">
  <img src="https://raw.githubusercontent.com/kshitijsrivastavaa/coding_problem_tracker/main/pictures/dashboard.png" width="60%" style="border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);">
</p>

---

## 🚀 Features
✔ **User Authentication** - Register, login, and logout securely.  
✔ **Multiple Users** - Supports multiple users logging in, logging out, and registering independently.  
✔ **Problem Tracking** - Users can add coding problems they have solved.  
✔ **Difficulty Levels** - Categorize problems as **Easy, Medium, or Hard**.  
✔ **Custom Test Cases** - Users can add **custom test cases** to validate solutions.  
✔ **Delete Problems** - Users can delete problems they no longer need.  
✔ **Analytics & Charts** - Visualize progress and difficulty distribution using charts.  
✔ **Local System Use** - Runs locally for personal tracking.  

---

## 📸 Screenshots
<p align="center">
  <img src="https://raw.githubusercontent.com/kshitijsrivastavaa/coding_problem_tracker/main/pictures/Gif.gif" width="80%" style="border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);">
</p>

---

## 🔗 Live Demo
{{ https://github.com/kshitijsrivastavaa/coding_problem_tracker/issues/1 }}

---

## 🔐 Authentication (Local Use Only)
- Users can **log in and log out** within their system.
- This is not a public API; it runs only on the local machine.

### 🛠 API Endpoints (For Local Use)
| Endpoint         | Method | Description                  |
|-----------------|--------|------------------------------|
| `/register`     | POST   | Register a new user |
| `/login`        | POST   | User login (requires email & password) |
| `/logout`       | GET    | Logs out the current user |
| `/problems`     | GET    | Fetch all stored coding problems |
| `/problems/add` | POST   | Add a new coding problem |
| `/problems/delete/:id` | DELETE | Remove a coding problem |

- **Note:** This API is **not hosted publicly** and runs only when the project is executed locally.

---

## 🛠 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kshitij/Coding_Problem_Tracker.git
cd Coding_Problem_Tracker
```

### 2️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Run the Application
```bash
python main.py
```

### 4️⃣ Access the API
- Open `http://127.0.0.1:5000/` in your browser.

---

## 📜 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contribution Guidelines
Fork the repository.
Clone your fork: git clone https://github.com/kshitij/Coding_Problem_Tracker.git
Create a feature branch: git checkout -b feature-new-functionality
Make changes & commit: git commit -m "Added new feature"
Push to your fork & create a pull req is this correct for ream e file if need change than make a change 
---

## 🛡 Security Policy
For any security vulnerabilities, please report them to **Kshitij Srivastava** at (kshitij.srivastava16@gmail.com).
