import Knex from 'knex';

// Faço altertações 
export async function up(knex: Knex){
    return knex.schema.createTable('class_schesule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        // Relacionamento
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// Desfaço alterações
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schesule');
}