import {GameData} from "../../../Core/StartData/StartData";

export default function EnemyComp() {
    return  `<div class="enemy-empty animation"></div>`
}

const enemiesState: number[] = []

const enemiesCreation = (gameData: GameData) => {
    gameData.enemies.forEach((enemy, index) => {
        if (!enemiesState.includes(enemy.id)) {
            const emptyEnemy: HTMLDivElement | null = document.querySelector('.enemy-empty')
            if (emptyEnemy !== null) {
                emptyEnemy.id = 'enemy-' + enemy.id.toString()
                emptyEnemy.classList.remove('enemy-empty')
                emptyEnemy.classList.add('enemy')
                emptyEnemy.classList.add(enemy.sprite.sprite)
                enemiesState.push(enemy.id)
            }
        }
    })
}

const enemiesDestruction = (gameData: GameData) => {
    const currentEnemiesIds = gameData.enemies.map((enemy) => {
        return enemy.id
    })

    enemiesState.forEach((enemy, index) => {
        if (!currentEnemiesIds.includes(enemy)) {
            const enemyToDestroy: HTMLDivElement | null = document.querySelector('#enemy-'+ enemy.toString())
            if (enemyToDestroy !== null) {
                enemyToDestroy.id = ''
                enemyToDestroy.classList.remove('enemy')
                enemyToDestroy.classList.add('enemy-empty')
                enemiesState.splice(index, 1)
            }
        }
    })
}

const enemiesUpdate = (gameData: GameData) => {
    gameData.enemies.forEach((enemy, index) => {
        const targetEnemy: HTMLDivElement | null = document.querySelector('#enemy-'+ enemy.id.toString())
        if (targetEnemy) {
 targetEnemy.style.left = enemy.spriteBox.x + 'px'
            targetEnemy.style.top = enemy.spriteBox.y + 'px'

            if (targetEnemy.classList.contains("rabbit-right")) {
                targetEnemy.style.transform = "scaleX(-1) rotateX(270deg) translateY( -80px) "//+ "translateX(" + enemy.spriteBox.x + "px)" + "translateZ(" + enemy.spriteBox.y + "px)"
            } else targetEnemy.style.transform = "rotateX(270deg) translateY(-80px) "//+ "translateX(" + enemy.spriteBox.x + "px)" + "translateZ(" + enemy.spriteBox.y + "px)"
        }
    })
}

export const enemyRefresh = (gameData: GameData) => {
    enemiesCreation(gameData)
    enemiesDestruction(gameData)
    enemiesUpdate(gameData)
}




// const enemyRef = useRef<HTMLDivElement | null>(null)
//
// useEffect(() => {
//     if (enemyRef && enemyRef.current) {
//         enemyRef.current.style.left = enemyData.spriteBox.x + 'px'
//         enemyRef.current.style.top = enemyData.spriteBox.y + 'px'
//     }
// }, [enemyData.spriteBox.x, enemyData.spriteBox.y])
