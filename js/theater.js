/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.8, accuracy: 0.6 })
  .addActor('luke')
  .addScene('vader:Um espaço compartilhado', 600)
  .addScene('luke:Em São José dos Campos', 600)
  .addScene('luke:Venha conferir!', 400)
  .addScene('luke:Interaja com outros profissionais!', 700)
  .addScene('luke:Venha tomar um café!', 600)
  .addScene('luke:Seja um coworker!', 400)
  .addScene('luke:Seja um kiwi!', 400)
  .addScene(theater.replay.bind(theater))