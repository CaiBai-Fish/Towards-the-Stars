const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')
StartupEvents.registry('fluid', e => {
	let melted = (meltedId, Color) => {
		let id = 'ctts:' + 'melted_' + meltedId.toLowerCase()
		e.create(id, 'kubejs:thick').levelDecreasePerBlock(2).tint(Color).type(type => {
			type.addDripstoneDripping(1, $ParticleTypes.DRIPPING_DRIPSTONE_LAVA, 'minecraft:lava_cauldron', $SoundEvents.POINTED_DRIPSTONE_DRIP_LAVA)
		})
	}
	melted('andesite', 0x88888C)
	melted('calcite', 0xEDF2F1)
	melted('diorite', 0xABACAD)
	melted('granite', 0xA26D57)
	melted('tuff', 0x696D6E)
	e.create('ctts:end_mechanism_melt', 'kubejs:thick')//.thickTexture(0x60986e)
		.noBucket().noBlock().tint(0x60986e)
	e.create('ctts:twilight_mechanism_melt', 'kubejs:thick')//.thickTexture(0x60b443)
		.noBucket().noBlock().tint(0x60b443)
})