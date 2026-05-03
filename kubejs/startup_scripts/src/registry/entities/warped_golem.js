StartupEvents.registry('entity_type', e => {
    const SpawnPlacementTypes = Java.loadClass('net.minecraft.world.entity.SpawnPlacementTypes')
    const Heightmap = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap')
    e.create('ctts:warped_golem', 'entityjs:mob')
        .mobCategory('monster')
        .sized(2, 4)
        .modelSize(2, 2)
        .clientTrackingRange(32)
        .updateInterval(2)
        //.isPersistenceRequired(true)
        .repositionEntityAfterLoad(true)
        .immuneTo('minecraft:lava')
        .fireImmune(true)
        .canBreatheUnderwater(false)
        .isPushable(false)
        .setSummonable(true)
        //.shouldDespawnInPeaceful(false)
        .setRenderType('solid')
        .saves(true)
        .addAnimationController('controller', 1, event => {
            if (event.moving) {
                event.thenPlay('walk')
            }
            //event.addTriggerableAnimation('attack', 'attack', 'play_once')
            return true
        })
        /*.canAttack(en => {
            en.entity.triggerAnimation('controller', 'attack')
        })*/
        .setDeathSound('minecraft:entity.generic.death')
        .setSoundVolume(1.5)
        .experienceReward(() => {
            return 20;
        })
        .biomeSpawn(['#minecraft:is_nether'], 10, 2, 5)
        .spawnPlacement(SpawnPlacementTypes.ON_GROUND, Heightmap.Types.MOTION_BLOCKING_NO_LEAVES, () => {
            return true
        })
})
EntityJSEvents.createAttributes(e => {
    e.create('ctts:warped_golem', attributes => {
        attributes.add('minecraft:generic.max_health', 40)
        attributes.add('minecraft:generic.attack_damage', 13)
    })
})