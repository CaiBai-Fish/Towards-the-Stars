ServerEvents.recipes(e => {
    let recipe = e.recipes.create
    recipe.milling('2x ae2:sky_dust', 'ae2:sky_dust')

    recipe.splashing(Item.of('ae2:sky_dust').withChance(0.4), 'minecraft:grass_block')
    recipe.splashing([Item.of('ae2:ender_dust').withChance(0.4), Item.of('minecraft:blaze_powder').withChance(0.1)], 'minecraft:warped_wart_block')

    recipe.filling('minecraft:ender_pearl', [Fluid.of('minecraft:lava', 400), 'ae2:ender_dust'])

    recipe.crushing('ae2:certus_quartz_dust', 'ae2:certus_quartz_crystal')
    recipe.crushing('2x ae2:certus_quartz_dust', 'ae2:charged_certus_quartz_crystal')
})