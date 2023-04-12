	/*
this.name=name - Name of RA
this.type=type - Type of RA (P=Passive, I=Instant, D=Duration based)
this.req=req - Prerequisite RA array number
this.reqlvl=reqlvl - Prerequisite RA level required
this.cost=new Array(0,cost1,cost2,cost3,cost4,cost5) - Cost array, 5 levels.. 0 = not available
this.description=description - Text description of the RA
this.level=level - current level.. if 0 not given by default
this.indent=indent - if this RA should be indented
this.evalue=evalue - Value of this RA
this.edesc=edesc - short description after value
this.epre=epre - pre-value tag.. like + or -
this.enomath=enomath - should we do math when calculating the total?
this.classra=classra - is this a R5L0 class RA?
*/

function buildRA(name,type,req,reqlvl,cost1,cost2,cost3,cost4,cost5,description,level,indent,evalue,edesc,epre,enomath){
	this.name=name
	this.type=type
	this.req=req
	this.reqlvl=reqlvl
	this.cost=new Array(0,cost1,cost2,cost3,cost4,cost5)
	this.description=description
	this.level=level
	this.indent=indent
	this.evalue=evalue
	this.evalue1=evalue
	this.evalue2=evalue*2;
	this.evalue3=evalue*3;
	this.evalue4=evalue*4;                                    
	this.evalue5=evalue*5;
	this.edesc=edesc
	this.epre=epre
	this.enomath=enomath
}

arrData=new Array();

arrData[1] = new buildRA('Augmented Str.','P',0,0,1,3,6,10,14,'Increased Strength by 6 per level',0,false,6,'str','+',false);
arrData[2] = new buildRA('Mastery of Arms','P',1,3,1,3,6,10,14,"Increased Attack Speed for melee weapons by 3% per level (minimum swing time remains 1.5 sec)",0,true,3,'% melee attack speed (min 1.5s swing time)','+',false);

arrData[3] = new buildRA('Augmented Dex.','P',0,0,1,3,6,10,14,'Increased Dexterity by 6 per level',0,false,6,'dex','+',false);
arrData[4] = new buildRA('Mastery of Pain','P',3,2,1,3,6,10,14,'Increased Critical Hit chance with melee weapons by 5% per level.',0,true,5,'% chance of critical hit','+',false);
arrData[5] = new buildRA('Mastery of Blocking','P',3,2,1,3,6,10,14,'Increased Block chance by 3% per level.',0,true,3,'% chance to block','+',false);
arrData[6] = new buildRA('Mastery of Parrying','P',3,2,1,3,6,10,14,'Increased Parry chance by 3% per level.',0,true,3,'% chance to parry','+',false);
arrData[7] = new buildRA('Hail of Blows','A',3,3,3,6,10,0,0,'60 second buff - increased Attack Speed with melee weapons by 5% per level. Reuse Timer - Level 1: 15 min, Level 2: 12.5 min, Level 3: 10 min.',0,true,'5','% melee attack speed, 15/12.5/10 min timer, 60sec duration','+',false);
arrData[8] = new buildRA('Mastery of Archery','P',3,3,1,3,6,10,14,'Increased Attack Speed with bows and crossbows by 3% per level',0,true,3,'% bow attack speed (min 1.5s attack speed)','+',false);
arrData[9] = new buildRA('Falcon\'s Eye','P',3,2,1,3,6,10,14,'Increased Critical Hit chance with archery attacks by 5% per level',0,true,5,'% chance of bow critical','+',false);
arrData[10]= new buildRA('Dualist\'s Reflexes','P',3,2,1,3,6,10,14,'Increased Dual Wield chance/damage for dual wield/left axe by 3% per level',0,true,3,'% dual wield chance/dual wield damage','+',false);
arrData[11]= new buildRA('Whirling Dervish','A',3,3,3,6,10,0,0,'60 second buff - Increased Dual Wield chance/damage for dual wield/left axe by 5% per level. Reuse Timer - Level 1: 15 min, Level 2: 12.5 min, Level 3: 10 min.',0,true,5,'% dual wield chance, 15/12.5/10 min timer, 60sec duration','+',false);
arrData[12]= new buildRA('Bladedance','A',3,3,14,0,0,0,0,'Point-blank area effect attack. Reuse timer - 15 min.',0,true,'','PBAE DD, 15 min timer','',true);

