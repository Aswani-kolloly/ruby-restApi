class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories, :primary_key => :category_id do |t|
      t.string :title,null:false
      t.timestamps
    end
  end
end
