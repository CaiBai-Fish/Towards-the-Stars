ServerEvents.recipes(event => {
    //remove 配方删除
    event.remove({type:'create:splashing', output:'minecraft:quartz'})
    event.remove({type:'ad_astra:nasa_workbench'})
    event.remove({type:'create:compacting', input:'minecraft:flint'})
    event.remove({type:'create:crushing', output:'minecraft:quartz'})
    event.remove({type:'create:milling', output:'minecraft:flint'})
    event.remove({output:['minecraft:andesite', 'minecraft:granite', 'minecraft:diorite', 'minecraft:lead'], mod:'minecraft'})
    event.remove({output:['minecraft:redstone', 'minecraft:netherrack', 'minecraft:glowstone_dust', 'minecraft:gunpowder'], input:'create:cinder_flour'})
    event.remove({output:['#forge:tools',, '#forge:armors'], input:'minecraft:diamond'})
    event.remove({input:['ad_astra:hammer']})
    event.remove({ not: {type: 'create:sequenced_assembly'}, output:'create:andesite_alloy'})
    event.remove({output:['ad_astra:iron_rod', 'ad_astra:tier_1_rover', 'ad_astra:nasa_workbench', 'ad_astra:wheel', 'ad_astra:engine_frame', 'ad_astra:engine_fan',
        'ad_astra:oxygen_gear', 'ad_astra:rocket_nose_cone', 'ad_astra:steel_tank', 'ad_astra:gravity_normalizer', 'ad_astra:desh_tank', 'ad_astra:ostrum_tank',
        'ad_astra:calorite_tank', 'ad_astra:rocket_fin', 'ad_astra:steel_cable', 'ad_astra:desh_cable', 'ad_astra:fuel_refinery', 'ad_astra:gas_tank',
        'ad_astra:large_gas_tank', 'ad_astra:launch_pad', 'ad_astra:solar_panel', 'ad_astra:water_pump', 'ad_astra:energizer', 'ad_astra:cryo_freezer',
        'ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe', 'ad_astra:oxygen_sensor', 'ad_astra:oxygen_loader', 'railways:semaphore',
        'ad_astra:coal_generator', 'ad_astra:compressor', 'ad_astra:etrionic_blast_furnace', 'ad_astra:oxygen_distributor', 'ad_astra:hammer',
        'ad_astra:etrionic_capacitor'
    ]})
    event.remove({output:['create:adjustable_chain_gearshift', 'create:water_wheel', 'create:large_water_wheel', 'create:sequenced_gearshift',
        ,'create:encased_fan', 'create:mechanical_press', 'create:mechanical_mixer', 'create:contraption_controls', 'create:deployer', 'create:linear_chassis',
        'create:redstone_contact', 'create:mechanical_drill', 'create:mechanical_saw', 'create:cart_assembler', 'create:sticker', 'create:elevator_pulley',
        'create:millstone', 'create:schematicannon', 'create:depot', 'create:weighted_ejector', 'create:speedometer', 'create:stressomter',
        'create:mechanical_piston', 'create:windmill_bearing', 'create:mechanical_bearing', 'create:gantry_carriage', 'create:portable_storage_interface',
        'create:mechanical_harvester', 'create:mechanical_plough', 'create:mechanical_roller', 'create:fluid_pipe', 'create:mechanical_pump', 'create:fluid_valve', 'create:fluid_tank', 'create:hose_pulley', 'create:smart_fluid_pipe',
        'create:portable_fluid_interface', 'create:steam_engine', 'create:spout', 'create:item_drain', 'create:flywheel', 'create:clockwork_bearing',
        'create:mechanical_crafter', 'create:rotation_speed_controller', 'create:mechanical_arm', 'create:content_observer', 'create:rope_pulley',
        'create:stockpile_switch', 'create:display_link', 'create:pulse_repeater', 'create:pulse_extender', 'create:powered_latch', 'create:powered_toggle_latch',        
        'createaddition:diamond_grit_sandpaper', 'createaddition:rolling_mill', 'createaddition:portable_energy_interface', 'createaddition:electric_motor',
        'createaddition:alternator', 'create:andesite_casing', 'create:copper_casing', 'create:brass_casing', 'create:copper_backtank', 'create:radial_chassis',
        'create:controls', 'ad_astra:ti_69'
    ]})
    event.remove({output:['architects_palette:charcoal_block', 'minecraft:hopper', 'enderitemod:enderite_upgrade_smithing_template', 'constructionwand:iron_wand',
        'constructionwand:diamond_wand', 'constructionwand:infinity_wand', 'tacz:gun_smith_table', 'ad_astra:wrench', 'explorerscompass:explorerscompass',
        'naturescompass:naturescompass']
    })
    //配方修改
    event.replaceInput({output:'deeperdarker:reinforced_echo_shard'}, 'minecraft:echo_shard', 'kubejs:echo_mechanism')
    event.replaceInput({output:'minecraft:recovery_compass'},'minecraft:echo_shard', 'deeperdarker:reinforced_echo_shard')
    event.replaceInput({output:'railways:track_switch_andesite'}, 'create:cogwheel', 'kubejs:andesite_mechanism')
    event.replaceInput({output:'create:brass_hand'}, 'create:brass_sheet', 'create:copper_sheet')
    event.replaceInput({output:'minecraft:netherite_upgrade_smithing_template'}, 'minecraft:netherite_upgrade_smithing_template', 'kubejs:base_template')
    event.replaceInput({output:'deeperdarker:warden_upgrade_smithing_template'}, 'deeperdarker:warden_upgrade_smithing_template', 'kubejs:base_template')
    event.replaceInput({output:'deeperdarker:warden_upgrade_smithing_template'}, 'minecraft:sculk', 'deeperdarker:sculk_stone')
    event.replaceInput({output:'#minecraft:trim_templates'}, '#minecraft:trim_templates', 'kubejs:base_template')
    event.replaceInput({output:'minecraft:host_armor_trim_smithing_template'}, 'minecraft:terracotta', 'quark:shingles')
    event.replaceInput({output:'minecraft:coast_armor_trim_smithing_template'}, 'minecraft:cobblestone', 'minecraft:sand')
    event.replaceInput({output:'minecraft:vex_armor_trim_smithing_template'}, 'minecraft:cobblestone', 'minecraft:stone')
    event.replaceInput({output:'minecraft:rib_armor_trim_smithing_template'}, 'minecraft:netherrack', 'minecraft:bone_block')
    event.replaceInput({output:'minecraft:raiser_armor_trim_smithing_template'}, 'minecraft:terracotta', 'minecraft:grass_block')
    event.replaceInput({output:'minecraft:shaper_armor_trim_smithing_template'}, 'minecraft:terracotta','minecraft:bricks')
    event.replaceInput({output:'aquaculture:iron_fishing_rod'}, 'minecraft:iron_ingot', 'createaddition:iron_rod')
    event.replaceInput({input:'ad_astra:iron_rod'}, 'ad_astra:iron_rod', 'createaddition:iron_rod')
})