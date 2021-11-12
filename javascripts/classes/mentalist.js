sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[1]=60;sCON[1]=60;sDEX[1]=60;sQUI[1]=60;sINT[1]=60;sPIE[1]=60;sEMP[1]=60;sCHA[1]=60; 
sSTR[2]=40;sCON[2]=40;sDEX[2]=75;sQUI[2]=75;sINT[2]=70;sPIE[2]=60;sEMP[2]=60;sCHA[2]=60; 
sSTR[4]=40;sCON[4]=40;sDEX[4]=80;sQUI[4]=80;sINT[4]=60;sPIE[4]=60;sEMP[4]=60;sCHA[4]=60; 
sSTR[16]=60;sCON[16]=80;sDEX[16]=50;sQUI[16]=50;sINT[16]=60;sPIE[16]=60;sEMP[16]=60;sCHA[16]=60; 

Abilities = new Array(9)		
Abilities[1]=new abilityPT("Way of the Sun",0,28,2,1,0,0)
Abilities[2]=new abilityPT("Way of the Moon",0,32,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Quickcast ",5,1,1,0,0,0)
Abilities[6]=new abilityPT("Illusions",5,31,3,0,28,0)
Abilities[7]=new abilityPT("Holism",5,35,3,0,32,0)
Abilities[8]=new abilityPT("Mentalism",5,40,2,1,0,0)
Abilities[9]=new abilityPT("Mind Mastery",5,41,3,0,40,0)
	
//Styles = new Array(0);

Spells = new Array();

Lines = new Array(19);

Lines[28002]=new linePT('Damage','',28,0) 
Spells[1]=new spellPT("Gleam Ray",1,28002,28,"5  D ",28,"2 PP",'1500','2.6s','','','','Heat') 
Spells[2]=new spellPT("Gleam Streak",2,28002,28,"9  D ",28,"2 PP",'1500','2.6s','','','','Heat') 
Spells[3]=new spellPT("Gleam Blast",3,28002,28,"13  D ",28,"3 PP",'1500','2.6s','','','','Heat') 
Spells[4]=new spellPT("Moon Ray",6,28002,28,"25  D ",28,"4 PP",'1500','2.6s','','','','Heat') 
Spells[5]=new spellPT("Moon Streak",9,28002,28,"37  D ",28,"6 PP",'1500','2.6s','','','','Heat') 
Spells[6]=new spellPT("Moon Blast",13,28002,28,"49  D ",28,"8 PP",'1500','2.6s','','','','Heat') 
Spells[7]=new spellPT("Sun Ray",17,28002,28,"64  D ",28,"10 PP",'1500','2.6s','','','','Heat') 
Spells[8]=new spellPT("Sun Streak",24,28002,28,"88  D ",28,"15 PP",'1500','2.6s','','','','Heat') 
Spells[9]=new spellPT("Sun Blast",33,28002,28,"120  D ",28,"21 PP",'1500','2.6s','','','','Heat') 
Spells[10]=new spellPT("Aurora Ray",41,28002,28,"148  D ",28,"26 PP",'1500','2.6s','','','','Heat') 
Spells[11]=new spellPT("Aurora Blast",50,28002,28,"179  D ",28,"33 PP",'1500','2.6s','','','','Heat') 
Lines[28091]=new linePT('Stun','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect.',28,0) 
Spells[12]=new spellPT("Prismatic Flare",5,28091,28,"3 sec ",28,"4 PP",'1500','2.5s','','','3s','Heat') 
Spells[13]=new spellPT("Prismatic Flash",15,28091,28,"5 sec ",28,"9 PP",'1500','2.5s','','','5s','Heat') 
Spells[14]=new spellPT("Prismatic Shimmer",26,28091,28,"6 sec ",28,"16 PP",'1500','2.5s','','','6s','Heat') 
Spells[15]=new spellPT("Prismatic Sheen",36,28091,28,"8 sec ",28,"23 PP",'1500','2.5s','','','8s','Heat') 
Spells[16]=new spellPT("Prismatic Strobe",46,28091,28,"9 sec ",28,"30 PP",'1500','2.5s','','','9s','Heat') 
Lines[31002]=new linePT('Damage','',31,0) 
Spells[17]=new spellPT("Twinkling Visions",1,31002,31,"5  D ",31,"2 PP",'1500','2.8s','','','','Heat') 
Spells[18]=new spellPT("Sparkling Visions",5,31002,31,"26  D ",31,"4 PP",'1500','2.8s','','','','Heat') 
Spells[19]=new spellPT("Shimmering Visions",8,31002,31,"41  D ",31,"5 PP",'1500','2.8s','','','','Heat') 
Spells[20]=new spellPT("Glimmering Visions",12,31002,31,"56  D ",31,"8 PP",'1500','2.8s','','','','Heat') 
Spells[21]=new spellPT("Scintillating Visions",16,31002,31,"77  D ",31,"10 PP",'1500','2.8s','','','','Heat') 
Spells[22]=new spellPT("Glittering Visions",22,31002,31,"102  D ",31,"13 PP",'1500','2.8s','','','','Heat') 
Spells[23]=new spellPT("Radiant Visions",28,31002,31,"133  D ",31,"17 PP",'1500','2.8s','','','','Heat') 
Spells[24]=new spellPT("Bedazzling Visions",35,31002,31,"163  D ",31,"22 PP",'1500','2.8s','','','','Heat') 
Spells[25]=new spellPT("Coruscating Visions",45,31002,31,"209  D ",31,"29 PP",'1500','2.8s','','','','Heat') 
Lines[31019]=new linePT('Damage (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius, and does less damage the further away targets are from the spell\'s center.',31,0) 
Spells[26]=new spellPT("Deluge of Illusion",3,31019,31,"12  D ",31,"3 PP",'1500','3.0s','350','','','Heat') 
Spells[27]=new spellPT("Flood of Illusion",7,31019,31,"28  D ",31,"5 PP",'1500','3.0s','350','','','Heat') 
Spells[28]=new spellPT("Sea of Illusion",13,31019,31,"48  D ",31,"8 PP",'1500','3.0s','350','','','Heat') 
Spells[29]=new spellPT("Rush of Illusion",19,31019,31,"72  D ",31,"12 PP",'1500','3.0s','350','','','Heat') 
Spells[30]=new spellPT("Flux of Illusion",26,31019,31,"95  D ",31,"16 PP",'1500','3.0s','350','','','Heat') 
Spells[31]=new spellPT("Inundation of Illusion",34,31019,31,"123  D ",31,"21 PP",'1500','3.0s','350','','','Heat') 
Spells[32]=new spellPT("Cataclysm of Illusion",44,31019,31,"158  D ",31,"28 PP",'1500','3.0s','350','','','Heat') 
Lines[31070]=new linePT('Charm (Song)','Compels creature to fight and die for the caster. This spell has a chance (based on the caster\'s specialization versus the creature\'s level) of breaking each \"tick\". The level of the creature charmed is 70%-110% of the caster\'s level (based on the caster\'s specialization). Only one song can be sung at a time.',31,0) 
Spells[33]=new spellPT("Illusory Enemy",4,31070,31,"",31," 1/P",'2000','3.0s','','','10s (pulse)','') 
Spells[34]=new spellPT("Fabricated Enemy",10,31070,31,"",31," 2/P",'2000','3.0s','','','10s (pulse)','') 
Spells[35]=new spellPT("Imaginary Enemy",17,31070,31,"",31," 3/P",'2000','3.0s','','','10s (pulse)','') 
Spells[36]=new spellPT("Phantom Enemy",25,31070,31,"",31," 4/P",'2000','3.0s','','','10s (pulse)','') 
Spells[37]=new spellPT("Ghostly Enemy",33,31070,31,"",31," 5/P",'2000','3.0s','','','10s (pulse)','') 
Spells[38]=new spellPT("Dream Enemy",42,31070,31,"",31," 7/P",'2000','3.0s','','','10s (pulse)','') 
Lines[32003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',32,0) 
Spells[39]=new spellPT("Lesser Powerward",1,32003,32,"13 AF ",32,"2 PP",'','3.0s','','','20m','') 
Spells[40]=new spellPT("Powerward",3,32003,32,"22 AF ",32,"3 PP",'','3.0s','','','20m','') 
Spells[41]=new spellPT("Lesser Powerbarrier",5,32003,32,"32 AF ",32,"4 PP",'','3.0s','','','20m','') 
Spells[42]=new spellPT("Powerbarrier",9,32003,32,"51 AF ",32,"6 PP",'','3.0s','','','20m','') 
Spells[43]=new spellPT("Lesser Powerfield",13,32003,32,"71 AF ",32,"8 PP",'','3.0s','','','20m','') 
Spells[44]=new spellPT("Powerfield",18,32003,32,"95 AF ",32,"11 PP",'','3.0s','','','20m','') 
Spells[45]=new spellPT("Powershield",24,32003,32,"124 AF ",32,"15 PP",'','3.0s','','','20m','') 
Spells[46]=new spellPT("Greater Powershield",31,32003,32,"158 AF ",32,"19 PP",'','3.0s','','','20m','') 
Spells[47]=new spellPT("Greater Powerguard",40,32003,32,"201 AF ",32,"25 PP",'','3.0s','','','20m','') 
Spells[48]=new spellPT("Supreme Powerguard",50,32003,32,"250 AF ",32,"33 PP",'','3.0s','','','20m','') 
Lines[32006]=new linePT('Damage Shield','Anyone that hits the target with a melee attack is damaged by this protective shield.',32,0) 
Spells[49]=new spellPT("Aura of Turning",2,32006,32,"0.5 DPS ",32,"2 PP",'1000','4.0s','','','20m','') 
Spells[50]=new spellPT("Greater Aura of Turning",4,32006,32,"1 DPS ",32,"3 PP",'1000','4.0s','','','20m','') 
Spells[51]=new spellPT("Aura of Redirection",8,32006,32,"1 DPS ",32,"5 PP",'1000','4.0s','','','20m','') 
Spells[52]=new spellPT("Greater Aura of Redirection",14,32006,32,"1 DPS ",32,"9 PP",'1000','4.0s','','','20m','') 
Spells[53]=new spellPT("Aura of Reflection",22,32006,32,"2 DPS ",32,"13 PP",'1000','4.0s','','','20m','') 
Spells[54]=new spellPT("Greater Aura of Reflection",33,32006,32,"3 DPS ",32,"21 PP",'1000','4.0s','','','20m','') 
Spells[55]=new spellPT("Aura of Global Feedback",44,32006,32,"4 DPS ",32,"28 PP",'1000','4.0s','','','20m','') 
Lines[32010]=new linePT('Bladeturn (Self)','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble.',32,0) 
Spells[56]=new spellPT("Barrier of Negation",19,32010,32,"",32,"8% ",'','4.0s','','','20m','') 
Lines[32005]=new linePT('Absorb (Self)','Adds to the target\'s absorption (ABS) factor, resulting in better protection against melee attacks.',32,0) 
Spells[57]=new spellPT("Ward of Power",30,32005,32,"5% ",32,"19 PP",'','3.0s','','','20m','') 
Spells[58]=new spellPT("Barrier of Power",41,32005,32,"10% ",32,"26 PP",'','3.0s','','','20m','') 
Lines[35020]=new linePT('Damage over Time','Inflicts damage to the target repeatedly over a given time period.',35,0) 
Spells[59]=new spellPT("Minor Mind Fade",1,35020,35,"2  D x 6 ",35,"2 PP",'1500','3.0s','','','24s','Energy') 
Spells[60]=new spellPT("Lesser Mind Fade",5,35020,35,"9  D x 6 ",35,"4 PP",'1500','3.0s','','','24s','Energy') 
Spells[61]=new spellPT("Mind Fade",8,35020,35,"15  D x 6 ",35,"5 PP",'1500','3.0s','','','24s','Energy') 
Spells[62]=new spellPT("Lesser Mind Dissolution",11,35020,35,"19  D x 6 ",35,"7 PP",'1500','3.0s','','','24s','Energy') 
Spells[63]=new spellPT("Mind Dissolution",15,35020,35,"27  D x 6 ",35,"9 PP",'1500','3.0s','','','24s','Energy') 
Spells[64]=new spellPT("Greater Mind Dissolution",20,35020,35,"35  D x 6 ",35,"12 PP",'1500','3.0s','','','24s','Energy') 
Spells[65]=new spellPT("Lesser Mind Melt",25,35020,35,"45  D x 6 ",35,"15 PP",'1500','3.0s','','','24s','Energy') 
Spells[66]=new spellPT("Mind Melt",30,35020,35,"53  D x 6 ",35,"19 PP",'1500','3.0s','','','24s','Energy') 
Spells[67]=new spellPT("Greater Mind Melt",35,35020,35,"63  D x 6 ",35,"22 PP",'1500','3.0s','','','24s','Energy') 
Spells[68]=new spellPT("Mind Annihilation",41,35020,35,"73  D x 6 ",35,"26 PP",'1500','3.0s','','','24s','Energy') 
Spells[69]=new spellPT("Complete Mind Annihilation",48,35020,35,"87  D x 6 ",35,"31 PP",'1500','3.0s','','','24s','Energy') 
Lines[35024]=new linePT('Damage over Time (AOE)','Inflicts damage to the target repeatedly over a given time period. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',35,0) 
Spells[70]=new spellPT("Shroud of Madness",17,35024,35,"31  D x 6 ",35,"16 PP",'1500','3.0s','350','','24s','Energy') 
Spells[71]=new spellPT("Fog of Delirium",23,35024,35,"41  D x 6 ",35,"22 PP",'1500','3.0s','350','','24s','Energy') 
Spells[72]=new spellPT("Hallucinatory Winds",29,35024,35,"53  D x 6 ",35,"28 PP",'1500','3.0s','350','','24s','Energy') 
Spells[73]=new spellPT("Torrent of Dementia",36,35024,35,"65  D x 6 ",35,"36 PP",'1500','3.0s','350','','24s','Energy') 
Spells[74]=new spellPT("Storm of Insanity",46,35024,35,"83  D x 6 ",35,"47 PP",'1500','3.0s','350','','24s','Energy') 
Lines[35058]=new linePT('Buff (Power Regeneration)','Target\'s rate of power regeneration is increased, reducing downtime between battles.',35,0) 
Spells[75]=new spellPT("Empowering Unity",4,35058,35,"1 PP Regen ",35,"3 PP",'1500','3.0s','','','20m','') 
Spells[76]=new spellPT("Empowering Harmony",14,35058,35,"2 PP Regen ",35,"9 PP",'1500','3.0s','','','20m','') 
Spells[77]=new spellPT("Empowering Tranquility",24,35058,35,"3 PP Regen ",35,"15 PP",'1500','3.0s','','','20m','') 
Spells[78]=new spellPT("Empowering Concordance",34,35058,35,"4 PP Regen ",35,"21 PP",'1500','3.0s','','','20m','') 
Spells[79]=new spellPT("Empowering Perfection",44,35058,35,"5 PP Regen ",35,"28 PP",'1500','3.0s','','','20m','') 
Lines[35101]=new linePT('Heal over Time','Target is healed during the spell\'s duration.',35,0) 
Spells[80]=new spellPT("Curative Trance",10,35101,35,"30 HP ",35,"18 PP",'2000','3.0s','','','10s','') 
Spells[81]=new spellPT("Restorative Trance",21,35101,35,"59 HP ",35,"34 PP",'2000','3.0s','','','10s','') 
Spells[82]=new spellPT("Healing Trance",32,35101,35,"89 HP ",35,"47 PP",'2000','3.0s','','','10s','') 
Spells[83]=new spellPT("Sanative Trance",43,35101,35,"118 HP ",35,"58 PP",'2000','3.0s','','','10s','') 
Lines[40020]=new linePT('Damage over Time','Inflicts damage to the target repeatedly over a given time period.',40,0) 
Spells[84]=new spellPT("Illusory Ache",1,40020,40,"2  D x 4 ",40,"1 PP",'1500','3.0s','','','20s','Energy') 
Spells[85]=new spellPT("Illusory Pains",5,40020,40,"9  D x 4 ",40,"3 PP",'1500','3.0s','','','20s','Energy') 
Spells[86]=new spellPT("Illusory Cramps",8,40020,40,"15  D x 4 ",40,"4 PP",'1500','3.0s','','','20s','Energy') 
Spells[87]=new spellPT("Illusory Anguish",11,40020,40,"19  D x 4 ",40,"5 PP",'1500','3.0s','','','20s','Energy') 
Spells[88]=new spellPT("Illusory Spasms",15,40020,40,"27  D x 4 ",40,"7 PP",'1500','3.0s','','','20s','Energy') 
Spells[89]=new spellPT("Illusory Convulsions",20,40020,40,"35  D x 4 ",40,"9 PP",'1500','3.0s','','','20s','Energy') 
Spells[90]=new spellPT("Illusory Agony",25,40020,40,"45  D x 4 ",40,"12 PP",'1500','3.0s','','','20s','Energy') 
Spells[91]=new spellPT("Illusory Lacerations",30,40020,40,"53  D x 4 ",40,"15 PP",'1500','3.0s','','','20s','Energy') 
Spells[92]=new spellPT("Illusory Torture",35,40020,40,"63  D x 4 ",40,"17 PP",'1500','3.0s','','','20s','Energy') 
Spells[93]=new spellPT("Illusory Excrutiation",41,40020,40,"73  D x 4 ",40,"20 PP",'1500','3.0s','','','20s','Energy') 
Spells[94]=new spellPT("Illusory Neuralgia",48,40020,40,"87  D x 4 ",40,"24 PP",'1500','3.0s','','','20s','Energy') 
Lines[40081]=new linePT('Heal','Heals target for a small amount of health. Uses little power.',40,0) 
Spells[95]=new spellPT("Somatic Reconstitution",4,40081,40,"26 HP ",40,"4 PP",'2000','2.8s','','','','') 
Spells[96]=new spellPT("Somatic Renewal",6,40081,40,"36 HP ",40,"6 PP",'2000','2.8s','','','','') 
Spells[97]=new spellPT("Somatic Reparation",9,40081,40,"50 HP ",40,"9 PP",'2000','2.8s','','','','') 
Spells[98]=new spellPT("Somatic Revigoration",12,40081,40,"65 HP ",40,"11 PP",'2000','2.8s','','','','') 
Spells[99]=new spellPT("Somatic Relief",16,40081,40,"85 HP ",40,"15 PP",'2000','2.8s','','','','') 
Spells[100]=new spellPT("Somatic Rejuvenation",21,40081,40,"109 HP ",40,"19 PP",'2000','2.8s','','','','') 
Spells[101]=new spellPT("Somatic Regeneration",27,40081,40,"138 HP ",40,"25 PP",'2000','2.8s','','','','') 
Spells[102]=new spellPT("Somatic Rehabilitation",31,40081,40,"158 HP ",40,"28 PP",'2000','2.8s','','','','') 
Spells[103]=new spellPT("Somatic Revival",36,40081,40,"183 HP ",40,"33 PP",'2000','2.8s','','','','') 
Spells[104]=new spellPT("Somatic Resuscitation",46,40081,40,"231 HP ",40,"42 PP",'2000','2.8s','','','','') 
Lines[41050]=new linePT('Mesmerise','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect, the spell will break.',41,0) 
Spells[105]=new spellPT("Enfeeble Mind",1,41050,41,"16 sec ",41,"2 PP",'1500','3.0s','','','16s','Energy') 
Spells[106]=new spellPT("Cripple Mind",5,41050,41,"21 sec ",41,"3 PP",'1500','3.0s','','','21s','Energy') 
Spells[107]=new spellPT("Incapacitate Mind",10,41050,41,"28 sec ",41,"5 PP",'1500','3.0s','','','28s','Energy') 
Spells[108]=new spellPT("Disable Mind",15,41050,41,"34 sec ",41,"8 PP",'1500','3.0s','','','34s','Energy') 
Spells[109]=new spellPT("Paralyze Mind",23,41050,41,"44 sec ",41,"11 PP",'1500','3.0s','','','44s','Energy') 
Spells[110]=new spellPT("Lock Mind",31,41050,41,"55 sec ",41,"15 PP",'1500','3.0s','','','55s','Energy') 
Spells[111]=new spellPT("Petrify Mind",41,41050,41,"68 sec ",41,"19 PP",'1500','3.0s','','','68s','Energy') 
Spells[112]=new spellPT("Unmake Mind",50,41050,41,"80 sec ",41,"23 PP",'1500','3.0s','','','80s','Energy') 
Lines[41082]=new linePT('Major Heal','Heals target.',41,0) 
Spells[113]=new spellPT("Major Somatic Renewal",2,41082,41,"28 HP ",41,"5 PP",'2000','3.2s','','','','') 
Spells[114]=new spellPT("Major Somatic Reparation",4,41082,41,"46 HP ",41,"8 PP",'2000','3.2s','','','','') 
Spells[115]=new spellPT("Major Somatic Revigoration",6,41082,41,"64 HP ",41,"12 PP",'2000','3.2s','','','','') 
Spells[116]=new spellPT("Major Somatic Relief",9,41082,41,"91 HP ",41,"16 PP",'2000','3.2s','','','','') 
Spells[117]=new spellPT("Major Somatic Rejuvenation",13,41082,41,"127 HP ",41,"23 PP",'2000','3.2s','','','','') 
Spells[118]=new spellPT("Major Somatic Regeneration",18,41082,41,"172 HP ",41,"30 PP",'2000','3.2s','','','','') 
Spells[119]=new spellPT("Major Somatic Rehabilitation",25,41082,41,"235 HP ",41,"39 PP",'2000','3.2s','','','','') 
Spells[120]=new spellPT("Major Somatic Revival",33,41082,41,"307 HP ",41,"48 PP",'2000','3.2s','','','','') 
Spells[121]=new spellPT("Major Somatic Resuscitation",42,41082,41,"387 HP ",41,"57 PP",'2000','3.2s','','','','') 
Lines[41049]=new linePT('Confusion','Target has a chance to switch targets that they are fighting. There is a smaller chance that they will actually attack one of their own allies.',41,0) 
Spells[122]=new spellPT("Delusion",3,41049,41,"50% &nbsp;0% 16 sec ",41,"2 PP",'1500','3.0s','','','16s','Energy') 
Spells[123]=new spellPT("Delirium",8,41049,41,"65% &nbsp;0% 26 sec ",41,"4 PP",'1500','3.0s','','','26s','Energy') 
Spells[124]=new spellPT("Dementation",12,41049,41,"80% &nbsp;0% 34 sec ",41,"6 PP",'1500','3.0s','','','34s','Energy') 
Spells[125]=new spellPT("Paranoia",17,41049,41,"95% &nbsp;0% 44 sec ",41,"8 PP",'1500','3.0s','','','44s','Energy') 
Spells[126]=new spellPT("Eccentricity",24,41049,41,"100% 10% 58 sec ",41,"12 PP",'1500','3.0s','','','58s','Energy') 
Spells[127]=new spellPT("Madness",32,41049,41,"100% 25% 74 sec ",41,"16 PP",'1500','3.0s','','','74s','Energy') 
Spells[128]=new spellPT("Derangment",40,41049,41,"100% 40% 90 sec ",41,"20 PP",'1500','3.0s','','','90s','Energy') 
Spells[129]=new spellPT("Insanity",49,41049,41,"100% 55% 108 sec ",41,"25 PP",'1500','3.0s','','','108s','Energy') 
Lines[41054]=new linePT('Remove Mesmerisation','Target is no longer mesmerised.',41,0) 
Spells[130]=new spellPT("Mental Purification",28,41054,41,"",41,"6% ",'1500','3.0s','','','','') 