arrData[13]= new buildRA('Augmented Con.','P',0,0,1,3,6,10,14,'Increased Constitution by 6 per level',0,false,6,'con','+',false);
arrData[14]= new buildRA('Avoid Pain','A',13,3,3,6,10,0,0,'60 second buff - increased physical absorption by 10% per level. Reuse timer - 15 min.',0,true,10,'% absorb, 15 min timer, 60sec duration','+',false);
arrData[15]= new buildRA('Second Wind','A',13,3,10,0,0,0,0,'Full Endurance Recovery. Reuse Timer - 15 min.',0,true,'','100% endurance restored, 15 min timer','',true);
arrData[16]= new buildRA('Armor of Faith','A',13,3,3,6,10,14,0,'60 second buff - increased armor factor by 50 per level. Reuse Timer - Level 1: 15 min, Level 2: 12.5 min, Level 3: 10 min.',0,true,'50',' AF, 15/12.5/10 min timer, 60sec duration','+',false);
arrData[17]= new buildRA('Battle Yell','A',13,3,3,6,10,0,0,'Point-blank area effect taunt. Reuse Timer - Level 1: 15 min, Level 2: 12.5 min, Level 3: 10 min',0,true,'','PBAE taunt, 15/12.5/10 min timer','',true);

arrData[18]= new buildRA('Augmented Quick.','P',0,0,1,3,6,10,14,'Increased Quickness by 6 per level',0,false,6,'qui','+');
arrData[19]= new buildRA('Dodger','P',18,2,1,3,6,10,14,'Increased Evade chance by 3% per level.',0,true,3,'% chance to evade','+',false);
arrData[20]= new buildRA('Mastery of Stealth','P',18,2,3,6,10,0,0,'Increased move speed while stealthed by 5% per level',0,true,5,'% stealthed movement speed','+',false);

arrData[21]= new buildRA('Augmented Acuity','P',0,0,1,3,6,10,14,'Increased Acuity by 6 per level',0,false,6,'int','+');
arrData[22]= new buildRA('Serenity','P',21,2,1,3,6,10,14,'Increased Power regeneration - 0.5s/1.0s/1.5s/2.0s/2.5s faster than normal',0,true,'1','value','',true);
arrData[23]= new buildRA('Ethereal Bond','P',21,2,1,3,6,10,14,'Increased maximum power by 3% per level',0,true,3,'% max power','+',false);
arrData[24]= new buildRA('Wild Arcana','P',21,2,1,3,6,10,14,'Increased Critical Spell chance for duration-based attack spells (e.g. DoTs, debuffs) by 5% per level',0,true,5,'% chance of duration spell critical','+',false);
arrData[25]= new buildRA('Wild Healing','P',21,2,1,3,6,10,14,'Increased Critical Heal chance for direct heal spells by 5% per level',0,true,5,'% double effect heal','+',false);
arrData[26] = new buildRA('Wild Minion','P',21,2,1,3,6,10,14,'Increased Pet Critical hit chance by 5% per level',0,true,5,'% pet critical hit','+',false);
arrData[27]= new buildRA('Minion Control','P',26,1,1,3,6,10,14,'Pets take 3% less experience per level',0,true,3,'% pet xp taken','-',false);
arrData[28]= new buildRA('Wild Power','P',21,2,1,3,6,10,14,'Increased Critical spell chance for direct damage and bolt spells by 5% per level',0,true,5,'% damage spell critical','+',false);
arrData[29]= new buildRA('Mastery of the Art','P',21,3,1,3,6,10,14,'Increased Casting Speed by 3% per level (minimum cast time remains 2.0 sec)',0,true,3,'% casting speed (min cast time 2.0s)','+',false);
arrData[30]= new buildRA('Mastery of Healing','P',21,2,1,3,6,10,14,'Increased effect of Healing based spells by 3% per level',0,true,3,'% healing effect','+',false);
arrData[31]= new buildRA('Mastery of Magery','P',21,2,1,3,6,10,14,'Increased effect of Direct Damage based spells by 3% per level',0,true,3,'% DD damage','+',false);
arrData[32]= new buildRA('Mastery of the Arcane','P',21,2,1,3,6,10,14,'Increased effect of Buff spells by 3% per level',0,true,3,'% chance of buff spell critical','+',false);
arrData[33]= new buildRA('Concentration','A',21,3,10,0,0,0,0,'Resets Quickcast timer. Reuse Timer - 15 minute.',0,true,'','Reset quickcast timer, 15min timer','',true);
arrData[34]= new buildRA('Mastery of Concentration','A',21,3,14,0,0,0,0,'Reduces chance of interruption during spell cast by 100% for 15 seconds. Note this ability is affected by the level of your attacker. Reuse Timer - 30 min.',0,true,'','Immune to interruption, 30min timer, 15sec duration','',true);
arrData[35]= new buildRA('Majestic Will','A',21,3,6,10,14,0,0,'60 second buff - reduces target\'s resist chance by 5% per level. Reuse Timer - Level 1: 30 min, Level 2 - 20 min, Level 3 - 15 min.',0,true,5,'% resist debuff, 30/20/15 min timer, 60sec duration','-',false);

