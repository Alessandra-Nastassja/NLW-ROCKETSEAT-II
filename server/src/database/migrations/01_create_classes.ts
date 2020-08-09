import Knex from 'knex';

// Faço altertações 
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // Relacionamento
        table.integer('users_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// Desfaço alterações
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}