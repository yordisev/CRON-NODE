const cron = require('node-cron');
// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
// ----------------------------------------------------------------------------
// field	value
// second	0-59
// minute	0-59
// hour	0-23
// day of month	1-31
// month	1-12 (or names)
// day of week	0-7 (or names, 0 or 7 are sunday)
// ----------------------------------------------------------------------------
// 0 0 * * * - todos los dias a las 00:00
// 30 18 * * * - todos los dias a las 18:30
// 0 0 * * 0 - todos los domingos a las 00:00
// 0 0 1 * * - primer dia de cada mes
// */15 * * * * - se ejecuta la tarea cada 15 minutos
// 0 9-17 * * * - cada hora entre las 9 am hasta las 5 pm se ejecuta la tarea
// 0 0,12 * * * - desde el minuto 0 hasta el minuto 12 de cada hora se ejecuta la tarea



cron.schedule('*/3 * * * * *',()=>{ // se ejecuta cada 3 segundos
    console.log('se ejecuta cada 3 segundos')
})
cron.schedule('1-5 * * * * *',()=>{ // del segundo 1 hasta el 5 se ejecutara y luego se pausara
    console.log('del segundo 1 hasta el 5 se ejecutara y luego se pausara')
})
cron.schedule('1,20,40,50 * * * * *',()=>{ // se va a ejecutar cuando llegue a cada uno de los segundos especificados
    console.log('se va a ejecutar cuando llegue a cada uno de los segundos especificados')
})
cron.schedule('*/1 * * * *',()=>{ // cada cambio de minuto se ejecuta
    console.log('cada cambio de minuto se ejecuta')
})
