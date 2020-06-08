import Knex from 'knex';
//K em maiusculo pq é o tipo da variavel

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable(); //nome do arquivo da imagem
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    //VOLTAR ATRAS
    return knex.schema.dropTable('items');
}