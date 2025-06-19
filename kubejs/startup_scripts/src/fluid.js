StartupEvents.registry('fluid', event => {
	let melted = (meltedId, Color) => {
		let id = 'melted_' + meltedId.toLowerCase()
		event.create(id).thickTexture(Color).bucketColor(Color).temperature(2000)
	}
	melted('andesite', 0x88888C)
	melted('calcite', 0xEDF2F1)
	melted('diorite', 0xABACAD)
	melted('granite', 0xA26D57)
	melted('tuff', 0x696D6E)
	event.create('end_mechanism_melt').thickTexture(0x60986e).noBucket().temperature(1500)
})