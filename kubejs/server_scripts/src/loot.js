ServerEvents.blockLootTables(e => {
     e.addBlock('kubejs:crimson_crystal_ore', loot => {
          loot.addPool(pool => {
               pool.rolls = 1
               pool.addItem('kubejs:crimson_crystal')
               pool.addCondition({
                    condition: 'minecraft:survives_explosion'
               })
               pool.addFunction({
                    function: 'minecraft:apply_bonus',
                    enchantment: 'minecraft:fortune',
                    formula: 'minecraft:ore_drops'
               })
               pool.addFunction({
                    function: 'minecraft:explosion_decay'
               })
          })
          loot.addPool(pool => {
               pool.rolls = 1
               pool.addItem('kubejs:crimson_crystal_ore')
               pool.addCondition({
                    condition: 'minecraft:match_tool',
                    predicate: {
                         enchantments: [
                              {
                                   enchantment: 'minecraft:silk_touch',
                              }
                         ]
                    }
               })
          })
     })
})