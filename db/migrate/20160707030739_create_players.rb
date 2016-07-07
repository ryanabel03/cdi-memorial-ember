class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.text :email
      t.string :phone_number
      t.timestamps null: false
    end
  end
end
