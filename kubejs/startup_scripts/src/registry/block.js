StartupEvents.registry('block', e => {
	//机壳
	let casing = (casingId) => {
		let id = 'ctts:' + casingId.toLowerCase() + '_casing'
		e.create(id)
			.material('metal')
	}
	casing('Steel')
	casing('Desh')
	casing('Ostrum')
	casing('Calorite')

	let block = (blockId, hardness) => {
		let id = 'ctts:' + blockId.toLowerCase()
		e.create(id)
			.hardness(hardness)
	}
	block('Control_Core', 50)

	// 矿物
	let ore = (oreId, hardness, resistance/*, drop*/) => {
		if (resistance == null) {
			resistance = 3.0
		}
		let id = 'ctts:' + oreId + '_ore'
		e.create(id)
			.hardness(hardness)
			.requiresTool(true)
			.resistance(resistance)
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_diamond_tool')
	}
	ore('crimson_crystal', 20, 1400)
	e.create('ctts:crimson_crystal_block')
		.requiresTool(true)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_diamond_tool')
		.item(item => {
			item.burnTime(96000).rarity('uncommon')
		})

	// 杂项
	e.create('ctts:magma_block_pro')
		.stoneSoundType()
		.hardness(1.5)
		.requiresTool(true)
		.noValidSpawns(true)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.lightLevel(3)
		.jumpFactor(0.6)
		.item(item => {
			item.tooltip(Text.translate('tooltip.ctts.magma_block_pro'))
		})
})