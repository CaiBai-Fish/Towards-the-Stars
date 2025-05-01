ServerEvents.tags('item', event => {
    event.add('kubejs:saws', ['kubejs:stone_saw', 'kubejs:iron_saw', 'kubejs:diamond_saw', 'kubejs:netherite_saw'])
    event.add('kubejs:saws/iron', ['kubejs:iron_saw', 'kubejs:diamond_saw', 'kubejs:netherite_saw'])
    event.add('kubejs:saws/diamond', ['kubejs:diamond_saw', 'kubejs:netherite_saw'])
    event.add('kubejs:saws/netherite', 'kubejs:netherite_saw')
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
    event.add('kubejs:stones', ['minecraft:granite', 'minecraft:diorite', 'minecraft:calcite', 'minecraft:tuff'])
    event.add('kubejs:sheet/gold', ['create:golden_sheet', 'createaddition:electrum_sheet'])
    event.add('kubejs:powder', ['create:wheat_flour', 'farmersdelight:rice'])
})
ServerEvents.tags('item', event => {
    event.add('kubejs:logs',[
        "ad_astra:glacian_log",
        "architects_palette:twisted_log",
        "architects_palette:twisted_log",
        "architects_palette:twisted_wood",
        "architects_palette:twisted_wood",
        "minecraft:acacia_log",
        "minecraft:acacia_log",
        "minecraft:acacia_wood",
        "minecraft:acacia_wood",
        "minecraft:birch_log",
        "minecraft:birch_log",
        "minecraft:birch_wood",
        "minecraft:birch_wood",
        "minecraft:cherry_log",
        "minecraft:cherry_log",
        "minecraft:cherry_wood",
        "minecraft:cherry_wood",
        "minecraft:crimson_hyphae",
        "minecraft:crimson_hyphae",
        "minecraft:crimson_stem",
        "minecraft:crimson_stem",
        "minecraft:dark_oak_log",
        "minecraft:dark_oak_log",
        "minecraft:dark_oak_wood",
        "minecraft:dark_oak_wood",
        "minecraft:jungle_log",
        "minecraft:jungle_log",
        "minecraft:jungle_wood",
        "minecraft:jungle_wood",
        "minecraft:mangrove_log",
        "minecraft:mangrove_log",
        "minecraft:mangrove_wood",
        "minecraft:mangrove_wood",
        "minecraft:oak_log",
        "minecraft:oak_log",
        "minecraft:oak_wood",
        "minecraft:oak_wood",
        "minecraft:spruce_log",
        "minecraft:spruce_log",
        "minecraft:spruce_wood",
        "minecraft:spruce_wood",
        "minecraft:warped_hyphae",
        "minecraft:warped_hyphae",
        "minecraft:warped_stem",
        "minecraft:warped_stem",
        "quark:ancient_log",
        "quark:ancient_log",
        "quark:ancient_wood",
        "quark:ancient_wood",
        "quark:azalea_log",
        "quark:azalea_log",
        "quark:azalea_wood",
        "quark:azalea_wood",
        "quark:blossom_log",
        "quark:blossom_log",
        "quark:blossom_wood",
        "quark:blossom_wood",
        "twilightdelight:ironwood_log",
        "twilightforest:canopy_log",
        "twilightforest:canopy_log",
        "twilightforest:canopy_wood",
        "twilightforest:canopy_wood",
        "twilightforest:dark_log",
        "twilightforest:dark_log",
        "twilightforest:dark_wood",
        "twilightforest:dark_wood",
        "twilightforest:mangrove_log",
        "twilightforest:mangrove_log",
        "twilightforest:mangrove_wood",
        "twilightforest:mangrove_wood",
        "twilightforest:mining_log",
        "twilightforest:mining_log",
        "twilightforest:mining_wood",
        "twilightforest:mining_wood",
        "twilightforest:sorting_log",
        "twilightforest:sorting_log",
        "twilightforest:sorting_wood",
        "twilightforest:sorting_wood",
        "twilightforest:time_log",
        "twilightforest:time_log",
        "twilightforest:time_wood",
        "twilightforest:time_wood",
        "twilightforest:transformation_log",
        "twilightforest:transformation_log",
        "twilightforest:transformation_wood",
        "twilightforest:transformation_wood",
        "twilightforest:twilight_oak_log",
        "twilightforest:twilight_oak_log",
        "twilightforest:twilight_oak_wood",
        "twilightforest:twilight_oak_wood"
    ])
})