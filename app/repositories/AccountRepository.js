const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.create = (Id) => {
    return DB('accounts').insert(Id)
}

AccountRepository.listAccountsByCustomer = (id) => {
    return DB('accounts').where({customerid: id}).select('*')
}


AccountRepository.delete = (id) => {
    return DB('accounts').where( { id: id }).del()
}

AccountRepository.findById = (id) =>{
    return DB('accounts').where({id: id}).select('*')
}

AccountRepository.withdraw = (account) =>{
    return DB('accounts').where({id: account.id}).update(account)
}

AccountRepository.deposit = (account) =>{
    return DB('accounts').where({id: account.id}).update(account)
}

AccountRepository.transaction = (account) =>{
    return DB('accounts').where({id: account.id}).update(account)
}