arrData[36]= new buildRA('Long Wind','P',0,0,1,3,6,10,14,'Reduced Endurance cost of Sprinting',0,false,-1,' endurance used per second','',false);
arrData[37]= new buildRA('Tireless','P',0,0,1,3,6,10,14,'Increased Endurance Regen during combat',0,false,'','?','',true);
arrData[38]= new buildRA('Regeneration','P',0,0,1,3,6,10,14,'Increased Health regeneration - 0.5s/1.0s/1.5s/2.0s/2.5s faster than normal',0,false,'','?','',true);
arrData[39]= new buildRA('Toughness','P',0,0,1,3,6,10,14,'Increased Maximum Health by 3% per level',0,false,3,'% max hp','+');
arrData[40]= new buildRA('Mastery of Water','P',0,0,1,3,6,10,14,'Increase swimspeed by 3% per level',0,false,3,'% swim speed','+',false);
arrData[41]= new buildRA('Avoidance of Magic','P',0,0,1,3,6,10,14,'Increase magical resists by 3% per level',0,false,3,'% to all magic resists','+',false);
arrData[42]= new buildRA('Lifter','P',0,0,1,3,6,10,14,'Increase Maximum Carried Weight by 20% per level',0,false,20,'% max carried weight','+',false);
arrData[43]= new buildRA('Veil Recovery','P',0,0,1,3,6,10,14,'Reduced Res Sickness Duration by 10% per level',0,false,10,'% res sick duration','-',false);

arrData[44]= new buildRA('Arrow Salvaging','P',0,0,1,3,6,10,14,'10% chance per level to not expend an arrow when firing',0,false,10,'% chance to save arrow','+',false);
arrData[45]= new buildRA('See Hidden','P',0,0,8,0,0,0,0,'Detect stealthed characters that don\'t have the "See Hidden" ability: Scouts, Hunters, Rangers and Minstrels. Detects 50 comp stealth at 900 units.',0,false,'','Auto detect stealthed','',true);
arrData[46]= new buildRA('Determination','P',0,0,1,2,3,6,10,'Reduced duration of mesmerize, stun and snare by 15% per level',0,false,15,'% mez/stun/root duration','-',false);

