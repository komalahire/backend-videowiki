const knex=require("./connection")


knex.schema.createTable('register', (table) => {
    table.increments('user_id')
    table.string('username'),
    table.string('email').unique(), 
    table.string('password')
})
.then(() => {
        console.log("table created")
    })
.catch((err) => { console.log(err); throw err 
})


knex.schema.hasTable('home_post').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('home_post', function (table) {
            table.increments('post_id').primary();
            table.integer('user_id')
            table.string("caption") 
            table.string('post_url')
        })
    } else {
        console.log('Like&dislike__table ALREADY EXIST!');

    }
})
 