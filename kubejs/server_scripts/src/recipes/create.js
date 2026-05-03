ServerEvents.recipes(e => {
    const recipe = e.recipes.create
    // 构件
    recipe.sequenced_assembly('ctts:incomplete_nether_mechanism',
        'create:precision_mechanism',
        [
            recipe.deploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:ancient_debris']),
            recipe.pressing('create:precision_mechanism', 'create:precision_mechanism')
        ]
    ).loops(3).transitionalItem('create:precision_mechanism')
    recipe.sequenced_assembly('ctts:nether_mechanism',
        'ctts:incomplete_nether_mechanism',
        [
            recipe.filling('ctts:incomplete_nether_mechanism', ['ctts:incomplete_nether_mechanism', Fluid.of('butchery:blood', 1000)]),
            recipe.deploying('ctts:incomplete_nether_mechanism', ['ctts:incomplete_nether_mechanism', 'ad_astra:desh_nugget']),
            recipe.pressing('ctts:incomplete_nether_mechanism', 'ctts:incomplete_nether_mechanism')
        ]
    ).loops(5).transitionalItem('ctts:incomplete_nether_mechanism')
    recipe.mechanical_crafting('ctts:incomplete_end_mechanism',
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
    const t_end = 'ctts:incomplete_end_mechanism'
    recipe.sequenced_assembly('ctts:end_mechanism',
        t_end,
        [
            recipe.deploying(t_end, [t_end, 'minecraft:netherite_ingot']),
            recipe.deploying(t_end, [t_end, 'ad_astra:ostrum_nugget']),
            recipe.pressing(t_end, t_end),
            recipe.deploying(t_end, [t_end, 'minecraft:ender_eye']),
            recipe.deploying(t_end, [t_end, 'minecraft:ender_eye']),
            recipe.pressing(t_end, t_end)
        ]
    ).loops(5).transitionalItem(t_end)
    //机器配方
    //安山机壳
    let casing1 = 'create:andesite_casing'
    recipe.deploying('create:encased_fan', [casing1, 'create:propeller'])
    recipe.item_application('create:mechanical_press', [casing1, 'minecraft:iron_block'])
    recipe.deploying('create:weighted_ejector', ['create:depot', 'create:cogwheel'])
    recipe.deploying('create:speedometer', [casing1, 'minecraft:compass'])
    recipe.deploying('create:windmill_bearing', ['#forge:stone', 'create:shaft'])
    recipe.deploying('create:mechanical_bearing', ['create:windmill_bearing', 'create:cogwheel'])
    recipe.item_application('create:deployer', [casing1, 'create:brass_hand'])
    recipe.deploying('create:contraption_controls', [casing1, 'create:electron_tube'])
    recipe.deploying('create:mechanical_drill', [casing1, 'ctts:drill_head'])
    recipe.deploying('create:mechanical_saw', [casing1, 'ctts:saw_blade'])
    recipe.deploying('create:mechanical_harvester', [casing1, 'ctts:harvester'])
    recipe.deploying('create:mechanical_plough', [casing1, 'ctts:plough'])
    recipe.deploying('create:mechanical_roller', [casing1, 'create:crushing_wheel'])


    recipe.sequenced_assembly('create:mechanical_mixer',
        casing1,
        [
            recipe.deploying('ctts:incomplete_mechanical_mixer', ['ctts:incomplete_mechanical_mixer', 'create:cogwheel']),
            recipe.deploying('ctts:incomplete_mechanical_mixer', ['ctts:incomplete_mechanical_mixer', 'create:whisk'])
        ]
    ).loops(1).transitionalItem('ctts:incomplete_mechanical_mixer')
    const im_portable_storage_interface = 'ctts:incomplete_portable_storage_interface'
    recipe.sequenced_assembly('create:portable_storage_interface',
        casing1,
        [
            recipe.deploying(im_portable_storage_interface, [im_portable_storage_interface, 'create:chute']),
            recipe.cutting(im_portable_storage_interface, im_portable_storage_interface)
        ]
    ).loops(1).transitionalItem(im_portable_storage_interface)
    const im_mechanical_piston = 'ctts:incomplete_mechanical_piston'
    recipe.sequenced_assembly('create:mechanical_piston',
        casing1,
        [
            recipe.deploying(im_mechanical_piston, [im_mechanical_piston, '#minecraft:wooden_slabs']),
            recipe.pressing(im_mechanical_piston, im_mechanical_piston),
            recipe.deploying(im_mechanical_piston, [im_mechanical_piston, 'create:piston_extension_pole'])
        ]
    ).loops(1).transitionalItem(im_mechanical_piston)
    const im_gantry_carriage = 'ctts:incomplete_gantry_carriage'
    recipe.sequenced_assembly('create:gantry_carriage',
        casing1,
        [
            recipe.pressing(im_gantry_carriage, im_gantry_carriage),
            recipe.deploying(im_gantry_carriage, [im_gantry_carriage, 'create:cogwheel']),
            recipe.deploying(im_gantry_carriage, [im_gantry_carriage, '#minecraft:planks'])
        ]
    ).loops(1).transitionalItem(im_gantry_carriage)
    const im_rope_pulley = 'ctts:incomplete_rope_pulley'
    recipe.sequenced_assembly('create:rope_pulley',
        casing1,
        [
            recipe.deploying(im_rope_pulley, [im_rope_pulley, 'create:shaft']),
            recipe.deploying(im_rope_pulley, [im_rope_pulley, 'create:iron_sheet']),
            recipe.deploying(im_rope_pulley, [im_rope_pulley, '#minecraft:wool']),
        ]
    ).loops(1).transitionalItem(im_rope_pulley)
    const im_rolling_mill = 'ctts:incomplete_rolling_mill'
    recipe.sequenced_assembly('createaddition:rolling_mill',
        casing1,
        [
            recipe.cutting(im_rolling_mill, im_rolling_mill),
            recipe.deploying(im_rolling_mill, [im_rolling_mill, 'create:iron_sheet']),
            recipe.deploying(im_rolling_mill, [im_rolling_mill, 'create:iron_sheet']),
            recipe.deploying(im_rolling_mill, [im_rolling_mill, 'create:shaft']),
            recipe.deploying(im_rolling_mill, [im_rolling_mill, 'create:shaft'])
        ]
    ).loops(1).transitionalItem(im_rolling_mill)
    const im_mechanical_extruder = 'ctts:incomplete_mechanical_extruder'
    recipe.sequenced_assembly('create_mechanical_extruder:mechanical_extruder',
        'create:mechanical_drill',
        [
            recipe.deploying(im_mechanical_extruder, [im_mechanical_extruder, '#forge:glass']),
            recipe.deploying(im_mechanical_extruder, [im_mechanical_extruder, '#forge:glass']),
            recipe.deploying(im_mechanical_extruder, [im_mechanical_extruder, '#forge:glass']),
            recipe.deploying(im_mechanical_extruder, [im_mechanical_extruder, 'create:shaft'])
        ]
    ).loops(1).transitionalItem(im_mechanical_extruder)
    const im_chain_conveyor = 'ctts:incomplete_chain_conveyor'
    recipe.sequenced_assembly('create:chain_conveyor',
        casing1,
        [
            recipe.deploying(im_chain_conveyor, [im_chain_conveyor, 'create:large_cogwheel']),
            recipe.pressing(im_chain_conveyor, im_chain_conveyor)
        ]
    ).loops(1).transitionalItem(im_chain_conveyor)

    // 蓝图炮
    const im_schematicannon = 'ctts:incomplete_schematicannon'
    recipe.sequenced_assembly('create:schematicannon',
        casing1,
        [
            recipe.deploying(im_schematicannon, [im_schematicannon, 'minecraft:dispenser']),
            recipe.deploying(im_schematicannon, [im_schematicannon, 'create:large_cogwheel']),
            recipe.deploying(im_schematicannon, [im_schematicannon, 'minecraft:iron_block']),
            recipe.deploying(im_schematicannon, [im_schematicannon, 'minecraft:iron_block'])
        ]
    ).loops(1).transitionalItem(im_schematicannon)

    // 铜机壳
    let casing2 = 'create:copper_casing'
    e.stonecutting('create:copper_backtank', casing2)
    e.stonecutting('2x create:fluid_pipe', casing2)

    recipe.deploying('create:fluid_valve', ['create:fluid_pipe', 'create:iron_sheet'])
    recipe.deploying('create:mechanical_pump', ['create:fluid_pipe', 'create:cogwheel'])
    recipe.deploying('create:smart_fluid_pipe', ['create:fluid_valve', 'create:electron_tube'])
    recipe.deploying('create:item_drain', [casing2, 'quark:grate'])
    recipe.deploying('create:spout', [casing2, 'minecraft:dried_kelp'])

    const im_fluid_tank = 'ctts:incomplete_fluid_tank'
    recipe.sequenced_assembly('create:fluid_tank',
        casing2,
        [
            recipe.deploying(im_fluid_tank, [im_fluid_tank, 'minecraft:glass'])
        ]
    ).loops(2).transitionalItem(im_fluid_tank)
    const im_hose_pully = 'ctts:incomplete_hose_pulley'
    recipe.sequenced_assembly('create:hose_pulley',
        casing2,
        [
            recipe.cutting(im_hose_pully, im_hose_pully),
            recipe.deploying(im_hose_pully, [im_hose_pully, 'minecraft:dried_kelp_block']),
            recipe.deploying(im_hose_pully, [im_hose_pully, 'create:copper_sheet'])
        ]
    ).loops(1).transitionalItem(im_hose_pully)
    const im_portable_fluid_interface = 'ctts:incomplete_portable_fluid_interface'
    recipe.sequenced_assembly('create:portable_fluid_interface',
        casing2,
        [
            recipe.deploying(im_portable_fluid_interface, [im_portable_fluid_interface, 'create:chute']),
            recipe.cutting(im_portable_fluid_interface, im_portable_fluid_interface)
        ]
    ).loops(1).transitionalItem(im_portable_fluid_interface)

    // 黄铜机壳
    let casing3 = 'create:brass_casing'
    const im_clockwork_bearing = 'ctts:incomplete_clockwork_bearing'
    recipe.sequenced_assembly('create:clockwork_bearing',
        casing3,
        [
            recipe.deploying(im_clockwork_bearing, [im_clockwork_bearing, 'create:cogwheel']),
            recipe.deploying(im_clockwork_bearing, [im_clockwork_bearing, 'create:cogwheel']),
            recipe.deploying(im_clockwork_bearing, [im_clockwork_bearing, 'create:electron_tube']),
            recipe.deploying(im_clockwork_bearing, [im_clockwork_bearing, '#minecraft:wooden_slabs']),
            recipe.pressing(im_clockwork_bearing, im_clockwork_bearing)
        ]
    ).loops(1).transitionalItem(im_clockwork_bearing)
    const im_elevator_pulley = 'ctts:incomplete_elevator_pulley'
    recipe.sequenced_assembly('create:elevator_pulley',
        casing3,
        [
            recipe.cutting(im_elevator_pulley, im_elevator_pulley),
            recipe.deploying(im_elevator_pulley, [im_elevator_pulley, 'minecraft:dried_kelp_block']),
            recipe.deploying(im_elevator_pulley, [im_elevator_pulley, 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem(im_elevator_pulley)
    const im_mechanical_crafter = 'ctts:incomplete_mechanical_crafter'
    recipe.sequenced_assembly('create:mechanical_crafter',
        casing3,
        [
            recipe.deploying(im_mechanical_crafter, [im_mechanical_crafter, 'minecraft:crafting_table']),
            recipe.deploying(im_mechanical_crafter, [im_mechanical_crafter, 'create:electron_tube']),
            recipe.deploying(im_mechanical_crafter, [im_mechanical_crafter, 'create:cogwheel'])
        ]
    ).loops(1).transitionalItem(im_mechanical_crafter)
    const im_sequenced_gearshift = 'ctts:incomplete_sequenced_gearshift'
    recipe.sequenced_assembly('create:sequenced_gearshift',
        casing3,
        [
            recipe.deploying(im_sequenced_gearshift, [im_sequenced_gearshift, 'create:cogwheel']),
            recipe.deploying(im_sequenced_gearshift, [im_sequenced_gearshift, 'create:cogwheel']),
            recipe.deploying(im_sequenced_gearshift, [im_sequenced_gearshift, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(im_sequenced_gearshift)
    const im_controls = 'ctts:incomplete_controls'
    recipe.sequenced_assembly('create:controls',
        casing3,
        [
            recipe.deploying(im_controls, [im_controls, 'create:precision_mechanism']),
            recipe.deploying(im_controls, [im_controls, 'minecraft:lever'])
        ]
    ).loops(1).transitionalItem(im_controls)
    const im_content_observer = 'ctts:incomplete_content_observer'
    recipe.sequenced_assembly('create:content_observer',
        casing3,
        [
            recipe.deploying(im_content_observer, [im_content_observer, 'minecraft:observer']),
            recipe.pressing(im_content_observer, im_content_observer),
            recipe.pressing(im_content_observer, im_content_observer),
            recipe.deploying(im_content_observer, [im_content_observer, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(im_content_observer)
    const im_display_link = 'ctts:incomplete_display_link'
    recipe.sequenced_assembly('create:display_link',
        casing3,
        [
            recipe.deploying(im_display_link, [im_display_link, 'create:copper_sheet']),
            recipe.pressing(im_display_link, im_display_link),
            recipe.deploying(im_display_link, [im_display_link, 'create:electron_tube'])
        ]
    ).loops(1).transitionalItem(im_display_link)
    const im_portable_energy_interface = 'ctts:incomplete_portable_energy_interface'
    recipe.sequenced_assembly('createaddition:portable_energy_interface',
        casing3,
        [
            recipe.deploying(im_portable_energy_interface, [im_portable_energy_interface, 'create:chute']),
            recipe.cutting(im_portable_energy_interface, im_portable_energy_interface)
        ]
    ).loops(1).transitionalItem(im_portable_energy_interface)
    recipe.mechanical_crafting('create:rotation_speed_controller',
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
    recipe.mechanical_crafting('create:mechanical_arm',
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

    // 机壳配方
    // 工作台合成
    e.shapeless(casing1, ['create:cogwheel', 'create:andesite_alloy', '#forge:stripped_logs', '#ctts:saws']).damageIngredient('#ctts:saws', 1)
    // 流水线合成
    recipe.sequenced_assembly('ctts:casing_template',
        '#minecraft:wooden_slabs',
        [
            recipe.deploying('ctts:incomplete_casing_template', ['ctts:incomplete_casing_template', '#ctts:saws']).damageIngredient('#ctts:saws', 1),
            recipe.deploying('ctts:incomplete_casing_template', ['ctts:incomplete_casing_template', 'create:cogwheel']),
        ]
    ).loops(1).transitionalItem('ctts:incomplete_casing_template')

    let temp = 'ctts:casing_template'
    recipe.deploying(casing1, [temp, 'create:andesite_alloy'])
    recipe.deploying(casing2, [temp, 'minecraft:copper_ingot'])
    recipe.deploying(casing3, [temp, 'create:brass_ingot'])
    recipe.deploying('ctts:steel_casing', [temp, 'ad_astra:steel_ingot'])
    recipe.deploying('ctts:desh_casing', [temp, 'ad_astra:desh_ingot'])
    recipe.sequenced_assembly('ctts:ostrum_casing',
        temp,
        [
            recipe.deploying('ctts:incomplete_ostrum_casing', ['ctts:incomplete_ostrum_casing', 'ad_astra:ostrum_block']),
            recipe.pressing('ctts:incomplete_ostrum_casing', 'ctts:incomplete_ostrum_casing'),
            recipe.deploying('ctts:incomplete_ostrum_casing', ['ctts:incomplete_ostrum_casing', 'ad_astra:ostrum_ingot'])
        ]
    ).loops(1).transitionalItem('ctts:incomplete_ostrum_casing')
    recipe.sequenced_assembly('ctts:calorite_casing',
        temp,
        [
            recipe.deploying('ctts:incomplete_calorite_casing', ['ctts:incomplete_calorite_casing', 'ad_astra:calorite_block']),
            recipe.pressing('ctts:incomplete_calorite_casing', 'ctts:incomplete_calorite_casing'),
            recipe.deploying('ctts:incomplete_calorite_casing', ['ctts:incomplete_calorite_casing', 'ad_astra:calorite_ingot'])
        ]
    ).loops(1).transitionalItem('ctts:incomplete_calorite_casing')

    // 杂项
    recipe.compacting('minecraft:dripstone_block', [Fluid.water(200), 'create:limestone'])
    recipe.compacting('minecraft:calcite', [Fluid.water(100), 'ae2:sky_stone_block', 'minecraft:quartz'])
    recipe.compacting('2x create:asurine', ['minecraft:calcite', 'minecraft:andesite', 'create:cinder_flour', 'ae2:sky_dust'])
    recipe.compacting('2x create:crimsite', ['minecraft:calcite', 'minecraft:granite', 'create:cinder_flour', 'ae2:sky_dust'])
    recipe.compacting('2x create:ochrum', ['minecraft:calcite', 'minecraft:tuff', 'create:cinder_flour', 'ae2:sky_dust'])
    recipe.compacting('2x create:veridium', ['minecraft:calcite', 'minecraft:diorite', 'create:cinder_flour', 'ae2:sky_dust'])
    recipe.compacting('minecraft:andesite', 'minecraft:calcite')
    recipe.compacting('minecraft:diamond', '9x ctts:diamond_nugget')
    recipe.compacting('deeperdarker:sculk_stone', '6x minecraft:sculk')
    recipe.compacting('ctts:diamond_nugget', 'minecraft:coal_block').superheated()

    recipe.crushing('2x ad_astra:sky_stone', 'ad_astra:sky_stone')
    recipe.crushing(['4x create_things_and_misc:crushed_magma',
        Item.of('create_things_and_misc:crushed_magma').withChance(0.5),
        Item.of('create:scoria').withChance(0.12)],
        "minecraft:magma_block"
    )
    recipe.crushing(['3x minecraft:echo_shard',
        Item.of('minecraft:echo_shard').withChance(0.5),
        Item.of('minecraft:echo_shard').withChance(0.25)],
        'deeperdarker:sculk_stone'
    )
    recipe.crushing(['deeperdarker:warden_carapace',
        Item.of('minecraft:echo_shard').withChance(0.3).withCount(2)],
        'butchery:warden_head'
    )

    recipe.cutting('2x butchery:warden_head', 'butchery:warden_head')

    recipe.deploying('create:adjustable_chain_gearshift', ['create:encased_chain_drive', 'minecraft:redstone'])
    recipe.deploying('create:controller_rail', ['minecraft:powered_rail', 'create:electron_tube'])
    recipe.deploying('create:linear_chassis', ['#ctts:logs', 'create:andesite_alloy'])
    recipe.deploying('create:radial_chassis', ['#ctts:logs', 'create:zinc_ingot'])
    recipe.deploying(Item.of('ad_astra:wheel'), ['ad_astra:steel_plate', 'create:belt_connector'])
    recipe.deploying('minecraft:dirt', ['minecraft:coarse_dirt', '#minecraft:hoes']).damageIngredient('#minecraft:hoes', 1)

    recipe.emptying([Fluid.of('butchery:blood', 1000), 'bucket'], 'butchery:blood_bucket')

    recipe.filling('minecraft:enchanted_golden_apple', ['minecraft:golden_apple', Fluid.of('create_enchantment_industry:flowing_experience', 500)])

    recipe.item_application(Item.of('minecraft:end_stone'), ['minecraft:cobblestone', 'minecraft:ender_pearl'])

    recipe.milling('minecraft:sand', 'minecraft:gravel')
    recipe.milling('3x ae2:sky_dust', 'ae2:sky_stone_block')
    recipe.milling(Item.of('ctts:ender_core').withChance(0.4), 'supplementaries:enderman_head')

    recipe.mixing(Item.of('create:andesite_alloy', 2),
        ['minecraft:andesite', 'architects_palette:algal_brick'])
    recipe.mixing('enderitemod:cracked_enderite_ore', ['minecraft:ancient_debris', '16x minecraft:ender_pearl'])
    recipe.mixing('ad_astra:steel_ingot', ['minecraft:iron_ingot', '#c:coal']).heated()
    recipe.mixing(Fluid.of('ctts:melted_andesite', 1000), 'uc:double_compressed_andesite').superheated()
    recipe.mixing(Fluid.of('ctts:melted_granite', 1000), 'uc:double_compressed_granite').superheated()
    recipe.mixing(Fluid.of('ctts:melted_diorite', 1000), 'uc:double_compressed_diorite').superheated()
    recipe.mixing(Fluid.of('ctts:melted_tuff', 1000), 'uc:double_compressed_tuff').superheated()
    recipe.mixing(Fluid.of('ctts:melted_calcite', 1000), 'uc:double_compressed_calcite').superheated()
    recipe.mixing(Fluid.of('ctts:end_mechanism_melt', 500), 'ctts:end_mechanism').superheated()
    recipe.mixing(Fluid.of('ctts:twilight_mechanism_melt', 500), 'ctts:twilight_mechanism').superheated()
    recipe.mixing('minecraft:sugar', Fluid.of('create:honey', 250))
    recipe.mixing('ctts:crimson_crystal', ['3x ctts:crimson_crystal_girt', '3x ae2:certus_quartz_dust']).heated()
    recipe.mixing('ctts:end_cake_base', [Fluid.of('ctts:end_mechanism_melt', 200), '3x minecraft:egg']).heated()
    recipe.mixing('2x minecraft:coarse_dirt', ['minecraft:dirt', 'minecraft:gravel'])
    recipe.mixing('2x biomesoplenty:orange_sand', ['minecraft:sand', 'minecraft:red_sand'])
    recipe.mixing('netherite_ingot', ['4x netherite_scrap', '4x gold_ingot', 'ad_astra:calorite_nugget']).heated()
    recipe.mixing('enderitemod:enderite_ingot', ['4x enderitemod:enderite_scrap', '4x diamond', 'ad_astra:calorite_ingot']).superheated()

    recipe.splashing('minecraft:quartz', 'minecraft:soul_sand')
    recipe.splashing('minecraft:netherrack', 'minecraft:blackstone')
    recipe.splashing('minecraft:diorite', 'minecraft:calcite')
    recipe.splashing([
        Item.of('minecraft:nether_wart').withChance(0.3),
        Item.of('minecraft:crimson_fungus').withChance(0.2),
        Item.of('minecraft:warped_fungus').withChance(0.2)
    ], 'minecraft:soul_soil')

    recipe.sequenced_assembly(Item.of('create:millstone'),
        'minecraft:stone_slab',
        [
            recipe.deploying('ctts:incomplete_millstone', ['ctts:incomplete_millstone', 'create:cogwheel']),
            recipe.deploying('ctts:incomplete_millstone', ['ctts:incomplete_millstone', 'minecraft:stone_slab'])
        ]
    ).loops(1).transitionalItem('ctts:incomplete_millstone')
    recipe.sequenced_assembly(Item.of('minecraft:ancient_debris'),
        'minecraft:netherrack',
        [
            recipe.deploying('ctts:incomplete_ancient_debris', ['ctts:incomplete_ancient_debris', 'minecraft:diamond']),
            recipe.deploying('ctts:incomplete_ancient_debris', ['ctts:incomplete_ancient_debris', 'minecraft:gold_ingot']),
            recipe.deploying('ctts:incomplete_ancient_debris', ['ctts:incomplete_ancient_debris', 'minecraft:quartz']),
            recipe.deploying('ctts:incomplete_ancient_debris', ['ctts:incomplete_ancient_debris', 'ctts:crimson_crystal']),
            recipe.pressing('ctts:incomplete_ancient_debris', 'minecraft:netherrack')
        ]
    ).loops(8).transitionalItem('ctts:incomplete_ancient_debris')
    recipe.sequenced_assembly('create:cart_assembler',
        '#minecraft:planks',
        [
            recipe.cutting('ctts:incomplete_cart_assembler', 'ctts:incomplete_cart_assembler'),
            recipe.deploying('ctts:incomplete_cart_assembler', ['ctts:incomplete_cart_assembler', 'create:andesite_alloy']),
            recipe.deploying('ctts:incomplete_cart_assembler', ['ctts:incomplete_cart_assembler', 'minecraft:redstone']),
            recipe.deploying('ctts:incomplete_cart_assembler', ['ctts:incomplete_cart_assembler', '#minecraft:wooden_slabs']),
            recipe.pressing('ctts:incomplete_cart_assembler', 'ctts:incomplete_cart_assembler')
        ]
    ).loops(1).transitionalItem('ctts:incomplete_cart_assembler')
    recipe.sequenced_assembly('create:steam_engine',
        'minecraft:copper_block',
        [
            recipe.deploying('ctts:incomplete_steam_engine', ['ctts:incomplete_steam_engine', 'create:golden_sheet']),
            recipe.deploying('ctts:incomplete_steam_engine', ['ctts:incomplete_steam_engine', 'create:shaft'])
        ]
    ).loops(1).transitionalItem('ctts:incomplete_steam_engine')
    recipe.sequenced_assembly('create:sticker',
        '#forge:cobblestone',
        [
            recipe.deploying('ctts:incomplete_sticker', ['ctts:incomplete_sticker', 'create:andesite_alloy']),
            recipe.deploying('ctts:incomplete_sticker', ['ctts:incomplete_sticker', 'create:andesite_alloy']),
            recipe.deploying('ctts:incomplete_sticker', ['ctts:incomplete_sticker', 'minecraft:redstone']),
            recipe.deploying('ctts:incomplete_sticker', ['ctts:incomplete_sticker', 'minecraft:slime_ball']),
            recipe.pressing('ctts:incomplete_sticker', 'ctts:incomplete_sticker')
        ]
    ).loops(1).transitionalItem('ctts:incomplete_sticker')
    recipe.sequenced_assembly('create:redstone_contact',
        '#forge:cobblestone',
        [
            recipe.deploying('ctts:incomplete_redstone_contact', ['ctts:incomplete_redstone_contact', 'minecraft:redstone']),
            recipe.deploying('ctts:incomplete_redstone_contact', ['ctts:incomplete_redstone_contact', 'create:iron_sheet'])
        ]
    ).loops(1).transitionalItem('ctts:incomplete_redstone_contact')
    recipe.sequenced_assembly('ctts:end_cake',
        'ctts:end_cake_base',
        [
            recipe.filling('ctts:end_cake_base', ['ctts:end_cake_base', Fluid.of('ctts:end_mechanism_melt', 200)]),
            recipe.deploying('ctts:end_cake_base', ['ctts:end_cake_base', 'farmersdelight:cake_slice'])
        ]
    ).loops(7).transitionalItem('ctts:end_cake_base')
    recipe.sequenced_assembly('ae2:certus_quartz_crystal',
        'ae2:certus_quartz_dust',
        [
            recipe.filling('ae2:certus_quartz_dust', ['ae2:certus_quartz_dust', Fluid.of('minecraft:water', 250)])
        ]
    ).loops(5).transitionalItem('ae2:certus_quartz_dust')
    recipe.sequenced_assembly('ctts:magma_block_pro',
        'uc:double_compressed_magma',
        [
            recipe.deploying('ctts:incomplete_magma_block_pro', ['ctts:incomplete_magma_block_pro', 'ctts:crimson_crystal']),
            recipe.pressing('ctts:incomplete_magma_block_pro', 'ctts:incomplete_magma_block_pro'),
            recipe.deploying('ctts:incomplete_magma_block_pro', ['ctts:incomplete_magma_block_pro', 'ctts:blazing_shard']),
            recipe.pressing('ctts:incomplete_magma_block_pro', 'ctts:incomplete_magma_block_pro'),
        ]
    ).loops(4).transitionalItem('ctts:incomplete_magma_block_pro')
    recipe.sequenced_assembly([
        Item.of('ctts:twilight_mechanism').withChance(120),
        Item.of('minecraft:iron_nugget').withChance(7),
        Item.of('ae2:ender_dust').withChance(7),
        Item.of('minecraft:blaze_powder').withChance(7),
        Item.of('minecraft:ghast_tear').withChance(7),
        Item.of('minecraft:nether_star').withChance(1)
    ], 'ctts:ender_core',
        [
            recipe.deploying('ctts:incomplete_twilight_mechanism', ['ctts:incomplete_twilight_mechanism', 'minecraft:ender_pearl']),
            recipe.deploying('ctts:incomplete_twilight_mechanism', ['ctts:incomplete_twilight_mechanism', 'butchery:dragon_scale']),
            recipe.deploying('ctts:incomplete_twilight_mechanism', ['ctts:incomplete_twilight_mechanism', 'enderitemod:enderite_ingot']),
            recipe.deploying('ctts:incomplete_twilight_mechanism', ['ctts:incomplete_twilight_mechanism', 'butchery:dragon_scale']),
            recipe.pressing('ctts:incomplete_twilight_mechanism', 'ctts:incomplete_twilight_mechanism')
        ]
    ).loops(10).transitionalItem('ctts:incomplete_twilight_mechanism')
    recipe.sequenced_assembly('4x minecraft:phantom_membrane',
        'minecraft:slime_ball',
        [
            recipe.pressing('ctts:incomplete_phantom_membrane', 'ctts:incomplete_phantom_membrane'),
            recipe.deploying('ctts:incomplete_phantom_membrane', ['ctts:incomplete_phantom_membrane', 'minecraft:feather']),
            recipe.deploying('ctts:incomplete_phantom_membrane', ['ctts:incomplete_phantom_membrane', 'minecraft:chorus_fruit']),
            recipe.pressing('ctts:incomplete_phantom_membrane', 'ctts:incomplete_phantom_membrane')
        ]
    ).loops(2).transitionalItem('ctts:incomplete_phantom_membrane')
    recipe.sequenced_assembly('twilightforest:magic_map_focus',
        'twilightforest:raven_feather',
        [
            recipe.filling('ctts:incomplete_magic_map_focus', ['ctts:incomplete_magic_map_focus', Fluid.of('ctts:twilight_mechanism_melt', 100)]),
            recipe.deploying('ctts:incomplete_magic_map_focus', ['ctts:incomplete_magic_map_focus', 'glowstone_dust']),
            recipe.deploying('ctts:incomplete_magic_map_focus', ['ctts:incomplete_magic_map_focus', 'twilightforest:torchberries']),
            recipe.pressing('ctts:incomplete_magic_map_focus', 'ctts:incomplete_magic_map_focus')
        ]
    ).loops(10).transitionalItem('ctts:incomplete_magic_map_focus')
    recipe.sequenced_assembly('create:smart_chute',
        'create:golden_sheet',
        [
            recipe.deploying('ctts:incomplete_smart_chute', ['ctts:incomplete_smart_chute', 'create:electron_tube']),
            recipe.deploying('ctts:incomplete_smart_chute', ['ctts:incomplete_smart_chute', 'create:chute']),
            recipe.pressing('ctts:incomplete_smart_chute', 'ctts:incomplete_smart_chute')
        ]
    ).loops(1).transitionalItem('ctts:incomplete_smart_chute')
    recipe.sequenced_assembly('create:packager',
        'create:iron_sheet',
        [
            recipe.deploying('ctts:incomplete_packager', ['ctts:incomplete_packager', 'create:framed_glass_pane']),
            recipe.deploying('ctts:incomplete_packager', ['ctts:incomplete_packager', 'create:framed_glass_pane']),
            recipe.deploying('ctts:incomplete_packager', ['ctts:incomplete_packager', 'minecraft:redstone']),
            recipe.pressing('ctts:incomplete_packager', 'ctts:incomplete_packager')
        ]
    ).loops(2).transitionalItem('ctts:incomplete_packager')
})