ServerEvents.recipes(event => {
    //Saw 手锯
    event.shaped(Item.of('kubejs:stone_saw', 1),[
        'ACC',
        'ABC'
    ],{
        A:'minecraft:stick',
        B:'minecraft:flint',
        C:'kubejs:stone_rod'
    })
    event.shaped(Item.of('kubejs:iron_saw', 1),[
        'ACC',
        'ABC'
    ],{
        A:'minecraft:stick',
        B:'minecraft:flint',
        C:'createaddition:iron_rod'
    })
    event.shaped(Item.of('kubejs:stone_rod',1),[
        'A',
        'A'
    ],{
        A:'#forge:cobblestone'
    })
    //模板
    event.shaped(Item.of('kubejs:base_template', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'#forge:stone',
        B:'minecraft:diamond'
    })
    event.shaped(Item.of('kubejs:base_template', 3),[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'#forge:stone',
        C:'minecraft:diamond',
        B:'kubejs:base_template'
    })
    event.shaped(Item.of('enderitemod:enderite_upgrade_smithing_template', 2),[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'minecraft:end_stone',
        B:'kubejs:base_template',
        C:'minecraft:netherite_ingot'
    })
    event.shaped(Item.of('kubejs:diamond_template', 1),[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'minecraft:iron_ingot',
        B:'kubejs:base_template',
        C:'minecraft:diamond'
    })

    //Others 杂项
    //锻造台
    event.smithing('kubejs:netherite_saw', 'kubejs:diamond_saw', 'minecraft:netherite_ingot')

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
    //event.blasting()
    event.blasting('minecraft:granite', 'minecraft:calcite')
    
    //有序合成    
    let taa = (tem, mod) => {
        let inputid = mod + ':iron_' + tem
        let outputid = mod + ':diamond_' + tem
        event.smithing(outputid, 'kubejs:diamond_template', 'minecraft:diamond', inputid)
    }
    taa('sword', 'minecraft')
    taa('helmet', 'minecraft')
    taa('chestplate', 'minecraft')
    taa('leggings', 'minecraft')
    taa('boots', 'minecraft')
    taa('shovel', 'minecraft')
    taa('pickaxe', 'minecraft')
    taa('axe', 'minecraft')
    taa('hoe', 'minecraft')
    taa('wand', 'constructionwand')
    taa('knife', 'farmersdelight')
    taa('saw', 'kubejs')
    event.smithing('constructionwand:infinity_wand', 'constructionwand:diamond_wand', 'minecraft:nether_star')

    event.shaped(Item.of('create:andesite_alloy', 4),[
        'AA',
        'BB'
    ],{
        A:'minecraft:andesite',
        B:'architects_palette:algal_brick'
    })
    event.shaped(Item.of('create:andesite_alloy', 4),[
        'AA',
        'BB'
    ],{
        A:'architects_palette:algal_brick',
        B:'minecraft:andesite'
    })
    event.shaped(Item.of('kubejs:screwdriver', 1),[
        'B  ',
        ' AC',
        ' CA'
    ],{
        A:'createaddition:iron_rod',
        B:'minecraft:iron_nugget',
        C:'minecraft:blue_dye'
    })
    event.shaped(Item.of('kubejs:drill_head', 1),[
        'AA ',
        'ABC',
        ' CB'
    ],{
        A:'create:zinc_nugget',
        B:'minecraft:iron_ingot',
        C:'createaddition:zinc_sheet'
    })
    event.shaped(Item.of('kubejs:saw_blade', 1),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'create:iron_sheet',
        B:'minecraft:iron_ingot'
    })
    event.shaped(Item.of('kubejs:plough', 1),[
        'ABA',
        'CCC'
    ],{
        A:'create:iron_sheet',
        B:'createaddition:zinc_sheet',
        C:'create:andesite_alloy'
    })
    event.shaped(Item.of('create:flywheel', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'create:brass_ingot',
        B:'create:large_cogwheel'
    })
    event.shaped('4x ad_astra:steel_cable',[
        ' A ',
        'BBB',
        ' A '
    ], {
        A:'ad_astra:steel_plate',
        B:'createaddition:copper_wire'
    })
    event.shaped('4x ad_astra:desh_cable',[
        ' A ',
        'BBB',
        ' A '
    ], {
        A:'ad_astra:desh_plate',
        B:'createaddition:copper_wire'
    })
    event.shaped('4x ad_astra:desh_fluid_pipe',[
        'A',
        'B',
        'A'
    ],{
        A:'ad_astra:desh_plate',
        B:'minecraft:glass'
    })
    event.shaped('4x ad_astra:ostrum_fluid_pipe',[
        'A',
        'B',
        'A'
    ],{
        A:'ad_astra:ostrum_plate',
        B:'minecraft:glass'
    })
    event.shaped('explorerscompass:explorerscompass',[
        'ABA',
        'DCD',
        'ADA'
    ],{
        A:'minecraft:redstone',
        B:'create:precision_mechanism',
        C:'minecraft:compass',
        D:'create:iron_sheet'
    })
    event.shaped('naturescompass:naturescompass',[
        'AFA',
        'CDC',
        'ABA'
    ],{
        A:'#minecraft:saplings',
        B:'#minecraft:logs',
        C:'create:iron_sheet',
        D:'minecraft:compass',
        F:'create:precision_mechanism'
    })

    event.shaped('createaddition:barbed_wire',[
        'ABA'
    ],{
        A:'createaddition:iron_wire',
        B:'minecraft:iron_bars'
    })
    event.shaped('kubejs:rotor',[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'createaddition:copper_wire',
        B:'createaddition:iron_rod'
    })

    event.shaped('deeperdarker:heart_of_the_deep',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'deeperdarker:reinforced_echo_shard',
        B:'kubejs:incomplete_heart_of_the_deep'
    })
    event.shaped('kubejs:incomplete_heart_of_the_deep',[
        'AAAAA',
        'AABAA',
        'ABBBA',
        'AABAA',
        'AAAAA'
    ],{
        A:'butcher:heart',
        B:'minecraft:echo_shard'
    })
    event.shaped('minecraft:elytra',[
        ' AAA AAA ',
        'ACBBCBBCA',
        'ACBBCBBCA',
        'ACBB BBCA',
        ' ABB BBA ',
        ' ABB BBA ',
        '  AB BA  '
    ],{
        A:'minecraft:shulker_shell',
        B:'minecraft:phantom_membrane',
        C:'enderitemod:enderite_ingot'
    })
    event.shaped('minecraft:hopper',[
        'A A',
        'A A',
        ' A '
    ],{
        A:'create:iron_sheet'
    })
    event.shaped('kubejs:extinguished_blaze_rod',[
        'A',
        'A'
    ],{
        A:'minecraft:soul_sand'
    })
    event.shaped('minecraft:echo_shard',[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'minecraft:amethyst_shard',
        B:'minecraft:sculk'
    })

    event.shaped('quark:pickarang',[
        'ABC',
        '  B',
        '  A'
    ],{
        A:'minecraft:diamond',
        B:'#minecraft:planks',
        C:'quark:diamond_heart'
    })
    event.shaped('ad_astra:wrench',[
        'AA',
        'AB',
        ' C'
    ],{
        A:'ad_astra:steel_plate',
        B:'create:cogwheel',
        C:'createaddition:iron_rod'
    })
    event.shaped('kubejs:harvester', [
        'ABA',
        'ABA'
    ],{
        A:'create:andesite_alloy',
        B:'createaddition:zinc_sheet'
    })
    event.shaped('minecraft:blaze_spawn_egg', [
        'AAA',
        'BCB',
        'AAA'
    ],{
        A:'minecraft:blaze_powder',
        B:'minecraft:blaze_rod',
        C:'minecraft:netherrack'
    })

    event.shaped('kubejs:twilight_key', [
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'kubejs:key_fragments',
        B:'kubejs:twilight_mechanism'
    })

    event.shaped('kubejs:nether_book', [
        'AAAAAAA',
        'ABCBCBA',
        'ACDGDCA',
        'ABGFGBA',
        'ACDGDCA',
        'ABCBCBA',
        'AAAAAAA'
    ],{
        A:'minecraft:book',
        B:'minecraft:blaze_rod',
        C:'minecraft:blaze_powder',
        D:'minecraft:soul_sand',
        F:'minecraft:ender_pearl',
        G:'kubejs:nether_mechanism'
    })

    event.shapeless(Item.of('createaddition:diamond_grit_sandpaper', 1),['minecraft:paper', 'createaddition:diamond_grit'])
    event.shapeless(Item.of('createaddition:portable_energy_interface', 1), ['ad_astra:iron_cable', 'createaddition:connector'])
    event.shapeless(Item.of('architects_palette:charcoal_block', 1), '9x minecraft:charcoal')
    event.shapeless(Item.of('minecraft:blaze_rod', 1), ['kubejs:extinguished_blaze_rod', 'minecraft:flint_and_steel']).damageIngredient('minecraft:flint_and_steel', 1)
    event.shapeless(Item.of('minecraft:gunpowder', 3), ['2x minecraft:charcoal', 'minecraft:blaze_powder'])
    event.shapeless(Item.of('minecraft:glowstone_dust', 2), ['minecraft:redstone', 'minecraft:blaze_powder'])
    event.shapeless(Item.of('minecraft:diamond', 1), '9x kubejs:diamond_nugget')
    event.shapeless(Item.of('kubejs:gun_book', 1), ['3x minecraft:gunpowder', 'minecraft:netherite_ingot'])
})