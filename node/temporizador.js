const schedule = require('node-schedule')

// A cada 5 segundos, qualquer minuto, as 0 horas, qualquer dia, qualquer mes, terça feira
const tarefa1 = schedule.scheduleJob('*/5 * 0 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule() // Criando regra
regra.dayOfWeek = [new schedule.Range(1, 5)] // Dia da semana
regra.hour = 0
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})