class Product < ApplicationRecord
 belongs_to :brand, class_name: "Brand", foreign_key: "brand_id"
 belongs_to :category, class_name:"Category",foreign_key:"category_id"
end
