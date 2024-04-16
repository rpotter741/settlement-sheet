class Settlement {
  constructor(name, level = 3, type = None, upgrades = []) {
    this.name = name; 
    this.level = level;
    this.settlementType = type;
    this.upgrades = upgrades;
    this.maxHealthBase = 0;
    this.maxHealthBonus = 0;
    this.currentHealth = 0; 
    this.settlementPoints = 0;
    this.survivalBonus = 0;
    this.foodBonus = 0;
    this.foodCurrent = 0;
    this.foodMax = 0;
    this.suppliesBonus = 0;
    this.suppliesCurrent = 0;
    this.suppliesMax = 0;
    this.medicineBonus = 0;
    this.medicineCurrent = 0;
    this.medicineMax = 0;
    this.safetyBonus = 0;
    this.defenseBonus = 0;
    this.defenseCurrent = 0;
    this.defenseMax = 0;
    this.intelBonus = 0;
    this.intelCurrent = 0;
    this.intelMax = 0;
    this.garrisonBonus = 0;
    this.garrisonCurrent = 0;
    this.garrisonMax = 0; 
    this.economyBonus = 0;
    this.tradeBonus = 0;
    this.tradeCurrent = 0;
    this.tradeMax = 0; 
    this.productivityBonus = 0;
    this.productivityCurrent = 0;
    this.productivityMax = 0;
    this.taxVault = 0;
    this.wells = 0;
    this.walls = 0;
    this.barracks = 0;
    this.granary = 0;
    this.market = 0;
    this.network = 0;
    this.union = 0;
    this.school = 0;
    this.commerce = 0;
    }
    
    function initialize() {
      
    }
