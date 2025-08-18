StartupEvents.registry('entity_type', event => {
    event.create('wyrm', 'entityjs:tamable')
        /**
         * 游戏启动时设置的一次性属性
         */
        .immuneTo("minecraft:stone", "minecraft:dirt") // 实体不会被这些方块造成伤害或影响（例如方块碰撞伤害）
        .canSpawnFarFromPlayer(true) // 允许实体在距离玩家较远的地方生成
        .clientTrackingRange(20) // 客户端追踪范围扩大到 20 格（超过默认的 10）
        .mobCategory('monster') // 实体归类为怪物类型（受难度、光照等影响）
        .setRenderType("solid") // 实体渲染类型为实心模型（可选：cutout、translucent 等）
        .sized(1, 1) // 实体 hitbox 大小（宽1格，高1格）
        .modelSize(2, 3) // 实体视觉模型尺寸（仅影响渲染）
        .updateInterval(3) // 每 3 tick 更新一次实体状态（影响性能和同步精度）
        .defaultDeathPose(true) // 使用默认死亡姿势
        .repositionEntityAfterLoad(true) // 加载后自动调整实体位置（避免卡在墙里）
        .isPersistenceRequired(true) // 实体不因距离远或长时间不活跃而被清除
        .isAlwaysExperienceDropper(true) // 无论如何死亡都会掉落经验
        .setDeathSound("minecraft:entity.generic.death") // 死亡音效
        .canJump(true) // 启用跳跃行为
        .ambientSoundInterval(100) // 间隔 100 tick 播放环境音
        .isPushable(true) // 实体可以被推开
        .canBreatheUnderwater(true) // 可以在水下呼吸，不会溺水
        .eatingSound("minecraft:entity.zombie.ambient") // 进食时播放的音效
        .fallSounds("minecraft:entity.generic.small_fall", "minecraft:entity.generic.large_fall") // 分别为小/大跌落音效
        .fireImmune(false) // 不免疫火焰（false 表示会被火烧）
        .followLeashSpeed(1.5) // 被拴绳拉动时的跟随速度
        .setAmbientSound("minecraft:entity.zombie.ambient") // 环境音（静止时偶尔发出的声音）
        .mainArm("left") // 主手为左手
        .mobType('undead') // 实体类别为“不死族”，会被例如治疗药水伤害等规则影响
        .saves(true) // 允许实体保存到世界存档中
        .setSoundVolume(0.5) // 实体声音音量大小
        .setSummonable(true) // 允许使用命令召唤该实体（如 /summon）
        .setSwimSound("minecraft:entity.generic.swim") // 游泳时播放的声音
        .setSwimSplashSound("minecraft:entity.generic.splash") // 在水中激起水花的声音
        .setWaterSlowDown(0.6) // 在水中移动的减速系数（默认通常为 0.8）
        .shouldDespawnInPeaceful(true) // 和普通怪物一样，在和平模式下会消失
        .mountJumpingEnabled(true) // 若玩家骑乘该实体，允许跳跃
        .tamableFood([
            'minecraft:diamond',
            Ingredient.of("minecraft:bedrock")
        ]) // 可用于驯服该实体的物品（可被玩家用来右键驯服）
        .isFood([
            'minecraft:diamond',
            Ingredient.of("minecraft:apple")
        ]) // 实体认为哪些物品是“食物”，用于交互（例如喂食恢复生命等）
        // .noEggItem() // 禁用自动生成蛋物品
        // 自定义生成蛋
        .eggItem(item => {
            item.backgroundColor(0);
            item.highlightColor(0);
        })
        .canFireProjectileWeapon([
            'minecraft:bow',
            'minecraft:crossbow'
        ])
        .newGeoLayer(builder => {
            // 定义新的渲染层，例如苦力怕爆炸时或凋灵的样式
            /*builder.textureResource(entity => {
                return "kubejs:textures/entity/sasuke.png"
            })*/
        })
        /**
         * 以下方法需要返回特定类型的值，
         * 如果返回类型与期望不符，会回退为默认方法并输出错误到 logs>kubejs>startup.log。
         *
         * 所有回调函数都可以通过全局事件热更新！
         *
         * 例如：
         * global.interact = context => {
         *   if (context.player.isShiftKeyDown()) return
         *   context.player.startRiding(context.entity);
         * }
         *
         * .onInteract(context => global.interact(context)) // 用 /kubejs reload startup_scripts 热更新
         */
        .addAnimationController('exampleController', 1, event => {
            if (event.entity.hurtTime > 0) {
                event.thenPlayAndHold('spawn');
            } else {
                event.thenLoop('idle');
            }
            return true;
        })
        .setBreedOffspring(context => {
            const { entity, mate, level } = context
            // 返回交配后生成的实体 ResourceLocation
            return 'minecraft:cow'
        })
        .addPartEntity("head", 1, 1, builder => {
            // 添加一个附加的碰撞体（命中箱），可设置其属性
            builder
                .isPickable(true)
                .onPartHurt(context => {
                    const { entity, part, source, amount } = context
                    // 自定义当该部分受击时的伤害传递逻辑
                    // 例如：该部位受击后造成双倍伤害
                    entity.attack(source, amount * 2)
                    console.log("source: " + source + " amount: " + amount + " part name: " + part.name)
                })
        })
        .aiStep(entity => {
            // 每个 tick 执行的 AI 行为逻辑
            // 让之前注册的“head”部分保持在实体上方 1 格的位置
            entity.tickPart("head", 0, 1, 0)
        })
        .setLookControl(entity => {
            return EntityJSUtils.createLookControl(entity, lookControlBuilder => { })
        })
        .setMoveControl(entity => {
            return EntityJSUtils.createMoveControl(entity, moveControlBuilder => { })
        })
        .setJumpControl(entity => {
            return EntityJSUtils.createJumpControl(entity, jumpControlBuilder => { })
        })
        .createNavigation(context => {
            const { entity, level } = context
            // 使用工具创建特定寻路方式，例如爬墙（像蜘蛛）
            return EntityJSUtils.createWallClimberNavigation(entity, level)
        })
        .render(context => {
            // 自定义渲染逻辑（推荐使用 .scaleModelForRender 替代）
            if (context.entity.isBaby()) {
                return context.poseStack.scale(0.5, 0.5, 0.5);
            }
            return context.poseStack;
        })
        .scaleModelForRender(context => {
            // 自定义渲染比例，不影响碰撞箱等核心逻辑
            const { entity, poseStack } = context
            if (entity.hurtTime > 0) {
                poseStack.scale(0.5, 0.5, 0.5)
            }
        })
        .jumpBoostPower(entity => {
            // 设置实体在获得跳跃提升时的跳跃力度
            return entity.hasEffect("minecraft:resistance") ? (0.1 * (entity.getEffect("minecraft:resistance").getAmplifier() + 1)) : 0.0;
        })
        .setBlockJumpFactor(entity => {
            // 设置跳跃方块因子
            return entity.age > 2000 ? 1.3 : 1;
        })
        .setMaxFallDistance(entity => {
            // 设置最大掉落高度
            return entity.isOnFire() ? 1 : 3;
        })
        .myRidingOffset(entity => {
            // 设置乘骑时的偏移
            return entity.isBaby() ? 5 : 7;
        })
        .animationResource(entity => {
            // 返回动画资源路径
            if (entity.hurtTime > 0) {
                return // 受伤状态下的动画
            } else {
                return "kubejs:animations/entity/wyrm.animation.json";
            }
        })
        .blockSpeedFactor(entity => {
            // 设置行走速度因子
            return entity.age < 5000 ? 1.0 : 0.5;
        })
        .calculateFallDamage(context => {
            // 自定义摔落伤害计算
            return Math.floor(context.fallHeight * context.damageMultiplier);
        })
        .canAddPassenger(context => {
            // 判断是否能添加乘客
            return context.entity.getPassengers().size() < 4;
        })
        .isAlliedTo(context => {
            // 判断是否为盟友
            return context.target.type == 'minecraft:blaze'
        })
        .canAttack(context => {
            // 判断是否可以攻击目标实体
            return context.target.type !== context.entity.type;
        })
        .canAttackType(context => {
            // 判断是否可以攻击某类型实体
            return context.targetType.category.friendly;
        })
        .canBeAffected(context => {
            // 判断是否可以被状态效果影响
            return !context.entity.hasEffect(context.effect.getEffect());
        })
        .canChangeDimensions(entity => {
            // 判断是否可以切换维度
            return entity.tags.contains("dimension_changer");
        })
        .canDisableShield(entity => {
            // 判断是否可以破盾
            return entity.mainHandItem.id == 'minecraft:diamond_sword';
        })
        .canFireProjectileWeaponPredicate(context => {
            // 判断是否可以使用远程武器
            return context.projectileWeapon.id == 'minecraft:bow';
        })
        .canFreeze(entity => {
            // 判断是否会被冻结
            return entity.inWater;
        })
        .canHoldItem(context => {
            // 判断是否可以持有物品
            return !context.entity.isBaby();
        })
        .canBreed(entity => {
            // 判断是否可以繁殖
            return !entity.isBaby(); // 注意：原始逻辑为 baby，这里应该返回 false 时不能繁殖
        })
        .canMate(context => {
            // 判断是否可以交配（需处于相同生物群系）
            let blockpos1 = context.animal.block.pos
            let blockpos2 = context.otherAnimal.block.pos
            return context.animal.getLevel().getBiome(blockpos1) === context.otherAnimal.getLevel().getBiome(blockpos2);
        })
        .canPickUpLoot(entity => {
            // 判断是否可以捡拾战利品（仅夜间）
            return !entity.getLevel().isDay();
        })
        .canStandOnFluid(context => {
            // 判断是否可以站在液体上（例如水）
            let fluid = Fluid.of("minecraft:water").fluid.fluidType
            return context.fluidState.fluidType == fluid
        })
        .canTakeItem(context => {
            // 判断是否可以拾取物品
            return context.entity !== null && !context.itemStack.isEmpty();
        })
        .dampensVibrations(entity => {
            // 判断是否可抑制震动（如潜影贝）
            return entity.isNoGravity();
        })
        .experienceReward(killedEntity => {
            // 设置击杀后掉落的经验值
            return (killedEntity.armorCoverPercentage + 1) * 5;
        })
        .hasLineOfSight(context => {
            // 判断是否拥有视线
            if (context.targetEntity.getLevel() !== context.entity.getLevel()) {
                return false;
            }
            const entityPos = new Vec3d(context.entity.getX(), context.entity.getEyeY(), context.entity.getZ());
            const targetPos = new Vec3d(context.targetEntity.getX(), context.targetEntity.getEyeY(), context.targetEntity.getZ());
            const distance = entityPos.distanceTo(targetPos);
            return distance <= 128.0;
        })
})
/**
 * 实体交互事件处理函数
 * 可在 .onInteract 中引用本函数实现热更新
 *
 * @param {Internal.ContextUtils$MobInteractContext} context 交互上下文，包含玩家与实体信息
 * @returns 无返回值；若玩家未蹲下，则让玩家骑上实体
 */
global.interact = context => {
    // 如果玩家正在蹲下，什么也不做
    if (context.player.isShiftKeyDown()) return;

    // 让玩家骑乘该实体
    context.player.startRiding(context.entity);
}