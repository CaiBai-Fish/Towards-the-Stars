let $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
StartupEvents.registry('potion', e => {
    let PotionBuilder = Java.loadClass('dev.latvian.mods.kubejs.misc.PotionBuilder')
    let effect = 'ctts:dragon_breath_resistance'
    e.createCustom('ctts:dragon_breath_resistance', () => {
        return new PotionBuilder('ctts:dragon_breath_resistance')
            .effect(effect, 3600, 0)
            .addEffect(new $MobEffectInstance('regeneration', 100, 1))
            .addEffect(new $MobEffectInstance('absorption', 2400))
            .createObject()
    })
    e.createCustom('ctts:long_dragon_breath_resistance', () => {
        return new PotionBuilder('ctts:long_dragon_breath_resistance')
            .effect(effect, 4800, 0)
            .addEffect(new $MobEffectInstance('regeneration', 160, 1))
            .addEffect(new $MobEffectInstance('absorption', 3000))
            .createObject()
    })
    e.createCustom('ctts:strong_dragon_breath_resistance', () => {
        return new PotionBuilder('ctts:strong_dragon_breath_resistance')
            .effect(effect, 7200, 0)
            .addEffect(new $MobEffectInstance('regeneration', 400, 1))
            .addEffect(new $MobEffectInstance('absorption', 2400, 3))
            .addEffect(new $MobEffectInstance('fire_resistance', 6000))
            .addEffect(new $MobEffectInstance('resistance', 6000))
            .createObject()
    })
})