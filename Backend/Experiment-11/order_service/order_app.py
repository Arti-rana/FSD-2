from flask import Flask, jsonify, request
import os

app = Flask(__name__)

orders = [
    {"id": 1, "user_id": 101, "order_status": "Shipped"},
    {"id": 2, "user_id": 101, "order_status": "Processing"},
    {"id": 3, "user_id": 102, "order_status": "Delivered"}
]

@app.route("/")
def home():
    return jsonify({"service": "Order Service Running"})

@app.route("/orders/user/<int:user_id>")
def get_orders_by_user(user_id):
    user_orders = [o for o in orders if o["user_id"] == user_id]
    return jsonify(user_orders)

@app.route("/orders/<int:order_id>/status", methods=["PUT"])
def update_order_status(order_id):
    data = request.get_json()
    new_status = data.get("order_status")

    for order in orders:
        if order["id"] == order_id:
            order["order_status"] = new_status
            return jsonify(order)

    return jsonify({"error": "Order not found"}), 404

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5002))
    )