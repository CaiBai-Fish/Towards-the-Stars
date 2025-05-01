ServerEvents.recipes(event => {
    event.recipes.create.item_application(Item.of('minecraft:end_stone'), ['minecraft:cobblestone', 'minecraft:ender_pearl'])
    event.recipes.create.deploying(Item.of('ad_astra:wheel'), ['ad_astra:steel_plate', 'create:belt_connector'])
    event.recipes.create.compacting('minecraft:dripstone_block', [Fluid.water(200), 'create:limestone'])
    event.recipes.create.compacting('minecraft:calcite', [Fluid.water(100), 'ae2:sky_stone_block', 'minecraft:quartz'])
    event.recipes.create.compacting('2x create:asurine', ['minecraft:calcite', 'minecraft:andesite', 'create:cinder_flour', 'ae2:sky_dust'])
    event.recipes.create.compacting('2x create:crimsite', ['minecraft:calcite', 'minecraft:granite', 'create:cinder_flour', 'ae2:sky_dust'])
    event.recipes.create.compacting('2x create:ochrum', ['minecraft:calcite', 'minecraft:tuff', 'create:cinder_flour', 'ae2:sky_dust'])
    event.recipes.create.compacting('2x create:veridium', ['minecraft:calcite', 'minecraft:diorite', 'create:cinder_flour', 'ae2:sky_dust'])
    event.recipes.create.compacting('minecraft:andesite', 'minecraft:calcite')

    event.recipes.create.compacting('minecraft:diamond', '9x kubejs:diamond_nugget')
    event.recipes.create.compacting('deeperdarker:sculk_stone', '6x minecraft:sculk')
    event.recipes.create.compacting('kubejs:diamond_nugget', 'minecraft:coal_block').superheated()

    event.recipes.create.crushing('2x ad_astra:sky_stone', 'ad_astra:sky_stone')

    event.recipes.create.milling('minecraft:sand', 'minecraft:gravel')
    event.recipes.create.milling('3x ae2:sky_dust', 'ae2:sky_stone_block')

    event.recipes.create.splashing('minecraft:quartz', 'minecraft:soul_sand')
    event.recipes.create.splashing('minecraft:netherrack', 'minecraft:blackstone')
    event.recipes.create.splashing('minecraft:diorite', 'minecraft:calcite')

    event.recipes.create.mixing(Item.of('create:andesite_alloy', 2),
        ['minecraft:andesite', 'architects_palette:algal_brick'])
    event.recipes.create.mixing('enderitemod:cracked_enderite_ore', ['minecraft:ancient_debris', '16x minecraft:ender_pearl'])
    event.recipes.create.mixing('ad_astra:steel_ingot', ['minecraft:iron_ingot', '#c:coal']).heated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_andesite', 12), 'minecraft:andesite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_andesite', 1000), 'uc:double_compressed_andesite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_granite', 12), 'minecraft:granite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_granite', 1000), 'uc:double_compressed_granite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_diorite', 12), 'minecraft:diorite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_diorite', 1000), 'uc:double_compressed_diorite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_tuff', 12), 'minecraft:tuff').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_tuff', 1000), 'uc:double_compressed_tuff').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_calcite', 12), 'minecraft:calcite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:melted_calcite', 1000), 'uc:double_compressed_calcite').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:end_mechanism_melt', 500), 'kubejs:end_mechanism').superheated()

    event.recipes.create.emptying(Fluid.of('butcher:blood_liquid', 1000), 'butcher:blood_liquid_bucket')

    event.recipes.create.sequenced_assembly(Item.of('minecraft:ancient_debris'),
        'minecraft:netherrack',
        [
            event.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:diamond']),
            event.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:gold_ingot']),
            event.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:quartz']),
            event.recipes.create.pressing('minecraft:netherrack', 'minecraft:netherrack')
        ]
    ).loops(8).transitionalItem('minecraft:netherrack')
    //构件
    event.recipes.create.sequenced_assembly('kubejs:incomplete_nether_mechanism',
        'create:precision_mechanism',
        [
            event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:ancient_debris']),
            event.recipes.create.pressing('create:precision_mechanism', 'create:precision_mechanism')
        ]
    ).loops(3).transitionalItem('create:precision_mechanism')
    event.recipes.create.mixing('kubejs:nether_mechanism', ['kubejs:incomplete_nether_mechanism', Fluid.of('butcher:blood_liquid', 1000)]).superheated()
    event.recipes.create.mechanical_crafting('kubejs:incomplete_end_mechanism',
        [
            'DADAD',
            'AEBEA',
            'DBCBD',
            'AEBEA',
            'DADAD',
        ], {
        A: 'minecraft:ender_pearl',
        B: 'create:precision_mechanism',
        C: 'minecraft:warped_fungus',
        D: 'minecraft:warped_wart_block',
        E: 'minecraft:nether_star'
    })
    let t_end = 'kubejs:incomplete_end_mechanism'
    event.recipes.create.sequenced_assembly('kubejs:end_mechanism',
        t_end,
        [
            event.recipes.create.deploying(t_end, [t_end, 'minecraft:netherite_ingot']),
            event.recipes.create.pressing(t_end, t_end),
            event.recipes.create.deploying(t_end, [t_end, '4x minecraft:ender_eye']),
            event.recipes.create.pressing(t_end, t_end)
        ]
    ).loops(5).transitionalItem(t_end)
    //机器配方
    //安山机壳
    let casing1 = 'create:andesite_casing'
    event.recipes.create.item_application('create:encased_fan', [casing1, 'create:propeller'])
    event.recipes.create.item_application('create:mechanical_press', [casing1, 'minecraft:iron_block'])
    event.recipes.create.item_application('create:weighted_ejector', ['create:depot', 'create:cogwheel'])
    event.recipes.create.item_application('create:speedometer', [casing1, 'minecraft:compass'])
    event.recipes.create.item_application('create:windmill_bearing', ['#forge:stone', 'create:shaft'])
    event.recipes.create.item_application('create:mechanical_bearing', ['create:windmill_bearing', 'create:cogwheel'])
    event.recipes.create.item_application('create:deployer', [casing1, 'create:brass_hand'])
    event.recipes.create.item_application('create:contraption_controls', [casing1, 'create:electron_tube'])
    event.recipes.create.item_application('create:mechanical_drill', [casing1, 'kubejs:drill_head'])
    event.recipes.create.item_application('create:mechanical_saw', [casing1, 'kubejs:saw_blade'])
    event.recipes.create.item_application('create:mechanical_harvester', [casing1, 'kubejs:harvester'])
    event.recipes.create.item_application('create:mechanical_plough', [casing1, 'kubejs:plough'])
    event.recipes.create.item_application('create:mechanical_roller', [casing1, 'create:crushing_wheel'])

    event.recipes.create.sequenced_assembly('create:portable_storage_interface',
        casing1,
        [
            event.recipes.create.deploying(casing1, [casing1, 'create:chute']),
            event.recipes.create.cutting(casing1, casing1)
        ]
    ).loops(1).transitionalItem(casing1)
    event.recipes.create.sequenced_assembly('create:mechanical_piston',
        casing1,
        [
            event.recipes.create.deploying(casing1, [casing1, '#minecraft:wooden_slabs']),
            event.recipes.create.pressing(casing1, casing1),
            event.recipes.create.deploying(casing1, [casing1, 'create:piston_extension_pole'])
        ]
    ).loops(1).transitionalItem('create:piston_extension_pole')
    event.recipes.create.sequenced_assembly('create:gantry_carriage',
        casing1,
        [
            event.recipes.create.pressing(casing1, casing1),
            event.recipes.create.deploying(casing1, [casing1, 'create:cogwheel']),
            event.recipes.create.deploying(casing1, [casing1, '#minecraft:planks'])
        ]
    ).loops(1).transitionalItem(casing1)
    event.recipes.create.sequenced_assembly('create:rope_pulley',
        casing1,
        [
            event.recipes.create.cutting(casing1, casing1),
            event.recipes.create.deploying(casing1, [casing1, '#minecraft:wool']),
            event.recipes.create.deploying(casing1, [casing1, 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem(casing1)
    event.recipes.create.sequenced_assembly('createaddition:rolling_mill',
        casing1,
        [
            event.recipes.create.cutting(casing1, casing1),
            event.recipes.create.deploying(casing1, [casing1, 'create:iron_sheet']),
            event.recipes.create.deploying(casing1, [casing1, 'create:iron_sheet']),
            event.recipes.create.deploying(casing1, [casing1, 'create:shaft']),
            event.recipes.create.deploying(casing1, [casing1, 'create:shaft'])
        ]
    ).loops(1).transitionalItem(casing1)
    event.recipes.create.sequenced_assembly('create_mechanical_extruder:mechanical_extruder',
        'create:mechanical_drill',
        [
            event.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', '#forge:glass']),
            event.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', '#forge:glass']),
            event.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', '#forge:glass']),
            event.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', 'create:shaft'])
        ]
    ).loops(1).transitionalItem('create:mechanical_drill')
    //铜机壳
    let casing2 = 'create:copper_casing'
    event.stonecutting('create:copper_backtank', casing2)
    event.stonecutting('2x create:fluid_pipe', casing2)

    event.recipes.create.item_application('create:fluid_valve', ['create:fluid_pipe', 'create:iron_sheet'])
    event.recipes.create.item_application('create:mechanical_pump', ['create:fluid_pipe', 'create:cogwheel'])
    event.recipes.create.item_application('create:smart_fluid_pipe', ['create:fluid_valve', 'create:electron_tube'])
    event.recipes.create.item_application('create:item_drain', [casing2, 'quark:grate'])
    event.recipes.create.item_application('create:spout', [casing2, 'minecraft:dried_kelp'])

    event.recipes.create.sequenced_assembly('create:fluid_tank',
        casing2,
        [
            event.recipes.create.deploying(casing2, [casing2, 'minecraft:glass'])
        ]
    ).loops(2).transitionalItem(casing2)
    event.recipes.create.sequenced_assembly('create:hose_pulley',
        casing2,
        [
            event.recipes.create.cutting(casing2, casing2),
            event.recipes.create.deploying(casing2, [casing2, 'minecraft:dried_kelp_block']),
            event.recipes.create.deploying(casing2, [casing2, 'create:copper_sheet'])
        ]
    ).loops(1).transitionalItem(casing2)
    event.recipes.create.sequenced_assembly('create:portable_fluid_interface',
        casing2,
        [
            event.recipes.create.deploying(casing2, [casing2, 'create:chute']),
            event.recipes.create.cutting(casing2, casing2)
        ]
    ).loops(1).transitionalItem(casing2)

    //黄铜机壳
    let casing3 = 'create:brass_casing'
    event.recipes.create.sequenced_assembly('create:clockwork_bearing',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            event.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            event.recipes.create.deploying(casing3, [casing3, 'create:electron_tube']),
            event.recipes.create.deploying(casing3, [casing3, '#minecraft:wooden_slabs']),
            event.recipes.create.pressing(casing3, casing3)
        ]
    ).loops(1).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('create:elevator_pulley',
        casing3,
        [
            event.recipes.create.cutting(casing3, casing3),
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:dried_kelp_block']),
            event.recipes.create.deploying(casing3, [casing3, 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('create:mechanical_crafter',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:crafting_table']),
            event.recipes.create.deploying(casing3, [casing3, 'create:electron_tube']),
            event.recipes.create.deploying(casing3, [casing3, 'create:cogwheel'])
        ]
    ).loops(1).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('create:sequenced_gearshift',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            event.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            event.recipes.create.deploying(casing3, [casing3, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('create:controls',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'create:precision_mechanism']),
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:lever'])
        ]
    ).loops(1).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('create:content_observer',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:observer']),
            event.recipes.create.pressing(casing3, casing3),
            event.recipes.create.pressing(casing3, casing3),
            event.recipes.create.deploying(casing3, [casing3, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('create:display_link',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'create:copper_sheet']),
            event.recipes.create.pressing(casing3, casing3),
            event.recipes.create.deploying(casing3, [casing3, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(casing3)
    event.recipes.create.mechanical_crafting('create:rotation_speed_controller',
        [
            'AA AA',
            'ACBCA',
            'ACDCA',
            'AAAAA'
        ], {
        A: 'create:brass_casing',
        B: 'create:cogwheel',
        C: 'create:large_cogwheel',
        D: 'create:precision_mechanism'
    }
    )
    event.recipes.create.mechanical_crafting('create:mechanical_arm',
        [
            ' X ',
            ' B ',
            'DBD',
            'ACA',
            'AAA'
        ], {
        A: 'create:brass_casing',
        B: 'create:brass_ingot',
        C: 'create:large_cogwheel',
        D: 'create:andesite_alloy',
        X: 'create:brass_hand'
    }
    )

    //杂项
    event.recipes.create.mixing('minecraft:sugar', Fluid.of('create:honey', 250))

    event.shapeless('create:controller_rail', ['minecraft:powered_rail', 'create:electron_tube'])
    event.shapeless('create:stockpile_switch', 'create:content_observer')
    event.shapeless('create:content_observer', 'create:stockpile_switch')
    event.shapeless('create:pulse_repeater', ['create:brass_sheet', 'minecraft:repeater'])
    event.shapeless('create:pulse_extender', ['create:pulse_repeater', 'minecraft:redstone_torch'])
    event.shapeless('create:powered_latch', ['minecraft:repeater', 'minecraft:lever'])
    event.shapeless('create:powered_toggle_latch', 'create:powered_latch')
    event.shapeless('create:powered_latch', 'create:powered_toggle_latch')
    event.shapeless('minecraft:redstone', ['#kubejs:powder', 'minecraft:red_dye'])

    event.recipes.create.item_application('create:adjustable_chain_gearshift', ['create:encased_chain_drive', 'minecraft:redstone'])
    event.recipes.create.item_application('create:controller_rail', ['minecraft:powered_rail', 'create:electron_tube'])
    event.recipes.create.item_application('create:linear_chassis', ['#kubejs:logs', 'create:andesite_alloy'])
    event.recipes.create.item_application('create:radial_chassis', ['#kubejs:logs', 'create:zinc_ingot'])

    event.recipes.create.splashing([Item.of('minecraft:nether_wart').withChance(0.3),
    Item.of('minecraft:crimson_fungus').withChance(0.2),
    Item.of('minecraft:warped_fungus').withChance(0.2)
    ], 'minecraft:soul_soil')
    let a = 'minecraft:stone_slab'
    event.recipes.create.sequenced_assembly(Item.of('create:millstone'),
        a,
        [
            event.recipes.create.deploying(a, [a, 'create:cogwheel']),
            event.recipes.create.deploying(a, [a, 'minecraft:stone_slab'])
        ]).loops(1).transitionalItem(a)
    event.recipes.create.sequenced_assembly(Item.of('create:mechanical_mixer'),
        'create:andesite_casing',
        [
            event.recipes.create.deploying('create:andesite_casing', ['create:andesite_casing', 'create:cogwheel']),
            event.recipes.create.deploying('create:andesite_casing', ['create:andesite_casing', 'create:whisk'])
        ]).loops(1).transitionalItem('create:andesite_casing')
    event.recipes.create.sequenced_assembly(Item.of('create:sequenced_gearshift'),
        'create:encased_chain_drive',
        [
            event.recipes.create.deploying('create:encased_chain_drive', ['create:encased_chain_drive', 'create:cogwheel']),
            event.recipes.create.deploying('create:encased_chain_drive', ['create:encased_chain_drive', 'electron_tube'])
        ]).loops(1).transitionalItem('create:encased_chain_drive')

    event.stonecutting('create:depot', 'create:andesite_casing')

    event.shaped(Item.of('create:water_wheel', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'create:large_cogwheel'
    })
    event.shaped(Item.of('create:large_water_wheel', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'create:water_wheel'
    })

    event.recipes.create.sequenced_assembly('create:cart_assembler',
        '#minecraft:planks',
        [
            event.recipes.create.cutting('#minecraft:planks', '#minecraft:planks'),
            event.recipes.create.deploying('#minecraft:planks', ['#minecraft:planks', 'create:andesite_alloy']),
            event.recipes.create.deploying('#minecraft:planks', ['#minecraft:planks', 'minecraft:redstone']),
            event.recipes.create.deploying('#minecraft:planks', ['#minecraft:planks', '#minecraft:wooden_slabs']),
            event.recipes.create.pressing('#minecraft:planks', '#minecraft:planks')
        ]
    ).loops(1).transitionalItem('#minecraft:planks')
    event.recipes.create.sequenced_assembly('create:steam_engine',
        'minecraft:copper_block',
        [
            event.recipes.create.deploying('minecraft:copper_block', ['minecraft:copper_block', 'create:golden_sheet']),
            event.recipes.create.deploying('minecraft:copper_block', ['minecraft:copper_block', 'create:shaft'])
        ]
    ).loops(1).transitionalItem('minecraft:copper_block')
    event.recipes.create.sequenced_assembly('create:sticker',
        '#forge:cobblestone',
        [
            event.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'create:andesite_alloy']),
            event.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'create:andesite_alloy']),
            event.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'minecraft:redstone']),
            event.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'minecraft:slime_ball']),
            event.recipes.create.pressing('#forge:cobblestone', '#forge:cobblestone')
        ]
    ).loops(1).transitionalItem('#forge:cobblestone')
    event.recipes.create.sequenced_assembly('create:redstone_contact',
        '#forge:cobblestone',
        [
            event.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'minecraft:redstone']),
            event.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem('#forge:cobblestone')
    event.recipes.create.sequenced_assembly('kubejs:end_cake',
        'create:blaze_cake_base',
        [
            event.recipes.create.filling('create:blaze_cake_base', ['create:blaze_cake_base', Fluid.of('kubejs:end_mechanism_melt', 200)]),
            event.recipes.create.deploying('create:blaze_cake_base', ['create:blaze_cake_base', 'farmersdelight:cake_slice'])
        ]
    ).loops(7).transitionalItem('create:blaze_cake_base')

    //蓝图炮
    event.recipes.create.sequenced_assembly('create:schematicannon',
        casing1,
        [
            event.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'create:large_cogwheel']),
            event.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'minecraft:dispenser']),
            event.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'minecraft:iron_block']),
            event.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'minecraft:iron_block'])
        ]
    ).loops(1).transitionalItem(casing1)

    //机壳配方
    //工作台合成
    event.shapeless(Item.of('create:andesite_casing', 1), ['create:cogwheel', 'create:andesite_alloy', '#forge:stripped_logs', '#kubejs:saws']).damageIngredient('#kubejs:saws', 1)
    //流水线合成
    let slabs = '#minecraft:wooden_slabs'
    event.recipes.create.sequenced_assembly('create:andesite_casing',
        slabs,
        [
            event.recipes.create.deploying(slabs, [slabs, '#kubejs:saws']).damageIngredient('#kubejs:saws', 1),
            event.recipes.create.deploying(slabs, [slabs, 'create:cogwheel']),
            event.recipes.create.deploying(slabs, [slabs, 'create:andesite_alloy'])
        ]
    ).loops(1).transitionalItem(slabs)
    event.recipes.create.sequenced_assembly('create:copper_casing',
        slabs,
        [
            event.recipes.create.deploying(slabs, [slabs, '#kubejs:saws']).damageIngredient('#kubejs:saws', 1),
            event.recipes.create.deploying(slabs, [slabs, 'create:cogwheel']),
            event.recipes.create.deploying(slabs, [slabs, 'minecraft:copper_ingot'])
        ]
    ).loops(1).transitionalItem(slabs)
    event.recipes.create.sequenced_assembly('create:brass_casing',
        slabs,
        [
            event.recipes.create.deploying(slabs, [slabs, '#kubejs:saws/iron']).damageIngredient('#kubejs:saws/iron', 1),
            event.recipes.create.deploying(slabs, [slabs, 'create:cogwheel']),
            event.recipes.create.deploying(slabs, [slabs, 'create:brass_ingot'])
        ]
    ).loops(1).transitionalItem(slabs)
    event.recipes.create.sequenced_assembly('kubejs:steel_casing',
        'minecraft:cobblestone',
        [
            event.recipes.create.deploying('minecraft:cobblestone', ['minecraft:cobblestone', '#kubejs:saws/iron']).damageIngredient('#kubejs:saws/iron', 1),
            event.recipes.create.deploying('minecraft:cobblestone', ['minecraft:cobblestone', 'create:cogwheel']),
            event.recipes.create.deploying('minecraft:cobblestone', ['minecraft:cobblestone', 'ad_astra:steel_ingot'])
        ]
    ).loops(1).transitionalItem('minecraft:cobblestone')
    event.recipes.create.sequenced_assembly('kubejs:desh_casing',
        'ad_astra:moon_cobblestone',
        [
            event.recipes.create.deploying('ad_astra:moon_cobblestone', ['ad_astra:moon_cobblestone', '#kubejs:saws/diamond']).damageIngredient('#kubejs:saws/diamond', 1),
            event.recipes.create.deploying('ad_astra:moon_cobblestone', ['ad_astra:moon_cobblestone', 'create:cogwheel']),
            event.recipes.create.deploying('ad_astra:moon_cobblestone', ['ad_astra:moon_cobblestone', 'ad_astra:desh_ingot'])
        ]
    ).loops(1).transitionalItem('ad_astra:moon_cobblestone')
    event.recipes.create.sequenced_assembly('kubejs:ostrum_casing',
        'ad_astra:mars_cobblestone',
        [
            event.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', '#kubejs:saws/diamond']).damageIngredient('#kubejs:saws/diamond', 1),
            event.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', 'create:cogwheel']),
            event.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', 'ad_astra:ostrum_block']),
            event.recipes.create.pressing('ad_astra:mars_cobblestone', 'ad_astra:mars_cobblestone'),
            event.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', 'ad_astra:ostrum_ingot'])
        ]
    ).loops(1).transitionalItem('ad_astra:mars_cobblestone')
    event.recipes.create.sequenced_assembly('kubejs:calorite_casing',
        'ad_astra:venus_cobblestone',
        [
            event.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', '#kubejs:saws/diamond']).damageIngredient('#kubejs:saws/diamond', 1),
            event.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', 'create:cogwheel']),
            event.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', 'ad_astra:calorite_block']),
            event.recipes.create.pressing('ad_astra:venus_cobblestone', 'ad_astra:venus_cobblestone'),
            event.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', 'ad_astra:calorite_ingot'])
        ]
    ).loops(1).transitionalItem('ad_astra:venus_cobblestone')

})