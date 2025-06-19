StartupEvents.registry('entity_type', event => {
    event.create('warped_golem', 'entityjs:mob')
        .mobCategory('monster')
        .sized(1.5, 4)
        .clientTrackingRange(32)
        .updateInterval(2)
        .isPersistenceRequired(true)
        .immuneTo('minecraft:fire', 'minecraft:lava')
        .fireImmune(true)
        .canBreatheUnderwater(false)
        .isPushable(false)
        .setSummonable(true)
        .shouldDespawnInPeaceful(false)
        .setRenderType("solid")
        .addAnimationController('controller', 1, event => {
            if (event.entity.hurtTime > 0) {
                event.thenPlayAndHold('hurt');
            } else if (event.entity.swinging) {
                event.thenPlayAndHold('attack');
            } else {
                event.thenLoop('idle');
            }
            return true;
        })
        .setDeathSound('minecraft:entity.generic.death')
        .setSoundVolume(1.5)
})