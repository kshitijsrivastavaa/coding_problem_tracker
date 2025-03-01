# Core Files

## 1. pyproject.toml
```python
[project]
name = "coding-problem-tracker"
version = "0.1.0"
description = "A Flask-based coding problem tracker"
requires-python = ">=3.11"
dependencies = [
    "email-validator>=2.2.0",
    "flask-login>=0.6.3",
    "flask>=3.1.0",
    "flask-sqlalchemy>=3.1.1",
    "gunicorn>=23.0.0",
    "psycopg2-binary>=2.9.10",
    "flask-wtf>=1.2.2",
    "flask-bcrypt>=1.0.1",
    "sqlalchemy>=2.0.38",
]
```

## 2. extensions.py
```python
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.session_protection = "strong"
```

## 3. models.py
```python
from flask_login import UserMixin
from extensions import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    problems = db.relationship('Problem', backref='author', lazy=True)

class Problem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(200), nullable=False)
    difficulty = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(50), nullable=False)
    tag = db.Column(db.String(100))
```

## 4. main.py
```python
import os
import logging
from flask import Flask, render_template, redirect, url_for, flash, request, session, jsonify
from flask_login import login_user, logout_user, login_required, current_user

from extensions import db, bcrypt, login_manager
from models import User, Problem

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key")

# Configure database with SSL and connection pooling
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_size": 5,
    "max_overflow": 2,
    "pool_timeout": 30,
    "pool_recycle": 300,
    "pool_pre_ping": True,
    "connect_args": {
        "sslmode": "require"
    }
}
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize extensions with app
db.init_app(app)
bcrypt.init_app(app)
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def home():
    return render_template('home.html', dark_mode=session.get('dark_mode', True))

@app.route('/toggle_theme')
def toggle_theme():
    session['dark_mode'] = not session.get('dark_mode', True)
    return redirect(request.referrer or url_for('home'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))

    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        if User.query.filter_by(email=email).first():
            flash('Email already registered', 'danger')
            return redirect(url_for('register'))

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(username=username, email=email, password=hashed_password)
        db.session.add(user)
        db.session.commit()

        flash('Registration successful! Please login.', 'success')
        return redirect(url_for('login'))

    return render_template('register.html', dark_mode=session.get('dark_mode', True))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        user = User.query.filter_by(email=email).first()

        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('dashboard'))
        else:
            flash('Invalid email or password', 'danger')

    return render_template('login.html', dark_mode=session.get('dark_mode', True))

@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have been logged out', 'info')
    return redirect(url_for('home'))

@app.route('/dashboard')
@login_required
def dashboard():
    problems = Problem.query.filter_by(user_id=current_user.id).all()
    return render_template('dashboard.html', 
                         problems=problems,
                         dark_mode=session.get('dark_mode', True))

@app.route('/add_problem', methods=['POST'])
@login_required
def add_problem():
    title = request.form.get('title')
    difficulty = request.form.get('difficulty')
    status = request.form.get('status')
    tag = request.form.get('tag')

    problem = Problem(
        user_id=current_user.id,
        title=title,
        difficulty=difficulty,
        status=status,
        tag=tag
    )

    db.session.add(problem)
    db.session.commit()
    flash('Problem added successfully!', 'success')
    return redirect(url_for('dashboard'))

@app.route('/update_problem/<int:problem_id>', methods=['POST'])
@login_required
def update_problem(problem_id):
    problem = Problem.query.get_or_404(problem_id)
    if problem.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403

    problem.status = request.form.get('status')
    db.session.commit()
    return redirect(url_for('dashboard'))

@app.route('/delete_problem/<int:problem_id>', methods=['POST'])
@login_required
def delete_problem(problem_id):
    problem = Problem.query.get_or_404(problem_id)
    if problem.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403

    db.session.delete(problem)
    db.session.commit()
    flash('Problem deleted successfully!', 'success')
    return redirect(url_for('dashboard'))

@app.route('/stats')
@login_required
def stats():
    problems = Problem.query.filter_by(user_id=current_user.id).all()
    stats_data = {
        'difficulty': {
            'Easy': len([p for p in problems if p.difficulty == 'Easy']),
            'Medium': len([p for p in problems if p.difficulty == 'Medium']),
            'Hard': len([p for p in problems if p.difficulty == 'Hard'])
        },
        'status': {
            'Todo': len([p for p in problems if p.status == 'Todo']),
            'In Progress': len([p for p in problems if p.status == 'In Progress']),
            'Completed': len([p for p in problems if p.status == 'Completed'])
        }
    }
    return render_template('stats.html', 
                         stats=stats_data,
                         dark_mode=session.get('dark_mode', True))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)
```
