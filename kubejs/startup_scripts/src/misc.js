// 维度阶段
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("nether", "minecraft:the_nether");
    GamePhase.addDimensionRestriction("end", "minecraft:the_end");
    GamePhase.addDimensionRestriction("twilight", "twilightforest:twilight_forest");
})
// 酿造
MoreJSEvents.registerPotionBrewing(e => {
    // 抗龙息药水
    e.addPotionBrewing('golden_apple', 'minecraft:awkward', 'ctts:dragon_breath_resistance')
    e.addPotionBrewing('redstone', 'ctts:dragon_breath_resistance', 'ctts:long_dragon_breath_resistance')
    e.addPotionBrewing("golden_apple", 'ctts:long_dragon_breath_resistance', 'ctts:strong_dragon_breath_resistance')

    // 破伤药水
    e.addCustomBrewing('dragon_breath', Ingredient.customNBT("minecraft:potion", (nbt) => {
        return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
    }), 'ctts:bottle')
    e.addCustomBrewing('twilightforest:steeleaf_ingot', 'ctts:bottle', Item.of('ctts:bottle', { tier: 'naga', CustomModelData: 1, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.naga', italic: false }) } }))
    e.addCustomBrewing('twilightforest:naga_scale', 'ctts:bottle', Item.of('ctts:bottle', { tier: 'lich', CustomModelData: 2, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.lich', italic: false }) } }))
    e.addCustomBrewing('minecraft:red_mushroom_block', 'ctts:bottle', Item.of('ctts:bottle', { tier: 'minoshroom', CustomModelData: 3, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.minoshroom', italic: false }) } }))
    e.addCustomBrewing('twilightforest:armor_shard', 'ctts:bottle', Item.of('ctts:bottle', { tier: 'knight_phantom', CustomModelData: 4, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.knight_phantom', italic: false }) } }))
    e.addCustomBrewing('twilightforest:arctic_fur', 'ctts:bottle', Item.of('ctts:bottle', { tier: 'alpha_yeti', CustomModelData: 5, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.alpha_yeti', italic: false }) } }))
    e.addCustomBrewing('twilightforest:carminite', 'ctts:bottle', Item.of('ctts:bottle', { tier: 'ur_ghast', CustomModelData: 6, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.ur_ghast', italic: false }) } }))
    e.addCustomBrewing('minecraft:fire_charge', 'ctts:bottle', Item.of('ctts:bottle', { tier: 'snow_queen', CustomModelData: 7, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.snow_queen', italic: false }) } }))
})