sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[6]=60;sCON[6]=60;sDEX[6]=60;sQUI[6]=60;sINT[6]=60;sPIE[6]=60;sEMP[6]=60;sCHA[6]=60; 
sSTR[13]=50;sCON[13]=60;sDEX[13]=70;sQUI[13]=50;sINT[13]=70;sPIE[13]=60;sEMP[13]=60;sCHA[13]=60; 
sSTR[8]=50;sCON[8]=50;sDEX[8]=80;sQUI[8]=60;sINT[8]=60;sPIE[8]=60;sEMP[8]=60;sCHA[8]=60; 

Abilities = new Array(8)		
Abilities[1]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[2]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[3]=new abilityPT("Deathsight",0,175,2,1,0,0)
Abilities[4]=new abilityPT("Painworking",0,176,2,1,0,0)
Abilities[5]=new abilityPT("Death Servant",5,177,2,1,0,0)
Abilities[6]=new abilityPT("Deathsight Spec",5,178,3,0,175,0)
Abilities[7]=new abilityPT("Painworking Spec",5,179,3,0,176,0)
Abilities[8]=new abilityPT("Death Servant Spec",5,180,3,0,177,0)
	
//Styles = new Array(0);

Spells = new Array(168)

Lines = new Array(23);

Lines[175027]=new linePT('Lifedrain','Target is damaged, and a portion of the damage is used to heal the caster.',175,0) 
Spells[1]=new spellPT("Health Evacuation",1,175027,175,"5  D 30% ",175,"2 PP",'1500','3.0s','','','','Spirit') 
Spells[2]=new spellPT("Life Evacuation",4,175027,175,"17  D 30% ",175,"3 PP",'1500','3.0s','','','','Spirit') 
Spells[3]=new spellPT("Spirit Evacuation",8,175027,175,"33  D 30% ",175,"5 PP",'1500','3.0s','','','','Spirit') 
Spells[4]=new spellPT("Soul Evacuation",13,175027,175,"49  D 30% ",175,"8 PP",'1500','3.0s','','','','Spirit') 
Spells[5]=new spellPT("Vitality Theft",19,175027,175,"73  D 40% ",175,"12 PP",'1500','3.0s','','','','Spirit') 
Spells[6]=new spellPT("Theft of Vigor",25,175027,175,"92  D 40% ",175,"15 PP",'1500','3.0s','','','','Spirit') 
Spells[7]=new spellPT("Theft of Vim",32,175027,175,"116  D 50% ",175,"20 PP",'1500','3.0s','','','','Spirit') 
Spells[8]=new spellPT("Theft of Energy",40,175027,175,"143  D 50% ",175,"25 PP",'1500','3.0s','','','','Spirit') 
Spells[9]=new spellPT("Theft of Liveliness",50,175027,175,"179  D 60% ",175,"33 PP",'1500','3.0s','','','','Spirit') 
Lines[175103]=new linePT('Debuff (Armor)','Target\'s armor (AF) is lowered, causing it to take more damage in melee combat.',175,0) 
Spells[10]=new spellPT("Glimpse of Fate",2,175103,175,"-12 PEN ",175,"2 PP",'1500','3.0s','','','30s','Spirit') 
Spells[11]=new spellPT("Glimpse of the Inevitable",5,175103,175,"-15 PEN ",175,"4 PP",'1500','3.0s','','','30s','Spirit') 
Spells[12]=new spellPT("Glimpse of the Grave",9,175103,175,"-19 PEN ",175,"6 PP",'1500','3.0s','','','30s','Spirit') 
Spells[13]=new spellPT("Glimpse of Death",14,175103,175,"-24 PEN ",175,"9 PP",'1500','3.0s','','','30s','Spirit') 
Spells[14]=new spellPT("Visions of Fate",21,175103,175,"-31 PEN ",175,"13 PP",'1500','3.0s','','','30s','Spirit') 
Spells[15]=new spellPT("Visions of the Inevitable",29,175103,175,"-39 PEN ",175,"18 PP",'1500','3.0s','','','30s','Spirit') 
Spells[16]=new spellPT("Visions of the Grave",39,175103,175,"-49 PEN ",175,"25 PP",'1500','3.0s','','','30s','Spirit') 
Spells[17]=new spellPT("Visions of Death",49,175103,175,"-59 PEN ",175,"32 PP",'1500','3.0s','','','30s','Spirit') 
Lines[175039]=new linePT('Buff (Pet, Dexterity)','Increases the target\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',175,0) 
Spells[18]=new spellPT("Servant of Death",3,175039,175,"+13 DEX ",175,"2 PP",'1000','3.0s','','','20m','') 
Spells[19]=new spellPT("Agent of Death",7,175039,175,"+16 DEX ",175,"4 PP",'1000','3.0s','','','20m','') 
Spells[20]=new spellPT("Bringer of Death",12,175039,175,"+21 DEX ",175,"7 PP",'1000','3.0s','','','20m','') 
Spells[21]=new spellPT("Servant of the Grave",18,175039,175,"+26 DEX ",175,"10 PP",'1000','3.0s','','','20m','') 
Spells[22]=new spellPT("Agent of the Grave",26,175039,175,"+36 DEX ",175,"16 PP",'1000','3.0s','','','20m','') 
Spells[23]=new spellPT("Bringer of the Grave",35,175039,175,"+40 DEX ",175,"19 PP",'1000','3.0s','','','20m','') 
Spells[24]=new spellPT("Death's Calling",45,175039,175,"+48 DEX ",175,"24 PP",'1000','3.0s','','','20m','') 
Lines[178105]=new linePT('Powerdrain','Damages the target. A portion of damage is returned as power to the necroshade. This is limited by the target\'s level.',178,0) 
Spells[25]=new spellPT("Vigor Vacuum",1,178105,178,"5   D 50% ",178,"2 PP",'1500','3.0s','','','','') 
Spells[26]=new spellPT("Power Vacuum",3,178105,178,"13   D 50% ",178,"3 PP",'1500','3.0s','','','','') 
Spells[27]=new spellPT("Efficacy Vacuum",7,178105,178,"29   D 50% ",178,"5 PP",'1500','3.0s','','','','') 
Spells[28]=new spellPT("Puissance Vacuum",12,178105,178,"45   D 50% ",178,"8 PP",'1500','3.0s','','','','') 
Spells[29]=new spellPT("Energy Vacuum",18,178105,178,"68   D 50% ",178,"11 PP",'1500','3.0s','','','','') 
Spells[30]=new spellPT("Lifeforce Vacuum",25,178105,178,"92   D 50% ",178,"15 PP",'1500','3.0s','','','','') 
Spells[31]=new spellPT("Spirit Vacuum",34,178105,178,"124   D 50% ",178,"21 PP",'1500','3.0s','','','','') 
Spells[32]=new spellPT("Soul Vacuum",44,178105,178,"159   D 50% ",178,"28 PP",'1500','3.0s','','','','') 
Lines[178104]=new linePT('Lifedrain (Instant)','Target is damaged, and a portion of the damage is used to heal the caster. Spell can be cast during combat.',178,0) 
Spells[33]=new spellPT("Cry of the Dead",2,178104,178,"5  D 50% ",178,"1 PP",'500','','','','','Spirit') 
Spells[34]=new spellPT("Bellow of the Dead",6,178104,178,"14  D 50% ",178,"3 PP",'500','','','','','Spirit') 
Spells[35]=new spellPT("Anguish of the Dead",10,178104,178,"21  D 50% ",178,"5 PP",'500','','','','','Spirit') 
Spells[36]=new spellPT("Agony of the Dead",16,178104,178,"35  D 50% ",178,"7 PP",'500','','','','','Spirit') 
Spells[37]=new spellPT("Pain of the Dead",23,178104,178,"48  D 50% ",178,"10 PP",'500','','','','','Spirit') 
Spells[38]=new spellPT("Sorrow of the Dead",31,178104,178,"64  D 50% ",178,"12 PP",'500','','','','','Spirit') 
Spells[39]=new spellPT("Shriek of the Dead",39,178104,178,"82  D 50% ",178,"15 PP",'500','','','','','Spirit') 
Spells[40]=new spellPT("Scream of the Dead",47,178104,178,"98  D 50% ",178,"17 PP",'500','','','','','Spirit') 
Lines[178106]=new linePT('Power Transfer','Power is transferred from the necroshade to the target.',178,0) 
Spells[41]=new spellPT("Gift of Insight",4,178106,178,"16 ",178,"3 PP",'1500','3.0s','','','','') 
Spells[42]=new spellPT("Gift of Vim",8,178106,178,"25 ",178,"5 PP",'1500','3.0s','','','','') 
Spells[43]=new spellPT("Gift of Vision",11,178106,178,"31 ",178,"7 PP",'1500','3.0s','','','','') 
Spells[44]=new spellPT("Gift of Energy",15,178106,178,"39 ",178,"9 PP",'1500','3.0s','','','','') 
Spells[45]=new spellPT("Gift of Power",21,178106,178,"52 ",178,"13 PP",'1500','3.0s','','','','') 
Spells[46]=new spellPT("Gift of Essence",28,178106,178,"67 ",178,"17 PP",'1500','3.0s','','','','') 
Spells[47]=new spellPT("Gift of Force",35,178106,178,"81 ",178,"22 PP",'1500','3.0s','','','','') 
Spells[48]=new spellPT("Arawn's Gift",45,178106,178,"102 ",178,"29 PP",'1500','3.0s','','','','') 
Lines[178103]=new linePT('Debuff (Armor)','Target\'s armor (AF) is lowered, causing it to take more damage in melee combat.',178,0) 
Spells[49]=new spellPT("Figments of Death",5,178103,178,"-32 PEN ",178,"4 PP",'1500','3.0s','','','30s','Spirit') 
Spells[50]=new spellPT("Delusions of Death",9,178103,178,"-51 PEN ",178,"6 PP",'1500','3.0s','','','30s','Spirit') 
Spells[51]=new spellPT("Mirages of Death",14,178103,178,"-75 PEN ",178,"9 PP",'1500','3.0s','','','30s','Spirit') 
Spells[52]=new spellPT("Phantoms of Death",22,178103,178,"-114 PEN ",178,"13 PP",'1500','3.0s','','','30s','Spirit') 
Spells[53]=new spellPT("Apparitions of Death",30,178103,178,"-153 PEN ",178,"19 PP",'1500','3.0s','','','30s','Spirit') 
Spells[54]=new spellPT("Phantasms of Death",40,178103,178,"-201 PEN ",178,"25 PP",'1500','3.0s','','','30s','Spirit') 
Spells[55]=new spellPT("Specters of Death",50,178103,178,"-250 PEN ",178,"33 PP",'1500','3.0s','','','30s','Spirit') 
Lines[178005]=new linePT('Absorb','Adds to the target\'s absorption (ABS) factor, resulting in better protection against melee attacks.',178,0) 
Spells[56]=new spellPT("Longing For Death",29,178005,178,"3% ",178,"18 PP",'1500','3.0s','','','20m','') 
Spells[57]=new spellPT("Communion with Death",38,178005,178,"6% ",178,"24 PP",'1500','3.0s','','','20m','') 
Spells[58]=new spellPT("Intimacy with Death",48,178005,178,"9% ",178,"31 PP",'1500','3.0s','','','20m','') 
Lines[176107]=new linePT('Debuff (Constitution)','Target\'s Constitution is lowered, which lowers their total available hit points.',176,0) 
Spells[59]=new spellPT("Accentuate Pain",1,176107,176,"-10 CON ",176,"1 PP",'1500','','','','30s','') 
Spells[60]=new spellPT("Heighten Pain",4,176107,176,"-13 CON ",176,"3 PP",'1500','','','','30s','') 
Spells[61]=new spellPT("Boost Pain",7,176107,176,"-15 CON ",176,"4 PP",'1500','','','','30s','') 
Spells[62]=new spellPT("Intensify Pain",11,176107,176,"-18 CON ",176,"6 PP",'1500','','','','30s','') 
Spells[63]=new spellPT("Enhance Pain",17,176107,176,"-23 CON ",176,"9 PP",'1500','','','','30s','') 
Spells[64]=new spellPT("Aggravate Pain",23,176107,176,"-28 CON ",176,"11 PP",'1500','','','','30s','') 
Spells[65]=new spellPT("Magnify Pain",29,176107,176,"-33 CON ",176,"14 PP",'1500','','','','30s','') 
Spells[66]=new spellPT("Sharpen Pain",36,176107,176,"-38 CON ",176,"17 PP",'1500','','','','30s','') 
Spells[67]=new spellPT("Exacerbate Pain",46,176107,176,"-46 CON ",176,"22 PP",'1500','','','','30s','') 
Lines[176042]=new linePT('Snare','Target moves slower for the spell\'s duration.',176,0) 
Spells[68]=new spellPT("Crippling Pain",2,176042,176,"50% 12 sec ",176,"2 PP",'1500','2.5s','','','12s','Spirit') 
Spells[69]=new spellPT("Exhausting Pain",5,176042,176,"50% 16 sec ",176,"4 PP",'1500','2.5s','','','16s','Spirit') 
Spells[70]=new spellPT("Disabling Pain",8,176042,176,"50% 20 sec ",176,"5 PP",'1500','2.5s','','','20s','Spirit') 
Spells[71]=new spellPT("Constricting Pain",12,176042,176,"50% 25 sec ",176,"8 PP",'1500','2.5s','','','25s','Spirit') 
Spells[72]=new spellPT("Deadening Pain",16,176042,176,"50% 30 sec ",176,"10 PP",'1500','2.5s','','','30s','Spirit') 
Spells[73]=new spellPT("Enfeebling Pain",22,176042,176,"50% 38 sec ",176,"13 PP",'1500','2.5s','','','38s','Spirit') 
Spells[74]=new spellPT("Debilitating Pain",30,176042,176,"50% 49 sec ",176,"19 PP",'1500','2.5s','','','49s','Spirit') 
Spells[75]=new spellPT("Weakening Pain",39,176042,176,"50% 60 sec ",176,"25 PP",'1500','2.5s','','','60s','Spirit') 
Spells[76]=new spellPT("Dispiriting Pain",49,176042,176,"50% 73 sec ",176,"32 PP",'1500','2.5s','','','73s','Spirit') 
Lines[176108]=new linePT('Concentration (Pet, Instant)','Caster can cast the next spell without being interrupted, even in combat.',176,0) 
Spells[77]=new spellPT("Facilitate Painworking",3,176108,176,"",176,"",'','','','30s','6s','') 
Lines[179109]=new linePT('Damage over Time (Pet AOE)','Inflicts damage to the target repeatedly over a given time period. This is an Pet \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius around the necroshade\'s pet.',179,0) 
Spells[78]=new spellPT("Billowing Death",1,179109,179,"2  D x 4 ",179,"2 PP",'','3.0s','350','','20s','Spirit') 
Spells[79]=new spellPT("Expanding Death",4,179109,179,"7  D x 4 ",179,"3 PP",'','3.0s','350','','20s','Spirit') 
Spells[80]=new spellPT("Flowing Death",8,179109,179,"15  D x 4 ",179,"5 PP",'','3.0s','350','','20s','Spirit') 
Spells[81]=new spellPT("Exploding Death",12,179109,179,"21  D x 4 ",179,"8 PP",'','3.0s','350','','20s','Spirit') 
Spells[82]=new spellPT("Unending Death",16,179109,179,"29  D x 4 ",179,"10 PP",'','3.0s','350','','20s','Spirit') 
Spells[83]=new spellPT("Bloating Death",21,179109,179,"37  D x 4 ",179,"13 PP",'','3.0s','350','','20s','Spirit') 
Spells[84]=new spellPT("Swelling Death",27,179109,179,"49  D x 4 ",179,"17 PP",'','3.0s','350','','20s','Spirit') 
Spells[85]=new spellPT("Heightening Death",35,179109,179,"63  D x 4 ",179,"22 PP",'','3.0s','350','','20s','Spirit') 
Spells[86]=new spellPT("Infinite Death",44,179109,179,"79  D x 4 ",179,"28 PP",'','3.0s','350','','20s','Spirit') 
Lines[179110]=new linePT('Damage over Time (Instant)','Inflicts damage to the target repeatedly over a given time period. This spell can be cast during combat.',179,0) 
Spells[87]=new spellPT("Poison Gasp",3,179110,179,"4  D x 4 ",179,"2 PP",'500','','','','20s','Spirit') 
Spells[88]=new spellPT("Poison Wheeze",7,179110,179,"9  D x 4 ",179,"3 PP",'500','','','','20s','Spirit') 
Spells[89]=new spellPT("Poison Breath",13,179110,179,"17  D x 4 ",179,"6 PP",'500','','','','20s','Spirit') 
Spells[90]=new spellPT("Poison Aroma",19,179110,179,"26  D x 4 ",179,"8 PP",'500','','','','20s','Spirit') 
Spells[91]=new spellPT("Poison Gust",26,179110,179,"35  D x 4 ",179,"11 PP",'500','','','','20s','Spirit') 
Spells[92]=new spellPT("Poison Vapor",34,179110,179,"45  D x 4 ",179,"13 PP",'500','','','','20s','Spirit') 
Spells[93]=new spellPT("Poison Exhalation",41,179110,179,"54  D x 4 ",179,"15 PP",'500','','','','20s','Spirit') 
Spells[94]=new spellPT("Poison Wind",50,179110,179,"66  D x 4 ",179,"18 PP",'500','','','','20s','Spirit') 
Lines[179056]=new linePT('Debuff (Strength/Constitution, AOE)','Decreases the target\'s Strength and Constitution, which will cause it to both do less damage in melee combat and reduce its total hitpoints. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',179,0) 
Spells[95]=new spellPT("Shroud of Affliction",2,179056,179,"-16 STR/CON ",179,"3 PP",'1500','','350','','30s','') 
Spells[96]=new spellPT("Shroud of Pain",6,179056,179,"-21 STR/CON ",179,"5 PP",'1500','','350','','30s','') 
Spells[97]=new spellPT("Shroud of Agony",11,179056,179,"-27 STR/CON ",179,"9 PP",'1500','','350','','30s','') 
Spells[98]=new spellPT("Shroud of Injury",18,179056,179,"-36 STR/CON ",179,"15 PP",'1500','','350','','30s','') 
Spells[99]=new spellPT("Shroud of Misery",25,179056,179,"-45 STR/CON ",179,"20 PP",'1500','','350','','30s','') 
Spells[100]=new spellPT("Shroud of Woe",33,179056,179,"-54 STR/CON ",179,"27 PP",'1500','','350','','30s','') 
Spells[101]=new spellPT("Shroud of Torture",43,179056,179,"-66 STR/CON ",179,"36 PP",'1500','','350','','30s','') 
Lines[179043]=new linePT('Snare (AOE)','Target moves slower for the spell\'s duration.  This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',179,0) 
Spells[102]=new spellPT("Vortex of Anguish",5,179043,179,"50% 8 sec ",179,"4 PP",'1500','3.0s','350','','8s','Spirit') 
Spells[103]=new spellPT("Vortex of Misery",10,179043,179,"50% 9 sec ",179,"6 PP",'1500','3.0s','350','','9s','Spirit') 
Spells[104]=new spellPT("Vortex of Wretchedness",15,179043,179,"50% 10 sec ",179,"9 PP",'1500','3.0s','350','','10s','Spirit') 
Spells[105]=new spellPT("Vortex of Suffering",22,179043,179,"50% 11 sec ",179,"13 PP",'1500','3.0s','350','','11s','Spirit') 
Spells[106]=new spellPT("Vortex of Grief",30,179043,179,"50% 12 sec ",179,"19 PP",'1500','3.0s','350','','12s','Spirit') 
Spells[107]=new spellPT("Vortex of Rue",39,179043,179,"50% 13 sec ",179,"25 PP",'1500','3.0s','350','','13s','Spirit') 
Spells[108]=new spellPT("Vortex of Agony",49,179043,179,"50% 15 sec ",179,"32 PP",'1500','3.0s','350','','15s','Spirit') 
Lines[179047]=new linePT('Buff (Pet, Strength/Constitution)','Increases the target\'s Strength and Constitution, which will cause it to  be able to carry more weight,  as well as to both do more damage in melee combat and to be able to take more damage before dying.',179,0) 
Spells[109]=new spellPT("Proficiency of Pain",9,179047,179,"+17 STR/CON ",179,"8 PP",'','3.0s','','','20m','') 
Spells[110]=new spellPT("Adept of Pain",14,179047,179,"+21 STR/CON ",179,"11 PP",'','3.0s','','','20m','') 
Spells[111]=new spellPT("Endowment of Pain",17,179047,179,"+23 STR/CON ",179,"14 PP",'','3.0s','','','20m','') 
Spells[112]=new spellPT("Aptitude for Pain",24,179047,179,"+29 STR/CON ",179,"19 PP",'','3.0s','','','20m','') 
Spells[113]=new spellPT("Expert of Pain",32,179047,179,"+35 STR/CON ",179,"26 PP",'','3.0s','','','20m','') 
Spells[114]=new spellPT("Command of Pain",42,179047,179,"+43 STR/CON ",179,"35 PP",'','3.0s','','','20m','') 
Lines[177111]=new linePT('Summon Spirit (Self)','Caster transforms into a necroshade, and summons an undead minion to act through.',177,0) 
Spells[115]=new spellPT("Call Minor Zombie Servant",1,177111,177,"",177,"10% ",'','20.0s','','','Special','') 
Spells[116]=new spellPT("Call Lesser Zombie Servant",4,177111,177,"",177,"10% ",'','20.0s','','','Special','') 
Spells[117]=new spellPT("Call Zombie Servant",7,177111,177,"",177,"10% ",'','20.0s','','','Special','') 
Spells[118]=new spellPT("Call Reanimated Servant",12,177111,177,"",177,"10% ",'','20.0s','','','Special','') 
Spells[119]=new spellPT("Call Necroservant",20,177111,177,"",177,"10% ",'','20.0s','','','Special','') 
Spells[120]=new spellPT("Call Greater Necroservant",32,177111,177,"",177,"10% ",'','20.0s','','','Special','') 
Spells[121]=new spellPT("Call Abomination",45,177111,177,"",177,"10% ",'','20.0s','','','Special','') 
Lines[177101]=new linePT('Heal over Time (Pet)','Target is healed during the spell\'s duration.',177,0) 
Spells[122]=new spellPT("Regenerate Flesh",2,177101,177,"4 HP ",177,"2 PP",'','','','3.0s','15s','') 
Spells[123]=new spellPT("Regenerate Blood",5,177101,177,"9 HP ",177,"4 PP",'','','','3.0s','15s','') 
Spells[124]=new spellPT("Flesh of the Living",10,177101,177,"16 HP ",177,"6 PP",'','','','3.0s','15s','') 
Spells[125]=new spellPT("Regenerate Muscle",17,177101,177,"27 HP ",177,"10 PP",'','','','3.0s','15s','') 
Spells[126]=new spellPT("Incorporate the Living",25,177101,177,"39 HP ",177,"15 PP",'','','','3.0s','15s','') 
Spells[127]=new spellPT("Regenerate Body",33,177101,177,"51 HP ",177,"21 PP",'','','','3.0s','15s','') 
Spells[128]=new spellPT("Dead Flesh Living",40,177101,177,"61 HP ",177,"25 PP",'','','','3.0s','15s','') 
Spells[129]=new spellPT("Imbue the Abyss",50,177101,177,"76 HP ",177,"33 PP",'','','','3.0s','15s','') 
Lines[177037]=new linePT('Buff (Pet, Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',177,0) 
Spells[130]=new spellPT("Strength of the Dead",3,177037,177,"+12 STR ",177,"2 PP",'1000','3.0s','','','20m','') 
Spells[131]=new spellPT("Tenacity of the Dead",6,177037,177,"+14 STR ",177,"3 PP",'1000','3.0s','','','20m','') 
Spells[132]=new spellPT("Fortitude of the Dead",11,177037,177,"+18 STR ",177,"5 PP",'1000','3.0s','','','20m','') 
Spells[133]=new spellPT("Brawn of the Dead",16,177037,177,"+24 STR ",177,"8 PP",'1000','3.0s','','','20m','') 
Spells[134]=new spellPT("Vigor of the Dead",23,177037,177,"+29 STR ",177,"12 PP",'1000','3.0s','','','20m','') 
Spells[135]=new spellPT("Fervor of the Dead",31,177037,177,"+34 STR ",177,"15 PP",'1000','3.0s','','','20m','') 
Spells[136]=new spellPT("Might of the Dead",41,177037,177,"+42 STR ",177,"20 PP",'1000','3.0s','','','20m','') 
Lines[180069]=new linePT('Damage (Instant)','Target takes damage. Damage done is of the spell\'s given damage type.  Spell can be cast during combat.',180,0) 
Spells[137]=new spellPT("Tormenting Cackle",1,180069,180,"4  D ",180,"2 PP",'500','','','','','Spirit') 
Spells[138]=new spellPT("Torturous Cackle",3,180069,180,"10  D ",180,"3 PP",'500','','','','','Spirit') 
Spells[139]=new spellPT("Afflicting Cackle",8,180069,180,"24  D ",180,"5 PP",'500','','','','','Spirit') 
Spells[140]=new spellPT("Distressing Cackle",14,180069,180,"38  D ",180,"9 PP",'500','','','','','Spirit') 
Spells[141]=new spellPT("Soulbreaking Cackle",19,180069,180,"52  D ",180,"12 PP",'500','','','','','Spirit') 
Spells[142]=new spellPT("Sorrowful Cackle",25,180069,180,"66  D ",180,"15 PP",'500','','','','','Spirit') 
Spells[143]=new spellPT("Discomforting Cackle",31,180069,180,"80  D ",180,"19 PP",'500','','','','','Spirit') 
Spells[144]=new spellPT("Despondant Cackle",38,180069,180,"100  D ",180,"24 PP",'500','','','','','Spirit') 
Spells[145]=new spellPT("Dejecting Cackle",45,180069,180,"117  D ",180,"29 PP",'500','','','','','Spirit') 
Lines[180006]=new linePT('Damage Shield (Pet)','Anyone that hits the target with a melee attack is damaged by this protective shield.',180,0) 
Spells[146]=new spellPT("Cleaving Guardian",2,180006,180,"1 DPS ",180,"2 PP",'','','','','30s','') 
Spells[147]=new spellPT("Blades of Wrath",5,180006,180,"2 DPS ",180,"4 PP",'','','','','30s','') 
Spells[148]=new spellPT("Reaping Shield",7,180006,180,"3 DPS ",180,"5 PP",'','','','','30s','') 
Spells[149]=new spellPT("Edge of Hatred",12,180006,180,"5 DPS ",180,"8 PP",'','','','','30s','') 
Spells[150]=new spellPT("Eviscerating Protector",18,180006,180,"8 DPS ",180,"11 PP",'','','','','30s','') 
Spells[151]=new spellPT("Knives of Death",24,180006,180,"11 DPS ",180,"15 PP",'','','','','30s','') 
Spells[152]=new spellPT("Flaying Shield",32,180006,180,"15 DPS ",180,"20 PP",'','','','','30s','') 
Spells[153]=new spellPT("Soul Sundering Aura",44,180006,180,"21 DPS ",180,"28 PP",'','','','','30s','') 
Lines[180048]=new linePT('Buff (Pet, Dexterity/Quickness)','Increases the target\'s Dexterity and Quickness, which will cause it to do more damage and be more effective in melee combat as well as cast spells faster.',180,0) 
Spells[154]=new spellPT("Develop the Servant",4,180048,180,"+13 DEX/QUI ",180,"4 PP",'','','','','20m','') 
Spells[155]=new spellPT("Cultivate the Servant",9,180048,180,"+17 DEX/QUI ",180,"8 PP",'','','','','20m','') 
Spells[156]=new spellPT("Instructing the Servant",15,180048,180,"+22 DEX/QUI ",180,"12 PP",'','','','','20m','') 
Spells[157]=new spellPT("Refining the Servant",21,180048,180,"+26 DEX/QUI ",180,"17 PP",'','','','','20m','') 
Spells[158]=new spellPT("Honing the Servant",29,180048,180,"+33 DEX/QUI ",180,"24 PP",'','','','','20m','') 
Spells[159]=new spellPT("Disciplining the Servant",36,180048,180,"+38 DEX/QUI ",180,"30 PP",'','','','','20m','') 
Spells[160]=new spellPT("Breaking the Servant",48,180048,180,"+48 DEX/QUI ",180,"41 PP",'','','','','20m','') 
Lines[180112]=new linePT('Damage (Pet PBAOE)','Target takes damage. Damage done is of the spell\'s given damage type. Spell affects everyone in the immediate radius of the caster\'s pet, and does less damage the further away they are from the caster\'s pet.',180,0) 
Spells[161]=new spellPT("Channeled Anger",6,180112,180,"31  D ",180,"4 PP",'','3.0s','350','','','Spirit') 
Spells[162]=new spellPT("Channeled Rage",10,180112,180,"46  D ",180,"6 PP",'','3.0s','350','','','Spirit') 
Spells[163]=new spellPT("Channeled Hatred",13,180112,180,"62  D ",180,"8 PP",'','3.0s','350','','','Spirit') 
Spells[164]=new spellPT("Channeled Ferocity",17,180112,180,"81  D ",180,"10 PP",'','3.0s','350','','','Spirit') 
Spells[165]=new spellPT("Channeled Savagery",23,180112,180,"108  D ",180,"14 PP",'','3.0s','350','','','Spirit') 
Spells[166]=new spellPT("Channeled Fury",30,180112,180,"137  D ",180,"19 PP",'','3.0s','350','','','Spirit') 
Spells[167]=new spellPT("Channeled Wrath",37,180112,180,"173  D ",180,"23 PP",'','3.0s','350','','','Spirit') 
Spells[168]=new spellPT("Channeled Frenzy",47,180112,180,"219  D ",180,"30 PP",'','3.0s','350','','','Spirit') 
