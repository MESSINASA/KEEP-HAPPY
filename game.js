class Game {
    // ... 其他现有方法保持不变 ...

    updateDisplay() {
        if (!this.pet || !this.user) return;

        // 更新宠物图片
        const petDisplay = document.getElementById('pet-display');
        petDisplay.innerHTML = `
            <img src="${this.pet.getImage()}" alt="${this.pet.name}" class="pet-image">
            <div class="pet-name">${this.pet.name}</div>
        `;

        // 更新状态条
        document.getElementById('health-bar').style.width = `${this.pet.health}%`;
        document.getElementById('happiness-bar').style.width = `${this.pet.happiness}%`;
        document.getElementById('hunger-bar').style.width = `${this.pet.hunger}%`;
        
        // 更新用户信息
        document.getElementById('user-info').textContent = `用户：${this.user.username}`;
        document.getElementById('coins').textContent = `金币：${this.user.coins}`;
    }

    createNewPet() {
        // 让用户选择宠物类型
        const petType = this.selectPetType();
        const pet = new Pet(petType, 'My Pet');
        pet.save();
        return pet;
    }

    selectPetType() {
        // 简单起见，默认选择猫咪，你可以later添加选择界面
        return 'cat';
    }
} 