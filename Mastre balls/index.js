import 'framesflow'
import Game from './app/src/Game'

const balls = window.balls = new Game('#playground')

balls.start()