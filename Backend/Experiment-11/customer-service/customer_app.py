from flask import Flask, jsonify
import requests
import os

app = Flask(__name__)

# IMPORTANT: local testing
ORDER_SERVICE_URL = "http://localhost:5002"

customers = {
    101: {"id": 101, "name": "Customer-1", "email": "customer-1@example.com"},
    102: {"id": 102, "name": "Customer-2", "email": "customer-2@example.com"}
}

@app.route("/")
def home():
    return jsonify({"service": "Customer Service Running"})

@app.route("/customers/<int:user_id>/orders")
def get_customer_orders(user_id):
    customer = customers.get(user_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    try:
        response = requests.get(f"{ORDER_SERVICE_URL}/orders/user/{user_id}")
        orders = response.json()
    except:
        orders = []

    return jsonify({
        "customer": customer,
        "orders": orders
    })

if __name__ == "__main__":
    app.run(port=5001)