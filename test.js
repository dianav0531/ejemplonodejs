//importando el repositorio...
//const CustomerRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountRepository')
//const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')

//console.log('probando....')

/*CustomerRepository.create({
name:'Juan',
lastname:'Ferrer',
id: '4321',
email:  'juan@juan.com'
}).then(console.log) //para que el programa espere a que la operacion termine..



async function probandoElBuscar(){
    const cliente = await CustomerRepository.findById('4321')
    console.log(cliente)
}
probandoElBuscar()
.then(console.log('OK')) //para que el programa espere a que la 


//async,siempre que haya un await dentro de una funcion, la funcion debe llevar as
async function probandoElEditar(){
    //await es para que nodejs espere que termine la ejecucion antes
    //de pasar a la siguiente instruccion
await CustomerRepository.edit('4321',{
    name:'jose',
    lastname:'perez',
    })
}

probandoElEditar()
.then(console.log('OK'))//para que el programa espere a que la operación termine..


async function probandoEliminar(){
    await CustomerRepository.delete('4321')
}

probandoEliminar()
.then(console.log('OK')) //para que el programa ...*/

/*AccountRepository.create({
    id:'1234',
    customerid:'123',
    }).then(console.log) //para que el programa espere a que la operacion termine..*/


/*async function probandoListarCuentas(){
    const list = await AccountRepository.listAccountsByCustomer('1234')
    console.log (list)
}

probandoListarCuentas()
.then(console.log('OK'))


async function probandoEliminarCuenta(){
    await AccountRepository.delete('1234')
}

probandoEliminarCuenta()
.then(console.log('OK')) //para que el programa ...*/

/*async function probarCrearCliente(){
    await CustomerService.create({
        id:'2345',
        lastname:'baca',
        name:'fabian',
        email:'fabian@gmail.com'
    })
}

probarCrearCliente().then(console.log('OK'))*/

/*async function probarEditar(){
    await CustomerService.edit('2345',{
        lastname:'Quitian',
        name:'Obdulio',
    })
}

probarEditar().then(console.log('OK'))*/

/*async function probandoEliminar(){
    await CustomerRepository.delete('2233')
}

probandoEliminar()
.then(console.log('OK')) //para que el programa ...*/

/*async function probarBuscar(){
    const Customer = await CustomerService.findCustomer('1234')
    console.log(Customer)
}

probarBuscar().then(console.log('OK'))*/


/*async function probar(){
    const result = await AccountService.listAccountsByCustomer('11223')
    console.log(result)
}

probar().then(console.log('OK'))*/

/*async function probar() {
    const result = await AccountService.create({
        id:'4364',
        customerid:'1234',
    })
    console.log(result)
}

probar().then(console.log('OK'))*/

async function probandoEliminar(){
    await AccountRepository.delete('1234')
}

probandoEliminar()
.then(console.log('OK')) //para que el programa ...