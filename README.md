# Coding Problem Tracker 📈

A web-based tool to **track coding problems**, **log solutions**, and **analyze performance** over time.

---

## 📸 Screenshots

### 🏠 Dashboard
(https://github.com/kshitijsrivastavaa/coding_problem_tracker/blob/main/pictures/dashboard.png)
<img src="https://raw.githubusercontent.com/kshitijsrivastavaa/coding_problem_tracker/main/pictures/dashboard.png" width="100%">

### 📝 Problem Submission
![Problem Submission](images/submit_problem.png)

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

## 🔗 Live Demo
{{ https://github.com/kshitijsrivastavaa/coding_problem_tracker/issues/1 }}

---

## 📜 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contribution Guidelines
1. Fork the repository.
2. Clone your fork: `git clone https://github.com/kshitij/Coding_Problem_Tracker.git`
3. Create a feature branch: `git checkout -b feature-new-functionality`
4. Make changes & commit: `git commit -m "Added new feature"`
5. Push to your fork & create a pull request.

---

## 🛡 Security Policy
For any security vulnerabilities, please report them to **Kshitij Srivastava** at [your-email@example.com].
