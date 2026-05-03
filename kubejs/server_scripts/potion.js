MoreJS.registerPotionBrewing(e => {
    // 抗龙息药水
    e.addPotionBrewing('golden_apple', 'minecraft:awkward', 'ctts:dragon_breath_resistance')
    e.addPotionBrewing('redstone', 'ctts:dragon_breath_resistance', 'ctts:long_dragon_breath_resistance')
    e.addPotionBrewing("golden_apple", 'ctts:long_dragon_breath_resistance', 'ctts:strong_dragon_breath_resistance')

    // 破伤药水
    e.addCustomBrewing('minecraft:dragon_breath', 'minecraft:potion[potion_contents={potion:"minecraft:water"}]', 'ctts:bottle')
    e.addCustomBrewing('twilightforest:steeleaf_ingot', 'ctts:bottle', Item.of('ctts:bottle', { custom_data: { tier: 'naga' }, custom_model_data: 1, custom_name: { translate: 'item.ctts.bottle.naga', italic: false } }))
    e.addCustomBrewing('twilightforest:naga_scale', 'ctts:bottle', Item.of('ctts:bottle', { custom_data: { tier: 'lich' }, custom_model_data: 2, custom_name: { translate: 'item.ctts.bottle.lich', italic: false } }))
    e.addCustomBrewing('minecraft:red_mushroom_block', 'ctts:bottle', Item.of('ctts:bottle', { custom_data: { tier: 'minoshroom' }, custom_model_data: 3, custom_name: { translate: 'item.ctts.bottle.minoshroom', italic: false } }))
    e.addCustomBrewing('twilightforest:armor_shard', 'ctts:bottle', Item.of('ctts:bottle', { custom_data: { tier: 'knight_phantom' }, custom_model_data: 4, custom_name: { translate: 'item.ctts.bottle.knight_phantom', italic: false } }))
    e.addCustomBrewing('twilightforest:arctic_fur', 'ctts:bottle', Item.of('ctts:bottle', { custom_data: { tier: 'alpha_yeti' }, custom_model_data: 5, custom_name: { translate: 'item.ctts.bottle.alpha_yeti', italic: false } }))
    e.addCustomBrewing('twilightforest:carminite', 'ctts:bottle', Item.of('ctts:bottle', { custom_data: { tier: 'ur_ghast' }, custom_model_data: 6, custom_name: { translate: 'item.ctts.bottle.ur_ghast', italic: false } }))
    e.addCustomBrewing('minecraft:fire_charge', 'ctts:bottle', Item.of('ctts:bottle', { custom_data: { tier: 'snow_queen' }, custom_model_data: 7, custom_name: { translate: 'item.ctts.bottle.snow_queen', italic: false } }))
})