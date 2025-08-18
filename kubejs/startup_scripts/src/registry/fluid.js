StartupEvents.registry('fluid', e => {
	let melted = (meltedId, Color) => {
		let id = 'ctts:' + 'melted_' + meltedId.toLowerCase()
		e.create(id).thickTexture(Color).bucketColor(Color)
	}
	melted('andesite', 0x88888C)
	melted('calcite', 0xEDF2F1)
	melted('diorite', 0xABACAD)
	melted('granite', 0xA26D57)
	melted('tuff', 0x696D6E)
	e.create('ctts:end_mechanism_melt').thickTexture(0x60986e).noBucket().noBlock()
	e.create('ctts:twilight_mechanism_melt').thickTexture(0x60b443).noBucket().noBlock()
})