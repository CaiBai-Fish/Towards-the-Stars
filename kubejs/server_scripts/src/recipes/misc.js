ServerEvents.recipes(e => {
    //Others 杂项
    //锻造台
    e.smithing('ctts:netherite_saw', 'ctts:diamond_saw', 'minecraft:netherite_ingot')
    e.smithing('constructionwand:infinity_wand', 'constructionwand:diamond_wand', 'minecraft:nether_star')

    //切石机
    //木头切割
    let wood = (woodid) => {
        let planks = woodid + '_planks'
        let slab = woodid + '_slab'
        let stairs = woodid + '_stairs'
        //console.log(planks + '   ' + slab + '   ' + stairs)
        e.stonecutting(Item.of(slab, 2), Item.of(planks))
        e.stonecutting(Item.of(stairs), Item.of(planks))
    }
    wood('minecraft:oak')
    wood('minecraft:spruce')
    wood('minecraft:birch')
    wood('minecraft:jungle')
    wood('minecraft:acacia')
    wood('minecraft:dark_oak')
    wood('minecraft:mangrove')
    wood('minecraft:crimson')
    wood('minecraft:warped')
    wood('ad_astra:glacian')
    wood('ad_astra:aeronos')
    wood('ad_astra:strophar')
    wood('architects_palette:twisted')
    wood('deeperdarker:echo')
    wood('biomesoplenty:fir')
    wood('biomesoplenty:pine')
    wood('biomesoplenty:maple')
    wood('biomesoplenty:redwood')
    wood('biomesoplenty:mahogany')
    wood('biomesoplenty:jacaranda')
    wood('biomesoplenty:palm')
    wood('biomesoplenty:willow')
    wood('biomesoplenty:dead')
    wood('biomesoplenty:magic')
    wood('biomesoplenty:umbran')
    wood('biomesoplenty:hellbark')
    wood('biomesoplenty:empyreal')
    wood('twilightforest:twilight_oak')
    wood('twilightforest:canopy')
    wood('twilightforest:mangrove')
    wood('twilightforest:dark')
    wood('twilightforest:time')
    wood('twilightforest:transformation')
    wood('twilightforest:mining')
    wood('twilightforest:sorting')
    e.stonecutting('2x quark:azalea_planks_slab', 'quark:azalea_planks')
    e.stonecutting('quark:azalea_planks_stairs', 'quark:azalea_planks')
    e.stonecutting('2x quark:blossom_planks_slab', 'quark:blossom_planks')
    e.stonecutting('quark:blossom_planks_stairs', 'quark:blossom_planks')
    e.stonecutting('4x minecraft:pointed_dripstone', 'minecraft:dripstone_block')
    e.stonecutting('create:depot', 'create:andesite_casing')

    //烟熏
    e.smoking('minecraft:coal_block', 'architects_palette:charcoal_block')
    e.smoking('minecraft:coal', 'minecraft:charcoal')
    e.smoking('minecraft:tuff', 'minecraft:calcite')

    //熔炉
    e.smelting('minecraft:iron_nugget', 'createaddition:iron_rod')
    e.smelting('3x aquaculture:neptunium_ingot', 'aquaculture:neptunes_bounty')

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
    e.shapeless('supplementaries:enderman_head', 'butchery:enderman_head')
    e.shapeless('create:controller_rail', ['minecraft:powered_rail', 'create:electron_tube'])
    e.shapeless('create:stockpile_switch', 'create:content_observer')
    e.shapeless('create:content_observer', 'create:stockpile_switch')
    e.shapeless('create:pulse_repeater', ['create:brass_sheet', 'minecraft:repeater'])
    e.shapeless('create:pulse_extender', ['create:pulse_repeater', 'minecraft:redstone_torch'])
    e.shapeless('create:powered_latch', ['minecraft:repeater', 'minecraft:lever'])
    e.shapeless('create:powered_toggle_latch', 'create:powered_latch')
    e.shapeless('create:powered_latch', 'create:powered_toggle_latch')
    e.shapeless('minecraft:redstone', ['#ctts:powder', 'minecraft:red_dye'])
})