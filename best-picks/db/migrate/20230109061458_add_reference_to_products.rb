class AddReferenceToProducts < ActiveRecord::Migration[7.0]
  def change
    add_reference :products, :brand, index:true
    add_foreign_key :products,:brands,primary_key: :brand_id,on_delete: :restrict #newly added, isn't tested.
    add_reference :products, :category, index:true
    add_foreign_key :products,:categories,primary_key: :category_id,on_delete: :restrict
  end
end
