const fs = require("fs");
const path = require('path');
const usuarios = []
const Users ={

    create:(req, res) => {
          res.render('cadastro')
      },
  
      store:(req, res)=> {
          let {nome, email, senha} = req.body;
  
          //Adicionando usuario ainda sem conexao com o DB
          usuarios.push = ({
              nome:nome,
              email: email,
              telefone:tefone,
              senha:password
          })
          res.redirect('/')
      },
      showLogin:(req, res)=>{
          res.render('login');
  
      },
      editById: (req, res)=>{
          let id= req.params.id;
          // procurando no DB
          let usuario = usuarios.find((usuario) =>{return usuario.id == id} )
          res.render("editar-perfil",{usuario}) 
  
      },
      editByName:(req, res)=>{
          let nome = req.params.nome
          let usuario = usuarios.find((usuario) =>{return usuario.nome == nodemon} )
          res.render("editar-perfil",{usuario}) 
      },
  
      delete: (req, res)=>{
          const idParam = req.params.id
          //busca do usuario no DB
        },
      login:(req, res)=>{
          let{email, senha} = req.body;
          //busca do usuario no DB
          let user = usuarios.find(
              user => (user.email == email && user.senha == senha)
          
          );
          if(user){req.session.user = user
          return res.redirect ("/perfil")
         }else{
             return res.redirect("login");
         }
  
      
      }
  
  
  
  }
  
  module.exports = Users;