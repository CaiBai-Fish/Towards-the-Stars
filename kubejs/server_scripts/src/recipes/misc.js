ServerEvents.recipes(e => {
    //Others 杂项
    //锻造台
    e.smithing('ctts:netherite_saw', 'ctts:diamond_saw', 'minecraft:netherite_ingot')
    e.smithing('constructionwand:infinity_wand', 'constructionwand:diamond_wand', 'minecraft:nether_star')

    //切石机
    e.stonecutting('2x minecraft:oak_slab', 'minecraft:oak_planks')
    e.stonecutting('2x minecraft:spruce_slab', 'minecraft:spruce_planks')
    e.stonecutting('2x minecraft:birch_slab', 'minecraft:birch_planks')
    e.stonecutting('2x minecraft:jungle_slab', 'minecraft:jungle_planks')
    e.stonecutting('2x minecraft:acacia_slab', 'minecraft:acacia_planks')
    e.stonecutting('2x minecraft:dark_oak_slab', 'minecraft:dark_oak_planks')
    e.stonecutting('2x minecraft:mangrove_slab', 'minecraft:mangrove_planks')
    e.stonecutting('2x minecraft:crimson_slab', 'minecraft:crimson_planks')
    e.stonecutting('2x minecraft:warped_slab', 'minecraft:warped_planks')
    e.stonecutting('2x ad_astra:glacian_slab', 'ad_astra:glacian_planks')
    e.stonecutting('2x ad_astra:aeronos_slab', 'ad_astra:aeronos_planks')
    e.stonecutting('2x ad_astra:strophar_slab', 'ad_astra:strophar_planks')
    e.stonecutting('2x architects_palette:twisted_slab', 'architects_palette:twisted_planks')
    e.stonecutting('2x deeperdarker:echo_slab', 'deeperdarker:echo_planks')
    e.stonecutting('4x minecraft:pointed_dripstone', 'minecraft:dripstone_block')
    e.stonecutting('2x minecraft:dragon_egg', 'minecraft:dragon_egg')

    //烟熏
    e.smoking('minecraft:coal_block', 'architects_palette:charcoal_block')
    e.smoking('minecraft:coal', 'minecraft:charcoal')
    e.smoking('minecraft:tuff', 'minecraft:calcite')

    //熔炉
    e.smelting('minecraft:iron_nugget', 'createaddition:iron_rod')

    //高炉
    e.blasting('minecraft:granite', 'minecraft:calcite')
    e.blasting('minecraft:shulker_shell', 'minecraft:chorus_fruit')

    //无序合成
    e.shapeless('createaddition:diamond_grit_sandpaper', ['minecraft:paper', 'createaddition:diamond_grit'])
    e.shapeless('createaddition:portable_energy_interface', ['ad_astra:iron_cable', 'createaddition:connector'])
    e.shapeless('architects_palette:charcoal_block', '9x minecraft:charcoal')
    e.shapeless('minecraft:blaze_rod', ['ctts:extinguished_blaze_rod', 'minecraft:flint_and_steel']).damageIngredient('minecraft:flint_and_steel', 1)
    e.shapeless('minecraft:gunpowder', ['2x minecraft:charcoal', 'minecraft:blaze_powder'])
    e.shapeless('2x minecraft:glowstone_dust', ['minecraft:redstone', 'minecraft:blaze_powder'])
    e.shapeless('minecraft:diamond', '9x ctts:diamond_nugget')
    e.shapeless('ctts:gun_book', ['3x minecraft:gunpowder', 'minecraft:netherite_ingot'])
    e.shapeless('supplementaries:enderman_head', 'butcher:endermanhead')
    e.shapeless('minecraft:ender_pearl', ['#butcher:butcher_enchantable', 'butcher:endermanheart']).damageIngredient('#butcher:butcher_enchantable', 1)
})