ServerEvents.blockLootTables(e => {
     // Block Loot Tables
     e.addBlock('ctts:crimson_crystal_ore', loot => {
          loot.addPool(pool => {
               pool.rolls = 1
               pool.addItem('ctts:crimson_crystal_girt')
               pool.addCondition({
                    condition: 'minecraft:survives_explosion'
               })
               pool.addFunction({
                    function: 'minecraft:set_count',
                    count: {
                         type: 'minecraft:uniform',
                         min: 3.0,
                         max: 5.0
                    }
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
               pool.addItem('ctts:crimson_crystal_ore')
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