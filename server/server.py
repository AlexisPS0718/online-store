from flask import Flask, request, abort # type: ignore
from flask_cors import CORS # type: ignore
from bson import ObjectId # type: ignore
from config import db
import json

app = Flask(__name__)
CORS(app) # Disables CORS protection

@app.get("/")
def home():
  return "Hello from Flask"

def fix_id(record):
  record["_id"] = str(record["_id"])
  return record

@app.get("/api/products")
def get_products():
  catalog = []
  cursor = db.products.find({})

  for record in cursor:
    fixed_record = fix_id(record)
    catalog.append(fixed_record)

  return json.dumps(catalog)

@app.post("/api/products")
def add_product():
  prod = request.get_json()
  db.products.insert_one(prod)

  return json.dumps(fix_id(prod))

""" @app.get("/api/categories")
def get_categories():
  cats = []
  category = ""
  cursor = db.products.find({})
  
  for record in cursor:
    if "category" in record:
      category = record.get("category")
      if category not in cats:
        cats.append(category)

  return json.dumps(cats) """

@app.get("/api/categories")
def get_categories():
  cats = []
  category = ""
  cursor = db.products.find({})
  
  for record in cursor:
    category = record["category"]
    if category not in cats:
      cats.append(category)

  return json.dumps(cats)

@app.get("/api/products/<product>")
def get_product(product):
  products = []
  cursor = db.products.find({})

  for record in cursor:
    if record["title"] == product:
      fixed_record = fix_id(record)
      products.append(fixed_record)

  if len(products) == 0:
    return abort(404, "Product not found")

  return json.dumps(products)

@app.get("/api/products/<category>")
def get_category(category):
  catalog = []
  cursor = db.products.find({})

  for record in cursor:
    if record["category"] == category:
      fixed_record = fix_id(record)
      catalog.append(fixed_record)

  return json.dumps(catalog)

@app.get("/api/reports/total")
def get_total():
  total = 0
  cursor = db.products.find({})
  
  for record in cursor:
    total += record["price"]

  return json.dumps(total)

@app.delete("/api/products/<id>")
def delete_product(id):
  if not ObjectId.is_valid(id):
    return abort(400, "Invalid ID")

  db_id = ObjectId(id)
  result = db.products.delete_one({"_id": db_id})

  if result.deleted_count == 0:
    return abort(404, "Product not found")
  
  return json.dumps({"deleted": True})

@app.get("/api/coupons")
def get_coupons():
  coupons = []
  cursor = db.coupons.find({})
  
  for record in cursor:
    fixed_record = fix_id(record)
    coupons.append(fixed_record)

  return json.dumps(coupons)

@app.post("/api/coupons")
def add_coupon():
  coupon = request.get_json()
  db.coupons.insert_one(coupon)

  return json.dumps(fix_id(coupon))

""" @app.get("/api/coupons/<code>")
def get_coupon(code):
  cursor = db.coupons.find({})

  for record in cursor:
    if record["code"] == code:
      return json.dumps(fix_id(record))
    else:
      return abort(404, "Coupon not found") """

@app.get("/api/coupons/<code>")
def get_coupon(code):
  coupon = db.coupons.find_one({"code": code})

  if not coupon:
    return abort(404, "Coupon not found")

  return json.dumps(fix_id(coupon))

@app.delete("/api/coupons/<id>")
def delete_coupon(id):
  if not ObjectId.is_valid(id):
    return abort(400, "Invalid ID")

  db_id = ObjectId(id)
  result = db.coupons.delete_one({"_id": db_id})

  if result.deleted_count == 0:
    return abort(404, "Coupon not found")
  
  return json.dumps({"deleted": True})

# app.run(debug = True)