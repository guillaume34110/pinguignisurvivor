import {GameData} from "../../../Core/StartData/StartData";

export default function Projectile() {
    return `<div class="projectile-empty"></div>`
}

const projectileState: number[] = []

const projectileCreation = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile, index) => {
        if (!projectileState.includes(projectile.id)) {
            const emptyProjectile: HTMLDivElement | null = document.querySelector('.projectile-empty')
            if (emptyProjectile !== null) {
                emptyProjectile.id = 'projectile-' + projectile.id.toString()
                emptyProjectile.classList.remove('projectile-empty')
                emptyProjectile.classList.add('projectile')
                projectileState.push(projectile.id)

            }
        }
    })
}

const projectileDestruction = (gameData: GameData) => {
    const currentProjectileIds = gameData.heroProjectiles.map((projectile) => {
        return projectile.id
    })

    projectileState.forEach((projectile, index) => {
        if (!currentProjectileIds.includes(projectile)) {
            const projectileToDestroy: HTMLDivElement | null = document.querySelector(`#projectile-${projectile}`)
            if (projectileToDestroy !== null) {
                projectileToDestroy.id = ''
                projectileToDestroy.classList.remove('projectile')
                projectileToDestroy.classList.add('projectile-empty')
                projectileState.splice(index, 1)
            }
        }
    })
}

const projectileUpdate = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile, index) => {
        const targetProjectile: HTMLDivElement | null = document.querySelector(`#projectile-${projectile}`)
        if (targetProjectile) {
            targetProjectile.style.left = projectile.spriteBox.x + 'px'
            targetProjectile.style.top = projectile.spriteBox.y + 'px'
        }
    })
}

export const projectileRefresh = (gameData: GameData) => {
    projectileCreation(gameData)
    projectileDestruction(gameData)
    projectileUpdate(gameData)
}

