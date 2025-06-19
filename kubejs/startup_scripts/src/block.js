StartupEvents.registry('block', event => {
	//机壳
	let casing = (casingId) => {
		let id = casingId.toLowerCase() + '_casing'
		event.create(id)
			.material('metal')
	}
	casing('Steel')
	casing('Desh')
	casing('Ostrum')
	casing('Calorite')

	let block = (blockId, hardness) => {
		let id = blockId.toLowerCase()
		event.create(id)
			.hardness(hardness)
	}
	block('Control_Core', 50)

	// 矿物
	let ore = (oreId, hardness, resistance/*, drop*/) => {
		if (resistance == null) {
			resistance = 3.0
		}
		let id = oreId + '_ore'
		event.create(id)
			.hardness(hardness)
			.requiresTool(true)
			.resistance(resistance)
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_diamond_tool')
	}
	ore('crimson_crystal', 20, 1400)

	// 杂项
	event.create('magma_block_pro')
		.stoneSoundType()
		.hardness(1.5)
		.requiresTool(true)
		.noValidSpawns(true)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.lightLevel(3)
		.jumpFactor(0.6)
})