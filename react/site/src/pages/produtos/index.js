import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'

import {useState, useEffect } from 'react'

import Api from '../../service/api';
const api = new Api();



export default function Index() {

    const [alunos, setAlunos ] = useState([]);

    async function listar() {
        let r = await api.listar();
        console.log(r);
        setAlunos(r);
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                
            <div class="body-right-box">
                <div class="new-produto-box">
                    <div class="text-new-produto">
                        <div class="bar-new-produto"></div>
                        <div class="text-new-produto">Novo Produto</div>
                    </div>
                    <div class="input-new-prudto"> 
                        <div class="input-left">
                           <div class="agp-input"> 
                            
                            <div class="name-produto"> Nome: </div>  
                            <div class="input"> <input /> </div>  
                        </div> 
                        <div class="agp-input">
                            <div class="categoria-produto"> Categoria: </div>  
                            <div class="input"> <input /> </div> 
                        </div>
                        
                        <div class="agp-input">
                            <div class="avaliacao-produto"> Avaliação: </div>  
                            <div class="input"> <input /> </div> 
                        </div>

                        
                        <div class="input-right">
                            <div class="agp-input">
                                <div class="preco-de"> Preço DE: </div>  
                                <div class="textarea"> <input /> </div> 
                               
                            </div>
                            <div class="agp-input">
                                <div class="preco-por">Preço POR: </div>  
                                <div class="textarea"> <input /> </div> 
                               
                            </div>
                            <div class="agp-input">
                                <div class="estoque"> Estoque: </div>  
                                <div class="textarea"> <input /> </div> 
                               
                            </div>
                        </div>
                        
                        <div class="agp-input">
                            <div class="textarea"> Link Imagem: </div>  
                            <div class="input"> <input /> </div> 
                           
                        </div>
                        <div class="agp-input">
                            <div class="descricao-produto"> Descrição: </div>  
                            <div class="textarea"> <textarea> </textarea>  </div> 
                           
                        </div>

                        <div class="button-create"> <button> Cadastrar </button> </div>
                    </div>
                </div>
    
                <div class="produtos-registered-box">
                    <div class="row-bar"> 
                        <div class= "bar-new-produtp"> </div>
                        <div class="text-registered-produto">Produtos Cadastrado</div>
                    </div>
                
                    <table class ="table-user">
                        <thead>
                            <tr>
                                <th > ID </th>
                                <th> Produto </th>
                                <th> Categoria </th>
                                <th> Preço </th>
                                <th> Estoque </th>
                                <th class="a"> </th>
                                <th class="a"> </th>
                            </tr>
                        </thead>
                
                        <tbody>
                            <tr >
                                <td> 1 </td>
                                <td> Esfera do Dragão</td>
                                <td> Acessórios </td>
                                <td> R$ 15,56 </td>
                                <td > 14 </td>
                                <td> <button> <img src="../react/site/public/assets/images/edit.svg" alt="" /> </button> </td>
                                <td class = "aa">   <button> <img src="../react/site/public/assets/images/trash-2.svg" alt="" /> </button> </td>
                            </tr>
    
                            
                            
                        </tbody> 
    
                    </table>
              
                </div>
            </div>
        </div>
            </Conteudo>
        </Container>
    )
}
