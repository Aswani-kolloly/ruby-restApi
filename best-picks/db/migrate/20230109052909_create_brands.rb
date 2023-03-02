class CreateBrands < ActiveRecord::Migration[7.0]
  def change
    create_table :brands, :primary_key =>:brand_id do |t|
      t.string :name,null:false
      t.timestamps
    end
  end
end
