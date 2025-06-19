/*EntityJSEvents.addGoalSelectors('kubejs:warped_golem', e => {
    e.panic(1, 0.5)
    e.floatSwim(1)
    e.meleeAttack(4, 1, true)
    e.leapAtTarget(3, 0.4)
    e.waterAvoidingRandomStroll(5, 0.4, 0.8)
    e.lookAtEntity(6, Player, 8, 0.8, false)
    e.randomLookAround(7)
    e.customGoal(
        'attackPlayers',
        2,
        mob => true, // 可以激活的条件
        mob => true, // 可以继续的条件
        true, // 是否需要目标
        mob => { }, // 开始时执行
        mob => { }, // 停止时执行
        true, // 是否需要更新
        mob => {
            let mobAABB = mob.boundingBox.inflate(20) // 检测范围为20格
            mob.level.getEntitiesWithin(mobAABB).forEach(entity => {
                if (entity == null) return
                if (entity.player && entity.distanceToEntity(mob) < 20) {
                    let spawnPos = mob.getSpawnPosition()
                    let distanceFromSpawn = mob.distanceTo(spawnPos.x, spawnPos.y, spawnPos.z)
                    if (distanceFromSpawn <= 50) { // 追击距离不超过50格
                        mob.getNavigation().moveTo(entity.block.x, entity.y, entity.z, 1.0)
                    }
                }
            })
        }
    )
})
EntityJSEvents.addGoals("kubejs:warped_golem", event => {
    let Player = Java.loadClass('net.minecraft.world.entity.player.Player')
    event.nearestAttackableTarget(2, Player, 20, false, false, entity => {
        return entity.age < 500
    })
})
EntityJSEvents.buildBrain('kubejs:warped_golem', event => {
    const activitybehaviors = [
        event.behaviors.animalMakeLove('kubejs:warped_golem', 0.2),
        event.behaviors.followTemptation(entity => {
            return 1;
        }),
        event.behaviors.animalPanic(2)
    ]
    const idlebehaviors = [
        event.behaviors.animalPanic(2)
    ]
    const corebehaviors = [
        event.behaviors.meleeAttack(5)
    ]
    event.addActivity('minecraft:panic', 1, activitybehaviors)
    event.idleActivity(1, idlebehaviors)
    event.coreActivity(1, corebehaviors)
})
EntityJSEvents.buildBrainProvider('kubejs:warped_golem', event => {
    event.addMemory("angry_at")
    event.addSensor('nearest_adult')
})*/