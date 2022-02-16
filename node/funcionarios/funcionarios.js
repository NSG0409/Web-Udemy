const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'M'
const menorSalario = (f, fAtual) => {
    return f.salario < fAtual.salario ? f : fAtual
} 

const teste = axios.get(url).then(response => {
    const funcionarios = response.data
    
    // Mulher chinesa com menor salário
    const funcionarioSelecionado = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(funcionarioSelecionado)
})