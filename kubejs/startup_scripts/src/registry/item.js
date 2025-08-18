StartupEvents.registry('item', e => {
	//构件
	let mechanism = (meName) => {
		let id = 'ctts:' + meName.toLowerCase() + '_mechanism'
		e.create(id).rarity('rare')
	}
	mechanism('nether')
	mechanism('end')
	mechanism('twilight')
	let inc = (incName) => {
		let id = 'ctts:' + 'incomplete_' + incName.toLowerCase() + '_mechanism'
		e.create(id, 'create:sequenced_assembly').rarity('rare')
	}
	inc('nether')
	inc('end')
	inc('twilight')
	// 工具
	let registerSaw = (materialId, durability) => {
		let id = 'ctts:' + materialId.toLowerCase() + '_saw'
		e.create(id)
			.maxDamage(durability)
	}
	registerSaw('Stone', 131)
	registerSaw('Iron', 250)
	registerSaw('Diamond', 1561)
	registerSaw('Netherite', 2031)
	//模板
	let template = (templateName, apply, item) => {
		let id = 'ctts:' + templateName.toLowerCase() + '_template'
		e.create(id, 'smithing_template').appliesTo(apply).ingredients(item)
	}
	template('Base', 'None', 'None')
	template('Diamond', 'Diamond Equipment', 'Diamond')

	//火箭
	let outer_wall = (tierId) => {
		let id = 'ctts:' + tierId + '_rocket_outerwall'
		e.create(id)
	}
	outer_wall('tier_1')
	outer_wall('tier_2')
	outer_wall('tier_3')
	outer_wall('tier_4')
	let frame = (tierId) => {
		let id = 'ctts:' + tierId + '_rocket_frame'
		e.create(id)
	}
	frame('tier_1')
	frame('tier_2')
	frame('tier_3')
	frame('tier_4')

	// 矿物
	e.create('ctts:crimson_crystal').rarity('uncommon').tag('forge:gems').burnTime(48000)
	e.create('ctts:crimson_crystal_girt').tag('c:dusts').burnTime(3200)

	// 杂项
	let items = (itemId) => {
		e.create(itemId)
	}
	items('ctts:stone_rod')
	items('ctts:drill_head')
	items('ctts:saw_blade')
	items('ctts:plough')
	items('ctts:harvester')
	items('ctts:rotor')
	items('ctts:magnet')
	items('ctts:diamond_nugget')
	items('ctts:extinguished_blaze_rod')

	e.create('ctts:incomplete_heart_of_the_deep', 'create:sequenced_assembly')
		.maxStackSize(1).rarity('rare')

	e.create('ctts:gun_book')
		.tooltip(Text.translate('tooltip.ctts.gun_book'))
		.rarity('uncommon')
	e.create('ctts:twilight_key').rarity('rare')
	e.create('ctts:key_fragments')
	e.create('ctts:nether_book').rarity('rare')
	e.create('ctts:blazing_shard').rarity('epic')
	e.create('ctts:ender_core').rarity('rare')

	// 食物
	e.create('ctts:end_cake').food(food => {   // 末地蛋糕
		food.alwaysEdible(true)
		food.eaten(fd => {
			if (!GamePhase.hasPhase(fd.player, 'end')) {
				GamePhase.addPhase(fd.player, 'end')
			}
		})
	})
})

ItemEvents.modification(e => {
	e.modify('createaddition:diamond_grit', item => {
		item.burnTime = 1600
	})
	e.modify('minecraft:diamond', item => {
		item.burnTime = 1600
	})
})