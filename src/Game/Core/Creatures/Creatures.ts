import { mouse } from './CreaturesTypes/Mouse';
import { rabbit } from './CreaturesTypes/Rabbit';
import { Creature } from './Creature';

interface Creatures {
    rabbit: Creature,
    mouse: Creature,
}

export const creatures: Creature[] = [
     rabbit,
     mouse,
]

