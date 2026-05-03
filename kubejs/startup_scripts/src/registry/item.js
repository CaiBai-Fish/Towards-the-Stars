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

	// 符文
	let rune = (name) => {
		const id = 'ctts:rune_' + name.toLowerCase()
		e.create(id).fireResistant(true).unstackable()
	}
	rune('flame')

	// 半成品
	let half = (id) => {
		e.create("ctts:incomplete_" + id, 'create:sequenced_assembly')
	}
	// 机壳
	e.create('ctts:casing_template', 'create:sequenced_assembly')
	e.create('ctts:incomplete_casing_template', 'create:sequenced_assembly')
	e.create('ctts:incomplete_ostrum_casing', 'create:sequenced_assembly')
	e.create('ctts:incomplete_calorite_casing', 'create:sequenced_assembly')
	// 安山机壳
	half('portable_storage_interface')
	half('mechanical_piston')
	half('gantry_carriage')
	half('rope_pulley')
	half('chain_conveyor')
	half('schematicannon')
	half('rolling_mill')
	half('mechanical_extruder')
	half('mechanical_mixer')
	half('cart_assembler')
	// 铜机壳
	half('fluid_tank')
	half('hose_pulley')
	half('portable_fluid_interface')
	// 黄铜机壳
	half('clockwork_bearing')
	half('elevator_pulley')
	half('mechanical_crafter')
	half('sequenced_gearshift')
	half('controls')
	half('content_observer')
	half('display_link')
	half('portable_energy_interface')
	// 钢机壳
	half('etrionic_blast_furnace')
	half('fuel_refinery')
	half('oxygen_loader')
	// 戴斯机壳
	half('solar_panel')
	half('oxygen_distributor')
	half('gravity_normalizer')
	// 紫金机壳
	half('energizer')
	half('cryo_freezer')
	half('oxygen_sensor')
	// 耐热机壳
	// 其他
	half('ancient_debris')
	half('millstone')
	half('steam_engine')
	half('sticker')
	half('redstone_contact')
	half('magma_block_pro')
	half('phantom_membrane')
	half('magic_map_focus')
	half('smart_chute')
	half('packager')

	e.create('ctts:ammo', 'create:sequenced_assembly')

	// 食物
	e.create('ctts:end_cake_base', 'create:sequenced_assembly').food(food => {
		food.fastToEat()
	})
	e.create('ctts:end_cake').food(food => {   // 末地蛋糕
		food.alwaysEdible(true)
		food.fastToEat()
		//food.hunger(10)
		food.saturation(1.4)
		food.eaten(fd => {
			if (!AStages.playerHasStage('end', fd.player) && !AStages.playerHasStage('nether', fd.player) && !fd.player.isCreative()) {
				AStages.addStageToPlayer('end', fd.player)
				fd.player.tell('你现在可以去末地了！')
			}
		})
	})

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
		.rarity('rare')

	e.create('ctts:gun_book')
		.rarity('uncommon')
		.unstackable()
	e.create('ctts:twilight_key').rarity('rare')
	e.create('ctts:key_fragments')
	e.create('ctts:nether_book').rarity('rare')
	e.create('ctts:blazing_shard').rarity('epic')
	e.create('ctts:ender_core').rarity('rare')
	e.create('ctts:projection_tool').rarity('epic')
})
ItemEvents.modification(e => {
	e.modify('createaddition:diamond_grit', item => {
		item.burnTime = 1600
	})
	e.modify('minecraft:diamond', item => {
		item.burnTime = 1600
	})
})