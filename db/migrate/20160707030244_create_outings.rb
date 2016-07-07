class CreateOutings < ActiveRecord::Migration
  def change
    create_table :outings do |t|
      t.integer :week_number, null: false
      t.integer :season_id, null: false
      t.timestamps null: false
    end

    add_foreign_key :outings, :seasons
  end
end
