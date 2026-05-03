StartupEvents.registry('entity_type', e => {
    e.create('ctts:bottle', 'entityjs:geckolib_projectile')
        .sized(0.5, 0.5)
        .onHitEntity(en => {
            const { entity, result } = en
            if (result.entity.living) {
                entity.discard()
                let boss_ = (mod, boss) => {
                    if (result.entity.type == mod + ':' + boss && entity.tags.toString().includes(boss))
                        result.entity.addTag('UnProtected')
                }
                boss_('twilightforest', 'naga')
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
            item.canThrow(true).unstackable()
        })
})