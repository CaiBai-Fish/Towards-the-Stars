StartupEvents.registry('minecraft:mob_effect', e => {
    e.create('ctts:dragon_breath_resistance')
        .beneficial()
        .createObject()
})