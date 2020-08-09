import Knex from 'knex';

// Faço altertações 
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        // Relacionamento
        table.integer('users_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

// Desfaço alterações
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}