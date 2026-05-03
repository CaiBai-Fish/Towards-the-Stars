// 维度阶段
const pl
PlayerEvents.tick(e => {
    pl = e.player.isCreative()
})
AStages.addRestrictionForDimension('dimensions/end', 'end', 'minecraft:the_end')
AStages.addRestrictionForDimension('dimensions/nether', 'nether', 'minecraft:the_nether')
AStages.addRestrictionForDimension('dimensions/twilight', 'tiwilight', 'twilightforest:twilight_forest')