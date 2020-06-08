import Knex from 'knex';
//K em maiusculo pq é o tipo da variavel

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable(); //nome do arquivo da imagem
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) {
    //VOLTAR ATRAS
    return knex.schema.dropTable('points');
}