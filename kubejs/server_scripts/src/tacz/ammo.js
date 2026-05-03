ServerEvents.recipes(e => {
    let ammo = 'ctts:ammo'
    let recipes = e.recipes.create
    recipes.sandpaper_polishing(ammo, 'create:copper_sheet')

    e.recipes.create.sequenced_assembly(Item.of('40x tacz:ammo', '{AmmoId:"tacz:9mm"}'),
        ammo,
        [
            e.recipes.create.deploying(ammo, [ammo, 'minecraft:gunpowder']),
            e.recipes.create.pressing(ammo, ammo),
            e.recipes.create.deploying(ammo, [ammo, 'create:copper_sheet']),
            e.recipes.create.pressing(ammo, ammo)
        ]
    ).loops(1).transitionalItem(ammo)
})