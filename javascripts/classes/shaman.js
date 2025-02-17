sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[18]=55;sCON[18]=55;sDEX[18]=55;sQUI[18]=60;sINT[18]=60;sPIE[18]=75;sEMP[18]=60;sCHA[18]=60; 
sSTR[10]=50;sCON[10]=50;sDEX[10]=70;sQUI[10]=70;sINT[10]=60;sPIE[10]=60;sEMP[10]=60;sCHA[10]=60; 
sSTR[12]=100;sCON[12]=70;sDEX[12]=35;sQUI[12]=35;sINT[12]=60;sPIE[12]=60;sEMP[12]=60;sCHA[12]=60; 

Abilities = new Array(13)		
Abilities[1]=new abilityPT("Mending",0,65,2,1,0,0)
Abilities[2]=new abilityPT("Augmentation",0,68,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[6]=new abilityPT("Shields (Small)",0,102,7,0,0,0)
Abilities[7]=new abilityPT("Hammer",0,137,5,0,0,0)
Abilities[8]=new abilityPT("Mending Spec.",5,67,3,0,65,0)
Abilities[9]=new abilityPT("Augmentation Spec.",5,70,3,0,68,0)
Abilities[10]=new abilityPT("Subterranean",5,73,2,1,0,0)
Abilities[11]=new abilityPT("Subterranean Spec.",5,74,3,0,73,0)
Abilities[12]=new abilityPT("Studded Armor",10,101,7,0,0,0)
Abilities[13]=new abilityPT("Chain Armor",20,104,7,0,0,0)
	
//Styles = new Array(0);

Spells = new Array()

Lines = new Array();

var idx=1;
Lines[65079]=new linePT('Minor Heal','Heals target for a very small amount of health. Casts quickly and uses little power.',65,0) 
Spells[idx++]=new spellPT("Minor Mending",1,65079,65,"6 HP ",65,"1 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Refinement",3,65079,65,"11 HP ",65,"2 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Improvement",5,65079,65,"16 HP ",65,"3 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Reconstitution",8,65079,65,"23 HP ",65,"4 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Amelioration",11,65079,65,"31 HP ",65,"5 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Purification",14,65079,65,"38 HP ",65,"6 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Recovery",18,65079,65,"48 HP ",65,"8 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Reparation",23,65079,65,"60 HP ",65,"10 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Restoration",29,65079,65,"75 HP ",65,"12 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Reconstruction",37,65079,65,"95 HP ",65,"14 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Emendation",47,65079,65,"119 HP ",65,"17 PP",'2000','2.2s','','','','') 
Lines[65081]=new linePT('Heal','Heals target for a small amount of health. Uses little power.',65,0) 
Spells[idx++]=new spellPT("Refinement",4,65081,65,"26 HP ",65,"4 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Improvement",6,65081,65,"36 HP ",65,"6 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Reconstitution",9,65081,65,"50 HP ",65,"9 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Amelioration",12,65081,65,"65 HP ",65,"11 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Purification",16,65081,65,"85 HP ",65,"15 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Recovery",21,65081,65,"109 HP ",65,"19 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Reparation",27,65081,65,"138 HP ",65,"25 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Restoration",31,65081,65,"158 HP ",65,"28 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Reconstruction",36,65081,65,"183 HP ",65,"33 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Emendation",46,65081,65,"231 HP ",65,"42 PP",'2000','2.8s','','','','') 
Lines[65063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',65,0) 
Spells[idx++]=new spellPT("Arrival from Valhalla",10,65063,65,"10%H 0%P ",65,"25%+ ",'1500','4.0s','','','','') 
Lines[65080]=new linePT('Minor Group Heal','Heals every member of the group for a small amount of health.',65,0) 
Spells[idx++]=new spellPT("Group Reparation",15,65080,65,"33 HP ",65,"17 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Purification",25,65080,65,"53 HP ",65,"21 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Restoration",35,65080,65,"73 HP ",65,"24 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Emendation",45,65080,65,"93 HP ",65,"25 PP",'2000','3.0s','','','','') 
Lines[67082]=new linePT('Major Heal','Heals target.',67,0) 
Spells[idx++]=new spellPT("Major Reconstitution",5,67082,67,"55 HP ",67,"10 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Amelioration",8,67082,67,"82 HP ",67,"15 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Purification",11,67082,67,"109 HP ",67,"20 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Recovery",14,67082,67,"136 HP ",67,"24 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Reparation",18,67082,67,"172 HP ",67,"30 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Restoration",25,67082,67,"235 HP ",67,"39 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Reconstruction",33,67082,67,"307 HP ",67,"48 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Emendation",42,67082,67,"387 HP ",67,"57 PP",'2000','3.2s','','','','') 
Lines[67084]=new linePT('Cure Disease','Attempts to cure target of all disease.',67,0) 
Spells[idx++]=new spellPT("Cure Disease",6,67084,67,"",67,"6% ",'1500','3.0s','','','','') 
Lines[67083]=new linePT('Cure Poison','Attempts to cure target of all poisons.',67,0) 
Spells[idx++]=new spellPT("Cure Poison",7,67083,67,"",67,"6% ",'1500','3.0s','','','','') 
Lines[67089]=new linePT('Buff (Health Regeneration)','Target regenerates the given amount of health every \"tick\".',67,0) 
Spells[idx++]=new spellPT("Frigg's Antidote",9,67089,67,"30 HP ",67,"9 PP",'2000','3.0s','','','30s','') 
Spells[idx++]=new spellPT("Frigg's Medicant",12,67089,67,"39 HP ",67,"12 PP",'2000','3.0s','','','30s','') 
Spells[idx++]=new spellPT("Frigg's Cure",16,67089,67,"51 HP ",67,"15 PP",'2000','3.0s','','','30s','') 
Spells[idx++]=new spellPT("Frigg's Elixir",21,67089,67,"66 HP ",67,"20 PP",'2000','3.0s','','','30s','') 
Spells[idx++]=new spellPT("Frigg's Panacea",27,67089,67,"84 HP ",67,"26 PP",'2000','3.0s','','','30s','') 
Spells[idx++]=new spellPT("Frigg's Remedy",32,67089,67,"99 HP ",67,"32 PP",'2000','3.0s','','','30s','') 
Spells[idx++]=new spellPT("Frigg's Balm",43,67089,67,"132 HP ",67,"44 PP",'2000','3.0s','','','30s','') 
Lines[67184]=new linePT('Buff (Health Regeneration, Group)','Everyone in the caster\'s group regenerates the given amount of health every \"tick\".',67,0) 
Spells[idx++]=new spellPT("Fungal Rejuvenation",26,67184,67,"81 HP ",67,"50 PP",'2000','4.0s','','','30s','') 
Spells[idx++]=new spellPT("Fungal Regeneration",35,67184,67,"108 HP ",67,"70 PP",'2000','4.0s','','','30s','') 
Spells[idx++]=new spellPT("Fungal Restoration",46,67184,67,"141 HP ",67,"94 PP",'2000','4.0s','','','30s','') 
Lines[67063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',67,0) 
Spells[idx++]=new spellPT("Reception from Valhalla",15,67063,67,"30%H 10%P ",67,"25%+ ",'1500','4.0s','','','','') 
Lines[67064]=new linePT('Cure Nearsight','Removes the given condition from the target. This spell\'s cast time is not influenced by stats.',67,0) 
Spells[idx++]=new spellPT("Cure Nearsight I",20,67064,67,'',67,'30 PP','1500','6.0s','','','','') 
Spells[idx++]=new spellPT("Cure Nearsight II",35,67064,67,'',67,'30 PP','1500','3.5s','','','','')
Lines[68003]=new linePT('Shield','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',68,0) 
Spells[idx++]=new spellPT("Guardian's Lesser Ward",1,68003,68,"11 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Ward",5,68003,68,"15 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Lesser Shield",10,68003,68,"20 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Shield",16,68003,68,"26 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Lesser Barrier",22,68003,68,"32 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Barrier",31,68003,68,"41 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Lesser Protection",42,68003,68,"52 AF ",68,"",'1000','3.0s','','','','') 
Lines[68037]=new linePT('Buff (Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',68,0) 
Spells[idx++]=new spellPT("Lesser Strength of the Viking",2,68037,68,"+11 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Viking",4,68037,68,"+13 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Vigor of the Viking",8,68037,68,"+16 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vigor of the Viking",13,68037,68,"+20 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Power of the Viking",18,68037,68,"+24 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Power of the Viking",25,68037,68,"+30 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Might of the Viking",33,68037,68,"+36 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Might of the Viking",43,68037,68,"+44 STR ",68,"",'1000','3.0s','','','','') 
Lines[68085]=new linePT('Buff (Constitution)','Increases the target\'s Constitution, which will cause it to be able to take more damage.',68,0) 
Spells[idx++]=new spellPT("Augment Health",3,68085,68,"+12 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Increase Health",9,68085,68,"+17 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Enhance Health",14,68085,68,"+21 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strengthen Health",20,68085,68,"+26 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Exaggerate Health",29,68085,68,"+33 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Intensify Health",38,68085,68,"+40 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Amplify Health",47,68085,68,"+47 CON ",68,"",'1000','3.0s','','','','') 
Lines[68039]=new linePT('Buff (Dexterity)','Increases the target\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',68,0) 
Spells[idx++]=new spellPT("Minor Evasion",11,68039,68,"+18 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Evasion",15,68039,68,"+22 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Evasion",21,68039,68,"+26 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Major Evasion",28,68039,68,"+32 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Evasion",37,68039,68,"+39 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Superior Evasion",48,68039,68,"+48 DEX ",68,"",'1000','3.0s','','','','') 
Lines[70004]=new linePT('Damage Add','Target does more damage with every melee weapon hit.',70,0) 
Spells[idx++]=new spellPT("Minor Force of the Deep",1,70004,70,"0.7 DPS ",70,"2 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Lesser Force of the Deep",4,70004,70,"1 DPS ",70,"3 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Force of the Deep",8,70004,70,"1.3 DPS ",70,"5 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Major Force of the Deep",11,70004,70,"1.6 DPS ",70,"7 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Greater Force of the Deep",15,70004,70,"2 DPS ",70,"9 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Superior Force of the Deep",20,70004,70,"2.4 DPS ",70,"12 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Mighty Force of the Deep",27,70004,70,"3 DPS ",70,"17 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Supreme Force of the Deep",34,70004,70,"3.7 DPS ",70,"21 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Ultimate Force of the Deep",44,70004,70,"4.6 DPS ",70,"28 PP",'1000','3.0s','','','20m','') 
Lines[70047]=new linePT('Buff (Strength/Constitution)','Increases the target\'s Strength and Constitution, which will cause it to  be able to carry more weight,  as well as to both do more damage in melee combat and to be able to take more damage before dying.',70,0) 
Spells[idx++]=new spellPT("Strength of the Deep",2,70047,70,"+16 STR/CON ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vigor of the Deep",5,70047,70,"+21 STR/CON ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Energy of the Deep",9,70047,70,"+25 STR/CON ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vitality of the Deep",13,70047,70,"+30 STR/CON ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Might of the Deep",19,70047,70,"+37 STR/CON ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Potence of the Deep",26,70047,70,"+45 STR/CON ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Fortification of the Deep",36,70047,70,"+57 STR/CON ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Power of the Deep",46,70047,70,"+69 STR/CON ",70,"",'1000','3.0s','','','','') 
Lines[70185]=new linePT('Buff (Fatigue Regeneration)','Target\'s rate of endurance regeneration is increased, allowing them to sprint farther or use more melee combat styles.',70,0) 
Spells[idx++]=new spellPT("Minor Earth Invigoration",2,70185,70,"1 FAT Regen ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Earth Invigoration",12,70185,70,"2 FAT Regen ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Earth Invigoration",22,70185,70,"3 FAT Regen ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Earth Invigoration",32,70185,70,"4 FAT Regen ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Superior Earth Invigoration",42,70185,70,"5 FAT Regen ",70,"",'1000','3.0s','','','','') 
Lines[70048]=new linePT('Buff (Dexterity/Quickness)','Increases the target\'s Dexterity and Quickness, which will cause it to do more damage and be more effective in melee combat as well as cast spells faster.',70,0) 
Spells[idx++]=new spellPT("Gloom's Guide",3,70048,70,"+18 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Gloom's Wisdom",6,70048,70,"+21 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Gloom's Enlightenment",10,70048,70,"+27 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Murk's Guide",14,70048,70,"+31 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Murk's Wisdom",21,70048,70,"+39 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Murk's Enlightenment",28,70048,70,"+48 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Shadow's Wisdom",37,70048,70,"+58 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Shadow's Enlightenment",47,70048,70,"+70 DEX/QUI ",70,"",'1000','3.0s','','','','') 
Lines[70090]=new linePT('Buff (Acuity)','Increases the target\'s Intelligence, which will cause it to have a larger power pool and more effective spells. Castable on Wizards, Theurgists, Cabalists, Sorcerers, and Necromancers.',70,0) 
Spells[idx++]=new spellPT("Sight of the Deep",12,70090,70,"+22 ACU ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Wisdom of the Deep",22,70090,70,"+32 ACU ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Sagacity of the Deep",31,70090,70,"+41 ACU ",70,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vision of the Deep",42,70090,70,"+52 ACU ",70,"",'1000','3.0s','','','','') 
Lines[70076]=new linePT('Buff (Group, Heat Resistance)','Target\'s resistance to Heat damage is increased.',70,0) 
Spells[idx++]=new spellPT("Wrap of the Deep",23,70076,70,"+8 HEAT ",70,"19 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Shroud of the Deep",30,70076,70,"+16 HEAT ",70,"25 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Caress of the Deep",43,70076,70,"+24 HEAT ",70,"36 PP",'1000','3.0s','','','20m','') 
Lines[70077]=new linePT('Buff (Group, Cold Resistance)','Target\'s resistance to Cold damage is increased.',70,0) 
Spells[idx++]=new spellPT("Warmth from Below",24,70077,70,"+8 COLD ",70,"19 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Heat from Below",35,70077,70,"+16 COLD ",70,"29 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Fires from Below",45,70077,70,"+24 COLD ",70,"38 PP",'1000','3.0s','','','20m','') 
Lines[70078]=new linePT('Buff (Group, Matter Resistance)','Target\'s resistance to Matter damage is increased.',70,0) 
Spells[idx++]=new spellPT("Rock Unity",25,70078,70,"+8 MATTER ",70,"20 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Stone Unity",38,70078,70,"+16 MATTER ",70,"32 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Cavern Unity",48,70078,70,"+24 MATTER ",70,"41 PP",'1000','3.0s','','','20m','') 
Lines[73020]=new linePT('Damage over Time','Inflicts damage to the target every 2.0 seconds repeatedly over a given time period.',73,0) 
Spells[idx++]=new spellPT("Fungal Dispersion",1,73020,73,"2  D x 6 ",73,"2 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Deterioration",4,73020,73,"7  D x 6 ",73,"3 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Decay",7,73020,73,"13  D x 6 ",73,"5 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Solvent",11,73020,73,"19  D x 6 ",73,"7 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Disintegration",15,73020,73,"27  D x 6 ",73,"9 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Erosion",20,73020,73,"35  D x 6 ",73,"12 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal  Degeneration",25,73020,73,"45  D x 6 ",73,"15 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Devolution",30,73020,73,"53  D x 6 ",73,"19 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Decrepitude",35,73020,73,"63  D x 6 ",73,"22 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Dilapidation",41,73020,73,"73  D x 6 ",73,"26 PP",'1500','3.0s','','','12s','Body') 
Spells[idx++]=new spellPT("Fungal Blight",48,73020,73,"87  D x 6 ",73,"31 PP",'1500','3.0s','','','12s','Body') 
Lines[73012]=new linePT('Root','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break.',73,0) 
Spells[idx++]=new spellPT("Grasping Creepers",2,73012,73,"99% 18 sec ",73,"2 PP",'1500','2.5s','','','18s','Matter') 
Spells[idx++]=new spellPT("Bonding Creepers",6,73012,73,"99% 24 sec ",73,"4 PP",'1500','2.5s','','','24s','Matter') 
Spells[idx++]=new spellPT("Webbing Creepers",10,73012,73,"99% 30 sec ",73,"6 PP",'1500','2.5s','','','30s','Matter') 
Spells[idx++]=new spellPT("Clutching Creepers",14,73012,73,"99% 36 sec ",73,"9 PP",'1500','2.5s','','','36s','Matter') 
Spells[idx++]=new spellPT("Holding Creepers",19,73012,73,"99% 43 sec ",73,"12 PP",'1500','2.5s','','','43s','Matter') 
Spells[idx++]=new spellPT("Tangling Creepers",26,73012,73,"99% 54 sec ",73,"16 PP",'1500','2.5s','','','54s','Matter') 
Spells[idx++]=new spellPT("Tenacious Creepers",32,73012,73,"99% 63 sec ",73,"20 PP",'1500','2.5s','','','63s','Matter') 
Spells[idx++]=new spellPT("Detaining Creepers",39,73012,73,"99% 73 sec ",73,"25 PP",'1500','2.5s','','','73s','Matter') 
Spells[idx++]=new spellPT("Clenching Creepers",46,73012,73,"99% 84 sec ",73,"30 PP",'1500','2.5s','','','84s','Matter') 
Lines[73030]=new linePT('Disease','Target suffers a disease which lowers its Strength and movement speed slightly, and also halves the effect of any healing spell cast on it for the spell\'s duration.',73,0) 
Spells[idx++]=new spellPT("Sickening Spores",5,73030,73,"60 sec ",73,"4 PP",'1500','3.0s','','','60s','') 
Spells[idx++]=new spellPT("Infectious Spores",16,73030,73,"90 sec ",73,"10 PP",'1500','3.0s','','','90s','') 
Lines[73031]=new linePT('Disease (AOE)','Target suffers a disease which lowers its Strength and movement speed slightly, and also halves the effect of any healing spell cast on it for the spell\'s duration. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',73,0) 
Spells[idx++]=new spellPT("Fevering Spores",27,73031,73,"120 sec ",73,"17 PP",'1500','3.0s','300','','120s','') 
Spells[idx++]=new spellPT("Festering Spores",37,73031,73,"150 sec ",73,"23 PP",'1500','3.0s','350','','150s','') 
Spells[idx++]=new spellPT("Plague Spores",47,73031,73,"180 sec ",73,"30 PP",'1500','3.0s','400','','180s','') 
Lines[74002]=new linePT('Damage','',74,0) 
Spells[idx++]=new spellPT("Fungal Mud",1,74002,74,"5  D ",74,"2 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Froth",4,74002,74,"17  D ",74,"3 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Muck",7,74002,74,"29  D ",74,"5 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Slush",11,74002,74,"40  D ",74,"7 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Slime",15,74002,74,"57  D ",74,"9 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Ooze",20,74002,74,"73  D ",74,"12 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Sludge",25,74002,74,"92  D ",74,"15 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Ichor",30,74002,74,"108  D ",74,"19 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Scum",35,74002,74,"128  D ",74,"22 PP",'1500','3.0s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Mucus",41,74002,74,"148  D ",74,"26 PP",'1500','3.0s','','20s','','Matter') 
Lines[74007]=new linePT('Damage (Bolt)','Target takes damage. Damage done is of the spell\'s given damage type. The spell is a \"bolt\" that can be blocked and takes a few seconds to travel to its target, but has a longer range and does significantly more damage than other types of spells.',74,0) 
Spells[idx++]=new spellPT("Fungal Pin",1,74007,74,"7  D ",74,"2 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Burr",4,74007,74,"26  D ",74,"3 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Spike",7,74007,74,"45  D ",74,"5 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Bramble",11,74007,74,"63  D ",74,"7 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Spur",15,74007,74,"89  D ",74,"9 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Thistle",20,74007,74,"114  D ",74,"12 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Thorn",25,74007,74,"145  D ",74,"15 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Needle",30,74007,74,"169  D ",74,"19 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Barb",35,74007,74,"201  D ",74,"22 PP",'1875','2.5s','','20s','','Matter') 
Spells[idx++]=new spellPT("Fungal Spine",41,74007,74,"232  D ",74,"26 PP",'1875','2.5s','','20s','','Matter') 
Lines[74006]=new linePT('Damage Shield','Anyone that hits the target with a melee attack is damaged by this protective shield.',74,0) 
Spells[idx++]=new spellPT("Fungal Covering",2,74006,74,"0.8 DPS ",74,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Fungal Pod",5,74006,74,"1.1 DPS ",74,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Fungal Case",10,74006,74,"1.5 DPS ",74,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Fungal Wrap",16,74006,74,"2.1 DPS ",74,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Fungal Coat",24,74006,74,"2.8 DPS ",74,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Fungal Sheath",33,74006,74,"3.6 DPS ",74,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Fungal Husk",43,74006,74,"4.5 DPS ",74,"",'1000','4.0s','','','','') 
Lines[74024]=new linePT('Damage over Time (AOE)','Inflicts damage to the target every 2 seconds repeatedly over a given time period. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',74,0) 
Spells[idx++]=new spellPT("Spore Cloud",17,74024,74,"31  D x 6 ",74,"16 PP",'1500','3.0s','350','','12s','Matter') 
Spells[idx++]=new spellPT("Spore Burst",23,74024,74,"41  D x 6 ",74,"22 PP",'1500','3.0s','350','','12s','Matter') 
Spells[idx++]=new spellPT("Spore Explosion",29,74024,74,"53  D x 6 ",74,"28 PP",'1500','3.0s','350','','12s','Matter') 
Spells[idx++]=new spellPT("Spore Storm",36,74024,74,"65  D x 6 ",74,"36 PP",'1500','3.0s','350','','12s','Matter') 
Spells[idx++]=new spellPT("Spore Whirlwind",46,74024,74,"83  D x 6 ",74,"47 PP",'1500','3.0s','350','','12s','Matter') 
Lines[74018]=new linePT('Root (AOE)','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',74,0) 
Spells[idx++]=new spellPT("Vine Field",22,74018,74,"99% 38 sec ",74,"13 PP",'1500','3.0s','350','','38s','Matter') 
Spells[idx++]=new spellPT("Weed Field",31,74018,74,"99% 50 sec ",74,"19 PP",'1500','3.0s','350','','50s','Matter') 
Spells[idx++]=new spellPT("Creeper Field",39,74018,74,"99% 60 sec ",74,"25 PP",'1500','3.0s','350','','60s','Matter') 
Spells[idx++]=new spellPT("Tendril Field",49,74018,74,"99% 73 sec ",74,"32 PP",'1500','3.0s','350','','73s','Matter') 
Lines[74186]=new linePT('Disease (PBAOE, Instant)','Target suffers a disease which lowers its Strength and movement speed slightly, and also halves the effect of any healing spell cast on it for the spell\'s duration. Spell affects everyone in the immediate radius of the caster, and does less damage the further away they are from the caster. Spell can be cast during combat.',74,0) 
Spells[idx++]=new spellPT("Mold Cloud",27,74186,74,"120 sec ",74,"17 PP",'','','350','8s','120s','') 
Spells[idx++]=new spellPT("Mold Burst",37,74186,74,"150 sec ",74,"23 PP",'','','350','8s','150s','') 
Spells[idx++]=new spellPT("Mold Explosion",47,74186,74,"180 sec ",74,"30 PP",'','','350','8s','180s','') 
