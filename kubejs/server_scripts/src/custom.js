ServerEvents.recipes(event => {
    event.custom({
        type: 'createaddition:charging',
        "input": {
            "item": "minecraft:iron_ingot",
            "count": 1
        },
        "result": {
            "item": "kubejs:magnet",
            "count": 1
        },
        "energy": 6000,
        "maxChargeRate": 400
    })
    event.custom({
        type: 'createaddition:liquid_burning',
        "input": {
            "fluid": "ad_astra:fuel",
            "amount": 81000
        },
        "burnTime": 28800,
        "superheated": true
    })
    event.custom({
        type: 'createaddition:liquid_burning',
        'input': {
            'fluid': 'ad_astra:cryo_fuel',
            'amount': 81000
        },
        'burnTime': 72000,
        'superheated': true
    })
    event.custom({
        "type": "ad_astra:alloying",
	    "cookingtime": 100,
	    "energy": 40,
	    "ingredients": [
		{
			"item": "minecraft:copper_ingot"
		},
		{
			"item": "create:zinc_ingot"
		}
	    ],
	    "result": {
		    "count": 2,
		    "id": "create:brass_ingot"
	    }
    })
    event.custom({
        "type": "ad_astra:alloying",
	    "cookingtime": 100,
	    "energy": 40,
	    "ingredients": [
		{
			"tag": "forge:coal"
		},
		{
			"item": "minecraft:iron_ingot"
		},
        {
            "item": "minecraft:quartz"
        },
        {
            "item": "minecraft:quartz"
        }
	    ],
	    "result": {
		    "count": 2,
		    "id": 'moreminecarts:silica_steel'
	    }
    })
})