arrData[47]= new buildRA('Trip','A',0,0,10,0,0,0,0,'Point-blank area effect 30% Snare for 12 seconds. Reuse Timer - 10 min',0,false,'','PBAE snare, 10 min timer, 12sec duration','',true);
arrData[48]= new buildRA('Grapple','A',47,1,14,0,0,0,0,'Point-blank, small radius, area effect root for 12 seconds. Reuse Timer - 15 min',0,true,'','PBAE root, 15 min timer, 12sec duration','',true);

arrData[49]= new buildRA('First Aid','A',0,0,3,6,10,0,0,'Self Heal. At level 50, approximately 300 hit points per level. It cannot be used while in combat. Reuse Timer - 15 min.',0,false,30,'% heal, 15 min timer, not in combat','+',false);
arrData[50]= new buildRA('Ignore Pain','A',49,2,14,0,0,0,0,'100% Self Heal. Can be used while in combat. Reuse Timer - 30 min.',0,true,100,'100% heal, 30 min timer, any time','',true);
	
arrData[51]= new buildRA('Rain of Fire','A',0,0,3,6,10,0,0,'10% base damage per level Heat based damage add. Reuse Timer - Level 1: 15 min, Level 2: 12.5 min, Level 3: 10 min.',0,false,10,'% heat damage, 15/12.5/10 min timer','+',false);
arrData[52]= new buildRA('Rain of Ice','A',0,0,3,6,10,0,0,'10% base damage per level Cold based damage add. Reuse Timer - Level 1: 15 min, Level 2: 12.5 min, Level 3: 10 min.',0,false,10,'% cold damage, 15/12.5/10 min timer','+',false);
arrData[53]= new buildRA('Rain of Annihilation','A',0,0,3,6,10,0,0,'10% per level Spirit based damage add. Reuse Timer - Level 1: 15 min, Level 2: 12.5 min, Level 3: 10 min.',0,false,10,'% spirit damage, 15/12.5/10 min timer','+',false);

arrData[54]= new buildRA('Longshot','A',0,0,10,0,0,0,0,'Non-crit shot, 150% range of normal bow attack. Reuser Timer - 10 min.',0,false,'','150% range bow attack, no bonus damage, 10 min timer','',true);
arrData[55]= new buildRA('Volley','A',54,1,14,0,0,0,0,'Ground targeted archery attack that fires 5 successive arrows at various targets in a given area. Must be at least 66% of max bow range from ground target. Reuse Timer - 15 sec.',0,true,'','Area target bow attack, max 5 attacks, 15 sec timer','',true);
arrData[56]= new buildRA('The Empty Mind','A',0,0,3,6,10,0,0,'60s buff - increase all magic resistances bby 5% per level. Reuse Timer - Level 1: 30 min, Level 2: 20 min, Level 3: 15 min.',0,false,5,'% to magic resists, 30/20/15 min timer, 60sec duration','+',false);
arrData[57]= new buildRA('Mystic Crystal Lore','A',0,0,3,6,10,0,0,'Mana Restoration - can only be used out of combat. Level 1: 25%, Level 2: 60%, Level 3: 100%. Reuse Timer - 5 min.',0,false,30,'% power, 5min timer','+',false);
arrData[58]= new buildRA('Raging Power','A',57,2,10,0,0,0,0,' Major Mana Restoration - 100%. Reuse Timer - 30 min.',0,true,100,'% power restored, 30min timer','',true);

