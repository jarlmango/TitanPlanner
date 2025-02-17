sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[5]=45;sCON[5]=45;sDEX[5]=60;sQUI[5]=70;sINT[5]=80;sPIE[5]=60;sEMP[5]=60;sCHA[5]=60; 
sSTR[6]=60;sCON[6]=60;sDEX[6]=60;sQUI[6]=60;sINT[6]=60;sPIE[6]=60;sEMP[6]=60;sCHA[6]=60; 
sSTR[17]=90;sCON[17]=70;sDEX[17]=40;sQUI[17]=40;sINT[17]=60;sPIE[17]=60;sEMP[17]=60;sCHA[17]=60; 
sSTR[13]=50;sCON[13]=60;sDEX[13]=70;sQUI[13]=50;sINT[13]=70;sPIE[13]=60;sEMP[13]=60;sCHA[13]=60; 
sSTR[8]=50;sCON[8]=50;sDEX[8]=80;sQUI[8]=60;sINT[8]=60;sPIE[8]=60;sEMP[8]=60;sCHA[8]=60; 

Abilities = new Array(9)		
Abilities[1]=new abilityPT("Matter",0,7,2,1,0,0)
Abilities[2]=new abilityPT("Body Destruction",0,10,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Quickcast ",5,1,1,0,0,0)
Abilities[6]=new abilityPT("Matter Manipulation",5,9,3,0,7,0)
Abilities[7]=new abilityPT("Essence Manipulation",5,11,3,0,10,0)
Abilities[8]=new abilityPT("Spirit Animation",5,15,2,1,0,0)
Abilities[9]=new abilityPT("Vivification",5,16,3,0,15,0)
	
//Styles = new Array(0);

Spells = new Array(190)

Lines = new Array(32);

Lines[7003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',7,0) 
Spells[1]=new spellPT("Ward Blow",1,7003,7,"13 AF ",7,"2 PP",'','4.0s','','','20m','') 
Spells[2]=new spellPT("Fend Blow",4,7003,7,"27 AF ",7,"3 PP",'','4.0s','','','20m','') 
Spells[3]=new spellPT("Dampen Blow",6,7003,7,"37 AF ",7,"4 PP",'','4.0s','','','20m','') 
Spells[4]=new spellPT("Deflect Blow",9,7003,7,"51 AF ",7,"6 PP",'','4.0s','','','20m','') 
Spells[5]=new spellPT("Ward Offense",14,7003,7,"75 AF ",7,"9 PP",'','4.0s','','','20m','') 
Spells[6]=new spellPT("Fend Offense",20,7003,7,"104 AF ",7,"12 PP",'','4.0s','','','20m','') 
Spells[7]=new spellPT("Dampen Offense",28,7003,7,"143 AF ",7,"17 PP",'','4.0s','','','20m','') 
Spells[8]=new spellPT("Deflect Offense",38,7003,7,"191 AF ",7,"24 PP",'','4.0s','','','20m','') 
Spells[9]=new spellPT("Nullify Offense",48,7003,7,"250 AF ",7,"31 PP",'','4.0s','','','20m','') 
Lines[7020]=new linePT('Damage over Time','Inflicts damage to the target every 2.5 sec repeatedly over a given time period.',7,0) 
Spells[10]=new spellPT("Corrosive Mist",2,7020,7,"4  D x 4 ",7,"2 PP",'1500','3.0s','','','10s','Matter') 
Spells[11]=new spellPT("Corrosive Fog",3,7020,7,"6  D x 4 ",7,"3 PP",'1500','3.0s','','','10s','Matter') 
Spells[12]=new spellPT("Corrosive Cloud",5,7020,7,"9  D x 4 ",7,"4 PP",'1500','3.0s','','','10s','Matter') 
Spells[13]=new spellPT("Corrosive Smoke",7,7020,7,"13  D x 4 ",7,"5 PP",'1500','3.0s','','','10s','Matter') 
Spells[14]=new spellPT("Dissolving Mist",10,7020,7,"17  D x 4 ",7,"6 PP",'1500','3.0s','','','10s','Matter') 
Spells[15]=new spellPT("Dissolving Fog",13,7020,7,"23  D x 4 ",7,"8 PP",'1500','3.0s','','','10s','Matter') 
Spells[16]=new spellPT("Dissolving Cloud",16,7020,7,"29  D x 4 ",7,"10 PP",'1500','3.0s','','','10s','Matter') 
Spells[17]=new spellPT("Dissolving Smoke",21,7020,7,"37  D x 4 ",7,"13 PP",'1500','3.0s','','','10s','Matter') 
Spells[18]=new spellPT("Disintegrating Fog",27,7020,7,"49  D x 4 ",7,"17 PP",'1500','3.0s','','','10s','Matter') 
Spells[19]=new spellPT("Disintegrating Cloud",35,7020,7,"63  D x 4 ",7,"22 PP",'1500','3.0s','','','10s','Matter') 
Spells[20]=new spellPT("Disintegrating Smoke",44,7020,7,"79  D x 4 ",7,"28 PP",'1500','3.0s','','','10s','Matter') 
Lines[7022]=new linePT('Debuff (Dexterity)','Reduces the target\'s Dexterity, which will cause it to be less effective in melee combat.',7,0) 
Spells[21]=new spellPT("Mystic Web",8,7022,7,"-16 DEX ",7,"5 PP",'1500','','','5s','60s','') 
Spells[22]=new spellPT("Mystic Trap",12,7022,7,"-19 DEX ",7,"6 PP",'1500','','','5s','60s','') 
Spells[23]=new spellPT("Mystic Net",17,7022,7,"-23 DEX ",7,"9 PP",'1500','','','5s','60s','') 
Spells[24]=new spellPT("Magical Web",23,7022,7,"-28 DEX ",7,"11 PP",'1500','','','5s','60s','') 
Spells[25]=new spellPT("Magical Trap",29,7022,7,"-33 DEX ",7,"14 PP",'1500','','','5s','60s','') 
Spells[26]=new spellPT("Magical Net",36,7022,7,"-38 DEX ",7,"17 PP",'1500','','','5s','60s','') 
Spells[27]=new spellPT("Sorcerous Web",46,7022,7,"-46 DEX ",7,"22 PP",'1500','','','5s','60s','') 
Lines[7010]=new linePT('Bladeturn (Self)','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble.',7,0) 
Spells[28]=new spellPT("Barrier of Warding",19,7010,7,"",7,"8% ",'','4.0s','','','20m','') 
Lines[7005]=new linePT('Absorb (Self)','Adds to the target\'s absorption (ABS) factor, resulting in better protection against melee attacks.',7,0) 
Spells[29]=new spellPT("Dampening Ward",30,7005,7,"5% ",7,"19 PP",'','3.0s','','','20m','') 
Spells[30]=new spellPT("Nullifying Ward",41,7005,7,"10% ",7,"26 PP",'','3.0s','','','20m','') 
Lines[9023]=new linePT('Damage Shield (Pet, Focus)','Anyone that hits your pet with a melee attack is damaged by this protective shield. This is a focus spell; the caster cannot move or take any other action or the spell will end.',9,0) 
Spells[31]=new spellPT("Reflect Attack",1,9023,9,"0.7 DPS ",9," 1/P",'1350','2.5s','','','6s','') 
Spells[32]=new spellPT("Reflect Blow",4,9023,9,"3 DPS ",9," 3/P",'1350','2.5s','','','6s','') 
Spells[33]=new spellPT("Reflect Damage",6,9023,9,"4.5 DPS ",9," 3/P",'1350','2.5s','','','6s','') 
Spells[34]=new spellPT("Reflect Offense",9,9023,9,"6.8 DPS ",9," 5/P",'1350','2.5s','','','6s','') 
Spells[35]=new spellPT("Channel Attack",15,9023,9,"10.5 DPS ",9," 8/P",'1350','2.5s','','','6s','') 
Spells[36]=new spellPT("Channel Blow",22,9023,9,"15.1 DPS ",9," 11/P",'1350','2.5s','','','6s','') 
Spells[37]=new spellPT("Channel Damage",30,9023,9,"20.3 DPS ",9," 15/P",'1350','2.5s','','','6s','') 
Spells[38]=new spellPT("Channel Offense",40,9023,9,"27.1 DPS ",9," 20/P",'1350','2.5s','','','6s','') 
Spells[39]=new spellPT("Reflective Backlash",50,9023,9,"33.9 DPS ",9," 26/P",'1350','2.5s','','','6s','') 
Lines[9020]=new linePT('Damage over Time','Inflicts damage to the target every 2.0 sec repeatedly over a given time period.',9,0) 
Spells[40]=new spellPT("Lesser Decrepify",2,9020,9,"4  D x 6 ",9,"2 PP",'1500','3.0s','','','12s','Matter') 
Spells[41]=new spellPT("Decrepify",3,9020,9,"6  D x 6 ",9,"3 PP",'1500','3.0s','','','12s','Matter') 
Spells[42]=new spellPT("Lesser Deterioration",5,9020,9,"9  D x 6 ",9,"4 PP",'1500','3.0s','','','12s','Matter') 
Spells[43]=new spellPT("Deterioration",7,9020,9,"13  D x 6 ",9,"5 PP",'1500','3.0s','','','12s','Matter') 
Spells[44]=new spellPT("Lesser Contamination",10,9020,9,"17  D x 6 ",9,"6 PP",'1500','3.0s','','','12s','Matter') 
Spells[45]=new spellPT("Contamination",13,9020,9,"23  D x 6 ",9,"8 PP",'1500','3.0s','','','12s','Matter') 
Spells[46]=new spellPT("Lesser Devolution",16,9020,9,"29  D x 6 ",9,"10 PP",'1500','3.0s','','','12s','Matter') 
Spells[47]=new spellPT("Devolution",21,9020,9,"37  D x 6 ",9,"13 PP",'1500','3.0s','','','12s','Matter') 
Spells[48]=new spellPT("Lesser Degeneration",27,9020,9,"49  D x 6 ",9,"17 PP",'1500','3.0s','','','12s','Matter') 
Spells[49]=new spellPT("Degeneration",35,9020,9,"63  D x 6 ",9,"22 PP",'1500','3.0s','','','12s','Matter') 
Spells[50]=new spellPT("Lesser Delaceration",44,9020,9,"79  D x 6 ",9,"28 PP",'1500','3.0s','','','12s','Matter') 
Spells[51]=new spellPT("Delaceration",49,9020,9,"89  D x 6 ",9,"32 PP",'1500','3.0s','','','12s','Matter') 
Lines[9024]=new linePT('Damage over Time (AOE)','Inflicts damage to the target every 2 seconds repeatedly over a given time period. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',9,0) 
Spells[52]=new spellPT("Puncture Spirit",18,9024,9,"33  D x 6 ",9,"17 PP",'1500','3.0s','350','','12s','Matter') 
Spells[53]=new spellPT("Perforate Spirit",24,9024,9,"43  D x 6 ",9,"23 PP",'1500','3.0s','350','','12s','Matter') 
Spells[54]=new spellPT("Bore Spirit",29,9024,9,"53  D x 6 ",9,"28 PP",'1500','3.0s','350','','12s','Matter') 
Spells[55]=new spellPT("Drill Spirit",36,9024,9,"65  D x 6 ",9,"36 PP",'1500','3.0s','350','','12s','Matter') 
Spells[56]=new spellPT("Lance Spirit",46,9024,9,"83  D x 6 ",9,"47 PP",'1500','3.0s','350','','12s','Matter') 
Lines[9025]=new linePT('Nearsight','Target\'s effective range of all their ranged attacks (archery and magic) reduced.',9,0) 
Spells[57]=new spellPT("Encrust Eyes",11,9025,9,"25% ",9,"5 PP",'2300','2.0s','','','120s','') 
Spells[58]=new spellPT("Obscuring Dust",19,9025,9,"35% ",9,"9 PP",'2300','2.0s','','','120s','') 
Spells[59]=new spellPT("Clouded Sight",25,9025,9,"45% ",9,"12 PP",'2300','2.0s','','','120s','') 
Spells[60]=new spellPT("Darkened Cloud",32,9025,9,"55% ",9,"16 PP",'2300','2.0s','','','120s','') 
Spells[61]=new spellPT("Persistent Obscuration",41,9025,9,"65% ",9,"20 PP",'2300','2.0s','','','120s','') 
Lines[10027]=new linePT('Lifedrain','Target is damaged, and a portion of the damage is used to heal the caster.',10,0) 
Spells[62]=new spellPT("Minor Vitality Drain",1,10027,10,"5  D 30% ",10,"2 PP",'1500','2.5s','','','','Body') 
Spells[63]=new spellPT("Lesser Vitality Drain",2,10027,10,"9  D 30% ",10,"2 PP",'1500','2.5s','','','','Body') 
Spells[64]=new spellPT("Vitality Drain",3,10027,10,"13  D 30% ",10,"3 PP",'1500','2.5s','','','','Body') 
Spells[65]=new spellPT("Greater Vitality Drain",5,10027,10,"21  D 30% ",10,"4 PP",'1500','2.5s','','','','Body') 
Spells[66]=new spellPT("Major Vitality Drain",7,10027,10,"29  D 30% ",10,"5 PP",'1500','2.5s','','','','Body') 
Spells[67]=new spellPT("Minor Essence Consumption",10,10027,10,"37  D 30% ",10,"6 PP",'1500','2.5s','','','','Body') 
Spells[68]=new spellPT("Lesser Essence Consumption",14,10027,10,"52  D 30% ",10,"9 PP",'1500','2.5s','','','','Body') 
Spells[69]=new spellPT("Essence Consumption",18,10027,10,"68  D 40% ",10,"11 PP",'1500','2.5s','','','','Body') 
Spells[70]=new spellPT("Greater Essence Consumption",23,10027,10,"85  D 40% ",10,"14 PP",'1500','2.5s','','','','Body') 
Spells[71]=new spellPT("Major Essence Consumption",28,10027,10,"104  D 50% ",10,"17 PP",'1500','2.5s','','','','Body') 
Spells[72]=new spellPT("Increased Essence Consumption",35,10027,10,"128  D 50% ",10,"22 PP",'1500','2.5s','','','','Body') 
Spells[73]=new spellPT("Superior Essence Consumption",45,10027,10,"164  D 60% ",10,"29 PP",'1500','2.5s','','','','Body') 
Spells[74]=new spellPT("Essence Devourer",50,10027,10,"179  D 60% ",10,"33 PP",'1500','2.5s','','','','Body') 
Lines[10028]=new linePT('Debuff (Strength)','Reduces the target\'s Strength, which will cause it to do less damage and be less effective in melee combat.',10,0) 
Spells[75]=new spellPT("Fatigue Body",4,10028,10,"-13 STR ",10,"3 PP",'1500','','','5s','60s','') 
Spells[76]=new spellPT("Debilitate Body",8,10028,10,"-16 STR ",10,"5 PP",'1500','','','5s','60s','') 
Spells[77]=new spellPT("Weaken Body",12,10028,10,"-19 STR ",10,"8 PP",'1500','','','5s','60s','') 
Spells[78]=new spellPT("Deteriorate Body",17,10028,10,"-23 STR ",10,"10 PP",'1500','','','5s','60s','') 
Spells[79]=new spellPT("Enfeeble Body",22,10028,10,"-27 STR ",10,"13 PP",'1500','','','5s','60s','') 
Spells[80]=new spellPT("Degenerate Body",29,10028,10,"-33 STR ",10,"18 PP",'1500','','','5s','60s','') 
Spells[81]=new spellPT("Cripple Body",37,10028,10,"-39 STR ",10,"23 PP",'1500','','','5s','60s','') 
Spells[82]=new spellPT("Dilapidate Body",46,10028,10,"-46 STR ",10,"30 PP",'1500','','','5s','60s','') 
Lines[10012]=new linePT('Root','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break.',10,0) 
Spells[83]=new spellPT("Lesser Crippling",6,10012,10,"99% 13 sec ",10,"3 PP",'1500','2.5s','','','13s','Body') 
Spells[84]=new spellPT("Cripple",13,10012,10,"99% 23 sec ",10,"6 PP",'1500','2.5s','','','23s','Body') 
Spells[85]=new spellPT("Major Crippling",19,10012,10,"99% 31 sec ",10,"9 PP",'1500','2.5s','','','31s','Body') 
Spells[86]=new spellPT("Greater Crippling",26,10012,10,"99% 41 sec ",10,"12 PP",'1500','2.5s','','','41s','Body') 
Spells[87]=new spellPT("Leg Twist",31,10012,10,"99% 48 sec ",10,"15 PP",'1500','2.5s','','','48s','Body') 
Spells[88]=new spellPT("Greater Leg Twist",40,10012,10,"99% 61 sec ",10,"20 PP",'1500','2.5s','','','61s','Body') 
Spells[89]=new spellPT("Superior Leg Twisting",49,10012,10,"99% 73 sec ",10,"25 PP",'1500','2.5s','','','73s','Body') 
Lines[11027]=new linePT('Lifedrain','Target is damaged, and a portion of the damage is used to heal the caster.',11,0) 
Spells[90]=new spellPT("Remove Lifeforce",1,11027,11,"4  D 70% ",11,"2 PP",'1500','2.5s','','','','Body') 
Spells[91]=new spellPT("Snatch Lifeforce",5,11027,11,"21  D 70% ",11,"4 PP",'1500','2.5s','','','','Body') 
Spells[92]=new spellPT("Pilfer Lifeforce",7,11027,11,"30  D 70% ",11,"5 PP",'1500','2.5s','','','','Body') 
Spells[93]=new spellPT("Drain Lifeforce",10,11027,11,"39  D 70% ",11,"6 PP",'1500','2.5s','','','','Body') 
Spells[94]=new spellPT("Siphon Lifeforce",14,11027,11,"55  D 70% ",11,"9 PP",'1500','2.5s','','','','Body') 
Spells[95]=new spellPT("Absorb Lifeforce",18,11027,11,"72  D 80% ",11,"11 PP",'1500','2.5s','','','','Body') 
Spells[96]=new spellPT("Steal Lifeforce",23,11027,11,"90  D 80% ",11,"14 PP",'1500','2.5s','','','','Body') 
Spells[97]=new spellPT("Seize Lifeforce",28,11027,11,"111  D 80% ",11,"17 PP",'1500','2.5s','','','','Body') 
Spells[98]=new spellPT("Capture Lifeforce",35,11027,11,"136  D 90% ",11,"22 PP",'1500','2.5s','','','','Body') 
Spells[99]=new spellPT("Abduct Lifeforce",45,11027,11,"174  D 90% ",11,"29 PP",'1500','2.5s','','','','Body') 
Lines[11001]=new linePT('Debuff (Combat Speed)','Reduces the target\'s combat speed, which will cause it to be considerably less effective in melee combat.',11,0) 
Spells[100]=new spellPT("Inflict Malaise",2,11001,11,"-5% 33 sec ",11,"1 PP",'1500','','','5s','33s','Body') 
Spells[101]=new spellPT("Inflict Greater Malaise",8,11001,11,"-7% 44 sec ",11,"4 PP",'1500','','','5s','44s','Body') 
Spells[102]=new spellPT("Inflict Suffering",13,11001,11,"-8% 52 sec ",11,"6 PP",'1500','','','5s','52s','Body') 
Spells[103]=new spellPT("Inflict Greater Suffering",19,11001,11,"-10% 63 sec ",11,"9 PP",'1500','','','5s','63s','Body') 
Spells[104]=new spellPT("Inflict Misery",25,11001,11,"-12% 73 sec ",11,"12 PP",'1500','','','5s','73s','Body') 
Spells[105]=new spellPT("Inflict Greater Misery",32,11001,11,"-14% 86 sec ",11,"16 PP",'1500','','','5s','86s','Body') 
Spells[106]=new spellPT("Inflict Excruciation",39,11001,11,"-16% 98 sec ",11,"20 PP",'1500','','','5s','98s','Body') 
Spells[107]=new spellPT("Inflict Greater Excruciation",47,11001,11,"-19% 112 sec ",11,"24 PP",'1500','','','5s','112s','Body') 
Lines[11030]=new linePT('Disease','Target suffers a disease which lowers its Strength and movement speed slightly, and also halves the effect of any healing spell cast on it for the spell\'s duration.',11,0) 
Spells[108]=new spellPT("Cursed Vigor",3,11030,11,"",11,"3 PP",'1500','3.0s','','','60s','') 
Lines[11029]=new linePT('Life Transfer','Damages the caster. A portion of the damage acts as a healing spell on the target.',11,0) 
Spells[109]=new spellPT("Shift Health",4,11029,11,"2 ",11,"8 PP",'2000','3.0s','','','','') 
Spells[110]=new spellPT("Shift Vigor",6,11029,11,"3 ",11,"12 PP",'2000','3.0s','','','','') 
Spells[111]=new spellPT("Shift Essence",9,11029,11,"4 ",11,"16 PP",'2000','3.0s','','','','') 
Spells[112]=new spellPT("Shift Vitality",12,11029,11,"5 ",11,"21 PP",'2000','3.0s','','','','') 
Spells[113]=new spellPT("Shift Spirit",16,11029,11,"7 ",11,"27 PP",'2000','3.0s','','','','') 
Spells[114]=new spellPT("Transplace Health",21,11029,11,"9 ",11,"34 PP",'2000','3.0s','','','','') 
Spells[115]=new spellPT("Transplace Vigor",27,11029,11,"11 ",11,"41 PP",'2000','3.0s','','','','') 
Spells[116]=new spellPT("Transplace Essence",31,11029,11,"13 ",11,"46 PP",'2000','3.0s','','','','') 
Spells[117]=new spellPT("Transplace Vitality",36,11029,11,"15 ",11,"51 PP",'2000','3.0s','','','','') 
Spells[118]=new spellPT("Transplace Spirit",46,11029,11,"19 ",11,"61 PP",'2000','3.0s','','','','') 
Lines[11031]=new linePT('Disease (AOE)','Target suffers a disease which lowers its Strength and movement speed slightly, and also halves the effect of any healing spell cast on it for the spell\'s duration. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',11,0) 
Spells[119]=new spellPT("Cursed Spirit",15,11031,11,"90 sec ",11,"9 PP",'1500','3.0s','250','','90s','') 
Spells[120]=new spellPT("Cursed Soul",24,11031,11,"120 sec ",11,"15 PP",'1500','3.0s','300','','120s','') 
Spells[121]=new spellPT("Cursed Vitality",34,11031,11,"150 sec ",11,"21 PP",'1500','3.0s','350','','150s','') 
Spells[122]=new spellPT("Cursed Essence",44,11031,11,"180 sec ",11,"28 PP",'1500','3.0s','400','','180s','') 
Lines[15036]=new linePT('Summon (Self)','Summons a \"pet\", or servant that the caster commands to fight and die for it.',15,0) 
Spells[123]=new spellPT("Amber Simulacrum",1,15036,15,"Stuns ",15,"25% ",'','6.0s','','','Special','') 
Spells[124]=new spellPT("Ruby Simulacrum",7,15036,15,"Dmg Add + Fire DD ",15,"25% ",'','6.0s','','','Special','') 
Spells[125]=new spellPT("Sapphire Simulacrum",12,15036,15,"Lifetap ",15,"25% ",'','6.0s','','','Special','') 
Spells[126]=new spellPT("Emerald Simulacrum",20,15036,15,"Poison + Disease ",15,"25% ",'','6.0s','','','Special','') 
Spells[127]=new spellPT("Jade Simulacrum",32,15036,15,"Dmg Shield ",15,"25% ",'','6.0s','','','Special','') 
Lines[15037]=new linePT('Buff (Pet, Strength)','Increases your pet\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',15,0) 
Spells[128]=new spellPT("Strengthen Spirit",3,15037,15,"+12 STR ",15,"2 PP",'1000','3.0s','','','20m','') 
Spells[129]=new spellPT("Enhance Spirit",6,15037,15,"+14 STR ",15,"3 PP",'1000','3.0s','','','20m','') 
Spells[130]=new spellPT("Imbue Spirit",11,15037,15,"+18 STR ",15,"5 PP",'1000','3.0s','','','20m','') 
Spells[131]=new spellPT("Amplify Spirit",18,15037,15,"+24 STR ",15,"8 PP",'1000','3.0s','','','20m','') 
Spells[132]=new spellPT("Intensify Spirit",24,15037,15,"+29 STR ",15,"12 PP",'1000','3.0s','','','20m','') 
Spells[133]=new spellPT("Magnify Spirit",31,15037,15,"+34 STR ",15,"15 PP",'1000','3.0s','','','20m','') 
Spells[134]=new spellPT("Empower Spirit",41,15037,15,"+42 STR ",15,"20 PP",'1000','3.0s','','','20m','') 
Lines[15039]=new linePT('Buff (Pet, Dexterity)','Increases your pet\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',15,0) 
Spells[135]=new spellPT("Improve Dexterity",4,15039,15,"+13 DEX ",15,"2 PP",'1000','3.0s','','','20m','') 
Spells[136]=new spellPT("Develop Dexterity",8,15039,15,"+16 DEX ",15,"4 PP",'1000','3.0s','','','20m','') 
Spells[137]=new spellPT("Increase Dexterity",14,15039,15,"+21 DEX ",15,"7 PP",'1000','3.0s','','','20m','') 
Spells[138]=new spellPT("Enhance Dexterity",21,15039,15,"+26 DEX ",15,"10 PP",'1000','3.0s','','','20m','') 
Spells[139]=new spellPT("Amplify Dexterity",33,15039,15,"+36 DEX ",15,"16 PP",'1000','3.0s','','','20m','') 
Spells[140]=new spellPT("Augment Dexterity",38,15039,15,"+40 DEX ",15,"19 PP",'1000','3.0s','','','20m','') 
Spells[141]=new spellPT("Magnify Dexterity",48,15039,15,"+48 DEX ",15,"24 PP",'1000','3.0s','','','20m','') 
Lines[15038]=new linePT('Heal (Pet)','Casts a healing spell which only affects the caster\'s pet.',15,0) 
Spells[142]=new spellPT("Mend Simulacrum",5,15038,15,"31 HP ",15,"4 PP",'2000','3.0s','','','','') 
Spells[143]=new spellPT("Patch Simulacrum",9,15038,15,"51 HP ",15,"6 PP",'2000','3.0s','','','','') 
Spells[144]=new spellPT("Repair Simulacrum",13,15038,15,"71 HP ",15,"8 PP",'2000','3.0s','','','','') 
Spells[145]=new spellPT("Restore Simulacrum",19,15038,15,"101 HP ",15,"12 PP",'2000','3.0s','','','','') 
Spells[146]=new spellPT("Reconstruct Simulacrum",28,15038,15,"146 HP ",15,"17 PP",'2000','3.0s','','','','') 
Spells[147]=new spellPT("Reanimate Simulacrum",35,15038,15,"181 HP ",15,"22 PP",'2000','3.0s','','','','') 
Spells[148]=new spellPT("Rebuild Simulacrum",44,15038,15,"226 HP ",15,"28 PP",'2000','3.0s','','','','') 
Lines[16004]=new linePT('Damage Add (Pet)','Target does more damage with every melee weapon hit.',16,0) 
Spells[149]=new spellPT("Detect Flaw",1,16004,16,"1.2 DPS ",16,"1 PP",'1000','3.0s','','','20m','') 
Spells[150]=new spellPT("Find Flaw",4,16004,16,"1.9 DPS ",16,"2 PP",'1000','3.0s','','','20m','') 
Spells[151]=new spellPT("Discover Flaw",7,16004,16,"2.6 DPS ",16,"4 PP",'1000','3.0s','','','20m','') 
Spells[152]=new spellPT("Expose Flaw",10,16004,16,"3.3 DPS ",16,"4 PP",'1000','3.0s','','','20m','') 
Spells[153]=new spellPT("Pinpoint Flaw",15,16004,16,"4.5 DPS ",16,"7 PP",'1000','3.0s','','','20m','') 
Spells[154]=new spellPT("Illuminate Flaw",20,16004,16,"5.7 DPS ",16,"9 PP",'1000','3.0s','','','20m','') 
Spells[155]=new spellPT("Unveil Flaw",26,16004,16,"7.2 DPS ",16,"12 PP",'1000','3.0s','','','20m','') 
Spells[156]=new spellPT("Pierce Flaw",34,16004,16,"9.1 DPS ",16,"16 PP",'1000','3.0s','','','20m','') 
Spells[157]=new spellPT("Exploit Flaw",44,16004,16,"11.5 DPS ",16,"22 PP",'1000','3.0s','','','20m','') 
Lines[16040]=new linePT('Buff (Pet, Combat Speed)','Increases your pet\'s combat speed, which will cause it to be considerably more effective in melee combat.',16,0) 
Spells[158]=new spellPT("Encourage Aggression",2,16040,16,"5% Hasted ",16,"2 PP",'1000','3.5s','','','20m','') 
Spells[159]=new spellPT("Enhance Aggression",8,16040,16,"7% Hasted ",16,"5 PP",'1000','3.5s','','','20m','') 
Spells[160]=new spellPT("Amplify Aggression",14,16040,16,"8% Hasted ",16,"9 PP",'1000','3.5s','','','20m','') 
Spells[161]=new spellPT("Increase Aggression",21,16040,16,"10% Hasted ",16,"13 PP",'1000','3.5s','','','20m','') 
Spells[162]=new spellPT("Excite Aggression",27,16040,16,"11% Hasted ",16,"17 PP",'1000','3.5s','','','20m','') 
Spells[163]=new spellPT("Magnify Aggression",32,16040,16,"13% Hasted ",16,"20 PP",'1000','3.5s','','','20m','') 
Spells[164]=new spellPT("Overcharge Aggression",40,16040,16,"15% Hasted ",16,"25 PP",'1000','3.5s','','','20m','') 
Lines[16041]=new linePT('Reclaim Pet','The caster\'s pet is destroyed, returning a portion of the pet\'s casting cost back to the caster\'s power pool.',16,0) 
Spells[165]=new spellPT("Convert Spirit",3,16041,16,"",16,"5% ",'1000','3.0s','','','','') 
Lines[16047]=new linePT('Buff (Pet, Strength/Constitution)','Increases your pet\'s Strength and Constitution, which will cause it to  be able to carry more weight,  as well as to both do more damage in melee combat and to be able to take more damage before dying.',16,0) 
Spells[166]=new spellPT("Strengthen Golem",11,16047,16,"+27 STR/CON ",16,"9 PP",'1000','3.0s','','','20m','') 
Spells[167]=new spellPT("Invigorate Golem",18,16047,16,"+36 STR/CON ",16,"15 PP",'1000','3.0s','','','20m','') 
Spells[168]=new spellPT("Foritify Golem",29,16047,16,"+49 STR/CON ",16,"24 PP",'1000','3.0s','','','20m','') 
Spells[169]=new spellPT("Empower Golem",39,16047,16,"+61 STR/CON ",16,"33 PP",'1000','3.0s','','','20m','') 
Spells[170]=new spellPT("Vivify Golem",50,16047,16,"+75 STR/CON ",16,"43 PP",'1000','3.0s','','','20m','') 
Lines[16048]=new linePT('Buff (Pet, Dexterity/Quickness)','Increases your pet\'s Dexterity and Quickness, which will cause it to do more damage and be more effective in melee combat as well as cast spells faster.',16,0) 
Spells[171]=new spellPT("Hurry Golem",12,16048,16,"+28 DEX/QUI ",16,"10 PP",'1000','3.0s','','','20m','') 
Spells[172]=new spellPT("Animate Golem",19,16048,16,"+37 DEX/QUI ",16,"15 PP",'1000','3.0s','','','20m','') 
Spells[173]=new spellPT("Quicken Golem",31,16048,16,"+51 DEX/QUI ",16,"25 PP",'1000','3.0s','','','20m','') 
Spells[174]=new spellPT("Accelerate Golem",41,16048,16,"+63 DEX/QUI ",16,"35 PP",'1000','3.0s','','','20m','') 
Lines[16044]=new linePT('Debuff (Body Resistance)','Target\'s resistance to Body damage is lowered.',16,0) 

Spells[175]=new spellPT("Diminish Immunities",22,16044,16,"-15 BODY ",16,"10 PP",'1500','2.0s','','','8s','') 
Spells[176]=new spellPT("Disspate Immunities",33,16044,16,"-30 BODY ",16,"16 PP",'1500','2.0s','','','8s','') 
Spells[177]=new spellPT("Banish Immunities",46,16044,16,"-50 BODY ",16,"24 PP",'1500','2.0s','','','8s','') 
Lines[16045]=new linePT('Debuff (Spirit Resistance)','Target\'s resistance to Spirit damage is lowered.',16,0) 
Spells[178]=new spellPT("Diminish Will",24,16045,16,"-15 SPIRIT ",16,"12 PP",'1500','2.0s','','','15s','') 
Spells[179]=new spellPT("Dissipate Will",36,16045,16,"-30 SPIRIT ",16,"18 PP",'1500','2.0s','','','15s','') 
Spells[180]=new spellPT("Banish Will",47,16045,16,"-50 SPIRIT ",16,"24 PP",'1500','2.0s','','','15s','') 
Lines[16046]=new linePT('Debuff (Energy Resistance)','Target\'s resistance to Energy damage is lowered.',16,0) 
Spells[181]=new spellPT("Diminish Conductivity",28,16046,16,"-15 ENERGY ",16,"13 PP",'1500','2.0s','','','15s','') 
Spells[182]=new spellPT("Dissipate Conductivity",37,16046,16,"-30 ENERGY ",16,"18 PP",'1500','2.0s','','','15s','') 
Spells[183]=new spellPT("Banish Conductivity",49,16046,16,"-50 ENERGY ",16,"25 PP",'1500','2.0s','','','15s','') 
Lines[16042]=new linePT('Snare','Target moves slower for the spell\'s duration.',16,0) 
Spells[184]=new spellPT("Constrict Spirit",23,16042,16,"40% ",16,"14 PP",'1500','2.5s','','','70s','Spirit') 
Lines[16043]=new linePT('Snare (AOE)','Target moves slower for the spell\'s duration.  This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',16,0) 
Spells[185]=new spellPT("Encase Spirit",30,16043,16,"40% 82 sec ",16,"19 PP",'1500','2.5s','350','','82s','Spirit') 
Spells[186]=new spellPT("Imprison Spirit",38,16043,16,"40% 96 sec ",16,"24 PP",'1500','2.5s','350','','96s','Spirit') 
Spells[187]=new spellPT("Shackle Spirit",48,16043,16,"40% 114 sec ",16,"31 PP",'1500','2.5s','350','','114s','Spirit') 
Lines[16093]=new linePT('Buff (Pet, Movement Speed)','The movement speed of your pet is greatly increased.',16,0) 
Spells[188]=new spellPT("Tracker Enhancement",25,16093,16,"+120% SPEED ",16,"15 PP",'1500','3.0s','','','20m','') 
Spells[189]=new spellPT("Chaser Enhancement",35,16093,16,"+140% SPEED ",16,"22 PP",'1500','3.0s','','','20m','') 
Spells[190]=new spellPT("Pursuer Enhancement",45,16093,16,"+160% SPEED ",16,"29 PP",'1500','3.0s','','','20m','') 
