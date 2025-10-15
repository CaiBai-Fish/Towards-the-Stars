ServerEvents.recipes(e => {
    //构件
    e.recipes.create.sequenced_assembly('ctts:incomplete_nether_mechanism',
        'create:precision_mechanism',
        [
            e.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:ancient_debris']),
            e.recipes.create.pressing('create:precision_mechanism', 'create:precision_mechanism')
        ]
    ).loops(3).transitionalItem('create:precision_mechanism')
    e.recipes.create.mixing('ctts:nether_mechanism', ['ctts:incomplete_nether_mechanism', Fluid.of('butcher:blood_liquid', 1000)]).superheated()
    e.recipes.create.mechanical_crafting('ctts:incomplete_end_mechanism',
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
        D: 'ctts:crimson_crystal_block',
        E: 'minecraft:nether_star'
    })
    let t_end = 'ctts:incomplete_end_mechanism'
    e.recipes.create.sequenced_assembly('ctts:end_mechanism',
        t_end,
        [
            e.recipes.create.deploying(t_end, [t_end, 'minecraft:netherite_ingot']),
            e.recipes.create.pressing(t_end, t_end),
            e.recipes.create.deploying(t_end, [t_end, 'minecraft:ender_eye']),
            e.recipes.create.deploying(t_end, [t_end, 'minecraft:ender_eye']),
            e.recipes.create.pressing(t_end, t_end)
        ]
    ).loops(5).transitionalItem(t_end)
    //机器配方
    //安山机壳
    let casing1 = 'create:andesite_casing'
    e.recipes.create.deploying('create:encased_fan', [casing1, 'create:propeller'])
    e.recipes.create.item_application('create:mechanical_press', [casing1, 'minecraft:iron_block'])
    e.recipes.create.deploying('create:weighted_ejector', ['create:depot', 'create:cogwheel'])
    e.recipes.create.deploying('create:speedometer', [casing1, 'minecraft:compass'])
    e.recipes.create.deploying('create:windmill_bearing', ['#forge:stone', 'create:shaft'])
    e.recipes.create.deploying('create:mechanical_bearing', ['create:windmill_bearing', 'create:cogwheel'])
    e.recipes.create.deploying('create:deployer', [casing1, 'create:brass_hand'])
    e.recipes.create.deploying('create:contraption_controls', [casing1, 'create:electron_tube'])
    e.recipes.create.deploying('create:mechanical_drill', [casing1, 'ctts:drill_head'])
    e.recipes.create.deploying('create:mechanical_saw', [casing1, 'ctts:saw_blade'])
    e.recipes.create.deploying('create:mechanical_harvester', [casing1, 'ctts:harvester'])
    e.recipes.create.deploying('create:mechanical_plough', [casing1, 'ctts:plough'])
    e.recipes.create.deploying('create:mechanical_roller', [casing1, 'create:crushing_wheel'])

    e.recipes.create.sequenced_assembly('create:portable_storage_interface',
        casing1,
        [
            e.recipes.create.deploying(casing1, [casing1, 'create:chute']),
            e.recipes.create.cutting(casing1, casing1)
        ]
    ).loops(1).transitionalItem(casing1)
    e.recipes.create.sequenced_assembly('create:mechanical_piston',
        casing1,
        [
            e.recipes.create.deploying(casing1, [casing1, '#minecraft:wooden_slabs']),
            e.recipes.create.pressing(casing1, casing1),
            e.recipes.create.deploying(casing1, [casing1, 'create:piston_extension_pole'])
        ]
    ).loops(1).transitionalItem('create:piston_extension_pole')
    e.recipes.create.sequenced_assembly('create:gantry_carriage',
        casing1,
        [
            e.recipes.create.pressing(casing1, casing1),
            e.recipes.create.deploying(casing1, [casing1, 'create:cogwheel']),
            e.recipes.create.deploying(casing1, [casing1, '#minecraft:planks'])
        ]
    ).loops(1).transitionalItem(casing1)
    e.recipes.create.sequenced_assembly('create:rope_pulley',
        casing1,
        [
            e.recipes.create.cutting(casing1, casing1),
            e.recipes.create.deploying(casing1, [casing1, '#minecraft:wool']),
            e.recipes.create.deploying(casing1, [casing1, 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem(casing1)
    e.recipes.create.sequenced_assembly('createaddition:rolling_mill',
        casing1,
        [
            e.recipes.create.cutting(casing1, casing1),
            e.recipes.create.deploying(casing1, [casing1, 'create:iron_sheet']),
            e.recipes.create.deploying(casing1, [casing1, 'create:iron_sheet']),
            e.recipes.create.deploying(casing1, [casing1, 'create:shaft']),
            e.recipes.create.deploying(casing1, [casing1, 'create:shaft'])
        ]
    ).loops(1).transitionalItem(casing1)
    e.recipes.create.sequenced_assembly('create_mechanical_extruder:mechanical_extruder',
        'create:mechanical_drill',
        [
            e.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', '#forge:glass']),
            e.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', '#forge:glass']),
            e.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', '#forge:glass']),
            e.recipes.create.deploying('create:mechanical_drill', ['create:mechanical_drill', 'create:shaft'])
        ]
    ).loops(1).transitionalItem('create:mechanical_drill')
    //铜机壳
    let casing2 = 'create:copper_casing'
    e.stonecutting('create:copper_backtank', casing2)
    e.stonecutting('2x create:fluid_pipe', casing2)

    e.recipes.create.deploying('create:fluid_valve', ['create:fluid_pipe', 'create:iron_sheet'])
    e.recipes.create.deploying('create:mechanical_pump', ['create:fluid_pipe', 'create:cogwheel'])
    e.recipes.create.deploying('create:smart_fluid_pipe', ['create:fluid_valve', 'create:electron_tube'])
    e.recipes.create.deploying('create:item_drain', [casing2, 'quark:grate'])
    e.recipes.create.deploying('create:spout', [casing2, 'minecraft:dried_kelp'])

    e.recipes.create.sequenced_assembly('create:fluid_tank',
        casing2,
        [
            e.recipes.create.deploying(casing2, [casing2, 'minecraft:glass'])
        ]
    ).loops(2).transitionalItem(casing2)
    e.recipes.create.sequenced_assembly('create:hose_pulley',
        casing2,
        [
            e.recipes.create.cutting(casing2, casing2),
            e.recipes.create.deploying(casing2, [casing2, 'minecraft:dried_kelp_block']),
            e.recipes.create.deploying(casing2, [casing2, 'create:copper_sheet'])
        ]
    ).loops(1).transitionalItem(casing2)
    e.recipes.create.sequenced_assembly('create:portable_fluid_interface',
        casing2,
        [
            e.recipes.create.deploying(casing2, [casing2, 'create:chute']),
            e.recipes.create.cutting(casing2, casing2)
        ]
    ).loops(1).transitionalItem(casing2)

    //黄铜机壳
    let casing3 = 'create:brass_casing'
    e.recipes.create.sequenced_assembly('create:clockwork_bearing',
        casing3,
        [
            e.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            e.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            e.recipes.create.deploying(casing3, [casing3, 'create:electron_tube']),
            e.recipes.create.deploying(casing3, [casing3, '#minecraft:wooden_slabs']),
            e.recipes.create.pressing(casing3, casing3)
        ]
    ).loops(1).transitionalItem(casing3)
    e.recipes.create.sequenced_assembly('create:elevator_pulley',
        casing3,
        [
            e.recipes.create.cutting(casing3, casing3),
            e.recipes.create.deploying(casing3, [casing3, 'minecraft:dried_kelp_block']),
            e.recipes.create.deploying(casing3, [casing3, 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem(casing3)
    e.recipes.create.sequenced_assembly('create:mechanical_crafter',
        casing3,
        [
            e.recipes.create.deploying(casing3, [casing3, 'minecraft:crafting_table']),
            e.recipes.create.deploying(casing3, [casing3, 'create:electron_tube']),
            e.recipes.create.deploying(casing3, [casing3, 'create:cogwheel'])
        ]
    ).loops(1).transitionalItem(casing3)
    e.recipes.create.sequenced_assembly('create:sequenced_gearshift',
        casing3,
        [
            e.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            e.recipes.create.deploying(casing3, [casing3, 'create:cogwheel']),
            e.recipes.create.deploying(casing3, [casing3, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(casing3)
    e.recipes.create.sequenced_assembly('create:controls',
        casing3,
        [
            e.recipes.create.deploying(casing3, [casing3, 'create:precision_mechanism']),
            e.recipes.create.deploying(casing3, [casing3, 'minecraft:lever'])
        ]
    ).loops(1).transitionalItem(casing3)
    e.recipes.create.sequenced_assembly('create:content_observer',
        casing3,
        [
            e.recipes.create.deploying(casing3, [casing3, 'minecraft:observer']),
            e.recipes.create.pressing(casing3, casing3),
            e.recipes.create.pressing(casing3, casing3),
            e.recipes.create.deploying(casing3, [casing3, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(casing3)
    e.recipes.create.sequenced_assembly('create:display_link',
        casing3,
        [
            e.recipes.create.deploying(casing3, [casing3, 'create:copper_sheet']),
            e.recipes.create.pressing(casing3, casing3),
            e.recipes.create.deploying(casing3, [casing3, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(casing3)
    e.recipes.create.mechanical_crafting('create:rotation_speed_controller',
        [
            'AA AA',
            'ACBCA',
            'ACDCA',
            'AAAAA'
        ],
        {
            A: 'create:brass_casing',
            B: 'create:cogwheel',
            C: 'create:large_cogwheel',
            D: 'create:precision_mechanism'
        }
    )
    e.recipes.create.mechanical_crafting('create:mechanical_arm',
        [
            ' X ',
            ' B ',
            'DBD',
            'ACA',
            'AAA'
        ],
        {
            A: 'create:brass_casing',
            B: 'create:brass_ingot',
            C: 'create:large_cogwheel',
            D: 'create:andesite_alloy',
            X: 'create:brass_hand'
        }
    )

    //蓝图炮
    e.recipes.create.sequenced_assembly('create:schematicannon',
        casing1,
        [
            e.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'create:large_cogwheel']),
            e.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'minecraft:dispenser']),
            e.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'minecraft:iron_block']),
            e.recipes.create.deploying('create:schematicannon', ['create:schematicannon', 'minecraft:iron_block'])
        ]
    ).loops(1).transitionalItem(casing1)

    //机壳配方
    //工作台合成
    e.shapeless(Item.of('create:andesite_casing', 1), ['create:cogwheel', 'create:andesite_alloy', '#forge:stripped_logs', '#ctts:saws']).damageIngredient('#ctts:saws', 1)
    //流水线合成
    let slabs = '#minecraft:wooden_slabs'
    e.recipes.create.sequenced_assembly('create:andesite_casing',
        slabs,
        [
            e.recipes.create.deploying(slabs, [slabs, '#ctts:saws']).damageIngredient('#ctts:saws', 1),
            e.recipes.create.deploying(slabs, [slabs, 'create:cogwheel']),
            e.recipes.create.deploying(slabs, [slabs, 'create:andesite_alloy'])
        ]
    ).loops(1).transitionalItem(slabs)
    e.recipes.create.sequenced_assembly('create:copper_casing',
        slabs,
        [
            e.recipes.create.deploying(slabs, [slabs, '#ctts:saws']).damageIngredient('#ctts:saws', 1),
            e.recipes.create.deploying(slabs, [slabs, 'create:cogwheel']),
            e.recipes.create.deploying(slabs, [slabs, 'minecraft:copper_ingot'])
        ]
    ).loops(1).transitionalItem(slabs)
    e.recipes.create.sequenced_assembly('create:brass_casing',
        slabs,
        [
            e.recipes.create.deploying(slabs, [slabs, '#ctts:saws/iron']).damageIngredient('#ctts:saws/iron', 1),
            e.recipes.create.deploying(slabs, [slabs, 'create:cogwheel']),
            e.recipes.create.deploying(slabs, [slabs, 'create:brass_ingot'])
        ]
    ).loops(1).transitionalItem(slabs)
    e.recipes.create.sequenced_assembly('ctts:steel_casing',
        'minecraft:cobblestone',
        [
            e.recipes.create.deploying('minecraft:cobblestone', ['minecraft:cobblestone', '#ctts:saws/iron']).damageIngredient('#ctts:saws/iron', 1),
            e.recipes.create.deploying('minecraft:cobblestone', ['minecraft:cobblestone', 'create:cogwheel']),
            e.recipes.create.deploying('minecraft:cobblestone', ['minecraft:cobblestone', 'ad_astra:steel_ingot'])
        ]
    ).loops(1).transitionalItem('minecraft:cobblestone')
    e.recipes.create.sequenced_assembly('ctts:desh_casing',
        'ad_astra:moon_cobblestone',
        [
            e.recipes.create.deploying('ad_astra:moon_cobblestone', ['ad_astra:moon_cobblestone', '#ctts:saws/diamond']).damageIngredient('#ctts:saws/diamond', 1),
            e.recipes.create.deploying('ad_astra:moon_cobblestone', ['ad_astra:moon_cobblestone', 'create:cogwheel']),
            e.recipes.create.deploying('ad_astra:moon_cobblestone', ['ad_astra:moon_cobblestone', 'ad_astra:desh_ingot'])
        ]
    ).loops(1).transitionalItem('ad_astra:moon_cobblestone')
    e.recipes.create.sequenced_assembly('ctts:ostrum_casing',
        'ad_astra:mars_cobblestone',
        [
            e.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', '#ctts:saws/diamond']).damageIngredient('#ctts:saws/diamond', 1),
            e.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', 'create:cogwheel']),
            e.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', 'ad_astra:ostrum_block']),
            e.recipes.create.pressing('ad_astra:mars_cobblestone', 'ad_astra:mars_cobblestone'),
            e.recipes.create.deploying('ad_astra:mars_cobblestone', ['ad_astra:mars_cobblestone', 'ad_astra:ostrum_ingot'])
        ]
    ).loops(1).transitionalItem('ad_astra:mars_cobblestone')
    e.recipes.create.sequenced_assembly('ctts:calorite_casing',
        'ad_astra:venus_cobblestone',
        [
            e.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', '#ctts:saws/diamond']).damageIngredient('#ctts:saws/diamond', 1),
            e.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', 'create:cogwheel']),
            e.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', 'ad_astra:calorite_block']),
            e.recipes.create.pressing('ad_astra:venus_cobblestone', 'ad_astra:venus_cobblestone'),
            e.recipes.create.deploying('ad_astra:venus_cobblestone', ['ad_astra:venus_cobblestone', 'ad_astra:calorite_ingot'])
        ]
    ).loops(1).transitionalItem('ad_astra:venus_cobblestone')

    //杂项
    e.recipes.create.compacting('minecraft:dripstone_block', [Fluid.water(200), 'create:limestone'])
    e.recipes.create.compacting('minecraft:calcite', [Fluid.water(100), 'ae2:sky_stone_block', 'minecraft:quartz'])
    e.recipes.create.compacting('2x create:asurine', ['minecraft:calcite', 'minecraft:andesite', 'create:cinder_flour', 'ae2:sky_dust'])
    e.recipes.create.compacting('2x create:crimsite', ['minecraft:calcite', 'minecraft:granite', 'create:cinder_flour', 'ae2:sky_dust'])
    e.recipes.create.compacting('2x create:ochrum', ['minecraft:calcite', 'minecraft:tuff', 'create:cinder_flour', 'ae2:sky_dust'])
    e.recipes.create.compacting('2x create:veridium', ['minecraft:calcite', 'minecraft:diorite', 'create:cinder_flour', 'ae2:sky_dust'])
    e.recipes.create.compacting('minecraft:andesite', 'minecraft:calcite')
    e.recipes.create.compacting('minecraft:diamond', '9x ctts:diamond_nugget')
    e.recipes.create.compacting('deeperdarker:sculk_stone', '6x minecraft:sculk')
    e.recipes.create.compacting('ctts:diamond_nugget', 'minecraft:coal_block').superheated()

    e.recipes.create.crushing('2x ad_astra:sky_stone', 'ad_astra:sky_stone')

    e.recipes.create.milling('minecraft:sand', 'minecraft:gravel')
    e.recipes.create.milling('3x ae2:sky_dust', 'ae2:sky_stone_block')
    e.recipes.create.milling(Item.of('ctts:ender_core').withChance(0.4), 'supplementaries:enderman_head')

    e.recipes.create.splashing('minecraft:quartz', 'minecraft:soul_sand')
    e.recipes.create.splashing('minecraft:netherrack', 'minecraft:blackstone')
    e.recipes.create.splashing('minecraft:diorite', 'minecraft:calcite')
    e.recipes.create.splashing([
        Item.of('minecraft:nether_wart').withChance(0.3),
        Item.of('minecraft:crimson_fungus').withChance(0.2),
        Item.of('minecraft:warped_fungus').withChance(0.2)
    ], 'minecraft:soul_soil')

    e.recipes.create.mixing(Item.of('create:andesite_alloy', 2),
        ['minecraft:andesite', 'architects_palette:algal_brick'])
    e.recipes.create.mixing('enderitemod:cracked_enderite_ore', ['minecraft:ancient_debris', '16x minecraft:ender_pearl'])
    e.recipes.create.mixing('ad_astra:steel_ingot', ['minecraft:iron_ingot', '#c:coal']).heated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_andesite', 12), 'minecraft:andesite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_andesite', 1000), 'uc:double_compressed_andesite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_granite', 12), 'minecraft:granite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_granite', 1000), 'uc:double_compressed_granite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_diorite', 12), 'minecraft:diorite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_diorite', 1000), 'uc:double_compressed_diorite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_tuff', 12), 'minecraft:tuff').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_tuff', 1000), 'uc:double_compressed_tuff').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_calcite', 12), 'minecraft:calcite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:melted_calcite', 1000), 'uc:double_compressed_calcite').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:end_mechanism_melt', 500), 'ctts:end_mechanism').superheated()
    e.recipes.create.mixing(Fluid.of('ctts:twilight_mechanism_melt', 500), 'ctts:end_mechanism').superheated()
    e.recipes.create.mixing('minecraft:sugar', Fluid.of('create:honey', 250))
    e.recipes.create.mixing('ctts:crimson_crystal', ['3x ctts:crimson_crystal_girt', '3x ae2:certus_quartz_dust']).heated()

    e.recipes.create.emptying(Fluid.of('butcher:blood_liquid', 1000), 'butcher:blood_liquid_bucket')

    e.recipes.create.deploying('create:adjustable_chain_gearshift', ['create:encased_chain_drive', 'minecraft:redstone'])
    e.recipes.create.deploying('create:controller_rail', ['minecraft:powered_rail', 'create:electron_tube'])
    e.recipes.create.deploying('create:linear_chassis', ['#ctts:logs', 'create:andesite_alloy'])
    e.recipes.create.deploying('create:radial_chassis', ['#ctts:logs', 'create:zinc_ingot'])
    e.recipes.create.deploying(Item.of('ad_astra:wheel'), ['ad_astra:steel_plate', 'create:belt_connector'])

    e.recipes.create.item_application(Item.of('minecraft:end_stone'), ['minecraft:cobblestone', 'minecraft:ender_pearl'])

    e.recipes.create.crushing(['4x create_things_and_misc:crushed_magma',
        Item.of('create_things_and_misc:crushed_magma').withChance(0.5),
        Item.of('create:scoria').withChance(0.12)],
        "minecraft:magma_block")

    let a = 'minecraft:stone_slab'
    e.recipes.create.sequenced_assembly(Item.of('create:millstone'),
        a,
        [
            e.recipes.create.deploying(a, [a, 'create:cogwheel']),
            e.recipes.create.deploying(a, [a, 'minecraft:stone_slab'])
        ]).loops(1).transitionalItem(a)
    e.recipes.create.sequenced_assembly(Item.of('create:mechanical_mixer'),
        'create:andesite_casing',
        [
            e.recipes.create.deploying('create:andesite_casing', ['create:andesite_casing', 'create:cogwheel']),
            e.recipes.create.deploying('create:andesite_casing', ['create:andesite_casing', 'create:whisk'])
        ]).loops(1).transitionalItem('create:andesite_casing')
    e.recipes.create.sequenced_assembly(Item.of('create:sequenced_gearshift'),
        'create:encased_chain_drive',
        [
            e.recipes.create.deploying('create:encased_chain_drive', ['create:encased_chain_drive', 'create:cogwheel']),
            e.recipes.create.deploying('create:encased_chain_drive', ['create:encased_chain_drive', 'electron_tube'])
        ]).loops(1).transitionalItem('create:encased_chain_drive')
    e.recipes.create.sequenced_assembly(Item.of('minecraft:ancient_debris'),
        'minecraft:netherrack',
        [
            e.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:diamond']),
            e.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:gold_ingot']),
            e.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:quartz']),
            e.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'ctts:crimson_crystal']),
            e.recipes.create.pressing('minecraft:netherrack', 'minecraft:netherrack')
        ]
    ).loops(8).transitionalItem('minecraft:netherrack')
    e.recipes.create.sequenced_assembly('create:cart_assembler',
        '#minecraft:planks',
        [
            e.recipes.create.cutting('#minecraft:planks', '#minecraft:planks'),
            e.recipes.create.deploying('#minecraft:planks', ['#minecraft:planks', 'create:andesite_alloy']),
            e.recipes.create.deploying('#minecraft:planks', ['#minecraft:planks', 'minecraft:redstone']),
            e.recipes.create.deploying('#minecraft:planks', ['#minecraft:planks', '#minecraft:wooden_slabs']),
            e.recipes.create.pressing('#minecraft:planks', '#minecraft:planks')
        ]
    ).loops(1).transitionalItem('#minecraft:planks')
    e.recipes.create.sequenced_assembly('create:steam_engine',
        'minecraft:copper_block',
        [
            e.recipes.create.deploying('minecraft:copper_block', ['minecraft:copper_block', 'create:golden_sheet']),
            e.recipes.create.deploying('minecraft:copper_block', ['minecraft:copper_block', 'create:shaft'])
        ]
    ).loops(1).transitionalItem('minecraft:copper_block')
    e.recipes.create.sequenced_assembly('create:sticker',
        '#forge:cobblestone',
        [
            e.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'create:andesite_alloy']),
            e.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'create:andesite_alloy']),
            e.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'minecraft:redstone']),
            e.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'minecraft:slime_ball']),
            e.recipes.create.pressing('#forge:cobblestone', '#forge:cobblestone')
        ]
    ).loops(1).transitionalItem('#forge:cobblestone')
    e.recipes.create.sequenced_assembly('create:redstone_contact',
        '#forge:cobblestone',
        [
            e.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'minecraft:redstone']),
            e.recipes.create.deploying('#forge:cobblestone', ['#forge:cobblestone', 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem('#forge:cobblestone')
    e.recipes.create.sequenced_assembly('ctts:end_cake',
        'create:blaze_cake_base',
        [
            e.recipes.create.filling('create:blaze_cake_base', ['create:blaze_cake_base', Fluid.of('ctts:end_mechanism_melt', 200)]),
            e.recipes.create.deploying('create:blaze_cake_base', ['create:blaze_cake_base', 'farmersdelight:cake_slice'])
        ]
    ).loops(7).transitionalItem('create:blaze_cake_base')
    e.recipes.create.sequenced_assembly('ae2:certus_quartz_crystal',
        'ae2:certus_quartz_dust',
        [
            e.recipes.create.filling('ae2:certus_quartz_dust', ['ae2:certus_quartz_dust', Fluid.of('minecraft:water', 250)])
        ]
    ).loops(5).transitionalItem('ae2:certus_quartz_dust')
    e.recipes.create.sequenced_assembly('ctts:magma_block_pro',
        'uc:double_compressed_magma',
        [
            e.recipes.create.deploying('uc:double_compressed_magma', ['uc:double_compressed_magma', 'ctts:crimson_crystal']),
            e.recipes.create.pressing('uc:double_compressed_magma', 'uc:double_compressed_magma'),
            e.recipes.create.pressing('uc:double_compressed_magma', 'uc:double_compressed_magma'),
            e.recipes.create.pressing('uc:double_compressed_magma', 'uc:double_compressed_magma'),
        ]
    ).loops(4).transitionalItem('uc:double_compressed_magma')
    e.recipes.create.sequenced_assembly([
        Item.of('ctts:twilight_mechanism').withChance(120),
        Item.of('minecraft:iron_nugget').withChance(7),
        Item.of('ae2:ender_dust').withChance(7),
        Item.of('minecraft:blaze_powder').withChance(7),
        Item.of('minecraft:ghast_tear').withChance(7),
        Item.of('minecraft:nether_star').withChance(1)
    ], 'ctts:ender_core',
        [
            e.recipes.create.deploying('ctts:ender_core', ['ctts:ender_core', 'minecraft:ender_pearl']),
            e.recipes.create.deploying('ctts:ender_core', ['ctts:ender_core', 'butcher:dragonscale']),
            e.recipes.create.deploying('ctts:ender_core', ['ctts:ender_core', 'enderitemod:enderite_ingot']),
            e.recipes.create.deploying('ctts:ender_core', ['ctts:ender_core', 'butcher:dragonscale']),
            e.recipes.create.pressing('ctts:ender_core', 'ctts:ender_core')
        ]
    ).loops(10).transitionalItem('ctts:ender_core')
    e.recipes.create.sequenced_assembly('4x minecraft:phantom_membrane',
        'minecraft:slime_ball',
        [
            e.recipes.create.pressing('minecraft:slime_ball', 'minecraft:slime_ball'),
            e.recipes.create.deploying('minecraft:slime_ball', ['minecraft:slime_ball', 'minecraft:feather']),
            e.recipes.create.deploying('minecraft:slime_ball', ['minecraft:slime_ball', 'minecraft:chorus_fruit']),
            e.recipes.create.pressing('minecraft:slime_ball', 'minecraft:slime_ball')
        ]
    ).loops(2).transitionalItem('minecraft:slime_ball')
    e.recipes.create.sequenced_assembly('twilightforest:magic_map_focus',
        'twilightforest:raven_feather',
        [
            e.recipes.create.filling('twilightforest:raven_feather', ['twilightforest:raven_feather', Fluid.of('ctts:twilight_mechanism_melt', 100)]),
            e.recipes.create.deploying('twilightforest:raven_feather', ['twilightforest:raven_feather', 'glowstone_dust']),
            e.recipes.create.deploying('twilightforest:raven_feather', ['twilightforest:raven_feather', 'twilightforest:torchberries']),
            e.recipes.create.pressing('twilightforest:raven_feather', 'twilightforest:raven_feather')
        ]
    ).loops(10).transitionalItem('twilightforest:raven_feather')

    e.stonecutting('create:depot', 'create:andesite_casing')

    e.shaped(Item.of('create:water_wheel', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'create:large_cogwheel'
    })
    e.shaped(Item.of('create:large_water_wheel', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'create:water_wheel'
    })

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