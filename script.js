class Game {
    constructor () {
        this.score = 0
    }
    addChip(value, x, y) {
        const main = document.querySelector('main')
        let chip = new Chip(value, x, y)
        chip.mount(main)
    }
    update() {
        const h1 = document.querySelector('h1')
        h1.textContent = 'Score: '+this.score
    }
    resetGame() {
        const chips = document.querySelectorAll('div')
        chips.forEach(element => {
            element.remove()
        });
        this.score = 0
        this.update()
        for (let i=0 ; i<10 ; i++) {
            const value = Math.ceil(Math.random()*3)
            const x = Math.random()*(innerWidth-100)
            const y = Math.random()*(innerHeight-100)
            this.addChip(value, x, y)
            }
    }
}

class Chip {
    constructor (value, x, y) {
        this.value = value
        this.x = x
        this.y = y
    }
    render() {
        const chip = document.createElement('div')
        if (this.value === 1) { 
            chip.className = 'chip chip--1'
        }
        else if (this.value === 2) { 
            chip.className = 'chip chip--2'
        }
        else if (this.value === 3) { 
            chip.className = 'chip chip--3'
        }
        chip.style.top = this.y+'px'
        chip.style.left = this.x+'px'
        chip.textContent = this.value
        chip.addEventListener('click', () => {
            game.score += this.value 
            game.update()
            chip.remove()
        })
        return chip
    }
    mount(parent) {
        this.element = this.render()
        parent.appendChild(this.element)
    }
}

const game = new Game()
game.resetGame()

const buttonReset = document.querySelector('.reset')
buttonReset.addEventListener('click', () => {
    game.resetGame()
})


