ServerEvents.recipes(event => {
    //Others 杂项
    //锻造台
    event.smithing('kubejs:netherite_saw', 'kubejs:diamond_saw', 'minecraft:netherite_ingot')
    event.smithing('constructionwand:infinity_wand', 'constructionwand:diamond_wand', 'minecraft:nether_star')

    //切石机
    event.stonecutting('2x minecraft:oak_slab', 'minecraft:oak_planks')
    event.stonecutting('2x minecraft:spruce_slab', 'minecraft:spruce_planks')
    event.stonecutting('2x minecraft:birch_slab', 'minecraft:birch_planks')
    event.stonecutting('2x minecraft:jungle_slab', 'minecraft:jungle_planks')
    event.stonecutting('2x minecraft:acacia_slab', 'minecraft:acacia_planks')
    event.stonecutting('2x minecraft:dark_oak_slab', 'minecraft:dark_oak_planks')
    event.stonecutting('2x minecraft:mangrove_slab', 'minecraft:mangrove_planks')
    event.stonecutting('2x minecraft:crimson_slab', 'minecraft:crimson_planks')
    event.stonecutting('2x minecraft:warped_slab', 'minecraft:warped_planks')
    event.stonecutting('2x ad_astra:glacian_slab', 'ad_astra:glacian_planks')
    event.stonecutting('2x ad_astra:aeronos_slab', 'ad_astra:aeronos_planks')
    event.stonecutting('2x ad_astra:strophar_slab', 'ad_astra:strophar_planks')
    event.stonecutting('2x architects_palette:twisted_slab', 'architects_palette:twisted_planks')
    event.stonecutting('2x deeperdarker:echo_slab', 'deeperdarker:echo_planks')
    event.stonecutting('4x minecraft:pointed_dripstone', 'minecraft:dripstone_block')
    event.stonecutting('2x minecraft:dragon_egg', 'minecraft:dragon_egg')

    //烟熏
    event.smoking('minecraft:coal_block', 'architects_palette:charcoal_block')
    event.smoking('minecraft:coal', 'minecraft:charcoal')
    event.smoking('minecraft:tuff', 'minecraft:calcite')

    //熔炉
    event.smelting('minecraft:iron_nugget', 'createaddition:iron_rod')

    //高炉
    event.blasting('minecraft:granite', 'minecraft:calcite')

    //无序合成
    event.shapeless('createaddition:diamond_grit_sandpaper', ['minecraft:paper', 'createaddition:diamond_grit'])
    event.shapeless('createaddition:portable_energy_interface', ['ad_astra:iron_cable', 'createaddition:connector'])
    event.shapeless('architects_palette:charcoal_block', '9x minecraft:charcoal')
    event.shapeless('minecraft:blaze_rod', ['kubejs:extinguished_blaze_rod', 'minecraft:flint_and_steel']).damageIngredient('minecraft:flint_and_steel', 1)
    event.shapeless('minecraft:gunpowder', ['2x minecraft:charcoal', 'minecraft:blaze_powder'])
    event.shapeless('2x minecraft:glowstone_dust', ['minecraft:redstone', 'minecraft:blaze_powder'])
    event.shapeless('minecraft:diamond', '9x kubejs:diamond_nugget')
    event.shapeless('kubejs:gun_book', ['3x minecraft:gunpowder', 'minecraft:netherite_ingot'])
    event.shapeless('supplementaries:enderman_head', 'butcher:endermanhead')
})