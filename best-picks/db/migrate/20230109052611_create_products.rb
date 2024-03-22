class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products, :primary_key =>:product_id do |t|
      t.string :link,null:false
      t.string :color,null:false
      t.integer :price,null:false
      t.timestamps
    end
  end
end
