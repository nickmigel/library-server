const db = require('../../data/dbConfig')

module.exports = {
    add,
    findId,
    updatePassword,
    deleteAcc,
    findBy
}

async function add(user) {
    const [id] = await db('user').insert(user)

    return findId(id)
}

function findId(id) {
    return db('user')
        .where({ id })
        .first()
}

function updatePassword(id, pass) {
    return db('user')
        .where({ id })
        .update({ password: pass })
}

function deleteAcc(id) {
    return db('user')
        .where({ id })
        .del()
}

function findBy(filter) {
    return db('user').where(filter)
}