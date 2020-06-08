import Knex from 'knex';
//K em maiusculo pq é o tipo da variavel

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points'); 
        
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

export async function down(knex: Knex) {
    //VOLTAR ATRAS
    return knex.schema.dropTable('point_items');
}