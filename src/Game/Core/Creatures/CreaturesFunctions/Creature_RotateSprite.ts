import { GameData } from '../../StartData/StartData';
export const creature_RotateSprite = (gameData  : GameData) => {
//console.log(gameData.creatures[0].spriteBox.direction.radian)
/*todo test this and fix bugs*/
   gameData.creatures.forEach(creature => { 
    if (creature.spriteBox.direction.radian < Math.PI /4 ){
        creature.sprite.sprite = creature.sprite.right
    }else if (creature.spriteBox.direction.radian < Math.PI*3/4){ 
          creature.sprite.sprite = creature.sprite.front
    }else if (creature.spriteBox.direction.radian <Math.PI*5/4){ 
           creature.sprite.sprite = creature.sprite.left
    }else if (creature.spriteBox.direction.radian <Math.PI*7/4){
        creature.sprite.sprite = creature.sprite.back
    }else {
        creature.sprite.sprite = creature.sprite.right
    }
   })
}