ServerEvents.tags('item', event => {
    event.add('ctts:saws', ['ctts:stone_saw', 'ctts:iron_saw', 'ctts:diamond_saw', 'ctts:netherite_saw'])
    event.add('ctts:saws/iron', ['ctts:iron_saw', 'ctts:diamond_saw', 'ctts:netherite_saw'])
    event.add('ctts:saws/diamond', ['ctts:diamond_saw', 'ctts:netherite_saw'])
    event.add('ctts:saws/netherite', 'ctts:netherite_saw')
    let tools = (tem, mod) => {
        let id = mod + ':diamond_' + tem
        event.add('forge:tools/diamond', id)
        //id + '_pickaxe', id + '_axe', id + '_hoe', id + '_shovel', id + '_wand'
    }
    tools('pickaxe', 'minecraft')
    tools('axe', 'minecraft')
    tools('hoe', 'minecraft')
    tools('shovel', 'minecraft')
    tools('wand', 'constructionwand')
    event.add('ctts:stones', ['minecraft:granite', 'minecraft:diorite', 'minecraft:calcite', 'minecraft:tuff'])
    event.add('ctts:sheet/gold', ['create:golden_sheet', 'createaddition:electrum_sheet'])
    event.add('ctts:powder', ['create:wheat_flour', 'farmersdelight:rice'])
})
ServerEvents.tags('item', event => {
    event.add('ctts:logs',[
        "ad_astra:glacian_log",
        "architects_palette:twisted_log",
        "minecraft:acacia_log",
        "minecraft:birch_log",
        "minecraft:cherry_log",
        "minecraft:crimson_hyphae",
        "minecraft:crimson_stem",
        "minecraft:dark_oak_log",
        "minecraft:jungle_log",
        "minecraft:mangrove_log",
        "minecraft:oak_log",
        "minecraft:spruce_log",
        "minecraft:warped_hyphae",
        "minecraft:warped_stem",
        "quark:ancient_log",
        "quark:azalea_log",
        "quark:blossom_log",
        "twilightdelight:ironwood_log",
        "twilightforest:canopy_log",
        "twilightforest:dark_log",
        "twilightforest:mangrove_log",
        "twilightforest:mining_log",
        "twilightforest:sorting_log",
        "twilightforest:time_log",
        "twilightforest:transformation_log",
        "twilightforest:twilight_oak_log",
        "biomesoplenty:dead_log",
        "biomesoplenty:fir_log",
        "biomesoplenty:palm_log",
        "biomesoplenty:pine_log",
        "biomesoplenty:magic_log",
        "biomesoplenty:maple_log",
        "biomesoplenty:redwood_log",
        "biomesoplenty:umbran_log",
        "biomesoplenty:willow_log"
    ])
})