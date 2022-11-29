import { mouse } from './EnemiesTypes/Mouse';
import { rabbit } from './EnemiesTypes/Rabbit';
import { Enemy } from './Enemy';

interface Enemies {
    rabbit: Enemy,
    mouse: Enemy,
}

export const enemies: Enemies = {
    rabbit: rabbit,
    mouse: mouse,
}

