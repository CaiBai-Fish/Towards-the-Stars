StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("nether", "minecraft:the_nether");
    GamePhase.addDimensionRestriction("end", "minecraft:the_end");
    GamePhase.addDimensionRestriction("twilight", "twilightforest:twilight_forest");
})