ServerEvents.recipes(event => {
    event.recipes.create.crushing('ad_astra:moon_sand', 'ad_astra:moon_cobblestone')
    event.recipes.create.crushing('ad_astra:mars_sand', 'ad_astra:mars_cobblestone')
    event.recipes.create.crushing('ad_astra:venus_sand', 'ad_astra:venus_cobblestone')
    event.recipes.create.crushing('ad_astra:moon_cobblestone', 'ad_astra:moon_stone')
    event.recipes.create.crushing('ad_astra:mars_cobblestone', 'ad_astra:mars_stone')
    event.recipes.create.crushing('ad_astra:venus_cobblestone', 'ad_astra:venus_stone')

    event.recipes.create.mixing('2x ad_astra:cheese_block', ['8x ad_astra:cheese', 'ad_astra:cheese_block'])

    event.recipes.create.splashing([Item.of('minecraft:iron_nugget').withChance(0.15), 
                                Item.of('ad_astra:desh_nugget').withChance(0.25),
                                Item.of('minecraft:diamond').withChance(0.01),
                                Item.of('ad_astra:ice_shard').withChance(0.04)], 'ad_astra:moon_sand')
    event.recipes.create.splashing([Item.of('minecraft:iron_nugget').withChance(0.15), 
                                Item.of('ad_astra:ostrum_nugget').withChance(0.25),
                                Item.of('minecraft:diamond').withChance(0.01),
                                Item.of('ad_astra:ice_shard').withChance(0.04)], 'ad_astra:mars_sand')
    event.recipes.create.splashing([Item.of('minecraft:iron_nugget').withChance(0.15),
                                Item.of('minecraft:gold_nugget').withChance(0.05),
                                Item.of('ad_astra:calorite_nugget').withChance(0.25),
                                Item.of('minecraft:diamond').withChance(0.01)], 'ad_astra:venus_sand')
    event.recipes.create.crushing([Item.of('ad_astra:ice_shard').withChance(0.5),
                                Item.of('create:copper_nugget').withChance(0.15),
                                Item.of('minecraft:iron_nugget').withChance(0.15),
                                Item.of('minecraft:lapis_lazuli').withChance(0.1)], 'ad_astra:glacio_stone')
    event.recipes.create.crushing([Item.of('minecraft:iron_nugget').withChance(0.25)], 'ad_astra:mercury_stone')

    let core = 'create:precision_mechanism'
    event.recipes.create.sequenced_assembly(Item.of('kubejs:control_core'),
        'minecraft:quartz_block',
        [
            event.recipes.create.deploying(core, [core, 'create:precision_mechanism']),
            event.recipes.create.deploying(core, [core, 'create:electron_tube']),
            event.recipes.create.deploying(core, [core, 'create:copper_nugget'])
        ]
    ).loops(3).transitionalItem(core)
    event.recipes.create.sequenced_assembly(Item.of('ad_astra:launch_pad'),
        'ad_astra:steel_block',
        [
            event.recipes.create.pressing('ad_astra:steel_block', 'ad_astra:steel_block')
        ]
    ).loops(5).transitionalItem('ad_astra:steel_block')
    let outerwalls = (tierId, materialId) => {
        let id = 'kubejs:tier_' + tierId + '_rocket_outerwall'
        let material = 'ad_astra:' + materialId + '_plate'
        event.recipes.create.sequenced_assembly(Item.of(id),
            material,
            [
                event.recipes.create.pressing(material, material)
            ]
        ).loops(4).transitionalItem(material)
    }
    outerwalls('1', 'steel')
    outerwalls('2', 'desh')
    outerwalls('3', 'ostrum')
    outerwalls('4', 'calorite')
    let frames = (tierId, materialId) => {
        let id = 'kubejs:tier_' + tierId + '_rocket_frame'
        let material = 'ad_astra:' + materialId + '_block'
        event.recipes.create.sequenced_assembly(Item.of(id),
            material,
            [
                event.recipes.create.pressing(material, material)
            ]).loops(6)
                .transitionalItem(material)
    }
    frames('1', 'steel')
    frames('2', 'desh')
    frames('3', 'ostrum')
    frames('4', 'calorite')
    
    event.shaped(Item.of('ad_astra:cheese_block', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'ad_astra:cheese',
        B:'ad_astra:cheese_block'
    }).keepIngredient('ad_astra:cheese_block')    
    let rocket = (tierId, materialId) => {
        event.shaped(Item.of('ad_astra:' + tierId + '_rocket'),[
            '   A   ',
            '  ACA  ',
            '  BCB  ',
            '  BCB  ',
            '  BCB  ',
            '  BCB  ',
            ' HCDCH ',
            'HFCFCFH',
            'HGGGGGH'
        ],{
            A:'ad_astra:rocket_nose_cone',
            B:'kubejs:' + tierId + '_rocket_outerwall',
            C:'kubejs:' + tierId + '_rocket_frame',
            D:'kubejs:control_core',
            H:'ad_astra:rocket_fin',
            F:'ad_astra:' + materialId + '_tank',
            G:'ad_astra:' + materialId + '_engine'
        })
    }
    rocket('tier_1', 'steel')
    rocket('tier_2', 'desh')
    rocket('tier_3', 'ostrum')
    rocket('tier_4', 'calorite')
    event.shaped(Item.of('ad_astra:tier_1_rover'),[
        'ACCA',
        'DGGD',
        'DFFD',
        'DFFD',
        'ABBA'
    ],{
        A:'ad_astra:wheel',
        B:'ad_astra:desh_engine',
        C:'createaddition:iron_rod',
        D:'ad_astra:desh_plate',
        G:'ad_astra:steel_block',
        F:'ad_astra:steel_plate'
    })

    //机器
    event.recipes.create.mechanical_crafting('ad_astra:coal_generator',
        [
            'AABA',
            'ADBA',
            'ADCA',
            'ADAA'
        ],{
            A:'create:iron_sheet',
            B:'createaddition:zinc_sheet',
            C:'minecraft:furnace',
            D:'create:copper_sheet'
        }
    )
    event.recipes.create.mechanical_crafting('ad_astra:compressor',
        [
            'AAABA',
            'AACBA',
            'ADCAA',
            'ADAAA'
        ],{
            A:'create:iron_sheet',
            B:'createaddition:zinc_sheet',
            C:'minecraft:piston',
            D:'create:copper_sheet'
        }
    )
    event.recipes.create.mechanical_crafting('ad_astra:water_pump',
        [
            'ABABA',
            'AAAAA',
            'ACCCA'
        ],{
            A:'kubejs:desh_casing',
            B:'minecraft:dispenser',
            C:'minecraft:hopper'
        }
    )
    // 序列组装
    let casing1 = 'kubejs:steel_casing'
    event.recipes.create.sequenced_assembly('ad_astra:etrionic_blast_furnace',
        casing1,
        [
            event.recipes.create.deploying(casing1, [casing1, 'minecraft:blast_furnace']),
            event.recipes.create.deploying(casing1, [casing1, 'createaddition:connector'])
        ]
    ).loops(1).transitionalItem("kubejs:steel_casing")
    event.recipes.create.sequenced_assembly('ad_astra:fuel_refinery',
        casing1,
        [
            event.recipes.create.deploying(casing1, [casing1, 'minecraft:furnace']),
            event.recipes.create.deploying(casing1, [casing1, 'minecraft:bucket']),
            event.recipes.create.deploying(casing1, [casing1, 'minecraft:bucket'])
        ]
    ).loops(1).transitionalItem(casing1)
    event.recipes.create.sequenced_assembly('ad_astra:oxygen_loader',
        casing1,
        [
            event.recipes.create.deploying(casing1, [casing1, 'ad_astra:fan']),
            event.recipes.create.deploying(casing1, [casing1, 'ad_astra:gas_tank']),
            event.recipes.create.deploying(casing1, [casing1, 'ad_astra:gas_tank'])
        ]
    ).loops(1).transitionalItem(casing1)

    let casing2 = 'kubejs:desh_casing'
    event.recipes.create.sequenced_assembly('ad_astra:solar_panel',
        casing2,
        [
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:steel_plate']),
            event.recipes.create.deploying(casing2, [casing2, 'minecraft:blue_stained_glass']),
            event.recipes.create.deploying(casing2, [casing2, 'minecraft:blue_stained_glass']),
            event.recipes.create.deploying(casing2, [casing2, 'minecraft:blue_stained_glass'])
        ]
    ).loops(1).transitionalItem(casing2)
    event.recipes.create.sequenced_assembly('ad_astra:oxygen_distributor',
        casing2,
        [
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:oxygen_gear']),
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:large_gas_tank']),
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:fan']),
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:fan']),
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:fan'])
        ]
    ).loops(1).transitionalItem(casing2)
    event.recipes.create.sequenced_assembly('ad_astra:gravity_normalizer',
        casing2,
        [
            event.recipes.create.cutting(casing2, casing2),
            event.recipes.create.deploying(casing2, [casing2, 'minecraft:diamond_block']),
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:etrionic_capacitor']),
            event.recipes.create.deploying(casing2, [casing2, 'ad_astra:etrionic_capacitor'])
        ]
    ).loops(1).transitionalItem(casing2)

    let casing3 = 'kubejs:ostrum_casing'
    event.recipes.create.sequenced_assembly('ad_astra:energizer',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:diamond_block']),
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:diamond'])
        ]
    ).loops(2).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('ad_astra:cryo_freezer',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'ad_astra:ostrum_tank']),
            event.recipes.create.cutting(casing3, casing3)
        ]
    ).loops(2).transitionalItem(casing3)
    event.recipes.create.sequenced_assembly('ad_astra:oxygen_sensor',
        casing3,
        [
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:observer']),
            event.recipes.create.deploying(casing3, [casing3, 'minecraft:redstone_lamp']),
            event.recipes.create.deploying(casing3, [casing3, 'ad_astra:fan']),
            event.recipes.create.pressing(casing3, casing3)
        ]
    ).loops(1).transitionalItem(casing3)

    let casing4 = 'kubejs:calorite_casing'

    // 杂项
    event.stonecutting('6x ad_astra:gas_tank', casing1)
    event.stonecutting('3x ad_astra:large_gas_tank', casing1)
    event.stonecutting('5x ad_astra:oxygen_gear', casing1)
    event.stonecutting('10x ad_astra:engine_frame', casing1)
    event.stonecutting('6x ad_astra:rocket_nose_cone', casing1)
    event.stonecutting('12x ad_astra:rocket_fin', casing1)
    event.stonecutting('3x ad_astra:steel_tank', casing1)
    event.stonecutting('3x ad_astra:desh_tank', casing2)
    event.stonecutting('3x ad_astra:ostrum_tank', casing3)
    event.stonecutting('3x ad_astra:calorite_tank', casing4)
    event.recipes.create.sequenced_assembly('ad_astra:etrionic_capacitor',
        'ad_astra:steel_plate',
        [
            event.recipes.create.deploying('ad_astra:steel_plate', ['ad_astra:steel_plate', 'minecraft:diamond']),
            event.recipes.create.deploying('ad_astra:steel_plate', ['ad_astra:steel_plate', 'ad_astra:steel_plate']),
            event.recipes.create.deploying('ad_astra:steel_plate', ['ad_astra:steel_plate', 'minecraft:redstone'])
        ]
    ).loops(3).transitionalItem('ad_astra:steel_plate')
    event.recipes.create.sequenced_assembly('ad_astra:ti_69',
        'create:precision_mechanism',
        [
            event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'ad_astra:steel_plate']),
            event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'ad_astra:steel_plate']),
            event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:glass_pane'])
        ]
    ).loops(2).transitionalItem('create:precision_mechanism')
})