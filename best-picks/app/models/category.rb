class Category < ApplicationRecord
    has_many :products, class_name: "Product", foreign_key: "product_id" 
end
