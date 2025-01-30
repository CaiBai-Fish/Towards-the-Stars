BlockEvents.rightClicked('supplementaries:pedestal', e => {
    if (e.block.id == 'supplementaries:pedestal') {
        
        // 获取玩家、物品和方块信息
        let player = e.player
        let item = e.item
        let block = e.block

        // 检查展示台上是否有kubejs:nether_book
        if (item.id == 'kubejs:nether_book' && block.id == 'supplementaries:pedestal' && !GamePhase.hasPhase(player, "nether"))
            {
            let pos = e.block.pos
            e.level.destroyBlock(pos,false)

            // 触发粒子效果
            let duration = 40; // 2秒
    let interval = 2; // 每 2 tick 刷新一次

    for (let t = 0; t < duration; t += interval) {
        e.server.schedule(t, () => {
            let radius = 1.5 + (t / duration) * 0.5; // 半径逐渐扩大
            for (let i = 0; i < 360; i += 10) {
                let radians = i * (Math.PI / 180);
                let xOffset = Math.cos(radians) * radius;
                let zOffset = Math.sin(radians) * radius;

                // 生成环形粒子
                e.level.spawnParticles("minecraft:portal", false, pos.x + 0.5 + xOffset, pos.y + 0.1, pos.z + 0.5 + zOffset, 0, 0, 0, 10, 0.05);
                e.level.spawnParticles("minecraft:crit", false, pos.x + 0.5 + xOffset * 0.9, pos.y + 0.2, pos.z + 0.5 + zOffset * 0.9, 0, 0.02, 0, 5, 0.02);
            }
        });
    }
            // 给予玩家阶段
            GamePhase.addPhase(player, "nether")
        }
    }
})