arrData[59]= new buildRA('Purge','A',0,0,5,10,0,0,0,'Dispel All Negative Effects. Reuse Timer - Level 1: 30 min, Level 2: 20 min',0,false,'','Dispel Negative Effects, 30/20 min timer','',true);
arrData[60]= new buildRA('Reflex Attack','A',0,0,14,0,0,0,0,'For 30 seconds, automatically counter all melee attacks with no timer. Reuse Timer - 15 min',0,false,'','15 min timer','',true);
arrData[61]= new buildRA('Viper','A',0,0,14,0,0,0,0,'For 30 seconds, all DoT poisons will do double damage. Reuse Timer - 30 min.',0,false,'','Double damage from poisons, 30 min timer, 30sec duration','',true);
arrData[62]= new buildRA('True Sight','A',0,0,10,0,0,0,0,'For 60 seconds, detect all hidden characters. Reuse Timer - 30 min.',0,false,'','Detect all stealthed, 30 min timer, 60sec duration','',true);
arrData[63]= new buildRA('Soldier\'s Barricade','A',0,0,10,0,0,0,0,'For 30 seconds, buff your group\'s armor factor by 330. Reuse Timer - 15 min.',0,false,'','Large bonus to group\'s armor factor, 15 min timer, 30sec duration, range 1500','',true);
arrData[64]= new buildRA('Bunker of Faith','A',0,0,10,0,0,0,0,'For 30 seconds, buff your group\'s melee absorption by 50%. Reuse Timer - 15 min.',0,false,'','?','',true);
arrData[65]= new buildRA('Siege Bolt','A',0,0,10,0,0,0,0,'Powerful Bolt vs Doors and Siege. Reuse Timer - 5 min.',0,false,'','5 min timer','',true);
arrData[66]= new buildRA('Faith Healing','A',0,0,14,0,0,0,0,'100% Group Heal to all group members within 2000 units. Reuse Timer - 15 min.',0,false,'','100% group heal, 15 min timer','',true);
arrData[67]= new buildRA('Whip of Encouragement','A',0,0,6,0,0,0,0,'Your pet moves at twice its normal run speed for 60 seconds. Reuse Timer - 10 min.',0,false,'10 min timer','?','',true);
arrData[68]= new buildRA('Excited Frenzy','A',0,0,6,0,0,0,0,'Your pet attacks 50% faster than its normal attack speed for 30 seconds. Reuse Timer - 10 min.',0,false,'','10 min timer','',true);
arrData[69]= new buildRA('Group Purge','A',0,0,14,0,0,0,0,'Purge all negative effects from Group. Reuse Timer - 30 min.',0,false,'','30 min timer','',true);
arrData[70]= new buildRA('Perfect Recovery','A',0,0,14,0,0,0,0,'After death, you will ressurect with full health and power and no sickness. Reuse timer - 30 min',0,false,'','30 min timer','',true);
arrData[71]= new buildRA('Vanish','A',0,0,10,0,0,0,0,'Immediately Stealth. Reuse Timer - 30 min.',0,false,'','30 min timer','',true);
arrData[72]= new buildRA('Shadow Run','A',0,0,10,0,0,0,0,'For 30 seconds, move at double your normal stealth movement rate. Reuse Timer - 30 min',0,false,'','30 min timer','',true);
arrData[73]= new buildRA('Speed of Sound','A',0,0,10,0,0,0,0,'For 30 seconds, your group moves at twice normal speed. This ability will not break in combat. This ability also bypasses the movement penalities from mesmermize, root/snare, and stun, although other effects such as the inability to attack will remain. Reuse Timer - 30 min.',0,false,'','30 min timer','',true);
arrData[74]= new buildRA('Ameliorating Melodies','A',0,0,14,0,0,0,0,'For 30 seconds, heals all group members for 100 HP every 1.5 seconds. Reuse Timer - 30 min.',0,false,'','Massive group health regen, 30min timer, 30sec duration','',true);
arrData[75]= new buildRA('Fury of the Gods','A',0,0,14,0,0,0,0,'For 30 seconds, your group receives a 30 DPS damage add that stacks on top of other damage add effects. Does not stack with Triple Wield or Rain of Fire/Ice/Annihiliation. Reuse Timer - 15 min.',0,false,'','Group DA, 15 min timer','',true);
arrData[76]= new buildRA('Wrath of the Champion','A',0,0,10,0,0,0,0,'Point-blank Area Effect Direct Damage. Reuse Timer - 15 min.',0,false,'','PBAE DD, 15 min timer','',true);
arrData[77]= new buildRA('Volcanic Pillar','A',0,0,14,0,0,0,0,'Area Effect Bolt with 500m radius. Reuse Timer - 15 min.',0,false,'','15 min timer','',true);
arrData[78]= new buildRA('Rune of Decimation','A',0,0,14,0,0,0,0,'Trap that damages any opponents nearby when they approach. Casts at casters feet. Every few seconds the trap looks for a target in its area. When it finds one, it triggers the radius direct damage spell on that target, which will damage the target as well as all other enemies in its area of effect. The trap will stay on the ground for 8 minutes before it disappears. Reuse Timer - 15 min',0,false,'','15 min timer','',true);
arrData[79]= new buildRA('Negative Maelstrom','A',0,0,14,0,0,0,0,'Ground-targetted radius cloud spell that lasts 30 seconds. Every 3 seconds anyone within the radius of the object representing the center of the cloud takes damage. The damage is percent based, and goes up with the user\'s level. Reuse Timer - 15 min.',0,false,'','Area target damage, 15 min timer, 30 sec duration','',true);
arrData[80]= new buildRA('Thornweed Field','A',0,0,14,0,0,0,0,'Ground-targetted cloud spell that lasts 30 seconds. Every 5 seconds, anyone within radius of the object representing the center of the cloud takes damage and is 35% snared. The damage is percent based, and goes up with the user\'s level. Reuse Timer - 15 min.',0,false,'','Area target damage/35% snare, 15 min timer, 30 sec duration','',true);
arrData[81]= new buildRA('Corporeal Disintegration','A',0,0,14,0,0,0,0,'Area of Effect Damage over Time - Damage = 120 Matter Dmg x 10, Duration = 30 sec, Radius = 350. Stacks with other DoT lines. Scales with user\'s Matter skill. Reuse Timer - 15 min.',0,false,'','15 min timer','',true);
arrData[82]= new buildRA('Ichor of the Deep','A',0,0,14,0,0,0,0,'Radius direct damage plus root - any enemy in the spells area is damaged and rooted for 20 seconds. Reuse Timer - 15 min.',0,false,'','15 min timer','',true);
arrData[83]= new buildRA('Brilliant Aura of Deflection','A',0,0,14,0,0,0,0,'For 30 seconds, your group receives a 36% boost to magical resists (secondary tier resist). Reuse Timer - 15 min. ',0,false,'','Boost to all magic resists, 15 0min timer, 30sec duration','',true);
arrData[84]= new buildRA('Severing the Tether','I',0,0,10,0,0,0,0,'All enemy summoned/controlled creatures (i.e. pets) in the spells radius immediately turn on their masters and attack them. This is a ground-targetted radius effect spell. Reuse Timer - 15 min.',0,false,'','Area-target, turns all enemy pets on owner, 15 min timer','',true);
arrData[85]= new buildRA('Juggernaut','A',0,0,14,0,0,0,0,'Summons a pet of your level (i.e. a 100% pet) for 4 minutes. Reuse Timer - 15 min.',0,false,'','15 min timer','',true);
arrData[86]= new buildRA('Static Tempest','A',0,0,14,0,0,0,0,'Ground-targetted 360 radius storm cloud spell that lasts 30 seconds. Every 5 seconds procs an unresistible stun for 3 seconds ignoring stun immunity. Reuse Timer - 15 min.',0,false,'','15 min timer','',true);
arrData[87]= new buildRA('Void Style','A',0,0,10,0,0,0,0,'Powerful Combat Style - Weapon Type: Any, Opening: None, Damage: Very High, To-Hit Bonus: Very High, Defense Bonus: Medium, Fatigue Cost: None, Growth Rate: 1.4. Reuse Timer - 5 min.',0,false,'','5 min timer','',true);
arrData[88]= new buildRA('Doombringer Style','A',0,0,10,0,0,0,0,'Powerful Combat Style - Weapon Type: Any, Opening: None, Damage: Very High, To-Hit Bonus: Very High, Defense Bonus: Medium, Fatigue Cost: None, Growth Rate: 1.4. Reuse Timer - 5 min.',0,false,'','5 min timer','',true);
arrData[89]= new buildRA('Tundra Style','A',0,0,10,0,0,0,0,'Powerful Combat Style - Weapon Type: Any, Opening: None, Damage: Very High, To-Hit Bonus: Very High, Defense Bonus: Medium, Fatigue Cost: None, Growth Rate: 1.4. Reuse Timer - 5 min.',0,false,'','5 min timer','',true); 
arrData[90]= new buildRA('Winter Moon Style','A',0,0,10,0,0,0,0,'Powerful Combat Style - Weapon Type: Any, Opening: None, Damage: Very High, To-Hit Bonus: Very High, Defense Bonus: Medium, Fatigue Cost: None, Growth Rate: 1.4. Reuse Timer - 5 min.',0,false,'','Melee Style, 5 min timer','',true);
arrData[91]= new buildRA('Razorback Style','A',0,0,10,0,0,0,0,'Powerful Combat Style - Weapon Type: Any, Opening: None, Damage: Very High, To-Hit Bonus: Very High, Defense Bonus: Medium, Fatigue Cost: None, Growth Rate: 1.4. Reuse Timer - 5 min.',0,false,'','Powerful combat style, 5 min timer','',true);

