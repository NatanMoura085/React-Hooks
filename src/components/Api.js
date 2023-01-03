import React, {useEffect, useState} from 'react';


export default function list(){

useEffect(()=>{

    async function carregando(){
    
        const resposta = await fetch('https://api.github.com/users/NatanMoura085/repos');
        const repository = await resposta.json();

        return repository;
        
    
    }
    carregando();
}, []);

return (
  <>
<h1>{repository}</h1>
  </>
);
}