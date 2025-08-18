StartupEvents.registry('entity_type', e => {
    e.create('ctts:warped_golem', 'entityjs:mob')
        .mobCategory('monster')
        .sized(1.5, 4)
        .clientTrackingRange(32)
        .updateInterval(2)
        .isPersistenceRequired(true)
        .repositionEntityAfterLoad(true)
        .immuneTo('minecraft:fire', 'minecraft:lava')
        .fireImmune(true)
        .canBreatheUnderwater(false)
        .isPushable(false)
        .setSummonable(true)
        .shouldDespawnInPeaceful(false)
        .setRenderType("solid")
        .saves(true)
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
        .experienceReward(() => {
            return 20;
        })
    e.create('ctts:bottle', 'entityjs:geckolib_projectile')
        .sized(0.5, 0.5)
        .onHitEntity(en => {
            const { entity, result } = en
            if (result.entity.living) {
                entity.discard()
                let boss_ = (mod, boss) => {
                    if (result.entity.type == mod + ':' + boss && entity.tags.toString().includes(boss))
                        result.entity.addTag('UnProtected')
                }            boss_('twilightforest', 'naga')
                boss_('twilightforest', 'lich')
                boss_('twilightforest', 'minoshroom')
                boss_('twilightforest', 'knight_phantom')
                boss_('twilightforest', 'alpha_yeti')
                boss_('twilightforest', 'ur_ghast')
                boss_('twilightforest', 'snow_queen')
                boss_('minecraft', 'warden')
                boss_('minecraft', 'wither')
            }
        })
        .move(en => {
            en.entity.setDeltaMovement(0, 1, 0)
        })
        .onHitBlock(en => {
            const { entity, result } = en
            entity.discard()
        })
        .item(item => {
            item.maxStackSize(1)
                .canThrow(true)
        })
})