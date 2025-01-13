BlockEvents.rightClicked('supplementaries:pedestal', e => {
    if (e.block.id == 'supplementaries:pedestal') {
        
        // 获取玩家、物品和方块信息
        let player = e.player
        let item = e.item
        let block = e.block
        let str = player.name.string

        // 检查展示台上是否有特定的物品（例如 kubejs:nether_book）
        if (item.id == 'kubejs:nether_book' && block.id == 'supplementaries:pedestal'/* && !GamePhase.hasPhase(str, "nether")*/)
            {
            let ppos = e.block.pos
            e.level.destroyBlock(ppos,false)

            // 触发粒子效果
            e.server.runCommandSilent(`particle minecraft:portal ${ppos.x} ${ppos.y + 1} ${ppos.z} 0.5 0.5 0.5 0.1 50 force`)
            e.server.runCommandSilent(`particle minecraft:flame ${ppos.x} ${ppos.y + 1} ${ppos.z} 1 0 1 0.1 100 force`)
            e.server.runCommandSilent(`particle minecraft:end_rod ${ppos.x} ${ppos.y + 1} ${ppos.z} 0 1 0 0.1 30 force`)
            e.server.runCommandSilent(`particle minecraft:smoke ${ppos.x} ${ppos.y + 1} ${ppos.z} 0.5 0.5 0.5 0.02 10 force`)
            
            // 给予玩家阶段
            //e.server.runCommand(`gamephase add ${str} nether`)
            GamePhase.addPhase(player.name.string, "nehter")
        }
    }
})