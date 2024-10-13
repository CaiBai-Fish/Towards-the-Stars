ServerEvents.recipes(e => {
    let sim = (temp) => {
        let inputid = 'simplyswords:netherite_' + temp
        let outputid = 'simplyswords:runic_' + temp
        e.smithing(outputid, 'simplyswords:runic_tablet', inputid, 'minecraft:nether_star')
    }
    sim('longsword')
    sim('twinblade')
    sim('rapier')
    sim('katana')
    sim('sai')
    sim('spear')
    sim('glaive')
    sim('warglaive')
    sim('cutlass')
    sim('claymore')
    sim('greathammer')
    sim('greataxe')
    sim('chakram')
    sim('scythe')
    sim('halberd')
    let diamond = (temp) => {
        let inputid = 'simplyswords:iron_' + temp
        let outputid = 'simplyswords:diamond_' + temp
        e.smithing(outputid, 'kubejs:diamond_template', inputid, 'minecraft:diamond')
    }
    diamond('longsword')
    diamond('twinblade')
    diamond('rapier')
    diamond('katana')
    diamond('sai')
    diamond('spear')
    diamond('glaive')
    diamond('warglaive')
    diamond('cutlass')
    diamond('claymore')
    diamond('greathammer')
    diamond('greataxe')
    diamond('chakram')
    diamond('scythe')
    diamond('halberd')
})