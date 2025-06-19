ServerEvents.recipes(e => {
    //Saw 手锯
    e.shaped(Item.of('kubejs:stone_saw', 1), [
        'ACC',
        'ABC'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:flint',
        C: 'kubejs:stone_rod'
    })
    e.shaped(Item.of('kubejs:iron_saw', 1), [
        'ACC',
        'ABC'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:flint',
        C: 'createaddition:iron_rod'
    })
    e.shaped(Item.of('kubejs:stone_rod', 1), [
        'A',
        'A'
    ], {
        A: '#forge:cobblestone'
    })
    //模板
    e.shaped(Item.of('kubejs:base_template', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:stone',
        B: 'minecraft:diamond'
    })
    e.shaped(Item.of('kubejs:base_template', 3), [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:stone',
        C: 'minecraft:diamond',
        B: 'kubejs:base_template'
    })
    e.shaped(Item.of('enderitemod:enderite_upgrade_smithing_template', 2), [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'minecraft:end_stone',
        B: 'kubejs:base_template',
        C: 'minecraft:netherite_ingot'
    })
    e.shaped(Item.of('kubejs:diamond_template', 1), [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'kubejs:base_template',
        C: 'minecraft:diamond'
    })
    let taa = (tem, mod) => {
        let inputid = mod + ':iron_' + tem
        let outputid = mod + ':diamond_' + tem
        e.smithing(outputid, 'kubejs:diamond_template', 'minecraft:diamond', inputid)
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

    e.shaped(Item.of('create:andesite_alloy', 4), [
        'AA',
        'BB'
    ], {
        A: 'minecraft:andesite',
        B: 'architects_palette:algal_brick'
    })
    e.shaped(Item.of('create:andesite_alloy', 4), [
        'AA',
        'BB'
    ], {
        A: 'architects_palette:algal_brick',
        B: 'minecraft:andesite'
    })
    e.shaped(Item.of('kubejs:screwdriver', 1), [
        'B  ',
        ' AC',
        ' CA'
    ], {
        A: 'createaddition:iron_rod',
        B: 'minecraft:iron_nugget',
        C: 'minecraft:blue_dye'
    })
    e.shaped(Item.of('kubejs:drill_head', 1), [
        'AA ',
        'ABC',
        ' CB'
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:iron_ingot',
        C: 'createaddition:zinc_sheet'
    })
    e.shaped(Item.of('kubejs:saw_blade', 1), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'create:iron_sheet',
        B: 'minecraft:iron_ingot'
    })
    e.shaped(Item.of('kubejs:plough', 1), [
        'ABA',
        'CCC'
    ], {
        A: 'create:iron_sheet',
        B: 'createaddition:zinc_sheet',
        C: 'create:andesite_alloy'
    })
    e.shaped(Item.of('create:flywheel', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:brass_ingot',
        B: 'create:large_cogwheel'
    })
    e.shaped('4x ad_astra:steel_cable', [
        ' A ',
        'BBB',
        ' A '
    ], {
        A: 'ad_astra:steel_plate',
        B: 'createaddition:copper_wire'
    })
    e.shaped('4x ad_astra:desh_cable', [
        ' A ',
        'BBB',
        ' A '
    ], {
        A: 'ad_astra:desh_plate',
        B: 'createaddition:copper_wire'
    })
    e.shaped('4x ad_astra:desh_fluid_pipe', [
        'A',
        'B',
        'A'
    ], {
        A: 'ad_astra:desh_plate',
        B: 'minecraft:glass'
    })
    e.shaped('4x ad_astra:ostrum_fluid_pipe', [
        'A',
        'B',
        'A'
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'minecraft:glass'
    })
    e.shaped('explorerscompass:explorerscompass', [
        'ABA',
        'DCD',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'create:precision_mechanism',
        C: 'minecraft:compass',
        D: 'create:iron_sheet'
    })
    e.shaped('naturescompass:naturescompass', [
        'AFA',
        'CDC',
        'ABA'
    ], {
        A: '#minecraft:saplings',
        B: '#minecraft:logs',
        C: 'create:iron_sheet',
        D: 'minecraft:compass',
        F: 'create:precision_mechanism'
    })

    e.shaped('createaddition:barbed_wire', [
        'ABA'
    ], {
        A: 'createaddition:iron_wire',
        B: 'minecraft:iron_bars'
    })
    e.shaped('kubejs:rotor', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'createaddition:copper_wire',
        B: 'createaddition:iron_rod'
    })

    e.shaped('deeperdarker:heart_of_the_deep', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'deeperdarker:reinforced_echo_shard',
        B: 'kubejs:incomplete_heart_of_the_deep'
    })
    e.shaped('kubejs:incomplete_heart_of_the_deep', [
        'AAAAA',
        'AABAA',
        'ABBBA',
        'AABAA',
        'AAAAA'
    ], {
        A: 'butcher:heart',
        B: 'minecraft:echo_shard'
    })
    e.shaped('minecraft:elytra', [
        ' AAA AAA ',
        'ACBBCBBCA',
        'ACBBCBBCA',
        'ACBB BBCA',
        ' ABB BBA ',
        ' ABB BBA ',
        '  AB BA  '
    ], {
        A: 'minecraft:shulker_shell',
        B: 'minecraft:phantom_membrane',
        C: 'enderitemod:enderite_ingot'
    })
    e.shaped('minecraft:hopper', [
        'A A',
        'A A',
        ' A '
    ], {
        A: 'create:iron_sheet'
    })
    e.shaped('kubejs:extinguished_blaze_rod', [
        'A',
        'A'
    ], {
        A: 'minecraft:soul_sand'
    })
    e.shaped('minecraft:echo_shard', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:amethyst_shard',
        B: 'minecraft:sculk'
    })

    e.shaped('quark:pickarang', [
        'ABC',
        '  B',
        '  A'
    ], {
        A: 'minecraft:diamond',
        B: '#minecraft:planks',
        C: 'quark:diamond_heart'
    })
    e.shaped('ad_astra:wrench', [
        'AA',
        'AB',
        ' C'
    ], {
        A: 'ad_astra:steel_plate',
        B: 'create:cogwheel',
        C: 'createaddition:iron_rod'
    })
    e.shaped('kubejs:harvester', [
        'ABA',
        'ABA'
    ], {
        A: 'create:andesite_alloy',
        B: 'createaddition:zinc_sheet'
    })
    e.shaped('minecraft:blaze_spawn_egg', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:blaze_powder',
        B: 'minecraft:blaze_rod',
        C: 'minecraft:netherrack'
    })

    e.shaped('kubejs:twilight_key', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'kubejs:key_fragments',
        B: 'kubejs:twilight_mechanism'
    })

    e.shaped('kubejs:nether_book', [
        'AAAAAAA',
        'ABCBCBA',
        'ACDGDCA',
        'ABGFGBA',
        'ACDGDCA',
        'ABCBCBA',
        'AAAAAAA'
    ], {
        A: 'minecraft:book',
        B: 'minecraft:blaze_rod',
        C: 'minecraft:blaze_powder',
        D: 'minecraft:soul_sand',
        F: 'minecraft:ender_pearl',
        G: 'kubejs:nether_mechanism'
    })
})