arrData[92]= new buildRA('Battery of Life','A',0,0,10,0,0,0,0,'Battery Heal - creates a 1000 HP buffer that is distributed to group members within 1500 units. Healing priority matches spreadheal. Reuse Timer - 30 min.',0,false,'','1000 Group HP buffer, 30 min timer','',true);
arrData[93]= new buildRA('Forestheart Ambusher','A',0,0,10,0,0,0,0,'Summons ground-targetted 100% pet for 3 minutes. Automatically acquires targets that enter its aggression radius. Reuse Timer - 30 min.',0,false,'','Ground target pet, 3min duration, 30 min timer','',true);
arrData[94]= new buildRA('Unquenchable Thirst of Souls','A',0,0,10,0,0,0,0,'PBAE Life tap - Damage Type: Spirit, Damage: 350, Radius: 350. Reuse Timer - 15 min.',0,false,'','PBAE Life tap, 15 min timer','',true);
arrData[95]= new buildRA('Defender of the Vale','A',0,0,10,0,0,0,0,'Group-targetted hit point buffer that absorbs 50% damage for up to 500 hit points. Reuse Timer - 15 min.',0,false,'','Absorbs 50% damage, 500hp max, 15 min timer','',true);
arrData[96]= new buildRA('Strike the Soul','A',0,0,10,0,0,0,0,'25% more difficult to resist the caster\'s spells for 60 seconds. Reuse Timer - 30 min.',0,false,'25% more difficult to resist caster\'s spells, 60sec duration, 30 min timer','',true);
arrData[97]= new buildRA('Ravager','A',0,0,10,0,0,0,0,'Powerful Combat Style - Weapon Type: Any, Opening: None, Damage: Very High, To-Hit Bonus: Very High, Defense Bonus: Medium, Fatigue Cost: None, Growth Rate: 1.4. Reuse Timer - 5 min.',0,false,'','5 min timer','',true);
arrData[98]= new buildRA('Resilience of Death','A',0,0,10,0,0,0,0,'Buff all of the caster\'s pets within 500 units with +100 Constitution which increases their melee and magical resistances. Reuse Timer - 30 min',0,false,'','+100 Con, 500 radius, 30 min timer','',true);
arrData[99]= new buildRA('Prevent Flight','P',0,0,14,0,0,0,0,'Snare fleeing target - 35% chance to proc a 50% snare that lasts for 10 seconds',0,false,'','35% chance to 50% snare for 10secs','',true);

arrData[100]= new buildRA('Determination','P',0,0,1,2,3,0,0,'Reduced duration of mesmerize, stun and snare',0,false,15,'% mez/stun/root duration','-',false);
