ServerEvents.recipes(e => {
    let tr = 'kubejs:steel_casing'
    e.recipes.create.sequenced_assembly('tacz:gun_smith_table',
        tr,
        [
            e.recipes.create.deploying(tr, [tr, 'create:iron_sheet']),
            e.recipes.create.deploying(tr, [tr, 'create:iron_sheet']),
            e.recipes.create.deploying(tr, [tr, 'create:iron_sheet']),
            e.recipes.create.deploying(tr, [tr, '#quark:wooden_vertical_slabs']),
            e.recipes.create.deploying(tr, [tr, 'kubejs:screwdriver']),
            e.recipes.create.deploying(tr, [tr, 'kubejs:gun_book'])
        ]
    ).loops(1).transitionalItem(tr)
})