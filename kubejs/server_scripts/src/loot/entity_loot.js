// Entity Loot Tables
ServerEvents.entityLootTables(e => {
    // 月球村民
    e.addEntity('ad_astra:lunarian', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.randomChanceWithLooting(0.4, 0.04)
            pool.addItem('minecraft:emerald')
            pool.addFunction({
                function: 'minecraft:set_count',
                count: {
                    min: 1,
                    max: 3
                }
            })
        })
    })
    // 村民
    e.addEntity('minecraft:villager', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.randomChanceWithLooting(0.4, 0.04)
            pool.addItem('minecraft:emerald')
            pool.addFunction({
                function: 'minecraft:set_count',
                count: {
                    min: 1,
                    max: 3
                }
            })
        })
    })
    // 监守者
    e.addEntity('minecraft:warden', table => {
        table.addPool(pool => {
            pool.rolls = {
                type: 'minecraft:uniform',
                min: 1,
                max: 3
            }
            pool.addItem('minecraft:sculk_catalyst')
            pool.randomChanceWithLooting(0.6, 0.06)
            pool.addFunction({
                function: 'minecraft:set_count',
                count: {
                    min: 0,
                    max: 3
                }
            })
        })
    })
    // 熔岩魔偶
    e.addEntity('ctts:warped_golem', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('ctts:blazing_shard')
            pool.randomChanceWithLooting(0.7, 0.04)
            pool.addFunction({
                function: 'minecraft:set_count',
                count: {
                    min: 2,
                    max: 6
                }
            })
        })
    })
    // 末影人
    e.modifyEntity('enderman', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('ctts:key_fragments')
            pool.addCondition({
                chance: 0.4,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.04
            })
            pool.addFunction({
                function: 'minecraft:set_count',
                count: {
                    min: 0,
                    max: 2
                }
            })
            pool.addCondition({
                condition: 'minecraft:killed_by_player'
            })
        })
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('supplementaries:enderman_head')
            pool.addCondition({
                condition: 'minecraft:damage_source_properties',
                predicate: {
                    tags: [{
                        id: 'minecraft:hotfloorpro',
                        expected: true
                    }]
                }
            })
            pool.randomChance(0.2)
        })
    })
    // 末影龙
    e.modifyEntity('ender_dragon', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('ctts:key_fragments')
            pool.killedByPlayer()
        })
    })
    // 苦力怕
    e.modifyEntity('creeper', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('creeper_head')
            pool.addCondition({
                condition: 'minecraft:damage_source_properties',
                predicate: {
                    tags: [{
                        id: 'minecraft:hotfloorpro',
                        expected: true
                    }]
                }
            })
            pool.randomChance(0.2)
        })
    })
    // 猪灵
    e.modifyEntity('piglin', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('piglin_head')
            pool.addCondition({
                condition: 'minecraft:damage_source_properties',
                predicate: {
                    tags: [{
                        id: 'minecraft:hotfloorpro',
                        expected: true
                    }]
                }
            })
        })
    })
    // 骷髅
    e.modifyEntity('skeleton', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('skeleton_skull')
            pool.addCondition({
                condition: 'minecraft:damage_source_properties',
                predicate: {
                    tags: [{
                        id: 'minecraft:hotfloorpro',
                        expected: true
                    }]
                }
            })
        })
    })
    // 凋零骷髅
    e.modifyEntity('wither_skeleton', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('wither_skeleton_skull')
            pool.addCondition({
                condition: 'minecraft:damage_source_properties',
                predicate: {
                    tags: [{
                        id: 'minecraft:hotfloorpro',
                        expected: true
                    }]
                }
            })
        })
    })
    // 僵尸村民
    e.modifyEntity('zombie_villager', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('soul_sand')
            pool.randomChanceWithLooting(0.03, 0.025)
            pool.killedByPlayer()
        })
    })
    // 僵尸
    e.modifyEntity('zombie', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('soul_sand')
            pool.randomChanceWithLooting(0.03, 0.025)
            pool.killedByPlayer()
        })
    })
    // 溺尸
    e.modifyEntity('drowned', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('soul_sand')
            pool.randomChanceWithLooting(0.03, 0.025)
            pool.killedByPlayer()
        })
    })
})