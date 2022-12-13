import { mouse } from './CreaturesTypes/Mouse';
import { rabbit } from './CreaturesTypes/Rabbit';
import { Creature } from './Creature';

interface Creatures {
    rabbit: Creature,
    mouse: Creature,
}

export const enemies: Creatures = {
    rabbit: rabbit,
    mouse: mouse,
}

