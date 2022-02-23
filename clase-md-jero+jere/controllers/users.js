const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { profile } = require('console');

const userDBPath = path.resolve(__dirname,'../data/users.json');
console.log(userDBPath);
const userDB =JSON.parse(fs.readFileSync(userDBPath,"utf8"));




const controlador ={
    register:(req,res)=>{
    return  res.render('register-form');
    },
    storeUser:(req,res)=>{

//Para generar id
const generateID = () => {
    // 1. Obtenemos el último producto almacenado en la DB
    const lastUser = userDB[userDB.length - 1];

    
    if(lastUser !== undefined){
        // 2. Obtenemos el ID de ese último producto
        const lastID = lastUser.id;
        // 3. Retornamos ese último ID incrementado en 1
        return lastID + 1;
    }
    
    return 1;
} 


        const newUser={ 
            id:generateID(),
            fullName:req.body.fullName,
            password:bcryptjs.hashSync(req.body.password,10),
            email:req.body.email
        }

        userDB.push(newUser);
        fs.writeFileSync(userDBPath, JSON.stringify(userDB,null," "));
        return res.redirect('/users/login');
    },

    login:(req,res)=>{
        res.render('login-form');
    },
    proccessLogin:(req,res)=>{
        // 1. Buscar al usuario por mail
        const userToLogin =userDB.find(oneUser => oneUser.email === req.body.email);

        // 2. Si el usuario no existe
        if(userToLogin === undefined){
            res.send('El usuario no existe');
        }

        //3. Si el usuario SI existe
        if(userToLogin !== undefined){
            //3.1 Verificar que las contraseñas coincidan
            const isPassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
            // 3.2 Cuando las contraseñas no coinciden
            if(!isPassword){
                res.send('Las contraseñas no coinciden');
            }

            // 3.3 Cuando las credenciales estan ok

            return res.redirect('profile');
        } 
    }
}


module.exports = controlador;